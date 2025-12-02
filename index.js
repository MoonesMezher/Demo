// Data for dynamic content
const navigationData = [
    { text: 'الرئيسية', href: '#hero' },
    { text: 'الباقات', href: '#plans' },
    { text: 'خدماتنا', href: '#features' },
    { text: 'تواصل معنا', href: '#contact' }
];

const socialLinksData = [
    { name: 'facebook', href: 'https://www.facebook.com/focal.x.agency/', svg: '<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>' },
    { name: 'twitter', href: 'https://twitter.com/focal_x_agency', svg: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" fill="currentColor"/>' },
    { name: 'instagram', href: 'https://www.instagram.com/focal.x.agency', svg: '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>' },
    { name: 'linkedin', href: 'https://www.linkedin.com/company/focal-x-agency/', svg: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>' },
    { name: 'behance', href: 'https://www.behance.net/focal-x-agency', svg: '<img width="20" height="20" src="https://img.icons8.com/windows/32/behance.png" alt="behance"/>' }
];

const plansData = [
    {
        id: 1,
        name: "باقة الشركات الكبيرة",
        price: 13,
        originalPrice: 23.3,
        discount: "44.6%",
        description: "ادفع الآن 156$ - جدد السنة التالية ب 280$ بإشتراك ثابت",
        color: "secondary",
        features: [
            { name: "نطاق Domain", value: "5 مجاني", included: true },
            { name: "مساحة التخزين", value: "50 G.B", included: true },
            { name: "البريد الالكتروني", value: "غير محدود", included: true },
            { name: "نطاق فرعي Sub", value: "غير محدود", included: true },
            { name: "استضافة المواقع", value: "غير محدود", included: false },
            { name: "البيانات Bandwidth", value: "100 G.B", included: false }
        ]
    },
    {
        id: 2,
        name: "باقة الشركات المتوسطة",
        price: 9,
        originalPrice: 14.2,
        discount: "36.5%",
        description: "ادفع الآن 108$ - جدد السنة التالية ب 170$ بإشتراك ثابت",
        color: "accent",
        features: [
            { name: "نطاق Domain", value: "مجاني", included: true },
            { name: "مساحة التخزين", value: "35 G.B", included: true },
            { name: "البريد الالكتروني", value: "غير محدود", included: true },
            { name: "نطاق فرعي Sub", value: "غير محدود", included: true },
            { name: "استضافة المواقع", value: "غير محدود", included: true },
            { name: "البيانات Bandwidth", value: "30 G.B", included: true }
        ]
    },
    {
        id: 3,
        name: "باقة المشاريع الصغيرة",
        price: 4,
        originalPrice: 7.33,
        discount: "50%",
        description: "ادفع الآن 44$ - جدد السنة التالية ب 88$ بإشتراك ثابت",
        color: "primary",
        features: [
            { name: "نطاق Domain", value: "مجاني", included: true },
            { name: "مساحة التخزين", value: "20 G.B", included: true },
            { name: "البريد الالكتروني", value: "30 بريد", included: true },
            { name: "نطاق فرعي Sub", value: "30 نطاق", included: true },
            { name: "استضافة المواقع", value: "3 مواقع", included: true },
            { name: "البيانات Bandwidth", value: "10 G.B", included: true }
        ]
    }
];

// Add this data to your existing data section
const comparisonTableData = {
    sections: [
        {
            title: "ميزات أساسية",
            icon: `<svg class="down" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5l8 7-8 7V5z" fill="currentColor"/>
                    </svg>`,
            features: [
                { name: "Disk Space", values: ["20 G.B SSD", "35 G.B SSD", "50 G.B SSD"] },
                { name: "File Limit", values: ["300.000", "300.000", "600.000"] },
                { name: "Bandwidth", values: ["10 G.B", "30 G.B", "100 G.B"] },
                { name: "Uptime", values: ["%100", "%100", "%100"] },
                { name: "Hosted Domains", values: ["3 domains", "Unlimited", "Unlimited"] },
                { name: "Subdomains", values: ["30 Subdomain", "Unlimited", "Unlimited"] },
                { name: "Parked Domains", values: ["Unlimited", "Unlimited", "Unlimited"] },
                { name: "Backups", values: ["Twice a Week", "Twice a Week + Autobackup", "Twice a Week + Autobackup"] },
                { name: "Cloud Storage", values: ["Included with EU and SG datacenters", "Included with EU and SG datacenters", "Included with EU and SG datacenters"] },
                { name: "cPanel", values: ["✓", "✓", `✓`] },
                { name: "AI for WordPress", values: ["✓", "✓", `✓`] },
                { name: "Imunify36 Security", values: ["-", "-", `✓`] },
                { name: "SSL", values: ["✓", "✓", `✓`] },
                { name: "Domain", values: ["1 Free", "1 Free", `1 Free`] },
                { name: "Backup Manager", values: ["✓", "✓", `✓`] },
                { name: "7/24 Support", values: ["✓", "✓", `✓`] },
                { name: "FTP Accounts", values: ["50", "Unlimited", `Unlimited`] },
            ]
        },
        {
            title: "ميزات الإيميل",
            icon: `<svg class="right" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5l8 7-8 7V5z" fill="currentColor"/>
                    </svg>`,
            features: [
                { name: "Email Accounts", values: ["30", "Unlimited", `Unlimited`] },
                { name: "Email Autoresponders", values: ["Unlimited", "Unlimited", `Unlimited`] },
                { name: "Webmail", values: ["✓", "✓", `✓`] },
                { name: "SpamAssassin", values: ["✓", "✓", `✓`] },
                { name: "Mailing Lists", values: ["10", "Unlimited", `Unlimited`] },
            ]
        },
        {
            title: "قاعدة البيانات",
            icon: `<svg class="right" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5l8 7-8 7V5z" fill="currentColor"/>
                    </svg>`,
            features: [
                { name: "MySQL Databases", values: ["50", "Unlimited", "Unlimited"] },
                { name: "phpMyAdmin", values: ["✓", "✓", "✓"] },
                { name: "Webserver", values: ["Apache/Litespeed", "Apache/Litespeed", "Apache/Litespeed"] }
            ]
        },
        {
            title: "خيارات الدفع",
            icon: `<svg class="right" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5l8 7-8 7V5z" fill="currentColor"/>
                    </svg>`,
            features: [
                { name: "1 Year", values: ["$88", "$170", "$280"], isBold: true },
                { name: "2 Year", values: ["$120", "$230", "$360"], isBold: true },
            ]
        }
    ]
};

// Add this function to create the comparison table
function createComparisonTable() {
    const comparisonTableContainer = document.getElementById('comparison-table');
    
    const table = document.createElement('table');
    table.dir = 'ltr';
    table.className = 'w-full text-black comparison-table';
    
    // Create table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    
    // First header cell
    const firstHeaderCell = document.createElement('th');
    firstHeaderCell.className = 'text-dark font-bold text-lg xs:text-xl p-4';
    firstHeaderCell.innerHTML = 'Additional <br> Features';
    headerRow.appendChild(firstHeaderCell);
    
    // Plan header cells
    plansData.reverse();
    plansData.forEach((plan, index) => {
        const planHeaderCell = document.createElement('th');
        planHeaderCell.className = 'relative';
        
        const colors = ['primary', 'accent', 'secondary'];
        
        planHeaderCell.innerHTML = `
            <div class="bg-white scale-75 xs:scale-90 sm:scale-100 text-black p-4 xs:p-6 sm:p-8 text-center">
                <h3 class="text-xl xs:text-2xl font-bold text-gray-600">${plan.name}</h3>
                <div class="mt-2 xs:mt-4 text-dark">
                <span class="text-4xl xs:text-5xl sm:text-6xl font-black flex flex-row-reverse items-center gap-1 justify-center">
                        <span class="flex flex-row items-center gap-1">
                            <span class="font-normal text-[27px]">/</span>
                            <span class="text-lg xs:text-xl text-[#282828] font-normal text-[27px]">شهرياً</span>
                        </span>
                        <span class="block font-bold">
                            <span class="text-base xs:text-lg align-middle text-[#282828] font-normal mr-1">$</span>${plan.price}
                        </span>
                    </span>
                </div>
                <p><del>$${plan.originalPrice}</del></p>
            </div>
            <div class="absolute w-3/5 bg-${colors[index]} h-1 xs:h-1.5 rounded-lg left-1/2 transform -translate-x-1/2 top-0"></div>
        `;
        
        headerRow.appendChild(planHeaderCell);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Create table body sections
    comparisonTableData.sections.forEach((section, i) => {
        const tbody = document.createElement('tbody');
        
        // Section header row
        const sectionHeaderRow = document.createElement('tr');
        sectionHeaderRow.className = 'control w-full bg-gray-200 cursor-pointer';
        sectionHeaderRow.innerHTML = `
            <td colspan="4">
                <div class="p-3 xs:p-4 font-bold w-full flex justify-between items-center text-dark text-lg xs:text-xl bg-[#d1d5db] border border-solid border-transparent border-b-[#939598]">
                    <span class="w-[260px] text-center">${section.title}</span>
                    <span class="${i === 0? "rotate-90": "rotate-0"} transform transition-transform duration-300">${section.icon}</span>
                </div>
            </td>
        `;
        tbody.appendChild(sectionHeaderRow);
        
        // Feature rows
        section.features.forEach((feature) => {
            const featureRow = document.createElement('tr');
            featureRow.dir = 'ltr';
            featureRow.className = `text-center text-dark text-base xs:text-lg fade-in ${i !== 0? "hidden": ""}`;
            
            // Feature name cell
            const featureNameCell = document.createElement('td');
            featureNameCell.className = 'font-bold p-3 xs:p-4 bg-gray-50 w-[300px]';
            featureNameCell.textContent = feature.name;
            featureRow.appendChild(featureNameCell);
            
            // Feature value cells for each plan
            feature.values.forEach((value) => {
                const valueCell = document.createElement('td');
                valueCell.className = `p-3 xs:p-4 ${value === "✓"? "text-[#008000] font-bold": "text-[#282828]"}`;
                valueCell.textContent = value;
                featureRow.appendChild(valueCell);
            });
            
            tbody.appendChild(featureRow);
        });
        
        table.appendChild(tbody);
    });
    
    comparisonTableContainer.appendChild(table);
    
    // Add click handlers for section toggles
    addSectionToggleHandlers();
}

// Add this function to handle section toggling
function addSectionToggleHandlers() {
    const sectionHeaders = document.querySelectorAll('.comparison-table .control');
    
    sectionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const tbody = this.parentElement;
            const featureRows = tbody.querySelectorAll('tr:not(.control)');
            const icon = this.querySelector('span:last-child');
            
            // Toggle feature rows visibility
            featureRows.forEach(row => {
                row.classList.toggle('hidden');
            });
            
            icon.classList.toggle("rotate-90")
        });
    });
}

