
function changeImage(src) {
    document.getElementById("featureImg").src = src;
}


// Service data structure
const serviceData = {
    'web-designing': {
        title: 'Web Designing',
        description: "At Zyltic, we specialize in creating powerful, modern, and user-focused websites. Whether you're a business, creative, or entrepreneur, our team builds designs that don’t just look good — they work flawlessly. Here’s what we offer:",
        items: [
            {
                name: 'Responsive Design',
                description: "Our responsive website designs ensure that your site looks beautiful and works perfectly on all devices — from Android phones and iPhones to tablets and desktops. Whether your visitors are in Lagos, Abuja, Accra, or anywhere in West Africa, they'll enjoy a seamless user experience with fast loading speed, clear navigation, and professional layouts tailored to their screen size.",
                Image: "./service-img/Responsive-design.jfif"
            },
            {
                name: 'Landing Pages',
                description: "We create high-converting landing pages designed to capture leads and grow your business fast. Whether you're promoting a service, product, or event in Nigeria or targeting a West African audience, our pages are optimized for search engines and built to drive action with clear calls-to-action, fast loading, and persuasive design.",
                Image: "./service-img/landing-page.jfif"
            },
            {
                name: 'E-commerce Design',
                description: "Sell online with confidence. Our e-commerce web design services help you launch beautiful, secure online stores that support seamless shopping and fast payments. We integrate trusted Nigerian and international payment gateways like Paystack and Flutterwave to deliver smooth checkout experiences and build customer trust.",
                Image: "./service-img/ecommerce-website-design.jpg"
            },
            {
                name: 'Portfolio Sites',
                description: "Showcase your work with a professionally designed portfolio website. Ideal for creatives, freelancers, developers, or agencies in Nigeria and West Africa, our portfolio sites highlight your achievements, skills, and services with clean layouts, strong visuals, and easy navigation that makes you stand out online.",
                Image: "./service-img/Portfolio-sites.jpg"
            }
        ]
    },
    'ui-ux-designing': {
        title: 'UI UX Designing',
        description: 'User-centered design solutions that create intuitive and engaging digital experiences for your customers.',
        items: [
            {
                name: 'User Research',
                description: "We conduct deep user research to understand your audience’s goals, behavior, and preferences. This ensures your product or website is not just beautiful, but truly effective for users in Nigeria, Ghana, and the wider West African region. Our research helps reduce guesswork and drives smart design decisions.",
                Image: "./service-img/User-research.jfif"
            },
            {
                name: 'Wireframing',
                description: "Get clear visual blueprints of your digital product before development begins. Our wireframes show layout, structure, and user flow, helping Nigerian and African businesses visualize their web or mobile apps for efficient planning, testing, and collaboration before investing in full design or development.",
                Image: "./service-img/Wireframing.jfif"
            },
            {
                name: 'Prototyping',
                description: "We create interactive, clickable prototypes that simulate real user experiences. Perfect for startups and businesses in West Africa looking to pitch ideas, test usability, or gather investor feedback before going live. These prototypes help spot UX issues early and save money during development.",
                Image: "./service-img/Prototyping.jfif"
            },
            {
                name: 'User Testing',
                description: "Our user testing service helps validate your designs by letting real users in Nigeria and West Africa interact with your product. We gather actionable feedback, identify friction points, and improve usability — so your digital experience works better for your actual audience.",
                Image: "./service-img/User-testing.jfif"
            }
        ]
    },
    'web-marketing': {
        title: 'Web Marketing',
        description: 'Comprehensive digital marketing strategies to increase your online visibility and drive business growth.',
        items: [
            {
                name: 'SEO Optimization',
                description: "Improve your visibility on Google and other search engines with our local and international SEO strategies. We use keyword research, on-page SEO, and technical optimization to help Nigerian and West African businesses rank higher, attract more organic traffic, and generate quality leads online.",
                Image: "./service-img/SEO-Optimization.png"
            },
            {
                name: 'Social Media Marketing',
                description: "Grow your online community with strategic social media marketing on platforms like Instagram, Facebook, TikTok, and X (Twitter). We create engaging content, targeted ads, and influencer collaborations to boost brand awareness and connect with your ideal audience across Nigeria and West Africa.",
                Image: "./service-img/Social-Media-Marketing.jfif"
            },
            {
                name: 'Content Marketing',
                description: "Attract and convert customers with compelling blog posts, videos, infographics, and more. Our content marketing services help Nigerian brands educate, inform, and influence their audience through valuable and optimized content that ranks on Google and builds long-term trust.",
                Image: "./service-img/Content-Marketing.jfif"
            },
            {
                name: 'QR Code Generation',
                description: "Attract and convert customers with compelling blog posts, videos, infographics, and more. Our content marketing services help Nigerian brands educate, inform, and influence their audience through valuable and optimized content that ranks on Google and builds long-term trust.",
                Image: "./service-img/QR-Code -Generation.png"
            }
        ]
    },
    'web-application': {
        title: 'Web Application',
        description: 'Custom web applications built with modern technologies to solve your unique business challenges.',
        items: [
            {
                name: 'Custom Web Apps',
                description: "We build custom web applications tailored to your unique business processes and customer needs. Whether you're running a startup in Nigeria or a growing enterprise in West Africa, our apps help you manage operations, improve efficiency, and deliver great digital experiences across devices.",
                Image: "./service-img/Custom-Web-Apps.jfif"
            },
            {
                name: 'API Development',
                description: "Our API development services allow your systems and applications to communicate smoothly and securely. We create RESTful APIs for mobile apps, ecommerce, payment integration, and more — empowering Nigerian and African businesses to scale and connect platforms easily.",
                Image: "./service-img/API-development.jfif"
            },
            {
                name: 'Database Design',
                description: "Get high-performance, secure databases that support your website or application. We design efficient databases using MySQL, PostgreSQL, or MongoDB — ideal for Nigerian tech startups, online platforms, and organizations managing customer or financial data.",
                Image: "./service-img/Database-Design.jfif"
            },
            {
                name: 'Cloud Integration',
                description: "Leverage the power of cloud computing with our integration services. We connect your web apps to AWS, Google Cloud, or Azure to deliver faster performance, better security, and more flexibility — perfect for businesses in Nigeria and West Africa aiming to scale affordably.",
                Image: "./service-img/Cloud-Integration.jfif"
            }
        ]
    },
    'design-writing': {
        title: 'Design Writing',
        description: 'Strategic content and messaging that enhances user experience and communicates your brand effectively.',
        items: [
            {
                name: 'Content Strategy',
                description: "We develop clear content strategies aligned with your business goals and audience needs in Nigeria and across West Africa. From blog content calendars to brand voice development, we plan and organize your content to drive visibility, engagement, and conversions.",
                Image: "./service-img/Content-Strategy.jfif"
            },
            {
                name: 'UX Writing',
                description: "Our UX writing improves user interactions with simple, helpful, and clear language. We write buttons, messages, onboarding guides, and in-app text that feels natural to Nigerian and African audiences — reducing confusion and increasing satisfaction.",
                Image: "./service-img/UX-Writing.jfif"
            },
            {
                name: 'Technical Documentation',
                description: "We write user manuals, API docs, software guides, and knowledge bases that are easy to read and follow. Perfect for tech companies, fintech startups, and SaaS businesses in West Africa looking to empower users and reduce support requests.",
                Image: "./service-img/Technical-Documentation.png"
            },
            {
                name: 'Brand Messaging',
                description: "We craft compelling brand messaging that communicates your value clearly and emotionally. Whether you're launching a new business in Nigeria or rebranding for the West African market, we help you connect with customers through strong slogans, taglines, and brand stories.",
                Image: "./service-img/Brand-Messaging.jfif"
            }
        ]
    }
};

