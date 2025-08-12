CONTACT-JAVASCRIPT

const mobileMenuToggle = document.getElementById("mobile-menu-toggle")
const navFlex = document.querySelector(".nav-flex")

navbarnavbarnavbarsetupMobileMenu() {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenuToggle.classList.toggle("active")
      navFlex.classList.toggle("active")
    })

    // Close mobile menu when clicking on nav links
    const navLinks = document.querySelectorAll(".nav-item")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenuToggle.classList.remove("active")
        navFlex.classList.remove("active")
      })
    })
}

// Add scroll effect to navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = "rgba(236, 240, 244, 0.95)"
    navbar.style.backdropFilter = "blur(10px)"
  } else {
    navbar.style.backgroundColor = "var(--light-bg)"
    navbar.style.backdropFilter = "none"
  }
})



CONTACT-CSS
.navbar {
  width: 100%;
  height: 12vh;
  min-height: 60px;
  background-color: var(--light-bg);
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.company-logo {
  width: 15%;
  height: 60px;
  background-image: url(./icon/fav-icon/blue\ bg\ icon\ with\ blue.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex-shrink: 0;
}

.navbar ul {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  list-style-type: none;
  text-transform: uppercase;
  font-weight: 500;
}

.navbar ul li a {
  transition: all 0.2s linear;
  cursor: pointer;
  padding: 0.5rem 1rem;
  color: #000;
  text-decoration: none;
  font-family: var(--merriweather);
}

.navbar ul li a:hover {
  color: var(--primary-color);
  font-weight: bold;
}

/* Mobile menu toggle */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background-color: #000;
  margin: 3px 0;
  transition: 0.3s;
  transform-origin: center;
}

.mobile-menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

RESPONSIVE - CSS
@media (max-width: 1024px) {
  .navbar {
    padding: 0 1rem;
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 0 1rem;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .nav-flex {
    position: fixed;
    top: 12vh;
    left: -100%;
    width: 100%;
    height: calc(100vh - 12vh);
    background-color: var(--light-bg);
    transition: left 0.3s ease;
    z-index: 999;
  }

  .nav-flex.active {
    left: 0;
  }

  .navbar ul {
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    padding-top: 2rem;
    gap: 1rem;
  }

  .navbar ul li {
    width: 100%;
    text-align: center;
  }

  .navbar ul li a {
    display: block;
    padding: 1rem;
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .navbar {
    height: 10vh;
    padding: 0 0.5rem;
  }

  .company-logo {
    width: 40px;
    height: 40px;
  }

  .nav-flex {
    top: 10vh;
    height: calc(100vh - 10vh);
  }
}


CONTACT-HTML 
<nav class="navbar">
      <div class="company-logo">
        <!-- fav icon-->
      </div>

      <div class="mobile-menu-toggle" id="mobile-menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="nav-flex">
        <ul id="navbar-menu">
          <li><a href="index.html" class="nav-item">Home</a></li>
          <li><a href="./services.html" class="nav-item">Service</a></li>
          <li><a href="index.html#testimonial" class="nav-item">Testimonial</a></li>
          <li><a href="./contact.html" class="nav-item">Contact Us</a></li>
        </ul>
      </div>
    </nav>

    -------------------------------------

    OLD HTML SERVICE
    <header class="header">
      <div class="header-container">
        <div class="header-content">
          <!-- Logo -->
          <div class="logo">
            <!-- company logo -->
          </div>

          <!-- Navigation -->
          <nav class="nav">
            <a href="./index.html" onclick="window.location.href = 'index.html'" class="nav-item">Home</a>
            <a href="#" class="nav-item nav-item-active">Services</a>
            <a href="#Testimonial" class="nav-item">Testimonial</a>
            <a href="./contact.html" onclick="window.location.href='contact.html'" class="nav-item">Contact</a>
          </nav>
        </div>
      </div>
    </header>


    HOMEPAGE

    <nav class="navbar">
      <div class="mobile-menu-toggle" id="mobile-menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="company-logo">
        <img src="./icon/fav-icon/blue bg icon with blue.png" width="100%">
      </div>
      <div class="nav-flex">
        <ul id="navbar-menu">
          <li><a href="#" class="nav-item">Home</a></li>
          <li><a href="./services.html" class="nav-item">Service</a></li>
          <li><a href="#Testimonial" class="nav-item">Testimonial</a></li>
          <li><a href="contact.html" class="nav-item">Contact Us</a></li>
        </ul>
      </div>
    </nav>

    OLD CSS HOMEPAGE
    .navbar {
  min-width: 100%;
  height: 12vh;
  min-height: 60px;
  background-color: var(--light-bg);
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 0 2rem; */
  position: fixed;
  top: 0;
  z-index: 1000;
  padding: 0 2rem;
}

.company-logo {
  width: 20%;
  height: 80%;
  /* background-image: url(./icon/fav-icon/blue\ bg\ icon\ with\ blue.png); */
  object-fit: contain;
  padding: 1rem;
  object-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar ul {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  list-style-type: none;
  text-transform: uppercase;
  font-weight: 500;
}

.navbar ul li a {
  transition: all 0.2s linear;
  cursor: pointer;
  padding: 0.5rem 1rem;
  color: #000;
}

.navbar ul li a:hover {
  color: var(--primary-color);
  font-weight: bold;
}

.nav-item {
  font-family: var(--merriweather);
}

.nav-item:active {
  color: #000080;
}

/* Mobile menu toggle */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background-color: #000;
  margin: 3px 0;
  transition: 0.3s;
}

OLD SERVICE HTML
<div class="header-container">
        <div class="header-content">
          <!-- Logo -->
          <div class="logo">
            <!-- company logo -->
          </div>

          <!-- Navigation -->
          <nav class="nav">
            <a href="./index.html" onclick="window.location.href = 'index.html'" class="nav-item">Home</a>
            <a href="#" class="nav-item nav-item-active">Services</a>
            <a href="#Testimonial" class="nav-item">Testimonial</a>
            <a href="./contact.html" onclick="window.location.href='contact.html'" class="nav-item">Contact</a>
          </nav>
        </div>
      </div>

OLD SERVICES CSS
.header-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
}

.logo {
  width: 15%;
  height: 80%;
  background-image: url(./icon/fav-icon/blue\ bg\ icon\ with\ blue.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.nav {
  display: flex;
  gap: 3rem;
  font-weight: 500;
}

.nav-item {
  text-decoration: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  color: #000;
  transition: all 0.2s linear;
  font-style: italic;
  font-family: var(--merriweather);
}

.nav-item:hover {
  color: var(--primary-color);
  font-weight: bold;
}

.nav-item-active {
  color: var(--hover-color);
  font-weight: bold;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }
}

-----------------------------------------------------------------------------------

<section class="Contact" id="Contact">
    <div class="contact-img">
      <h2>
        Looking for top-tier web design? <br />
        Get in touch, we’re ready to help you succeed online.
      </h2>
    </div>

    <div class="contact-form">
      <div id="toast" class="toast">
        <div class="toast-content">
          <span id="toast-message">Message sent successfully!</span>
        </div>
      </div>

      <form id="contactForm">
        <!-- Name fields -->
        <div class="form-row">
          <div class="form-group">
            <input type="text" id="first-name" name="firstName" placeholder="First Name" />
            <p id="first-name-error" class="error-message"></p>
          </div>

          <div class="form-group">
            <input type="text" id="last-name" name="lastName" placeholder="Last Name" />
            <p id="last-name-error" class="error-message"></p>
          </div>
        </div>

        <div class="form-group">
          <input type="email" id="email" name="email" placeholder="Email" />
          <p id="email-error" class="error-message"></p>
        </div>

        <!-- Phone field with country selector -->
        <div class="form-group">
          <!-- <label for="phone-number">Phone Number</label> -->
          <div class="phone-input-container">
            <div id="country-selector" class="country-selector">
              <div class="selected-country">
                <span id="selected-flag">🇺🇸</span>
                <span id="selected-code">+1</span>
              </div>
            </div>

            <div id="country-dropdown" class="country-dropdown">
              <div class="country-search">
                <input type="text" id="country-search-input" placeholder="Search countries..." />
              </div>
              <div id="country-list" class="country-list"></div>
            </div>

            <input type="text" id="phone-number" name="phoneNumber" placeholder="Phone number" />
            <input type="hidden" name="country_code" id="country-code" />
          </div>
          <p id="phone-error" class="error-message"></p>
        </div>

        <!-- Message field -->
        <div class="form-group">
          <!-- <label for="message">Message</label> -->
          <textarea id="message" name="message" rows="5" placeholder="message"></textarea>
          <p id="message-error" class="error-message"></p>
        </div>

        <!-- Terms and conditions
          <div class="form-group checkbox-group">
            <div class="checkbox-container">
              <input type="checkbox" id="accept" name="acceptTerms" />
              <label for="accept">I accept the terms and conditions</label>
            </div>
            <p id="accept-error" class="error-message"></p>
          </div> -->

        <!-- Submit button -->
        <div class="form-group">
          <button type="submit" id="submit-btn" class="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  </section>

css---------------------------------------

.contact-form {
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(to top right, rgba(0, 0, 0, 1), #1e90ff);
}

.contact-img {
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.contact-img h2 {
  font-size: clamp(1.8rem, 4vw, 3rem);
  color: var(--primary-color);
  text-align: center;
  line-height: 1.3;
}


/* Form styles */
.form-row {
  display: flex;
  /* flex-wrap: wrap; */
  gap: 1rem;
  margin-bottom: 1rem;
}

.form-group {
  flex: 1 1 300px;
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.2rem;
  font-weight: 500;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.2s;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #000080;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

.error-message {
  color: #e53935;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  min-height: 1rem;
}

input.error,
textarea.error {
  border-color: #e53935;
}

/* Checkbox styles */
.checkbox-group {
  margin-bottom: 1rem;
}

.checkbox-container {
  display: flex;
  align-items: center;
  gap: 0.2rem;
}

input[type="checkbox"] {
  width: auto;
  margin-right: 0.5rem;
}

/* Submit button */
.submit-btn {
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-btn:hover {
  background-color: #3a7bc8;
}

.submit-btn:disabled {
  background-color: #a0c1e8;
  cursor: not-allowed;
}

/* Country selector styles */
.phone-input-container {
  display: flex;
  position: relative;
}

.country-selector {
  display: flex;
  align-items: center;
  min-width: 90px;
  padding: 0.75rem;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  color: #000080;
  border-right: none;
  border-radius: 4px 0 0 4px;
  cursor: pointer;
}

.selected-country {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

#phone-number {
  border-radius: 0 4px 4px 0;
}

.country-dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 300px;
  max-height: 300px;
  background-color: white;
  color: #000;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  margin-top: 0.25rem;
}

.country-dropdown.show {
  display: block;
}

.country-search {
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
}

.country-list {
  max-height: 250px;
  overflow-y: auto;
}

.country-item {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.country-item:hover {
  background-color: #f5f5f5;
}

.country-flag {
  margin-right: 0.5rem;
  font-size: 1.2rem;
}

.country-name {
  flex: 1;
}

.country-code {
  color: #777;
}