using CarBookingAPI.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using CarBooking.Enums;

namespace CarBookingAPI.Persistence
{
    public class CarsConfiguration : IEntityTypeConfiguration<Car>
    {
        public void Configure(EntityTypeBuilder<Car> builder)
        {
            builder.HasData(
                new Car
                {
                    Id = 1,
                    Name = "Ferrari Purosangue",
                    Category = CategoryEnum.SUV,
                    Img = "src/assets/img/ferrari/Ferrari Purosangue.png",
                    Transmission = TransmissionEnum.Automatic,
                    Spaces = 4,
                    Price = 390,
                    DiscountedPrice = 400,
                    FuelCapacity = "100L"
                },
                new Car
                {
                    Id = 2,
                    Name = "Ferrari 12Cilindri",
                    Category = CategoryEnum.Sport,
                    Img = "src/assets/img/ferrari/Ferrari 12Cilindri.png",
                    Transmission = TransmissionEnum.Automatic,
                    Spaces = 2,
                    Price = 420,
                    DiscountedPrice = 435,
                    FuelCapacity = "92L"
                },
                new Car
                {
                    Id = 3,
                    Name = "Ferrari F8 Spider",
                    Category = CategoryEnum.Sport,
                    Img = "src/assets/img/ferrari/Ferrari F8 Spider.png",
                    Transmission = TransmissionEnum.Automatic,
                    Spaces = 2,
                    Price = 275,
                    DiscountedPrice = 285,
                    FuelCapacity = "78L"
                },
                new Car
                {
                    Id = 4,
                    Name = "Ferrari 296 GTB",
                    Category = CategoryEnum.Sport,
                    Img = "src/assets/img/ferrari/Ferrari 296 GTB.png",
                    Transmission = TransmissionEnum.Automatic,
                    Spaces = 2,
                    Price = 320,
                    DiscountedPrice = 330,
                    FuelCapacity = "65L"
                },
                new Car
                {
                    Id = 5,
                    Name = "Ferrari F8 Tributo",
                    Category = CategoryEnum.Sport,
                    Img = "src/assets/img/ferrari/Ferrari F8 Tributo.png",
                    Transmission = TransmissionEnum.Automatic,
                    Spaces = 2,
                    Price = 280,
                    DiscountedPrice = 290,
                    FuelCapacity = "78L"
                },
                new Car
                {
                    Id = 6,
                    Name = "Ferrari F80",
                    Category = CategoryEnum.Supercar,
                    Img = "src/assets/img/ferrari/Ferrari F80.png",
                    Transmission = TransmissionEnum.Automatic,
                    Spaces = 2,
                    Price = 2500,
                    DiscountedPrice = 2550,
                    FuelCapacity = "120L"
                },
                new Car
                {
                    Id = 7,
                    Name = "Ferrari Portofino M",
                    Category = CategoryEnum.Convertible,
                    Img = "src/assets/img/ferrari/Ferrari Portofino M.png",
                    Transmission = TransmissionEnum.Automatic,
                    Spaces = 2,
                    Price = 230,
                    DiscountedPrice = 240,
                    FuelCapacity = "80L"
                },
                new Car
                {
                    Id = 8,
                    Name = "Ferrari Roma",
                    Category = CategoryEnum.GrandTouring,
                    Img = "src/assets/img/ferrari/Ferrari Roma.png",
                    Transmission = TransmissionEnum.Automatic,
                    Spaces = 2,
                    Price = 220,
                    DiscountedPrice = 230,
                    FuelCapacity = "80L"
                },
                new Car
                {
                    Id = 9,
                    Name = "Ferrari SF90 Spider",
                    Category = CategoryEnum.Supercar,
                    Img = "src/assets/img/ferrari/Ferrari SF90 Spider.png",
                    Transmission = TransmissionEnum.Automatic,
                    Spaces = 2,
                    Price = 550,
                    DiscountedPrice = 570,
                    FuelCapacity = "68L"
                },
                new Car
                {
                    Id = 10,
                    Name = "Ferrari SF90 Stradale",
                    Category = CategoryEnum.Supercar,
                    Img = "src/assets/img/ferrari/Ferrari SF90 Stradale.png",
                    Transmission = TransmissionEnum.Automatic,
                    Spaces = 2,
                    Price = 525,
                    DiscountedPrice = 540,
                    FuelCapacity = "68L"
                }
            );
        }
    }
}