// Add this CSS to your style section
const additionalStyles = `
    .comparison-table .control {
        transition: background-color 0.3s ease;
    }
    
    .comparison-table tr:not(.control) {
        transition: all 0.3s ease;
    }
    
    @media (max-width: 640px) {
        .comparison-table table {
            font-size: 0.875rem;
        }
        
        .comparison-table th, .comparison-table td {
            padding: 0.5rem;
        }
    }
    
    @media (max-width: 480px) {
        .comparison-table table {
            font-size: 0.75rem;
        }
        
        .comparison-table th, .comparison-table td {
            padding: 0.25rem;
        }
    }
`;

// Add the styles to the document
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// DOM manipulation functions
function createNavigation() {
    const desktopNav = document.getElementById('desktop-nav');
    const mobileNav = document.getElementById('mobile-nav');
    
    navigationData.forEach((item, i) => {
        // Desktop navigation
        const desktopLink = document.createElement('a');
        desktopLink.href = item.href;
        desktopLink.textContent = item.text;
        desktopLink.className = `text-gray hover:text-white border-b-transparent border-b-solid border-b-2 hover:border-b-primary transition ${i === 0? "active": ""}`;
        desktopLink.addEventListener('click', handleNavClick);
        desktopNav.appendChild(desktopLink);
        
        // Mobile navigation
        const mobileLink = document.createElement('a');
        mobileLink.href = item.href;
        mobileLink.textContent = item.text;
        mobileLink.className = 'text-gray hover:text-white border-b-transparent border-b-solid border-b-2 hover:border-b-primary transition ${i === 0? "active": ""} w-fit';
        mobileLink.addEventListener('click', handleNavClick);
        mobileNav.appendChild(mobileLink);
    });
    
    // Add scroll listener
    window.addEventListener('scroll', handleScrollSpy);
}

