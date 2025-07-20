
const countries = [
  { name: "United States", code: "+1", flag: "🇺🇸", iso: "US", format: "(###) ###-####", popular: true },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧", iso: "GB", format: "#### ### ####", popular: true },
  { name: "Canada", code: "+1", flag: "🇨🇦", iso: "CA", format: "(###) ###-####", popular: true },
  { name: "Australia", code: "+61", flag: "🇦🇺", iso: "AU", format: "#### ### ###", popular: true },
  { name: "Germany", code: "+49", flag: "🇩🇪", iso: "DE", format: "### ########", popular: true },
  { name: "France", code: "+33", flag: "🇫🇷", iso: "FR", format: "## ## ## ## ##", popular: true },
  { name: "Italy", code: "+39", flag: "🇮🇹", iso: "IT", format: "### ### ####" },
  { name: "Spain", code: "+34", flag: "🇪🇸", iso: "ES", format: "### ### ###" },
  { name: "Netherlands", code: "+31", flag: "🇳🇱", iso: "NL", format: "## ########" },
  { name: "Belgium", code: "+32", flag: "🇧🇪", iso: "BE", format: "### ## ## ##" },
  { name: "Switzerland", code: "+41", flag: "🇨🇭", iso: "CH", format: "## ### ## ##" },
  { name: "Austria", code: "+43", flag: "🇦🇹", iso: "AT", format: "### ######" },
  { name: "Sweden", code: "+46", flag: "🇸🇪", iso: "SE", format: "##-### ## ##" },
  { name: "Norway", code: "+47", flag: "🇳🇴", iso: "NO", format: "### ## ###" },
  { name: "Denmark", code: "+45", flag: "🇩🇰", iso: "DK", format: "## ## ## ##" },
  { name: "Finland", code: "+358", flag: "🇫🇮", iso: "FI", format: "## ### ####" },
  { name: "Poland", code: "+48", flag: "🇵🇱", iso: "PL", format: "### ### ###" },
  { name: "Czech Republic", code: "+420", flag: "🇨🇿", iso: "CZ", format: "### ### ###" },
  { name: "Hungary", code: "+36", flag: "🇭🇺", iso: "HU", format: "## ### ####" },
  { name: "Portugal", code: "+351", flag: "🇵🇹", iso: "PT", format: "### ### ###" },
  { name: "Greece", code: "+30", flag: "🇬🇷", iso: "GR", format: "### ### ####" },
  { name: "Turkey", code: "+90", flag: "🇹🇷", iso: "TR", format: "### ### ## ##" },
  { name: "Russia", code: "+7", flag: "🇷🇺", iso: "RU", format: "### ###-##-##" },
  { name: "China", code: "+86", flag: "🇨🇳", iso: "CN", format: "### #### ####", popular: true },
  { name: "Japan", code: "+81", flag: "🇯🇵", iso: "JP", format: "##-####-####", popular: true },
  { name: "South Korea", code: "+82", flag: "🇰🇷", iso: "KR", format: "##-####-####" },
  { name: "India", code: "+91", flag: "🇮🇳", iso: "IN", format: "##### #####", popular: true },
  { name: "Singapore", code: "+65", flag: "🇸🇬", iso: "SG", format: "#### ####" },
  { name: "Malaysia", code: "+60", flag: "🇲🇾", iso: "MY", format: "##-### ####" },
  { name: "Thailand", code: "+66", flag: "🇹🇭", iso: "TH", format: "##-###-####" },
  { name: "Indonesia", code: "+62", flag: "🇮🇩", iso: "ID", format: "###-###-####" },
  { name: "Philippines", code: "+63", flag: "🇵🇭", iso: "PH", format: "### ### ####" },
  { name: "Vietnam", code: "+84", flag: "🇻🇳", iso: "VN", format: "### ### ####" },
  { name: "Brazil", code: "+55", flag: "🇧🇷", iso: "BR", format: "## #####-####", popular: true },
  { name: "Argentina", code: "+54", flag: "🇦🇷", iso: "AR", format: "## ####-####" },
  { name: "Mexico", code: "+52", flag: "🇲🇽", iso: "MX", format: "## #### ####", popular: true },
  { name: "Chile", code: "+56", flag: "🇨🇱", iso: "CL", format: "# #### ####" },
  { name: "Colombia", code: "+57", flag: "🇨🇴", iso: "CO", format: "### ### ####" },
  { name: "Peru", code: "+51", flag: "🇵🇪", iso: "PE", format: "### ### ###" },
  { name: "South Africa", code: "+27", flag: "🇿🇦", iso: "ZA", format: "## ### ####" },
  { name: "Nigeria", code: "+234", flag: "🇳🇬", iso: "NG", format: "### ### ####", popular: true },
  { name: "Kenya", code: "+254", flag: "🇰🇪", iso: "KE", format: "### ######" },
  { name: "Egypt", code: "+20", flag: "🇪🇬", iso: "EG", format: "## #### ####" },
  { name: "Morocco", code: "+212", flag: "🇲🇦", iso: "MA", format: "###-######" },
  { name: "Israel", code: "+972", flag: "🇮🇱", iso: "IL", format: "##-###-####" },
  { name: "UAE", code: "+971", flag: "🇦🇪", iso: "AE", format: "## ### ####" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦", iso: "SA", format: "## ### ####" },
  { name: "Qatar", code: "+974", flag: "🇶🇦", iso: "QA", format: "#### ####" },
  { name: "Kuwait", code: "+965", flag: "🇰🇼", iso: "KW", format: "#### ####" },
  { name: "New Zealand", code: "+64", flag: "🇳🇿", iso: "NZ", format: "##-###-####" },
]

class ContactForm {
  constructor() {
    this.selectedCountry = countries[0]
    this.recentCountries = this.getRecentCountries()
    this.initializeElements()
    this.setupEventListeners()
    this.populateCountryList()
    this.setupMobileMenu()
    this.detectUserCountry()
    this.loadFormData()
  }

  initializeElements() {
    this.form = document.getElementById("contact-form")
    this.emailInput = document.getElementById("email")
    this.phoneInput = document.getElementById("phone-number")
    this.nameInput = document.getElementById("first-name")
    this.messageInput = document.getElementById("message")

    this.countrySelector = document.getElementById("country-selector")
    this.countryDropdown = document.getElementById("country-dropdown")
    this.countryList = document.getElementById("country-list")
    this.countrySearchInput = document.getElementById("country-search-input")
    this.selectedFlag = document.getElementById("selected-flag")
    this.selectedCode = document.getElementById("selected-code")

    this.emailError = document.getElementById("email-error")
    this.phoneError = document.getElementById("phone-error")
    this.nameError = document.getElementById("first-name-error")

    this.toast = document.getElementById("toast")
    this.toastMessage = document.getElementById("toast-message")

    this.mobileMenuToggle = document.getElementById("mobile-menu-toggle")
    this.navFlex = document.querySelector(".nav-flex")
  }

  setupEventListeners() {
    this.form.addEventListener("submit", (e) => this.handleSubmit(e))

    // Country selector
    this.countrySelector.addEventListener("click", () => this.toggleCountryDropdown())
    this.countrySearchInput.addEventListener("input", (e) => this.filterCountries(e.target.value))

    // Keyboard navigation for country dropdown
    this.countrySearchInput.addEventListener("keydown", (e) => this.handleKeyNavigation(e))
    this.countryDropdown.addEventListener("keydown", (e) => this.handleKeyNavigation(e))

    // Enhanced close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!this.countrySelector.contains(e.target) && !this.countryDropdown.contains(e.target)) {
        this.countryDropdown.classList.remove("show")
        this.countrySelector.classList.remove("active")
      }
    })

    // Close dropdown on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.countryDropdown.classList.contains("show")) {
        this.countryDropdown.classList.remove("show")
        this.countrySelector.classList.remove("active")
        this.phoneInput.focus()
      }
    })

    // Phone number formatting
    this.phoneInput.addEventListener("input", (e) => this.formatPhoneNumber(e))
    this.phoneInput.addEventListener("keydown", (e) => this.handlePhoneKeydown(e))

    // Input validation
    this.emailInput.addEventListener("blur", () => this.validateEmail())
    this.phoneInput.addEventListener("blur", () => this.validatePhone())
    this.nameInput.addEventListener("blur", () => this.validateName())

    // Clear errors on input
    this.emailInput.addEventListener("input", () => {
      this.clearError(this.emailError)
      this.saveFormData()
    })
    this.phoneInput.addEventListener("input", () => {
      this.clearError(this.phoneError)
      this.saveFormData()
    })
    this.nameInput.addEventListener("input", () => {
      this.clearError(this.nameError)
      this.saveFormData()
    })
    this.messageInput.addEventListener("input", () => this.saveFormData())

    // Auto-save form data
    this.form.addEventListener("input", () => this.saveFormData())
  }

  setupMobileMenu() {
    this.mobileMenuToggle.addEventListener("click", () => {
      this.mobileMenuToggle.classList.toggle("active")
      this.navFlex.classList.toggle("active")
    })

    // Close mobile menu when clicking on nav links
    const navLinks = document.querySelectorAll(".nav-item")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        this.mobileMenuToggle.classList.remove("active")
        this.navFlex.classList.remove("active")
      })
    })
  }

  async detectUserCountry() {
    try {
      // Try to detect user's country using timezone
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
      const countryFromTimezone = this.getCountryFromTimezone(timezone)

      if (countryFromTimezone) {
        this.selectCountry(countryFromTimezone, false)
        return
      }

      // Fallback: Try to detect using a free IP geolocation service
      const response = await fetch("https://ipapi.co/json/")
      const data = await response.json()

      if (data.country_code) {
        const detectedCountry = countries.find((c) => c.iso === data.country_code.toUpperCase())
        if (detectedCountry) {
          this.selectCountry(detectedCountry, false)
          this.showToast(`Detected your location: ${detectedCountry.name}`)
        }
      }
    } catch (error) {
      console.log("Could not detect user country:", error)
      // Keep default country (US)
    }
  }

  getCountryFromTimezone(timezone) {
    const timezoneCountryMap = {
      "America/New_York": "US",
      "America/Los_Angeles": "US",
      "America/Chicago": "US",
      "America/Denver": "US",
      "Europe/London": "GB",
      "Europe/Paris": "FR",
      "Europe/Berlin": "DE",
      "Europe/Rome": "IT",
      "Europe/Madrid": "ES",
      "Asia/Tokyo": "JP",
      "Asia/Shanghai": "CN",
      "Asia/Seoul": "KR",
      "Asia/Kolkata": "IN",
      "Australia/Sydney": "AU",
      "America/Toronto": "CA",
      "America/Sao_Paulo": "BR",
      "America/Mexico_City": "MX",
      "Africa/Lagos": "NG",
      "Asia/Dubai": "AE",
    }

    const countryCode = timezoneCountryMap[timezone]
    return countryCode ? countries.find((c) => c.iso === countryCode) : null
  }

  populateCountryList(filteredCountries = null) {
    this.countryList.innerHTML = ""

    const countriesToShow = filteredCountries || countries
    const popularCountries = countriesToShow.filter((c) => c.popular)
    const recentCountries = this.recentCountries.filter((c) => countriesToShow.some((country) => country.iso === c.iso))
    const otherCountries = countriesToShow.filter(
      (c) => !c.popular && !recentCountries.some((recent) => recent.iso === c.iso),
    )

    // Add recent countries section
    if (recentCountries.length > 0 && !filteredCountries) {
      this.addCountrySection("Recently Used", recentCountries)
    }

    // Add popular countries section
    if (popularCountries.length > 0 && !filteredCountries) {
      this.addCountrySection("Popular", popularCountries)
    }

    // Add other countries section
    if (otherCountries.length > 0) {
      if (!filteredCountries && (recentCountries.length > 0 || popularCountries.length > 0)) {
        this.addCountrySection("All Countries", otherCountries)
      } else {
        otherCountries.forEach((country) => this.addCountryItem(country))
      }
    }

    // If filtered and no results
    if (filteredCountries && filteredCountries.length === 0) {
      const noResults = document.createElement("div")
      noResults.className = "no-results"
      noResults.textContent = "No countries found"
      noResults.style.padding = "1rem"
      noResults.style.textAlign = "center"
      noResults.style.color = "#999"
      this.countryList.appendChild(noResults)
    }
  }

  addCountrySection(title, countries) {
    const section = document.createElement("div")
    section.className = "country-section"

    const header = document.createElement("div")
    header.className = "country-section-header"
    header.textContent = title
    header.style.cssText = `
      padding: 0.5rem 1rem;
      background-color: #f8f9fa;
      font-weight: 600;
      font-size: 0.85rem;
      color: #666;
      border-bottom: 1px solid #eee;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    `

    section.appendChild(header)
    countries.forEach((country) => {
      const item = this.createCountryItem(country)
      section.appendChild(item)
    })

    this.countryList.appendChild(section)
  }

  addCountryItem(country) {
    const item = this.createCountryItem(country)
    this.countryList.appendChild(item)
  }

  createCountryItem(country) {
    const countryItem = document.createElement("div")
    countryItem.className = "country-item"
    countryItem.setAttribute("data-country", country.iso)
    countryItem.innerHTML = `
      <span class="country-flag">${country.flag}</span>
      <span class="country-name">${country.name}</span>
      <span class="country-code">${country.code}</span>
    `
    countryItem.addEventListener("click", () => this.selectCountry(country))
    return countryItem
  }

  // Update the toggleCountryDropdown method
  toggleCountryDropdown() {
    const isShowing = this.countryDropdown.classList.contains("show")

    if (isShowing) {
      this.countryDropdown.classList.remove("show")
      this.countrySelector.classList.remove("active")
    } else {
      // Close any other open dropdowns first
      document.querySelectorAll(".country-dropdown.show").forEach((dropdown) => {
        dropdown.classList.remove("show")
      })

      this.countryDropdown.classList.add("show")
      this.countrySelector.classList.add("active")

      // Focus and select the search input
      setTimeout(() => {
        this.countrySearchInput.focus()
        this.countrySearchInput.select()
      }, 100)

      // Ensure dropdown is positioned correctly
      this.positionDropdown()
    }
  }

  // Add method to position dropdown correctly
  positionDropdown() {
    const rect = this.countrySelector.getBoundingClientRect()
    const dropdownRect = this.countryDropdown.getBoundingClientRect()
    const viewportHeight = window.innerHeight

    // Check if dropdown would go below viewport
    if (rect.bottom + dropdownRect.height > viewportHeight) {
      // Position above the input
      this.countryDropdown.style.top = "auto"
      this.countryDropdown.style.bottom = "calc(100% + 5px)"
    } else {
      // Position below the input (default)
      this.countryDropdown.style.top = "calc(100% + 5px)"
      this.countryDropdown.style.bottom = "auto"
    }
  }

  // Update the selectCountry method to properly close dropdown
  selectCountry(country, addToRecent = true) {
    this.selectedCountry = country
    this.selectedFlag.textContent = country.flag
    this.selectedCode.textContent = country.code

    // Close dropdown with animation
    this.countryDropdown.classList.remove("show")
    this.countrySelector.classList.remove("active")
    this.countrySearchInput.value = ""

    // Update phone input placeholder with better formatting
    const formatExample = country.format ? country.format.replace(/#/g, "0") : "e.g. 123456789"
    this.phoneInput.placeholder = `Phone number (${formatExample})`

    // Clear and reformat current phone number
    if (this.phoneInput.value) {
      const cleanNumber = this.phoneInput.value.replace(/\D/g, "")
      this.phoneInput.value = cleanNumber
      this.formatPhoneNumber({ target: this.phoneInput })
    }

    if (addToRecent) {
      this.addToRecentCountries(country)
    }

    // Repopulate the list to update recent countries
    this.populateCountryList()
    this.validatePhone()

    // Focus back to phone input
    this.phoneInput.focus()
  }

  filterCountries(searchTerm) {
    if (!searchTerm.trim()) {
      this.populateCountryList()
      return
    }

    const filtered = countries.filter(
      (country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.code.includes(searchTerm) ||
        country.iso.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    this.populateCountryList(filtered)
  }

  handleKeyNavigation(e) {
    const items = this.countryList.querySelectorAll(".country-item")
    const currentFocus = this.countryList.querySelector(".country-item.focused")
    let currentIndex = currentFocus ? Array.from(items).indexOf(currentFocus) : -1

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        currentIndex = Math.min(currentIndex + 1, items.length - 1)
        this.focusCountryItem(items, currentIndex)
        break
      case "ArrowUp":
        e.preventDefault()
        currentIndex = Math.max(currentIndex - 1, 0)
        this.focusCountryItem(items, currentIndex)
        break
      case "Enter":
        e.preventDefault()
        if (currentFocus) {
          currentFocus.click()
        }
        break
      case "Escape":
        this.countryDropdown.classList.remove("show")
        this.phoneInput.focus()
        break
    }
  }

  focusCountryItem(items, index) {
    // Remove previous focus
    items.forEach((item) => item.classList.remove("focused"))

    // Add focus to current item
    if (items[index]) {
      items[index].classList.add("focused")
      items[index].scrollIntoView({ block: "nearest" })
    }
  }

  formatPhoneNumber(e) {
    const input = e.target
    const value = input.value.replace(/\D/g, "") // Remove all non-digits
    const format = this.selectedCountry.format || ""

    let formatted = ""
    let valueIndex = 0

    for (let i = 0; i < format.length && valueIndex < value.length; i++) {
      if (format[i] === "#") {
        formatted += value[valueIndex]
        valueIndex++
      } else {
        formatted += format[i]
      }
    }

    // Add remaining digits if format is shorter
    if (valueIndex < value.length) {
      formatted += value.slice(valueIndex)
    }

    input.value = formatted
  }

  handlePhoneKeydown(e) {
    // Allow backspace, delete, tab, escape, enter
    if (
      [8, 9, 27, 13, 46].indexOf(e.keyCode) !== -1 ||
      // Allow Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
      (e.keyCode === 65 && e.ctrlKey === true) ||
      (e.keyCode === 67 && e.ctrlKey === true) ||
      (e.keyCode === 86 && e.ctrlKey === true) ||
      (e.keyCode === 88 && e.ctrlKey === true) ||
      // Allow home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)
    ) {
      return
    }

    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault()
    }
  }

  validateEmail() {
    const email = this.emailInput.value.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email) {
      this.showError(this.emailError, "Email is required")
      return false
    } else if (!emailRegex.test(email)) {
      this.showError(this.emailError, "Please enter a valid email address")
      return false
    } else {
      this.clearError(this.emailError)
      return true
    }
  }

  validatePhone() {
    const phone = this.phoneInput.value.trim()
    const digitsOnly = phone.replace(/\D/g, "")

    if (!phone) {
      this.showError(this.phoneError, "Phone number is required")
      return false
    } else if (digitsOnly.length < 7) {
      this.showError(this.phoneError, "Phone number is too short")
      return false
    } else if (digitsOnly.length > 15) {
      this.showError(this.phoneError, "Phone number is too long")
      return false
    } else {
      this.clearError(this.phoneError)
      return true
    }
  }

  validateName() {
    const name = this.nameInput.value.trim()

    if (!name) {
      this.showError(this.nameError, "Name is required")
      return false
    } else if (name.length < 2) {
      this.showError(this.nameError, "Name must be at least 2 characters long")
      return false
    } else if (!/^[a-zA-Z\s'-]+$/.test(name)) {
      this.showError(this.nameError, "Name can only contain letters, spaces, hyphens, and apostrophes")
      return false
    } else {
      this.clearError(this.nameError)
      return true
    }
  }

  showError(errorElement, message) {
    errorElement.textContent = message
    errorElement.style.display = "block"
    errorElement.parentElement.querySelector("input, textarea").style.borderColor = "#ff6b6b"
  }

  clearError(errorElement) {
    errorElement.style.display = "none"
    errorElement.parentElement.querySelector("input, textarea").style.borderColor = "#1e90ff"
  }

  showToast(message, isError = false) {
    this.toastMessage.textContent = message
    this.toast.className = `toast ${isError ? "error" : ""}`
    this.toast.classList.add("show")

    setTimeout(() => {
      this.toast.classList.remove("show")
    }, 4000)
  }

  // Local storage functions
  saveFormData() {
    const formData = {
      email: this.emailInput.value,
      phone: this.phoneInput.value,
      name: this.nameInput.value,
      message: this.messageInput.value,
      country: this.selectedCountry.iso,
      timestamp: Date.now(),
    }
    localStorage.setItem("contactFormData", JSON.stringify(formData))
  }

  loadFormData() {
    try {
      const saved = localStorage.getItem("contactFormData")
      if (saved) {
        const formData = JSON.parse(saved)

        // Only load if data is less than 24 hours old
        if (Date.now() - formData.timestamp < 24 * 60 * 60 * 1000) {
          this.emailInput.value = formData.email || ""
          this.phoneInput.value = formData.phone || ""
          this.nameInput.value = formData.name || ""
          this.messageInput.value = formData.message || ""

          if (formData.country) {
            const savedCountry = countries.find((c) => c.iso === formData.country)
            if (savedCountry) {
              this.selectCountry(savedCountry, false)
            }
          }
        }
      }
    } catch (error) {
      console.log("Could not load saved form data:", error)
    }
  }

  clearFormData() {
    localStorage.removeItem("contactFormData")
  }

  addToRecentCountries(country) {
    let recent = this.getRecentCountries()

    // Remove if already exists
    recent = recent.filter((c) => c.iso !== country.iso)

    // Add to beginning
    recent.unshift(country)

    // Keep only last 5
    recent = recent.slice(0, 5)

    localStorage.setItem("recentCountries", JSON.stringify(recent))
    this.recentCountries = recent
  }

  getRecentCountries() {
    try {
      const recent = localStorage.getItem("recentCountries")
      return recent ? JSON.parse(recent) : []
    } catch (error) {
      return []
    }
  }

  async handleSubmit(e) {
    e.preventDefault()

    // Validate all fields
    const isEmailValid = this.validateEmail()
    const isPhoneValid = this.validatePhone()
    const isNameValid = this.validateName()

    if (!isEmailValid || !isPhoneValid || !isNameValid) {
      this.showToast("Please fix the errors above", true)
      return
    }

    // Get form data
    const formData = {
      email: this.emailInput.value.trim(),
      phone: `${this.selectedCode.textContent} ${this.phoneInput.value.trim()}`,
      name: this.nameInput.value.trim(),
      message: this.messageInput.value.trim(),
      country: this.selectedCountry.name,
      timestamp: new Date().toISOString(),
    }

    // Show loading state
    const submitButton = this.form.querySelector(".button")
    const originalText = submitButton.textContent
    submitButton.textContent = "Sending..."
    submitButton.disabled = true
    submitButton.style.opacity = "0.7"

    try {
      // Simulate API call with more realistic delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Log form data (in real app, send to server)
      console.log("Form submitted:", formData)

      // Reset form
      this.form.reset()
      this.selectedFlag.textContent = this.selectedCountry.flag
      this.selectedCode.textContent = this.selectedCountry.code
      this.phoneInput.placeholder = `Phone number (${this.selectedCountry.format || "e.g. 123456789"})`

      // Clear saved form data
      this.clearFormData()

      // Show success message
      this.showToast("Message sent successfully! We'll get back to you soon.")
    } catch (error) {
      console.error("Form submission error:", error)
      this.showToast("Failed to send message. Please try again.", true)
    } finally {
      // Reset button
      submitButton.textContent = originalText
      submitButton.disabled = false
      submitButton.style.opacity = "1"
    }
  }
}

// Initialize the contact form when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new ContactForm()
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

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

// Add some additional CSS for enhanced country selector
const additionalStyles = `
  .country-item.focused {
    background-color: #e3f2fd !important;
    outline: 2px solid #1e90ff;
  }
  
  .country-section-header {
    position: sticky;
    top: 0;
    z-index: 1;
  }
  
  .no-results {
    font-style: italic;
  }
  
  .phone-input-container:focus-within .country-selector {
    background-color: #1565c0;
  }
  
  .error-message {
    animation: shake 0.5s ease-in-out;
  }
  
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }
`

// Inject additional styles
const styleSheet = document.createElement("style")
styleSheet.textContent = additionalStyles
document.head.appendChild(styleSheet)