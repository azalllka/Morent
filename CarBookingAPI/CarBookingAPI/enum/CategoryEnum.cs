using System.Text.Json.Serialization;

namespace CarBooking.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum CategoryEnum
    {
        Sport,
        SUV,
        Supercar,
        Convertible,
        GrandTouring,
        
    }
}