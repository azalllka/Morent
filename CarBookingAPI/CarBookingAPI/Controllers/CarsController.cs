using CarBooking.Enums;
using CarBookingAPI.Models;
using CarBookingAPI.Persistence;
using Microsoft.AspNetCore.Mvc;

namespace CarBookingAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class CarsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public CarsController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet("GetCars")]
    public IEnumerable<Car> Get() 
        => _context.Cars.ToList();

    [HttpGet("GetCarById")]
    public async Task<ActionResult<Car>> GetById(int id)
    {
        var car = await _context.Cars.FindAsync(id);
        if (car == null) return NotFound();
        return car;
    }

    [HttpGet("GetFilteredCars")]
    public IEnumerable<Car> GetFilteredCars(
        [FromQuery] string[] categories,
        [FromQuery] string[] capacities,
        [FromQuery] decimal maxPrice,
        [FromQuery] string searchQuery = null)
    {
        var query = _context.Cars.AsQueryable();
        
        if (!string.IsNullOrWhiteSpace(searchQuery))
        {
            query = query.Where(c => c.Name.Contains(searchQuery));
        }

        if (categories != null && categories.Length > 0)
        {
            var categoryEnums = categories
                .Select(c => Enum.Parse<CategoryEnum>(c))
                .ToList();
            query = query.Where(c => categoryEnums.Contains(c.Category));
        }

        if (capacities != null && capacities.Length > 0)
        {
            var capacityInts = capacities.Select(int.Parse).ToList();
            query = query.Where(c => capacityInts.Contains(c.Spaces));
        }
        
        query = query.Where(c => c.Price <= maxPrice);

        return query.ToList();
    }

    [HttpGet("GetFilterOptions")]
    public IActionResult GetFilterOptions()
    {
        var cars = _context.Cars.AsQueryable();
    
        var categories = Enum.GetValues(typeof(CategoryEnum))
            .Cast<CategoryEnum>()
            .Select(c => new 
            {
                Name = c.ToString(),
                Count = cars.Count(car => car.Category == c)
            })
            .ToList();

        var capacities = cars
            .GroupBy(c => c.Spaces)
            .Select(g => new 
            {
                Name = g.Key.ToString(),
                Count = g.Count()
            })
            .OrderBy(c => c.Name)
            .ToList();

        var maxPrice = cars.Any() ? cars.Max(c => c.Price) : 0;

        return Ok(new 
        {
            Categories = categories,
            Capacities = capacities,
            MaxPrice = maxPrice
        });
    }
}