function handleNavClick(e) {
    e.preventDefault();
    
    // Remove active class from all links
    document.querySelectorAll('#desktop-nav a, #mobile-nav a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to clicked link
    this.classList.add('active');
    
    // Scroll to section
    const targetId = this.getAttribute('href');
    if (targetId !== '#') {
        if(targetId === "#contact") {           
            window.scrollTo(0, 1000000)
        } else {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}

function handleScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            // Remove active class from all links
            document.querySelectorAll('#desktop-nav a, #mobile-nav a').forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to corresponding link
            document.querySelectorAll(`a[href="#${sectionId}"]`).forEach(link => {
                link.classList.add('active');
            });
        }
    });
}

function createSocialLinks() {
    const socialLinksContainer = document.getElementById('social-links');
    const footerSocialLinksContainer = document.getElementById('footer-social-links');
    
    socialLinksData.forEach(link => {
        // Hero section social links
        const socialLink = document.createElement('a');
        socialLink.href = link.href;
        socialLink.rel="noopener";
        socialLink.target="_blank"
        socialLink.className = 'social-icon';
        if(link.name === "bihance") {
            socialLink.innerHTML = link.svg
        } else {
            socialLink.innerHTML = `<svg class="w-3 h-3 xs:w-4 xs:h-4 flex justify-center items-center" viewBox="0 0 24 24" fill="currentColor">${link.svg}</svg>`;
        }
        socialLinksContainer.appendChild(socialLink);
        
        // Footer social links
        const footerSocialLink = document.createElement('a');
        footerSocialLink.href = link.href;
        footerSocialLink.className = 'social-icon';
        footerSocialLink.rel="noopener";
        footerSocialLink.target="_blank"
        if(link.name === "bihance") {
            footerSocialLink.innerHTML = link.svg;
        } else {
            footerSocialLink.innerHTML = `<svg class="w-3 h-3 xs:w-4 xs:h-4 flex justify-center items-center" viewBox="0 0 24 24" fill="currentColor">${link.svg}</svg>`;
        }
        footerSocialLinksContainer.appendChild(footerSocialLink);
    });
}

