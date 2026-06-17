/* ============================================================
   BESTT PROPERTY HUB — script.js
   Forms submit directly to WhatsApp. All CTAs functional.
   ============================================================ */

const WA_NUMBER = "917011054451";
function waLink(msg) {
  return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);
}

/* Reliable WhatsApp redirect — uses location.href instead of window.open
   because mobile browsers (Chrome/Safari on Android & iOS) frequently block
   window.open() popups fired from inside form-submit handlers. A direct
   location change is never blocked and works identically on desktop. */
function goToWhatsApp(msg) {
  const url = waLink(msg);
  window.location.href = url;
}

/* ---- DATA -------------------------------------------------- */
const PROPERTIES = [
  { title: "Premium 3BHK Apartment", location: "Sector 17, Faridabad", type: "Apartment", price: "₹68 Lakhs", area: "1,350 sq.ft", beds: 3, baths: 2, img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600" },
  { title: "2BHK Ready-to-Move Flat", location: "NIT Faridabad", type: "Apartment", price: "₹42 Lakhs", area: "980 sq.ft", beds: 2, baths: 2, img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600" },
  { title: "Independent Builder Floor", location: "Sector 14, Faridabad", type: "Builder Floor", price: "₹75 Lakhs", area: "1,800 sq.ft", beds: 3, baths: 2, img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600" },
  { title: "Spacious 4BHK Villa", location: "Sector 46, Faridabad", type: "Villa", price: "₹1.45 Crore", area: "2,800 sq.ft", beds: 4, baths: 3, img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600" },
  { title: "Affordable 2BHK Flat", location: "Ballabhgarh, Faridabad", type: "Apartment", price: "₹32 Lakhs", area: "850 sq.ft", beds: 2, baths: 1, img: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=600" },
  { title: "Residential Plot 200 Sq Yd", location: "Neharpar, Greater Faridabad", type: "Plot", price: "₹55 Lakhs", area: "200 sq.yd", beds: 0, baths: 0, img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600" }
];

const UPCOMING = [
  { name: "Bestt Skyline Residences", location: "Sector 82, Neharpar Faridabad", rera: "RERA Approved", possession: "Dec 2026", startPrice: "₹38 Lakhs", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600" },
  { name: "Green Valley Township", location: "Tigaon Road, Faridabad", rera: "RERA Registered", possession: "Mar 2027", startPrice: "₹28 Lakhs", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600" },
  { name: "Royal Park Apartments", location: "Sector 88, Greater Faridabad", rera: "RERA Approved", possession: "Jun 2026", startPrice: "₹45 Lakhs", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600" }
];

const TESTIMONIALS = [
  { text: "Bestt Property Hub helped me find the perfect 3BHK flat in Sector 17 within my budget. Their team knew every corner of Faridabad — professional, honest, and super responsive on WhatsApp!", name: "Rajesh Sharma", meta: "Bought 3BHK, Sector 17 Faridabad", rating: 5 },
  { text: "I was looking for a commercial shop in NIT Faridabad for months. One call to Bestt Property Hub and they showed me 5 options the same week. Excellent local knowledge!", name: "Priya Malhotra", meta: "Commercial Shop, NIT Faridabad", rating: 5 },
  { text: "Bought a plot in Neharpar through Bestt Property Hub. They verified all documents, handled the registration, and even helped with the loan. Best property consultants in Faridabad!", name: "Arun & Sunita Kapoor", meta: "Plot Purchase, Neharpar Faridabad", rating: 5 },
  { text: "As an NRI I was worried about buying property in Faridabad remotely. Bestt Property Hub did video site visits, verified legality, and completed everything smoothly. 100% trustworthy!", name: "Vikram Nair", meta: "NRI Investment, Ballabhgarh Faridabad", rating: 5 },
  { text: "Got a brilliant deal on a builder floor in Sector 14. Bestt Property Hub negotiated ₹3 Lakhs off the asking price. They truly work in the buyer's interest. Highly recommend!", name: "Deepa & Suresh Reddy", meta: "Builder Floor, Sector 14 Faridabad", rating: 5 }
];

const FAQS = [
  { q: "Which areas in Faridabad does Bestt Property Hub serve?", a: "We cover all areas of Faridabad — including NIT, Old Faridabad, all Sectors (12 to 88+), Ballabhgarh, Neharpar / Greater Faridabad, Surajkund, Tigaon, Mewla Maharajpur, and IMT Faridabad. Just tell us your preferred area and we'll find the right property for you." },
  { q: "What are the best areas to buy a flat in Faridabad?", a: "For budget housing: Neharpar / Greater Faridabad and Sector 82–88 offer great value. For mid-range: Sectors 14–17 and NIT Faridabad are well-developed. For premium: Sectors 15A, 28, and Surajkund-adjacent areas offer luxury options with excellent connectivity." },
  { q: "What is the average price of a flat in Faridabad?", a: "A 2BHK flat in Faridabad typically ranges from ₹25 Lakhs (Neharpar emerging areas) to ₹60 Lakhs (prime sectors like 14, 15, 17). 3BHK flats range from ₹45 Lakhs to ₹1 Crore+ depending on the sector and builder. Call us for current rate cards." },
  { q: "Is Neharpar / Greater Faridabad a good investment?", a: "Yes — Greater Faridabad is among the fastest-growing micro-markets in NCR. With Metro Phase 2 connectivity, NH-19 proximity, and lower land prices than Gurgaon, it offers excellent capital appreciation potential of 12–20% in the short to medium term." },
  { q: "Do you help with home loans for Faridabad properties?", a: "Absolutely. We have partnerships with SBI, HDFC, ICICI, Axis Bank, and LIC Housing Finance. We help you compare rates, check eligibility online, and complete documentation — often securing preferential rates for our clients." },
  { q: "Are all your Faridabad listings RERA approved?", a: "All under-construction and upcoming projects listed are RERA-registered under Haryana RERA (HRERA). For resale properties, we conduct physical and legal verification before listing. We never compromise on documentation transparency." },
  { q: "What are the stamp duty charges in Faridabad (Haryana)?", a: "In Haryana, stamp duty is 5% for women buyers and 7% for men. Registration charges are 1% of the property value. We provide a complete cost breakdown inclusive of all charges before you make any decision." },
  { q: "Can I get a free site visit arranged for properties in Faridabad?", a: "Yes! We arrange free site visits across all Faridabad areas at a time convenient for you — weekdays or weekends. Our consultant accompanies you and provides detailed briefing on the property, area, and investment potential." },
  { q: "Do you handle property registration and legal paperwork in Faridabad?", a: "Yes, we provide end-to-end support including drafting the agreement to sell, coordinating with lawyers for title verification, accompanying you to the Sub-Registrar office in Faridabad, and ensuring a smooth registration." },
  { q: "How can I contact Bestt Property Hub for a property in Faridabad?", a: "Simply call or WhatsApp us at +91 70110 54451 — we're available 7 days a week from 9 AM to 8 PM. You can also fill any enquiry form on this page and we will respond within minutes on WhatsApp." }
];

const BLOGS = [
  { tag: "Faridabad Guide", title: "Best Areas to Buy Property in Faridabad in 2025", excerpt: "From affordable Neharpar to premium Sector 15A — a complete location-wise breakdown of Faridabad's real estate market with current rates.", date: "May 20, 2025", read: "7 min read", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600" },
  { tag: "Investment", title: "Why Neharpar / Greater Faridabad is the Next Big Investment", excerpt: "Metro connectivity, NH-19, and affordable land prices make Greater Faridabad the smartest buy in NCR right now. Here's the full data-backed case.", date: "Apr 28, 2025", read: "8 min read", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600" },
  { tag: "Buyer's Guide", title: "10 Things to Check Before Buying Property in Faridabad", excerpt: "HRERA verification, circle rates, connectivity to Delhi, and more — your complete pre-purchase checklist for buying property in Faridabad safely.", date: "Apr 10, 2025", read: "6 min read", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600" }
];

/* ============================================================
   RENDER FUNCTIONS
   ============================================================ */
function renderProperties() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  grid.innerHTML = PROPERTIES.map(p => `
    <article class="prop-card reveal">
      <div class="prop-img-wrap">
        <img src="${p.img}" alt="${p.title} in Faridabad" loading="lazy" />
        <span class="prop-badge">${p.type}</span>
        <span class="prop-price">${p.price}</span>
      </div>
      <div class="prop-body">
        <h3 class="prop-title">${p.title}</h3>
        <p class="prop-location"><i class="fa-solid fa-location-dot"></i> ${p.location}</p>
        <div class="prop-meta">
          <span><i class="fa-solid fa-vector-square"></i> ${p.area}</span>
          ${p.beds ? `<span><i class="fa-solid fa-bed"></i> ${p.beds} Beds</span>` : ''}
          ${p.baths ? `<span><i class="fa-solid fa-bath"></i> ${p.baths} Baths</span>` : ''}
        </div>
      </div>
      <div class="prop-actions">
        <a href="${waLink('Hi, I am interested in ' + p.title + ' at ' + p.location + ' priced at ' + p.price + '. Please share more details.')}" target="_blank" class="btn btn-whatsapp"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
        <a href="tel:+917011054451" class="btn btn-call"><i class="fa-solid fa-phone"></i> Call</a>
      </div>
    </article>
  `).join('');
}

function renderUpcoming() {
  const grid = document.getElementById('upcomingGrid');
  if (!grid) return;
  grid.innerHTML = UPCOMING.map(p => `
    <article class="upcoming-card reveal">
      <div class="upcoming-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        <span class="rera-badge">${p.rera}</span>
      </div>
      <div class="upcoming-body">
        <h3>${p.name}</h3>
        <div class="upcoming-details">
          <span><i class="fa-solid fa-location-dot"></i> ${p.location}</span>
          <span><i class="fa-solid fa-calendar"></i> Possession: ${p.possession}</span>
        </div>
        <div class="upcoming-price">Starting from ${p.startPrice}</div>
        <div class="upcoming-actions">
          <a href="${waLink('Hi, I want to download the brochure for ' + p.name + ' in ' + p.location + '.')}" target="_blank" class="btn btn-outline btn-sm"><i class="fa-solid fa-file-arrow-down"></i> Brochure</a>
          <a href="${waLink('Hi, I am interested in ' + p.name + ' at ' + p.location + ' starting from ' + p.startPrice + '. Please share details.')}" target="_blank" class="btn btn-whatsapp btn-sm"><i class="fa-brands fa-whatsapp"></i> Enquire Now</a>
        </div>
      </div>
    </article>
  `).join('');
}

function renderTestimonials() {
  const track = document.getElementById('testimonialsTrack');
  const dots = document.getElementById('testimonialDots');
  if (!track) return;
  track.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card">
      <div class="t-stars">${'<i class="fa-solid fa-star"></i>'.repeat(t.rating)}</div>
      <p class="t-text">"${t.text}"</p>
      <div class="t-author">
        <div class="t-avatar">${t.name.charAt(0)}</div>
        <div><div class="t-name">${t.name}</div><div class="t-meta">${t.meta}</div></div>
      </div>
    </div>
  `).join('');
  if (dots) {
    dots.innerHTML = TESTIMONIALS.map((_, i) =>
      `<span class="${i === 0 ? 'active' : ''}" data-i="${i}"></span>`
    ).join('');
    dots.querySelectorAll('span').forEach(d =>
      d.addEventListener('click', () => goToSlide(+d.dataset.i))
    );
  }
}

let currentSlide = 0;
function goToSlide(i) {
  const track = document.getElementById('testimonialsTrack');
  const dots = document.querySelectorAll('.testimonial-dots span');
  if (!track) return;
  const cards = track.querySelectorAll('.testimonial-card');
  if (!cards.length) return;
  currentSlide = Math.max(0, Math.min(i, cards.length - 1));
  const cardW = cards[0].offsetWidth + 24;
  track.style.transform = `translateX(-${currentSlide * cardW}px)`;
  dots.forEach((d, idx) => d.classList.toggle('active', idx === currentSlide));
}

function startAutoSlide() {
  setInterval(() => {
    const track = document.getElementById('testimonialsTrack');
    if (!track) return;
    const total = track.querySelectorAll('.testimonial-card').length;
    goToSlide((currentSlide + 1) % total);
  }, 4500);
}

function renderFAQ() {
  const list = document.getElementById('faqList');
  if (!list) return;
  list.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item reveal">
      <div class="faq-q" data-i="${i}">
        <span>${f.q}</span>
        <i class="fa-solid fa-plus"></i>
      </div>
      <div class="faq-a">${f.a}</div>
    </div>
  `).join('');
  list.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      list.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

function renderBlog() {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;
  grid.innerHTML = BLOGS.map(b => `
    <article class="blog-card reveal">
      <div class="blog-img"><img src="${b.img}" alt="${b.title}" loading="lazy" /></div>
      <div class="blog-body">
        <span class="blog-tag">${b.tag}</span>
        <h3 class="blog-title">${b.title}</h3>
        <p class="blog-excerpt">${b.excerpt}</p>
        <div class="blog-meta">
          <span><i class="fa-regular fa-calendar"></i> ${b.date}</span>
          <span><i class="fa-regular fa-clock"></i> ${b.read}</span>
        </div>
      </div>
    </article>
  `).join('');
}

/* ============================================================
   HERO SEARCH → WhatsApp
   ============================================================ */
function initHeroSearch() {
  const btn = document.getElementById('heroSearchBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const type   = document.getElementById('heroType')?.value   || '';
    const area   = document.getElementById('heroArea')?.value   || '';
    const budget = document.getElementById('heroBudget')?.value || '';
    if (!type && !area && !budget) {
      showToast('Please select at least one option to search.');
      return;
    }
    let msg = 'Hi, I am looking for a property in Faridabad.';
    if (type)   msg += '\nProperty Type: ' + type;
    if (area)   msg += '\nArea: ' + area;
    if (budget) msg += '\nBudget: ' + budget;
    msg += '\nPlease share available options.';
    goToWhatsApp(msg);
  });
}

/* ============================================================
   LEAD FORM → WhatsApp
   ============================================================ */
function initForms() {
  /* Lead / Consultation form */
  const lf = document.getElementById('leadForm');
  if (lf) {
    lf.addEventListener('submit', e => {
      e.preventDefault();
      const name     = document.getElementById('lf_name')?.value.trim()     || '';
      const phone    = document.getElementById('lf_phone')?.value.trim()    || '';
      const interest = document.getElementById('lf_interest')?.value        || '';
      const area     = document.getElementById('lf_area')?.value            || '';
      const budget   = document.getElementById('lf_budget')?.value          || '';
      const msg_txt  = document.getElementById('lf_msg')?.value.trim()      || '';

      if (!name || !phone || !interest) {
        showToast('⚠️ Please fill Name, Phone & Property Interest.');
        return;
      }
      let msg = '🏡 *New Property Enquiry – Bestt Property Hub*';
      msg += '\n\n*Name:* ' + name;
      msg += '\n*Phone:* ' + phone;
      msg += '\n*Interest:* ' + interest;
      if (area)    msg += '\n*Preferred Area:* ' + area;
      if (budget)  msg += '\n*Budget:* ' + budget;
      if (msg_txt) msg += '\n*Message:* ' + msg_txt;
      msg += '\n\n_Sent from BesttPropertyHub.in_';
      goToWhatsApp(msg);
    });
  }

  /* Contact form */
  const cf = document.getElementById('contactForm');
  if (cf) {
    cf.addEventListener('submit', e => {
      e.preventDefault();
      const name  = document.getElementById('cf_name')?.value.trim()  || '';
      const phone = document.getElementById('cf_phone')?.value.trim() || '';
      const type  = document.getElementById('cf_type')?.value         || '';
      const area  = document.getElementById('cf_area')?.value.trim()  || '';
      const msg_t = document.getElementById('cf_msg')?.value.trim()   || '';

      if (!name || !phone) {
        showToast('⚠️ Please enter your Name and Phone Number.');
        return;
      }
      let msg = '📞 *Contact Form – Bestt Property Hub*';
      msg += '\n\n*Name:* ' + name;
      msg += '\n*Phone:* ' + phone;
      if (type)  msg += '\n*Property Type:* ' + type;
      if (area)  msg += '\n*Area in Faridabad:* ' + area;
      if (msg_t) msg += '\n*Message:* ' + msg_t;
      msg += '\n\n_Sent from Contact Page – BesttPropertyHub.in_';
      goToWhatsApp(msg);
    });
  }
}

/* ============================================================
   COUNTER ANIMATION
   ============================================================ */
function animateCounters() {
  document.querySelectorAll('.trust-num').forEach(el => {
    const target = +el.dataset.target;
    let current = 0;
    const increment = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current = Math.min(current + increment, target);
      el.textContent = current;
      if (current >= target) clearInterval(timer);
    }, 28);
  });
}

let countersAnimated = false;
function initCounterObserver() {
  const strip = document.querySelector('.trust-strip');
  if (!strip) return;
  const obs = new IntersectionObserver(([e]) => {
    if (e.isIntersecting && !countersAnimated) {
      countersAnimated = true;
      animateCounters();
      obs.disconnect();
    }
  }, { threshold: 0.5 });
  obs.observe(strip);
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in-view'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ============================================================
   HEADER SCROLL
   ============================================================ */
function initHeader() {
  const h = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => h.classList.toggle('scrolled', window.scrollY > 50), { passive: true });
}

/* ============================================================
   MOBILE NAV
   ============================================================ */
function initMobileNav() {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('mainNav');
  btn.addEventListener('click', () => { btn.classList.toggle('open'); nav.classList.toggle('open'); });
  document.querySelectorAll('.has-dropdown > a').forEach(a => {
    a.addEventListener('click', e => {
      if (window.innerWidth < 768) { e.preventDefault(); a.closest('.has-dropdown').classList.toggle('open'); }
    });
  });
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => { if (window.innerWidth < 768) { nav.classList.remove('open'); btn.classList.remove('open'); } });
  });
}

/* ============================================================
   ACTIVE NAV
   ============================================================ */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.main-nav a');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) cur = s.id; });
    links.forEach(l => { l.classList.toggle('active', l.getAttribute('href') === '#' + cur); });
  }, { passive: true });
}

/* ============================================================
   EXIT POPUP
   ============================================================ */
function initExitPopup() {
  const popup = document.getElementById('exitPopup');
  const close = document.getElementById('popupClose');
  let shown = false;
  const show = () => { if (!shown) { popup.classList.add('visible'); shown = true; } };
  document.addEventListener('mouseleave', e => { if (e.clientY < 0) setTimeout(show, 300); });
  setTimeout(show, 30000);
  close.addEventListener('click', () => popup.classList.remove('visible'));
  popup.addEventListener('click', e => { if (e.target === popup) popup.classList.remove('visible'); });
}

/* ============================================================
   SMOOTH SCROLL
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) { e.preventDefault(); window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' }); }
    });
  });
}

/* ============================================================
   TOAST
   ============================================================ */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderProperties();
  renderUpcoming();
  renderTestimonials();
  renderFAQ();
  renderBlog();

  initHeroSearch();
  initForms();
  initReveal();
  initCounterObserver();
  initHeader();
  initMobileNav();
  initActiveNav();
  initExitPopup();
  initSmoothScroll();

  requestAnimationFrame(() => {
    document.querySelectorAll('.prop-card,.upcoming-card,.blog-card,.faq-item,.why-card,.invest-card,.comm-card,.cat-card').forEach(el => {
      if (!el.classList.contains('reveal')) el.classList.add('reveal');
    });
    initReveal();
  });

  setTimeout(startAutoSlide, 800);
});
