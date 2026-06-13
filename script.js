/* ============================================================
   BESTT PROPERTY HUB — script.js
   ============================================================ */

/* ---- DATA -------------------------------------------------- */
const PROPERTIES = [
  {
    title: "Luxury 3BHK Apartment",
    location: "Sector 62, Noida",
    type: "Apartment",
    price: "₹85 Lakhs",
    area: "1,450 sq.ft",
    beds: 3, baths: 2,
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600"
  },
  {
    title: "Premium 4BHK Villa",
    location: "DLF Phase 2, Gurgaon",
    type: "Villa",
    price: "₹2.8 Crore",
    area: "3,200 sq.ft",
    beds: 4, baths: 3,
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600"
  },
  {
    title: "Ready-to-Move Builder Floor",
    location: "Vasant Kunj, Delhi",
    type: "Builder Floor",
    price: "₹1.2 Crore",
    area: "2,100 sq.ft",
    beds: 3, baths: 2,
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600"
  },
  {
    title: "2BHK Smart Home",
    location: "Whitefield, Bangalore",
    type: "Apartment",
    price: "₹65 Lakhs",
    area: "1,080 sq.ft",
    beds: 2, baths: 2,
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600"
  },
  {
    title: "Spacious 3BHK Flat",
    location: "Baner, Pune",
    type: "Apartment",
    price: "₹78 Lakhs",
    area: "1,350 sq.ft",
    beds: 3, baths: 2,
    img: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=600"
  },
  {
    title: "Independent Duplex House",
    location: "Hitech City, Hyderabad",
    type: "Duplex",
    price: "₹1.65 Crore",
    area: "2,600 sq.ft",
    beds: 4, baths: 3,
    img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600"
  }
];

const UPCOMING = [
  {
    name: "Bestt Skyline Residences",
    location: "Sector 150, Noida Expressway",
    rera: "RERA Approved",
    possession: "Dec 2026",
    startPrice: "₹55 Lakhs",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600"
  },
  {
    name: "The Heritage Villas",
    location: "Sohna Road, Gurgaon",
    rera: "RERA Registered",
    possession: "Mar 2027",
    startPrice: "₹1.8 Crore",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600"
  },
  {
    name: "Emerald Park Heights",
    location: "Sarjapur Road, Bangalore",
    rera: "RERA Approved",
    possession: "Jun 2026",
    startPrice: "₹72 Lakhs",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600"
  }
];

const TESTIMONIALS = [
  {
    text: "Bestt Property Hub made my dream of owning a home a reality. Their team was patient, transparent, and helped me find the perfect apartment within budget. I couldn't be happier!",
    name: "Rajesh Sharma",
    meta: "Bought 3BHK in Noida",
    rating: 5
  },
  {
    text: "I was nervous about investing in commercial property for the first time, but the consultants at Bestt guided me through every step. Professional, honest, and extremely knowledgeable.",
    name: "Priya Malhotra",
    meta: "Invested in Office Space, Gurgaon",
    rating: 5
  },
  {
    text: "Exceptional service! They arranged site visits, negotiated the price, and handled all the paperwork. The entire process was stress-free. Highly recommend to anyone buying property.",
    name: "Arun & Sunita Kapoor",
    meta: "Bought Villa in Gurgaon",
    rating: 5
  },
  {
    text: "Quick, efficient, and always responsive. Got my NRI investment sorted within weeks. The team's knowledge of the market is unparalleled — they truly are the best in the business.",
    name: "Vikram Nair",
    meta: "NRI Investment, Bangalore",
    rating: 5
  },
  {
    text: "Bestt Property Hub found us an off-market deal that we would never have found on our own. Their network and expertise saved us over 10 lakhs. Truly exceptional consultants.",
    name: "Deepa & Suresh Reddy",
    meta: "Plot Purchase, Hyderabad",
    rating: 5
  }
];

