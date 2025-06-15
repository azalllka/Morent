import React, { useState } from "react";
import "./RentalPage.css";
import { useLocation } from "react-router-dom";

const InputField = ({ label, placeholder, value, setValue, type = "text" }) => (
  <div className="input-container">
    <label>{label}</label>
    <input 
      type={type} 
      placeholder={placeholder} 
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
    />
  </div>
);

const SelectField = ({ label, options, value, setValue }) => (
  <div className="input-container">
    <label>{label}</label>
    <select value={value} onChange={(e) => setValue(e.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

const BillingInfo = ({ 
  name, setName, 
  email, setEmail, 
  address, setAddress, 
  city, setCity 
}) => (
  <div className="section">
    <h2>Billing Info</h2>
    <p className="total-description">Please enter your billing info</p>
    <div className="grid">
      <InputField label="Name" placeholder="Your name" value={name} setValue={setName} />
      <InputField label="Email" placeholder="Email" value={email} setValue={setEmail} />
      <InputField label="Address" placeholder="Address" value={address} setValue={setAddress} />
      <InputField label="Town / City" placeholder="Town or city" value={city} setValue={setCity} />
    </div>
  </div>
);

const RentalInfo = ({ 
  pickupLocation, setPickupLocation, 
  dropoffLocation, setDropoffLocation,
  pickupDate, setPickupDate,
  dropoffDate, setDropoffDate,
  pickupTime, setPickupTime,
  dropoffTime, setDropoffTime
}) => {
  const locations = ["New York", "Los Angeles", "Chicago", "Houston"];
  const times = ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM", "06:00 PM"];
  
  return (
    <div className="section">
      <h2>Rental Info</h2>
      <p className="total-description">Please select your rental date</p>
      <div className="pickup-header">
        <img 
          alt="Pick – Up" 
          width="16px" 
          src="./src/assets/img/tg_image_3665888138.png"
        />
        <label>Pick – Up</label>
      </div>
      <div className="grid">
        <SelectField 
          label="Location" 
          options={["Select your city", ...locations]} 
          value={pickupLocation} 
          setValue={setPickupLocation} 
        />
        <SelectField 
          label="Date" 
          options={["Select your date", "2023-11-01", "2023-11-02", "2023-11-03"]} 
          value={pickupDate} 
          setValue={setPickupDate} 
        />
        <SelectField 
          label="Time" 
          options={["Select your time", ...times]} 
          value={pickupTime} 
          setValue={setPickupTime} 
        />
      </div>
      <div className="pickup-header">
        <img 
          alt="Drop – Off" 
          width="16px" 
          src="./src/assets/img/tg_image_2455256273.png"
        />
        <label>Drop – Off</label>
      </div>
      <div className="grid">
        <SelectField 
          label="Location" 
          options={["Select your city", ...locations]} 
          value={dropoffLocation} 
          setValue={setDropoffLocation} 
        />
        <SelectField 
          label="Date" 
          options={["Select your date", "2023-11-01", "2023-11-02", "2023-11-03"]} 
          value={dropoffDate} 
          setValue={setDropoffDate} 
        />
        <SelectField 
          label="Time" 
          options={["Select your time", ...times]} 
          value={dropoffTime} 
          setValue={setDropoffTime} 
        />
      </div>
    </div>
  );
};

const PaymentMethod = ({ 
  cardNumber, setCardNumber,
  expirationDate, setExpirationDate,
  cardHolder, setCardHolder,
  cvc, setCvc
}) => (
  <div className="section">
    <h2>Payment Method</h2>
    <p className="total-description">Please configure payment method</p>
    <div className="payment-methods">
      <div className="grid">
        <InputField 
          label="Card Number" 
          placeholder="Card number" 
          value={cardNumber} 
          setValue={setCardNumber} 
          type="number"
        />
        <InputField 
          label="Expiration Date" 
          placeholder="MM/YY" 
          value={expirationDate} 
          setValue={setExpirationDate} 
        />
        <InputField 
          label="Card Holder" 
          placeholder="Card holder" 
          value={cardHolder} 
          setValue={setCardHolder} 
        />
        <InputField 
          label="CVC" 
          placeholder="CVC" 
          value={cvc} 
          setValue={setCvc} 
          type="number"
        />
      </div>
    </div>
  </div>
);

const Confirmation = ({ 
  name, email, 
  cardNumber, cardHolder,
  marketingConsent, setMarketingConsent,
  termsConsent, setTermsConsent,
  onSubmit
}) => {
  const handleSubmit = () => {
    if (!termsConsent) {
      alert("Please agree to the terms and conditions");
      return;
    }
    onSubmit();
  };

  return (
    <div className="section">
      <h2>Confirmation</h2>
      <p className="total-description">You are getting to buy a new car, but few dollars and your email is ready!</p>
      <div className="checkbox-container">
        <input 
          type="checkbox" 
          checked={marketingConsent} 
          onChange={(e) => setMarketingConsent(e.target.checked)} 
        />
        <label>Subscribe to newsletter emails. No spam, promises!</label>
      </div>
      <div className="checkbox-container">
        <input 
          type="checkbox" 
          checked={termsConsent} 
          onChange={(e) => setTermsConsent(e.target.checked)} 
        />
        <label>I agree with the terms and conditions and privacy policy.</label>
      </div>
      <button className="rent-button" onClick={handleSubmit}>Apply now</button>
    </div>
  );
};

const RentalSummary = ({ car }) => (
  <div className="summary-container">
    <h2>Rental Summary</h2>
    <p className="total-description">Prices may change depending on the length of the rental and the price of your rental car.</p>
    <div className="summary-content">
      <div className="rental-mini-car">
        <img 
          src={car.img} 
          alt={car.name} 
          className="car-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'src/assets/img/default-car.png';
          }}
        /> 
      </div>
      <div className="summary-info">
        <h2>{car.name}</h2>
        <div className="reviews-img">
          <img src="src/assets/img/Reviews.png" alt="Reviews" height={20}/>
          <p className="total-description">440+ Reviews</p>
        </div>
      </div>
    </div>
    <div className="price-row">
      <span className="price-label">Subtotal</span>
      <span className="subtotal-amount">${car.price}.00</span>
    </div>
    <div className="price-row">
      <span className="price-label">Tax</span>
      <span className="subtotal-amount">$0</span>
    </div>
    <div className="total-section">
      <div  className="total-info">
        <h1 className="section-title">Total Rental Price</h1>
        <p className="total-description">Overall price and includes rental discount</p>
      </div>
      <p className="total-amount">${car.price}.00</p>
    </div>
  </div>
);

const RentalPage = () => {
  const location = useLocation();
  const car = location.state?.car || {
    id: 1,
    name: "Nissan GT-R",
    img: "src/assets/img/ferrari/Ferrari F80.png",
    price: 80,
    discountedPrice: null
  };

  // Billing Info
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  // Rental Info
  const [pickupLocation, setPickupLocation] = useState("Select your city");
  const [dropoffLocation, setDropoffLocation] = useState("Select your city");
  const [pickupDate, setPickupDate] = useState("Select your date");
  const [dropoffDate, setDropoffDate] = useState("Select your date");
  const [pickupTime, setPickupTime] = useState("Select your time");
  const [dropoffTime, setDropoffTime] = useState("Select your time");

  // Payment Method
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cvc, setCvc] = useState("");

  // Confirmation
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [termsConsent, setTermsConsent] = useState(false);

  const handleSubmit = async () => {
    const requestData = { 
      name, 
      email,
      address,
      city,
      pickupLocation,
      dropoffLocation,
      pickupDate,
      dropoffDate,
      pickupTime,
      dropoffTime,
      cardNumber, 
      cardHolder,
      cvc,
      expirationDate,
      carId: car.id
    };

    try {
      const response = await fetch("http://localhost:5121/api/payment/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error("Error:", error);
      alert("Payment failed!");
    }
  };

  return (
    <div className="container">
      <div className="main-section">
        <BillingInfo 
          name={name} setName={setName} 
          email={email} setEmail={setEmail}
          address={address} setAddress={setAddress}
          city={city} setCity={setCity}
        />
        <RentalInfo 
          pickupLocation={pickupLocation} setPickupLocation={setPickupLocation}
          dropoffLocation={dropoffLocation} setDropoffLocation={setDropoffLocation}
          pickupDate={pickupDate} setPickupDate={setPickupDate}
          dropoffDate={dropoffDate} setDropoffDate={setDropoffDate}
          pickupTime={pickupTime} setPickupTime={setPickupTime}
          dropoffTime={dropoffTime} setDropoffTime={setDropoffTime}
        />
        <PaymentMethod 
          cardNumber={cardNumber} setCardNumber={setCardNumber}
          expirationDate={expirationDate} setExpirationDate={setExpirationDate}
          cardHolder={cardHolder} setCardHolder={setCardHolder}
          cvc={cvc} setCvc={setCvc}
        />
        <Confirmation 
          name={name} 
          email={email}
          cardNumber={cardNumber}
          cardHolder={cardHolder}
          marketingConsent={marketingConsent} setMarketingConsent={setMarketingConsent}
          termsConsent={termsConsent} setTermsConsent={setTermsConsent}
          onSubmit={handleSubmit}
        />
      </div>
      <RentalSummary car={car} />
    </div>
  );
};

export default RentalPage;