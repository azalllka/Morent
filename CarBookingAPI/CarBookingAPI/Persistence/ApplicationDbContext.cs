using Microsoft.EntityFrameworkCore;
using CarBookingAPI.Models;

namespace CarBookingAPI.Persistence;
public class ApplicationDbContext : DbContext
{
    public DbSet<Car> Cars { get; set; }

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.ApplyConfiguration(new CarsConfiguration());
    }
}