// Function to update main content
function updateMainContent(categoryKey, selectedItem = null) {
    const category = serviceData[categoryKey];
    if (!category) return;

    const heroTitle = document.querySelector('.hero-title');
    const heroDescription = document.querySelector('.hero-description');
    const featuresContainer = document.querySelector('.features-grid');

    // Update hero section
    heroTitle.textContent = category.title;
    heroDescription.textContent = category.description;

    // Update features section
    featuresContainer.innerHTML = '';
    category.items.forEach((item, index) => {
        const featureCard = document.createElement('div');
        featureCard.className = 'feature-card';
        featureCard.id = `service-${item.name.toLowerCase().replace(/\s+/g, '-')}`;

        featureCard.innerHTML = `
            <div class="feature-icon">
                <img src="${item.Image}" alt="${item.name}" class="feature-img" />
            </div>
            <h3 class="feature-title">${item.name}</h3>
            <p class="feature-description">${item.description}</p>
        `;

        featuresContainer.appendChild(featureCard);
    });

    // Scroll to specific item if selected
    if (selectedItem) {
        setTimeout(() => {
            const targetElement = document.getElementById(`service-${selectedItem.toLowerCase().replace(/\s+/g, '-')}`);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                // Add highlight effect
                targetElement.style.transform = 'scale(1.02)';
                targetElement.style.boxShadow = '0 8px 25px rgba(249, 115, 22, 0.3)';
                setTimeout(() => {
                    targetElement.style.transform = '';
                    targetElement.style.boxShadow = '';
                }, 2000);
            }
        }, 100);
    }

    if (category.image) {
        changeImage(category.image);
    }

}

