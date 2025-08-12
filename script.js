// Wait for the DOM to be fully loaded
window.addEventListener("load", () => {
  // Country codes data
  const countryCodes = [
    { name: "United States", code: "1", flag: "🇺🇸" },
    { name: "United Kingdom", code: "44", flag: "🇬🇧" },
    { name: "Canada", code: "1", flag: "🇨🇦" },
    { name: "Australia", code: "61", flag: "🇦🇺" },
    { name: "Afghanistan", code: "93", flag: "🇦🇫" },
    { name: "Albania", code: "355", flag: "🇦🇱" },
    { name: "Algeria", code: "213", flag: "🇩🇿" },
    { name: "Argentina", code: "54", flag: "🇦🇷" },
    { name: "Austria", code: "43", flag: "🇦🇹" },
    { name: "Bahrain", code: "973", flag: "🇧🇭" },
    { name: "Bangladesh", code: "880", flag: "🇧🇩" },
    { name: "Belgium", code: "32", flag: "🇧🇪" },
    { name: "Brazil", code: "55", flag: "🇧🇷" },
    { name: "China", code: "86", flag: "🇨🇳" },
    { name: "Colombia", code: "57", flag: "🇨🇴" },
    { name: "Denmark", code: "45", flag: "🇩🇰" },
    { name: "Egypt", code: "20", flag: "🇪🇬" },
    { name: "France", code: "33", flag: "🇫🇷" },
    { name: "Germany", code: "49", flag: "🇩🇪" },
    { name: "Greece", code: "30", flag: "🇬🇷" },
    { name: "Hong Kong", code: "852", flag: "🇭🇰" },
    { name: "India", code: "91", flag: "🇮🇳" },
    { name: "Indonesia", code: "62", flag: "🇮🇩" },
    { name: "Iran", code: "98", flag: "🇮🇷" },
    { name: "Iraq", code: "964", flag: "🇮🇶" },
    { name: "Ireland", code: "353", flag: "🇮🇪" },
    { name: "Israel", code: "972", flag: "🇮🇱" },
    { name: "Italy", code: "39", flag: "🇮🇹" },
    { name: "Japan", code: "81", flag: "🇯🇵" },
    { name: "Kenya", code: "254", flag: "🇰🇪" },
    { name: "Malaysia", code: "60", flag: "🇲🇾" },
    { name: "Mexico", code: "52", flag: "🇲🇽" },
    { name: "Netherlands", code: "31", flag: "🇳🇱" },
    { name: "New Zealand", code: "64", flag: "🇳🇿" },
    { name: "Nigeria", code: "234", flag: "🇳🇬" },
    { name: "Norway", code: "47", flag: "🇳🇴" },
    { name: "Pakistan", code: "92", flag: "🇵🇰" },
    { name: "Philippines", code: "63", flag: "🇵🇭" },
    { name: "Poland", code: "48", flag: "🇵🇱" },
    { name: "Portugal", code: "351", flag: "🇵🇹" },
    { name: "Qatar", code: "974", flag: "🇶🇦" },
    { name: "Russia", code: "7", flag: "🇷🇺" },
    { name: "Saudi Arabia", code: "966", flag: "🇸🇦" },
    { name: "Singapore", code: "65", flag: "🇸🇬" },
    { name: "South Africa", code: "27", flag: "🇿🇦" },
    { name: "South Korea", code: "82", flag: "🇰🇷" },
    { name: "Spain", code: "34", flag: "🇪🇸" },
    { name: "Sweden", code: "46", flag: "🇸🇪" },
    { name: "Switzerland", code: "41", flag: "🇨🇭" },
    { name: "Taiwan", code: "886", flag: "🇹🇼" },
    { name: "Thailand", code: "66", flag: "🇹🇭" },
    { name: "Turkey", code: "90", flag: "🇹🇷" },
    { name: "Ukraine", code: "380", flag: "🇺🇦" },
    { name: "United Arab Emirates", code: "971", flag: "🇦🇪" },
    { name: "Vietnam", code: "84", flag: "🇻🇳" },
  ]

  // DOM elements
  const countrySelector = document.getElementById("country-selector")
  const countryDropdown = document.getElementById("country-dropdown")
  const countryList = document.getElementById("country-list")
  const countrySearchInput = document.getElementById("country-search-input")
  const selectedFlag = document.getElementById("selected-flag")
  const selectedCode = document.getElementById("selected-code")
  const contactForm = document.getElementById("contactForm")
  const submitBtn = document.getElementById("submit-btn")
  const toast = document.getElementById("toast")

  // Form fields
  const firstName = document.getElementById("first-name")
  const lastName = document.getElementById("last-name")
  const email = document.getElementById("email")
  const phoneNumber = document.getElementById("phone-number")
  const message = document.getElementById("message")
  const acceptTerms = document.getElementById("accept")

  // Error message elements
  const firstNameError = document.getElementById("first-name-error")
  const lastNameError = document.getElementById("last-name-error")
  const emailError = document.getElementById("email-error")
  const phoneError = document.getElementById("phone-error")
  const messageError = document.getElementById("message-error")
  const acceptError = document.getElementById("accept-error")

  // Current selected country (default: United States)
  let currentCountry = countryCodes[0]

  // Populate country list
  function populateCountryList(countries) {
    countryList.innerHTML = ""
    countries.forEach((country) => {
      const countryItem = document.createElement("div")
      countryItem.className = "country-item"
      countryItem.innerHTML = `
        <span class="country-flag">${country.flag}</span>
        <span class="country-name">${country.name}</span>
        <span class="country-code">+${country.code}</span>
      `
      countryItem.addEventListener("click", () => {
        selectCountry(country)
        closeDropdown()
      })
      countryList.appendChild(countryItem)
    })
  }

  // Select a country
  function selectCountry(country) {
    currentCountry = country
    selectedFlag.textContent = country.flag
    selectedCode.textContent = `+${country.code}`
  }

  // Toggle dropdown
  function toggleDropdown(e) {
    e.preventDefault()
    e.stopPropagation()
    countryDropdown.classList.toggle("show")
    if (countryDropdown.classList.contains("show")) {
      countrySearchInput.focus()
      populateCountryList(countryCodes)
    }
  }

  // Close dropdown
  function closeDropdown() {
    countryDropdown.classList.remove("show")
  }

  // Filter countries
  function filterCountries(query) {
    if (!query) {
      return countryCodes
    }

    query = query.toLowerCase()
    return countryCodes.filter((country) => country.name.toLowerCase().includes(query) || country.code.includes(query))
  }

  // Show toast message
  function showToast(message) {
    const toastMessage = document.getElementById("toast-message")
    toastMessage.textContent = message
    toast.classList.add("show")

    setTimeout(() => {
      toast.classList.remove("show")
    }, 3000)
  }

  // Reset form errors
  function resetFormErrors() {
    // Remove error classes
    firstName.classList.remove("error")
    lastName.classList.remove("error")
    email.classList.remove("error")
    phoneNumber.classList.remove("error")
    message.classList.remove("error")

    // Clear error messages
    firstNameError.textContent = ""
    lastNameError.textContent = ""
    emailError.textContent = ""
    phoneError.textContent = ""
    messageError.textContent = ""
    acceptError.textContent = ""
  }

  // Validate form
  function validateForm() {
    resetFormErrors()
    let isValid = true

    // Validate first name
    if (firstName.value.trim().length < 2) {
      firstName.classList.add("error")
      firstNameError.textContent = "First name must be at least 2 characters."
      isValid = false
    }

    // Validate last name
    if (lastName.value.trim().length < 2) {
      lastName.classList.add("error")
      lastNameError.textContent = "Last name must be at least 2 characters."
      isValid = false
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.value)) {
      email.classList.add("error")
      emailError.textContent = "Please enter a valid email address."
      isValid = false
    }

    // Validate phone number
    if (phoneNumber.value.trim().length < 5) {
      phoneNumber.classList.add("error")
      phoneError.textContent = "Please enter a valid phone number."
      isValid = false
    }

    // Validate message
    if (message.value.trim().length < 10) {
      message.classList.add("error")
      messageError.textContent = "Message must be at least 10 characters."
      isValid = false
    }

    // Validate terms acceptance
    if (!acceptTerms.checked) {
      acceptError.textContent = "You must accept the terms and conditions."
      isValid = false
    }

    return isValid
  }

  // Event listeners
  if (countrySelector) {
    countrySelector.addEventListener("click", toggleDropdown)
  }

  if (countrySearchInput) {
    countrySearchInput.addEventListener("input", () => {
      const filteredCountries = filterCountries(countrySearchInput.value)
      populateCountryList(filteredCountries)
    })
  }

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (
      countrySelector &&
      countryDropdown &&
      !countrySelector.contains(e.target) &&
      !countryDropdown.contains(e.target)
    ) {
      closeDropdown()
    }
  })

  // Handle form submission
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      if (validateForm()) {
        // Disable submit button during "submission"
        submitBtn.disabled = true
        submitBtn.textContent = "Submitting..."

        // Get the full phone number with country code
        const fullPhoneNumber = `+${currentCountry.code} ${phoneNumber.value}`

        // Simulate form submission (would be an actual API call in production)
        setTimeout(() => {
          console.log({
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            phone: fullPhoneNumber,
            message: message.value,
            acceptTerms: acceptTerms.checked,
          })

          // Reset form
          contactForm.reset()

          // Reset selected country to default (United States)
          selectCountry(countryCodes[0])

          // Show success message
          showToast("Message sent successfully!")

          // Re-enable submit button
          submitBtn.disabled = false
          submitBtn.textContent = "Submit"
        }, 1500)
      }
    })
  }

  // Initialize country list
  populateCountryList(countryCodes)
})

