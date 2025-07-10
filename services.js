
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
                description: "Responsive design makes a website automatically adjust to any screen size, so it looks and works great on phones, tablets, and desktops. It ensures a smooth user experience without zooming or scrolling sideways, no matter what device you're using. We make sure your users always have a smooth, professional experience wherever they visit from.",
                Image: "./service-img/Responsive-design.jfif"
            },
            {
                name: 'Landing Pages',
                description: 'High-converting landing pages designed to capture leads and drive business growth.',
                Image: "./service-img/landing-page.jfif"
            },
            {
                name: 'E-commerce Design',
                description: 'Beautiful online stores with seamless shopping experiences and secure payment integration.',
                Image: "./service-img/ecommerce-website-design.jpg"
            },
            {
                name: 'Portfolio Sites',
                description: 'Showcase your work with stunning portfolio websites that highlight your skills and achievements.',
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
                description: 'In-depth user research to understand your audience and create data-driven design decisions.',
                Image: "./service-img/User-research.jfif"
            },
            {
                name: 'Wireframing',
                description: 'Detailed wireframes and mockups to visualize the structure and layout of your digital products.',
                Image: "./service-img/Wireframing.jfif"
            },
            {
                name: 'Prototyping',
                description: 'Interactive prototypes that allow you to test and refine user interactions before development.',
                Image: "./service-img/Prototyping.jfif"
            },
            {
                name: 'User Testing',
                description: 'Comprehensive user testing to validate design decisions and optimize user experience.',
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
                description: 'Advanced SEO techniques to improve your search engine rankings and organic traffic.',
                Image: "./service-img/SEO-Optimization.png"
            },
            {
                name: 'Social Media Marketing',
                description: 'Strategic social media campaigns to build brand awareness and engage your target audience.',
                Image: "./service-img/Social-Media-Marketing.jfif"
            },
            {
                name: 'Content Marketing',
                description: 'High-quality content creation that attracts, engages, and converts your ideal customers.',
                Image: "./service-img/Content-Marketing.jfif"
            },
            {
                name: 'QR Code Generation',
                description: 'Targeted pay-per-click advertising campaigns that deliver measurable results and ROI.',
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
                description: 'Tailored web applications designed specifically for your business requirements and workflows.',
                Image: "./service-img/Custom-Web-Apps.jfif"
            },
            {
                name: 'API Development',
                description: 'Robust APIs that enable seamless integration and communication between different systems.',
                Image: "./service-img/API-development.jfif"
            },
            {
                name: 'Database Design',
                description: 'Efficient database architectures that ensure fast performance and data integrity.',
                Image: "./service-img/Database-Design.jfif"
            },
            {
                name: 'Cloud Integration',
                description: 'Scalable cloud solutions that provide flexibility, security, and cost-effectiveness.',
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
                description: 'Comprehensive content strategies that align with your business goals and audience needs.',
                Image: "./service-img/Content-Strategy.jfif"
            },
            {
                name: 'UX Writing',
                description: 'Clear, concise copy that guides users through your digital products seamlessly.',
                Image: "./service-img/UX-Writing.jfif"
            },
            {
                name: 'Technical Documentation',
                description: 'Detailed technical documentation that makes complex information accessible and actionable.',
                Image: "./service-img/Technical-Documentation.png"
            },
            {
                name: 'Brand Messaging',
                description: 'Compelling brand messaging that resonates with your audience and differentiates your business.',
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