const FAQS = [
  {
    q: "How do I start the property buying process?",
    a: "Start by defining your budget, preferred location, and property type. Our consultants will shortlist verified properties matching your criteria, arrange site visits, and guide you through the entire purchase — from offer to registration."
  },
  {
    q: "Are all listed properties RERA-approved?",
    a: "Yes, all projects listed as upcoming are RERA-registered. For resale properties, we conduct due diligence on title, encumbrance, and legal clearance before listing them on our platform."
  },
  {
    q: "What are the typical additional charges when buying property in India?",
    a: "Expect stamp duty (5–7% of property value), registration charges (1–2%), brokerage (1–2%), and GST on under-construction properties. Our consultants provide a detailed cost breakdown before you commit."
  },
  {
    q: "Can you help with home loan assistance?",
    a: "Absolutely. We have partnerships with leading banks and NBFCs and can help you compare loan options, check eligibility, and complete documentation — often at preferential interest rates."
  },
  {
    q: "What is the difference between a carpet area and a built-up area?",
    a: "Carpet area is the actual usable floor space within walls. Built-up area includes carpet area plus wall thickness. Super built-up area additionally includes shared spaces like lobbies, staircases, and lifts. Carpet area is typically 70–80% of super built-up area."
  },
  {
    q: "What documents do I need to verify before buying a property?",
    a: "Key documents include: Title Deed, Encumbrance Certificate, Approved Building Plan, Occupancy Certificate, RERA registration, and No-Objection Certificates from utilities. Our legal team will verify all these on your behalf."
  },
  {
    q: "Is now a good time to invest in Indian real estate?",
    a: "India's real estate sector is experiencing strong tailwinds driven by urbanisation, infrastructure expansion, and NRI demand. Cities like NCR, Bangalore, Hyderabad, and Pune offer excellent appreciation and rental yield prospects."
  },
  {
    q: "Can NRIs purchase property in India?",
    a: "Yes, NRIs can purchase residential and commercial properties in India under FEMA guidelines. There are certain restrictions on agricultural land. Our consultants can guide NRIs through the specific documentation and compliance requirements."
  },
  {
    q: "What is your consultation fee?",
    a: "Our initial property consultation is completely free. We earn a success-based fee only when a transaction is completed, ensuring our interests are fully aligned with yours."
  },
  {
    q: "Do you offer property management services after purchase?",
    a: "Yes, we provide post-purchase support including tenant sourcing, rental agreement drafting, rent collection, and property maintenance management — so your investment continues to work for you."
  }
];

