using CarBooking.Enums;
using CarBookingAPI.Models;

namespace CarBookingAPI;

public static class CarsData
{
    public static List<Car> Cars = new List<Car>
    {
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
    };

   public static List<Comment> Comments = new List<Comment>
    {
        // Ferrari Purosangue
        new Comment
        {
            Id = 1,
            Name = "Alex Stanton",
            Position = "CEO at Bukalapak",
            Text = "The Purosangue redefines what an SUV can be - Ferrari DNA in a practical package!",
            Rating = 5,
            Date = DateTime.Parse("2023-01-15"),
            Img = "src/assets/img/user.png",
            CarId = 1
        },
        new Comment
        {
            Id = 2,
            Name = "Skylar Dias",
            Position = "Automotive Journalist",
            Text = "First Ferrari SUV doesn't compromise on performance. The V12 sound is glorious!",
            Rating = 4,
            Date = DateTime.Parse("2023-02-20"),
            Img = "src/assets/img/user2.jpeg",
            CarId = 1
        },
        new Comment
        {
            Id = 3,
            Name = "Maria Garcia",
            Position = "Luxury Car Collector",
            Text = "Perfect blend of family practicality and supercar thrills. Worth every penny.",
            Rating = 5,
            Date = DateTime.Parse("2023-03-10"),
            Img = "src/assets/img/user3.png",
            CarId = 1
        },

        // Ferrari 12Cilindri
        new Comment
        {
            Id = 4,
            Name = "James Wilson",
            Position = "Professional Racer",
            Text = "The 12Cilindri's V12 is a masterpiece - the last of its kind and absolutely breathtaking.",
            Rating = 5,
            Date = DateTime.Parse("2023-04-05"),
            Img = "src/assets/img/user4.jpg",
            CarId = 2
        },
        new Comment
        {
            Id = 5,
            Name = "Emma Roberts",
            Position = "Car Enthusiast",
            Text = "Stunning design and raw power. This is what Ferrari heritage is all about!",
            Rating = 5,
            Date = DateTime.Parse("2023-05-12"),
            Img = "src/assets/img/user5.png",
            CarId = 2
        },

        // Ferrari F8 Spider
        new Comment
        {
            Id = 6,
            Name = "Michael Chen",
            Position = "Tech Entrepreneur",
            Text = "The F8 Spider delivers pure driving joy - the turbo V8 sounds incredible with the top down!",
            Rating = 5,
            Date = DateTime.Parse("2023-06-18"),
            Img = "src/assets/img/user6.jpg",
            CarId = 3
        },
        new Comment
        {
            Id = 7,
            Name = "Sophia Lee",
            Position = "Lifestyle Blogger",
            Text = "Perfect weekend car - fast, beautiful, and turns heads everywhere.",
            Rating = 4,
            Date = DateTime.Parse("2023-07-22"),
            Img = "src/assets/img/user7.png",
            CarId = 3
        },

        // Ferrari 296 GTB
        new Comment
        {
            Id = 8,
            Name = "David Brown",
            Position = "Hybrid Technology Expert",
            Text = "The 296 GTB proves hybrid tech can enhance performance - the electric torque is addictive!",
            Rating = 5,
            Date = DateTime.Parse("2023-08-30"),
            Img = "src/assets/img/user8.jpg",
            CarId = 4
        },
        new Comment
        {
            Id = 9,
            Name = "Olivia Martinez",
            Position = "Environmental Consultant",
            Text = "A supercar that's surprisingly efficient. Ferrari's hybrid system is revolutionary.",
            Rating = 4,
            Date = DateTime.Parse("2023-09-05"),
            Img = "src/assets/img/user9.png",
            CarId = 4
        },

        // Ferrari F8 Tributo
        new Comment
        {
            Id = 10,
            Name = "Robert Johnson",
            Position = "Veteran Ferrari Owner",
            Text = "The F8 Tributo is the perfect send-off for Ferrari's mid-engine V8 - a true masterpiece.",
            Rating = 5,
            Date = DateTime.Parse("2023-10-12"),
            Img = "src/assets/img/user10.jpg",
            CarId = 5
        },
        new Comment
        {
            Id = 11,
            Name = "Jennifer Kim",
            Position = "First-time Supercar Buyer",
            Text = "More accessible than some Ferraris but loses none of the magic. Love it!",
            Rating = 5,
            Date = DateTime.Parse("2023-11-15"),
            Img = "src/assets/img/user11.png",
            CarId = 5
        },

        // Ferrari F80
        new Comment
        {
            Id = 12,
            Name = "Elon Russo",
            Position = "Hypercar Collector",
            Text = "The F80 concept is what dreams are made of - hopefully Ferrari builds it!",
            Rating = 5,
            Date = DateTime.Parse("2023-12-20"),
            Img = "src/assets/img/user12.jpg",
            CarId = 6
        },
        new Comment
        {
            Id = 13,
            Name = "Victoria Song",
            Position = "Concept Car Designer",
            Text = "Boldest Ferrari design in decades. This should be the future of the brand.",
            Rating = 5,
            Date = DateTime.Parse("2024-01-05"),
            Img = "src/assets/img/user13.png",
            CarId = 6
        },

        // Ferrari Portofino M
        new Comment
        {
            Id = 14,
            Name = "Thomas Wright",
            Position = "Travel Influencer",
            Text = "The perfect GT car - comfortable for long trips but still a proper Ferrari when you want it to be.",
            Rating = 4,
            Date = DateTime.Parse("2024-02-14"),
            Img = "src/assets/img/user14.jpg",
            CarId = 7
        },
        new Comment
        {
            Id = 15,
            Name = "Amanda Clark",
            Position = "Luxury Travel Blogger",
            Text = "Best convertible for coastal drives - the perfect combination of style and performance.",
            Rating = 5,
            Date = DateTime.Parse("2024-03-08"),
            Img = "src/assets/img/user15.png",
            CarId = 7
        },

        // Ferrari Roma
        new Comment
        {
            Id = 16,
            Name = "Daniel White",
            Position = "Classic Car Enthusiast",
            Text = "The Roma brings back timeless Ferrari elegance with modern performance. Bellissimo!",
            Rating = 5,
            Date = DateTime.Parse("2024-04-10"),
            Img = "src/assets/img/user16.jpg",
            CarId = 8
        },
        new Comment
        {
            Id = 17,
            Name = "Isabella Rossi",
            Position = "Italian Automotive Journalist",
            Text = "Most beautiful modern Ferrari - a proper grand tourer with soul.",
            Rating = 5,
            Date = DateTime.Parse("2024-05-18"),
            Img = "src/assets/img/user17.png",
            CarId = 8
        },

        // Ferrari SF90 Spider
        new Comment
        {
            Id = 18,
            Name = "Chris Taylor",
            Position = "Tech Billionaire",
            Text = "The SF90 Spider is technological witchcraft - 1000hp hybrid with open-top thrills!",
            Rating = 5,
            Date = DateTime.Parse("2024-06-22"),
            Img = "src/assets/img/user18.jpg",
            CarId = 9
        },
        new Comment
        {
            Id = 19,
            Name = "Natalie Wong",
            Position = "Renewable Energy Investor",
            Text = "Proof that eco-friendly can be extreme - this plug-in hybrid is mind-blowing.",
            Rating = 5,
            Date = DateTime.Parse("2024-07-30"),
            Img = "src/assets/img/user19.png",
            CarId = 9
        },

        // Ferrari SF90 Stradale
        new Comment
        {
            Id = 20,
            Name = "Max Verstappen",
            Position = "F1 World Champion",
            Text = "Driving the SF90 Stradale feels like a road-legal F1 car - the acceleration is brutal!",
            Rating = 5,
            Date = DateTime.Parse("2024-08-15"),
            Img = "src/assets/img/user20.jpg",
            CarId = 10
        },
        new Comment
        {
            Id = 21,
            Name = "Sophie Laurent",
            Position = "Performance Driving Instructor",
            Text = "The most technologically advanced Ferrari ever - it rewrites the rules of supercars.",
            Rating = 5,
            Date = DateTime.Parse("2024-09-01"),
            Img = "src/assets/img/user21.png",
            CarId = 10
        }
    };
}