function createPlans() {
    const plansContainer = document.getElementById('plans-container');
    
    plansData.forEach(plan => {
        const planElement = document.createElement('div');
        planElement.className = 'plan-card';
        
        planElement.innerHTML = `
            <div class="bg-${plan.color} rounded-2xl overflow-hidden fade-in">
                <div class="w-full h-[34px] bg-${plan.color}"></div>
                <div class="bg-white text-black p-8 text-center">
                    <h3 class="text-2xl font-bold text-[#58595B]">${plan.name}</h3>
                    <div class="mt-4 text-[#282828]">
                        <span class="text-2xl">شهرياً</span>
                        <span class="text-6xl font-black"><span class="font-normal">/</span class="text-black">${plan.price}<span class="text-[20px] align-middle">$</span></span>
                    </div>
                    <div class="mt-[25px]">
                        <p class="text-[#939598] text-[14px]"><del>$${plan.originalPrice}</del></p>
                        <h4 class="text-blue font-bold text-[20px]">وفّر ${plan.discount} على السنة الأولى</h4>
                        <p class="text-[#939598] text-[13px]">${plan.description}</p>
                    </div>
                    <div class="w-full h-[2px] bg-gray shadow-white shadow-inset mt-[20px]" style="box-shadow: 50px 0px 20px -8px white inset, -50px 0px 21px -8px white inset;"></div>
                </div>
                <div class="px-8 pb-8 bg-white text-black rounded-br-[1rem] rounded-bl-[1rem] mt-[-2px]">
                    <ul class="text-lg flex flex-col gap-[10px]">
                        ${plan.features.map((e, i) => `<li class="flex justify-between">
                            <span class="min-w-[130px] text-[#3F3F3F]">${e.name}</span> 
                            <span style="flex: auto;" class="text-[#282828] text-center font-bold">${e.value}</span> 
                            <span class="font-bold text-[#008000] text-[30px]">${e.included? `<span class="feature-check">✓</span>`:`<span class="feature-check">✓</span>`}</span>
                        </li>`).join("")}
                    </ul>
                </div>
                <a href="https://wa.me/963953666056" class="cursor-pointer w-full h-[60px] bg-${plan.color} text-center flex justify-center items-center text-[24px] duration-300 hover:h-[70px]">
                    <p>احجز الآن عبر واتس آب <svg class="w-5 h-5 xs:w-6 xs:h-6 inline" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.187-3.55-8.436"/></svg></p>
                </a>
            </div>`;
        
        plansContainer.appendChild(planElement);
    });
}

// Animation functions
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
        observer.observe(el);
    });
}

function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    let i = false;
    
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        mobileMenuToggle.innerHTML = !i? "X": "☰";
        i = !i;
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('#mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            mobileMenuToggle.innerHTML = "☰"
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initHeaderScroll() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createNavigation();
    createSocialLinks();
    createPlans();
    createComparisonTable();
    initScrollAnimations();
    initMobileMenu();
    initSmoothScroll();
    initHeaderScroll();
});