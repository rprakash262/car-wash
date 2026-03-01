import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", city: "" });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="logo">
          Everyday<span>Car to Care</span>
        </div>
        <nav>
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <a href="#home" onClick={() => scrollToSection("home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => scrollToSection("services")}>
                Services
              </a>
            </li>
            <li>
              <a href="#pricing" onClick={() => scrollToSection("pricing")}>
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => scrollToSection("contact")}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Premium Car Wash at Your Doorstep</h1>
          <p>
            Professional, eco-friendly and affordable daily car cleaning
            service.
          </p>
          <button
            className="btn-primary"
            onClick={() => scrollToSection("pricing")}
          >
            View Plans
          </button>
        </div>
      </section>

      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="card">
            <h3>Daily Microfiber Cleaning</h3>
            <p>
              Doorstep microfiber cleaning every day to keep your car spotless
              and scratch-free.
            </p>
          </div>
          <div className="card">
            <h3>Weekly Interior Cleaning</h3>
            <p>
              Thorough interior cleaning once a week — dashboard, seats, carpets
              and glass shining.
            </p>
          </div>
          <div className="card">
            <h3>Monthly Full Car Wash</h3>
            <p>
              One complete exterior, interior and underbody wash every month for
              deep-level cleanliness.
            </p>
          </div>
          <div className="card">
            <h3>Tissue Box / Month</h3>
            <p>
              A fresh tissue box delivered to your car every month for everyday
              convenience.
            </p>
          </div>
          <div className="card">
            <h3>Car Perfume / Month</h3>
            <p>
              A new car perfume installed once a month to keep your cabin
              smelling fresh always.
            </p>
          </div>
          <div className="card">
            <h3>Windshield Water Refill</h3>
            <p>
              Windshield washer fluid topped up once a month so your view stays
              clear.
            </p>
          </div>
          <div className="card">
            <h3>Puncture at Your Doorstep</h3>
            <p>
              Got a flat tyre? We send a technician to fix your puncture right
              where you are.
            </p>
          </div>
          <div className="card">
            <h3>Jump Start at Your Doorstep</h3>
            <p>
              Dead battery? Our team arrives at your location and jump-starts
              your car instantly.
            </p>
          </div>
        </div>
      </section>

      <section className="pricing" id="pricing">
        <h2>Our Plans</h2>
        <div className="pricing-grid">
          <div className="price-card">
            <div className="price-card-img">🛵</div>
            <h3>Bike</h3>
            <p className="price">₹499/month</p>
            <ul>
              <li>Daily Microfiber Clean</li>
              <li>Weekly Interior Clean</li>
              <li>Monthly Full Wash</li>
            </ul>
            <button className="btn-secondary">Choose Plan</button>
          </div>
          <div className="price-card">
            <div className="price-card-img">🚗</div>
            <h3>Compact Car</h3>
            <p className="price">₹1,599/month</p>
            <ul>
              <li>Daily Microfiber Clean</li>
              <li>Weekly Interior Clean</li>
              <li>Monthly Full Wash + Underbody</li>
            </ul>
            <button className="btn-secondary">Choose Plan</button>
          </div>
          <div className="price-card featured">
            <div className="price-card-img">🚙</div>
            <h3>Sedan / Mid SUV</h3>
            <p className="price">₹1,799/month</p>
            <ul>
              <li>Daily Microfiber Clean</li>
              <li>Weekly Interior Clean</li>
              <li>Monthly Full Wash + Underbody</li>
            </ul>
            <button className="btn-primary">Choose Plan</button>
          </div>
          <div className="price-card">
            <div className="price-card-img">🚐</div>
            <h3>Grand Sedan / SUV</h3>
            <p className="price">₹1,999/month</p>
            <ul>
              <li>Daily Microfiber Clean</li>
              <li>Weekly Interior Clean</li>
              <li>Monthly Full Wash + Underbody</li>
            </ul>
            <button className="btn-secondary">Choose Plan</button>
          </div>
          <div className="price-card">
            <div className="price-card-img">🏎️</div>
            <h3>Premium Luxury Car</h3>
            <p className="price">₹2,500/month</p>
            <ul>
              <li>Daily Microfiber Clean</li>
              <li>Weekly Interior Clean</li>
              <li>Monthly Full Wash + Underbody</li>
            </ul>
            <button className="btn-secondary">Choose Plan</button>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Book a Free Demo</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you! Our team will contact you soon.");
            setFormData({ name: "", phone: "", city: "" });
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="City"
            required
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
          <button type="submit" className="btn-primary">
            Submit
          </button>
        </form>
      </section>

      <footer>
        <p>© 2026 ShineDaily. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
