using CarBookingAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace CarBookingAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CommentsController : ControllerBase
{
    [HttpGet("GetCarComments/{carId}")]
    public IActionResult GetCarComments(int carId)
    {
        var comments = CarsData.Comments
            .Where(c => c.CarId == carId)
            .OrderByDescending(c => c.Date)
            .ToList();
        
        return Ok(comments);
    }

    [HttpPost("AddComment")]
    public IActionResult AddComment([FromBody] Comment comment)
    {
        comment.Id = CarsData.Comments.Max(c => c.Id) + 1;
        comment.Date = DateTime.Now;
        CarsData.Comments.Add(comment);
        
        return CreatedAtAction(nameof(GetCarComments), new { carId = comment.CarId }, comment);
    }
}