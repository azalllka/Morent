using System.Text.Json.Serialization;

[JsonConverter(typeof(JsonStringEnumConverter))]
public enum TransmissionEnum
{
    Manual,
    Automatic,
}