const BLOGS = [
  {
    tag: "Buying Guide",
    title: "10 Things to Check Before Buying an Apartment in India",
    excerpt: "From RERA verification to society charges, here's your complete pre-purchase checklist to avoid costly surprises.",
    date: "May 12, 2025",
    read: "6 min read",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600"
  },
  {
    tag: "Investment",
    title: "Delhi NCR vs Bangalore: Where Should You Invest in 2025?",
    excerpt: "A data-driven comparison of appreciation rates, rental yields, and infrastructure growth in India's two hottest markets.",
    date: "Apr 28, 2025",
    read: "8 min read",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600"
  },
  {
    tag: "NRI Guide",
    title: "The Complete NRI Property Investment Guide for 2025",
    excerpt: "FEMA rules, tax implications, repatriation, and the documents you need — everything an NRI needs to know before buying property in India.",
    date: "Apr 10, 2025",
    read: "10 min read",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600"
  }
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
        <img src="${p.img}" alt="${p.title}" loading="lazy" />
        <span class="prop-badge">${p.type}</span>
        <span class="prop-price">${p.price}</span>
      </div>
      <div class="prop-body">
        <h3 class="prop-title">${p.title}</h3>
        <p class="prop-location"><i class="fa-solid fa-location-dot"></i> ${p.location}</p>
        <div class="prop-meta">
          <span><i class="fa-solid fa-vector-square"></i> ${p.area}</span>
          <span><i class="fa-solid fa-bed"></i> ${p.beds} Beds</span>
          <span><i class="fa-solid fa-bath"></i> ${p.baths} Baths</span>
        </div>
      </div>
      <div class="prop-actions">
        <a href="#contact" class="btn btn-outline">View Details</a>
        <a href="tel:+917011544551" class="btn btn-call"><i class="fa-solid fa-phone"></i></a>
        <a href="https://wa.me/917011544551?text=Hi, I am interested in ${encodeURIComponent(p.title)} at ${encodeURIComponent(p.location)}." target="_blank" class="btn btn-whatsapp"><i class="fa-brands fa-whatsapp"></i></a>
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
          <a href="#contact" class="btn btn-outline btn-sm"><i class="fa-solid fa-file-arrow-down"></i> Brochure</a>
          <a href="https://wa.me/917011544551?text=Hi, I am interested in ${encodeURIComponent(p.name)}." target="_blank" class="btn btn-whatsapp btn-sm"><i class="fa-brands fa-whatsapp"></i> Enquire</a>
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
        <div>
          <div class="t-name">${t.name}</div>
          <div class="t-meta">${t.meta}</div>
        </div>
      </div>
    </div>
  `).join('');

  if (dots) {
    const totalSlides = Math.ceil(TESTIMONIALS.length / getSlideCount());
    dots.innerHTML = Array.from({ length: TESTIMONIALS.length }, (_, i) =>
      `<span class="${i === 0 ? 'active' : ''}" data-i="${i}"></span>`
    ).join('');
    dots.querySelectorAll('span').forEach(d =>
      d.addEventListener('click', () => goToSlide(+d.dataset.i))
    );
  }
}

function getSlideCount() {
  return window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
}

let currentSlide = 0;
let autoSlideInterval;

function goToSlide(i) {
  const track = document.getElementById('testimonialsTrack');
  const dots = document.querySelectorAll('.testimonial-dots span');
  if (!track) return;
  const cards = track.querySelectorAll('.testimonial-card');
  const perSlide = getSlideCount();
  const cardWidth = cards[0].offsetWidth;
  const gap = 24;
  currentSlide = Math.max(0, Math.min(i, cards.length - 1));
  track.style.transform = `translateX(-${currentSlide * (cardWidth + gap)}px)`;
  dots.forEach((d, idx) => d.classList.toggle('active', idx === currentSlide));
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
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
      <div class="blog-img">
        <img src="${b.img}" alt="${b.title}" loading="lazy" />
      </div>
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
   COUNTER ANIMATION
   ============================================================ */
function animateCounters() {
  document.querySelectorAll('.trust-num').forEach(el => {
    const target = +el.dataset.target;
    const duration = 1800;
    const step = Math.ceil(duration / target);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + Math.ceil(target / 60), target);
      el.textContent = current;
      if (current >= target) clearInterval(timer);
    }, step);
  });
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
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
   HEADER SCROLL
   ============================================================ */
function initHeader() {
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

/* ============================================================
   HAMBURGER / NAV
   ============================================================ */
function initMobileNav() {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('mainNav');
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('open');
  });

  // dropdown toggle on mobile
  document.querySelectorAll('.has-dropdown > a').forEach(a => {
    a.addEventListener('click', e => {
      if (window.innerWidth < 768) {
        e.preventDefault();
        a.closest('.has-dropdown').classList.toggle('open');
      }
    });
  });

  // close nav on link click
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        nav.classList.remove('open');
        btn.classList.remove('open');
      }
    });
  });
}

/* ============================================================
   ACTIVE NAV LINK
   ============================================================ */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.main-nav a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    links.forEach(l => {
      l.classList.remove('active');
      if (l.getAttribute('href') === '#' + current) l.classList.add('active');
    });
  }, { passive: true });
}

/* ============================================================
   EXIT INTENT POPUP
   ============================================================ */
function initExitPopup() {
  const popup = document.getElementById('exitPopup');
  const closeBtn = document.getElementById('popupClose');
  let shown = false;

  document.addEventListener('mouseleave', e => {
    if (e.clientY < 0 && !shown) {
      setTimeout(() => {
        popup.classList.add('visible');
        shown = true;
      }, 300);
    }
  });

  closeBtn.addEventListener('click', () => popup.classList.remove('visible'));
  popup.addEventListener('click', e => {
    if (e.target === popup) popup.classList.remove('visible');
  });

  // Mobile: show after 30 seconds
  setTimeout(() => {
    if (!shown) {
      popup.classList.add('visible');
      shown = true;
    }
  }, 30000);
}

/* ============================================================
   FORMS
   ============================================================ */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

function initForms() {
  ['leadForm', 'contactForm'].forEach(id => {
    const form = document.getElementById(id);
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      showToast('✅ Thank you! We\'ll call you back shortly.');
      form.reset();
    });
  });
}

/* ============================================================
   SMOOTH SCROLL
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const offset = 68;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
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

  initReveal();
  initCounterObserver();
  initHeader();
  initMobileNav();
  initActiveNav();
  initExitPopup();
  initForms();
  initSmoothScroll();

  // Add reveal class to major sections after render
  requestAnimationFrame(() => {
    document.querySelectorAll('.prop-card, .upcoming-card, .blog-card, .faq-item, .why-card, .invest-card, .comm-card, .cat-card').forEach(el => {
      if (!el.classList.contains('reveal')) el.classList.add('reveal');
    });
    initReveal();
  });

  // Start testimonial auto-slide
  setTimeout(() => {
    startAutoSlide();
  }, 500);
});