// Sidebar functionality
document.addEventListener('DOMContentLoaded', function () {
    const serviceCategories = document.querySelectorAll('.service-category');

    // Initialize with default content (Web Designing)
    updateMainContent('web-designing');

    // Initialize sidebar functionality
    serviceCategories.forEach(category => {
        const button = category.querySelector('.category-button');
        const items = category.querySelector('.category-items');
        const chevron = category.querySelector('.chevron');
        const categoryKey = category.getAttribute('data-category');

        button.addEventListener('click', function () {
            // Close all other categories
            serviceCategories.forEach(otherCategory => {
                if (otherCategory !== category) {
                    const otherButton = otherCategory.querySelector('.category-button');
                    const otherItems = otherCategory.querySelector('.category-items');
                    const otherChevron = otherCategory.querySelector('.chevron');

                    otherButton.classList.remove('active');
                    otherItems.classList.remove('expanded');
                    otherChevron.textContent = '▶';
                }
            });

            // Toggle current category
            const isActive = button.classList.contains('active');

            if (isActive) {
                button.classList.remove('active');
                items.classList.remove('expanded');
                chevron.textContent = '▶';
            } else {
                button.classList.add('active');
                items.classList.add('expanded');
                chevron.textContent = '▼';

                // Update main content when category is opened
                updateMainContent(categoryKey);
            }
        });

        // Add click handlers for category items
        const categoryItems = items.querySelectorAll('.category-item');
        categoryItems.forEach(item => {
            item.addEventListener('click', function (e) {
                e.stopPropagation();

                // Remove active class from all items
                document.querySelectorAll('.category-item').forEach(i => i.classList.remove('active'));

                // Add active class to clicked item
                this.classList.add('active');

                const itemText = this.textContent.trim();
                console.log('Selected:', categoryKey, '-', itemText);

                // Update main content and scroll to specific item
                updateMainContent(categoryKey, itemText);
            });
        });
    });

    // Navigation functionality
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all nav items
            navItems.forEach(navItem => {
                navItem.classList.remove('nav-item-active');
            });

            // Add active class to clicked item
            this.classList.add('nav-item-active');

            console.log('Navigation clicked:', this.textContent);
        });
    });

    // Button functionality
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            console.log('Button clicked:', this.textContent);
            // Add your button functionality here
        });
    });

    // Smooth scroll behavior for better UX
    document.documentElement.style.scrollBehavior = 'smooth';
});

// Utility function to handle responsive behavior
function handleResize() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    if (window.innerWidth <= 768) {
        // Mobile behavior - you can add specific mobile functionality here
        console.log('Mobile view');
    } else {
        // Desktop behavior
        console.log('Desktop view');
    }
}

// Listen for window resize
window.addEventListener('resize', handleResize);

// Initialize on load
handleResize();

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