class Navbar {
  constructor() {
    this.mobileMenuToggle = document.getElementById("mobile-menu-toggle")
    this.navFlex = document.querySelector(".nav-flex")
    this.initMobileToggle()
    this.setupScrollEffect()
    this.setupSmoothScrolling()
  }

  initMobileToggle() {
    if (!this.mobileMenuToggle || !this.navFlex) return

    // Toggle mobile menu visibility
    this.mobileMenuToggle.addEventListener("click", () => {
      this.mobileMenuToggle.classList.toggle("active")
      this.navFlex.classList.toggle("active")
    })

    // Close menu on nav item click
    const navLinks = document.querySelectorAll(".nav-item")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        this.mobileMenuToggle.classList.remove("active")
        this.navFlex.classList.remove("active")
      })
    })
  }

  setupScrollEffect() {
    const navbar = document.querySelector(".navbar")
    if (!navbar) return

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navbar.style.backgroundColor = "rgba(236, 240, 244, 0.95)"
        navbar.style.backdropFilter = "blur(10px)"
      } else {
        navbar.style.backgroundColor = "var(--light-bg)"
        navbar.style.backdropFilter = "none"
      }
    })
  }

  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          })
        }
      })
    })
  }
}

// Initialize navbar after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  new Navbar()
})

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    this.mobileMenuToggle.classList.remove("active")
    this.navFlex.classList.remove("active")
  }
})
