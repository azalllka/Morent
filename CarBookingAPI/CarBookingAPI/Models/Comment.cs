namespace CarBookingAPI.Models;

public class Comment
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Position { get; set; } = string.Empty;
    public string Text { get; set; } = string.Empty;
    public int Rating { get; set; } = 5;
    public DateTime Date { get; set; } = DateTime.Now;
    public string Img { get; set; } = string.Empty;
    public int CarId { get; set; }
}