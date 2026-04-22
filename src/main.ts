import './style.css'
import { mountLogoLoader } from './pageLoader'

mountLogoLoader()

const galleryItems = [
  {
    title: 'Makati SkyRise Facade Works',
    location: 'Makati City',
    image: '/CTBv2_rs.jpg',
  },
  {
    title: 'Urban Rail Utility Structures',
    location: 'Metro Manila',
    image: '/DJI_0018-1.jpg',
  },
  {
    title: 'Commercial Podium Buildout',
    location: 'Taguig City',
    image: '/IMG_0319-1.jpg',
  },
  {
    title: 'Transit-Oriented Mixed-Use Zone',
    location: 'Quezon City',
    image: '/IMG_0503.jpg',
  },
]

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="site-header reveal">
    <div class="header-inner">
      <button id="menuToggle" aria-label="Toggle navigation" aria-expanded="false" class="menu-toggle">Menu</button>

      <nav id="siteNav" class="nav-links">
        <div class="about-nav-stack nav-dropdown-stack">
          <a href="/" class="about-nav-logo-link" aria-label="Go to Home">
            <div class="about-nav-logo-wrap">
              <img src="/MDCLOGO%20(1).png" alt="MDC logo" class="about-nav-logo" />
            </div>
          </a>
          <button
            id="aboutToggle"
            type="button"
            class="active has-dropdown about-nav-trigger nav-dropdown-trigger"
            aria-expanded="false"
            aria-controls="aboutDropdown"
          >
            About Us
          </button>
          <div id="aboutDropdown" class="about-dropdown nav-dropdown-menu" aria-label="About Us submenu">
            <a href="/corporate-profile.html">Corporate Profile</a>
            <a href="/history.html">History</a>
            <a href="/corporate-philosophy.html">Corporate Philosophy</a>
            <a href="/management.html">Management</a>
            <a href="/corporate-governance.html">Corporate Governance</a>
            <a href="/awards.html">Awards</a>
            <a href="/certifications.html">Certifications</a>
          </div>
        </div>
        <div class="products-nav-stack nav-dropdown-stack">
          <button
            id="productsToggle"
            type="button"
            class="has-dropdown nav-dropdown-trigger"
            aria-expanded="false"
            aria-controls="productsDropdown"
          >
            Products & Services
          </button>
          <div id="productsDropdown" class="products-dropdown nav-dropdown-menu" aria-label="Products and Services submenu">
            <a href="#products">EPC</a>
            <a href="#products">Products</a>
            <a href="#products">Other Services</a>
          </div>
        </div>
        <div class="subsidiaries-nav-stack nav-dropdown-stack">
          <button
            id="subsidiariesToggle"
            type="button"
            class="has-dropdown nav-dropdown-trigger"
            aria-expanded="false"
            aria-controls="subsidiariesDropdown"
          >
            Subsidiaries
          </button>
          <div id="subsidiariesDropdown" class="subsidiaries-dropdown nav-dropdown-menu" aria-label="Subsidiaries submenu">
            <a href="#subsidiaries">MDC ConQrete, Inc.</a>
            <a href="#subsidiaries">MDBI Construction Corporation</a>
            <a href="#subsidiaries">MDTK Corporation</a>
          </div>
        </div>
        <div class="working-nav-stack nav-dropdown-stack">
          <button
            id="workingToggle"
            type="button"
            class="has-dropdown nav-dropdown-trigger"
            aria-expanded="false"
            aria-controls="workingDropdown"
          >
            Working at MDC
          </button>
          <div id="workingDropdown" class="working-dropdown nav-dropdown-menu" aria-label="Working at MDC submenu">
            <a href="#culture" class="submenu-arrow">Our Culture</a>
            <a href="#culture">Learning and Development</a>
            <a href="#culture">Employee Engagement</a>
            <a href="#culture">Workforce Annual Report</a>
            <a href="#culture">Careers</a>
          </div>
        </div>
        <a href="#vendor">Vendor Accreditation</a>
        <a href="#news">News</a>
        <a href="/contact.html">Contact Us</a>
      </nav>
    </div>
  </header>

  <main class="main-layout">
    <section id="home" class="hero-section">
      <div class="hero-copy reveal delay-1">
        <p class="eyebrow">Built on Precision Since 1975</p>
        <h1>We Build the Future of Philippine Cities.</h1>
        <p>
          Makati Development Corporation is one of the country&apos;s leading EPC firms, delivering high-rise,
          infrastructure, industrial, and mixed-use projects with close to five decades of technical excellence.
        </p>
        <div class="hero-actions">
          <a href="#products" class="btn-solid">Explore Services</a>
          <a href="/contact.html" class="btn-ghost">Talk to Our Team</a>
        </div>
        <div class="hero-metrics">
          <article>
            <p class="metric-value">48+</p>
            <p class="metric-label">Years in Construction</p>
          </article>
          <article>
            <p class="metric-value">1200+</p>
            <p class="metric-label">Projects Delivered</p>
          </article>
          <article>
            <p class="metric-value">Quad A</p>
            <p class="metric-label">Platinum Contractor</p>
          </article>
        </div>
      </div>

      <div class="hero-spotlight reveal delay-2">
        <div class="spotlight-stage">
          <img
            id="slideImage"
            src="${galleryItems[0].image}"
            alt="MDC featured project"
            class="spotlight-image"
          />
        </div>

        <div class="spotlight-card">
          <p class="eyebrow">Project Spotlight</p>
          <h2 id="slideTitle">${galleryItems[0].title}</h2>
          <p id="slideMeta" class="spotlight-meta">${galleryItems[0].location}</p>
        </div>

        <div class="spotlight-controls">
          <button id="prevBtn" type="button" class="spotlight-arrow" aria-label="Previous slide">‹</button>
          <div id="slideDots" class="spotlight-dots" aria-label="Project spotlight slides"></div>
          <button id="nextBtn" type="button" class="spotlight-arrow" aria-label="Next slide">›</button>
        </div>
      </div>
    </section>

    <footer class="feature-footer reveal" id="news">
      <div class="feature-footer-inner">
        <div class="featured-post-block hero-copy feature-copy">
          <p class="eyebrow feature-label">Featured Post</p>
          <h2>MDBI enters Railway Infrastructure with MMSP Bulk Supply Substation (BSS) Groundbreaking</h2>
          <p class="news-date">May 21, 2025</p>
          <p>
            On May 5, 2025, MDBI Construction Corp. participated in the groundbreaking ceremony for the Bulk Supply
            Substation (BSS) of the Metro Manila Subway Project (MMSP) held in Valenzuela City. The milestone event was attended by key officials from the Department of Transportation (DOTr), led by Secretary Vince Dizon, Valenzuela City Mayor Wes Gatchalian, and representatives from the project consortium.
          </p>
        </div>

        <div class="footer-links-grid">
          <div>
            <p class="footer-title">Quick Links</p>
            <p>News</p>
            <p>Careers</p>
            <p>Contact Us</p>
            <p>Terms of Use</p>
            <p>Privacy Notice</p>
          </div>
          <div>
            <p class="footer-title">Social</p>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
          </div>
          <div>
            <p class="footer-title">Contact Us</p>
            <p>Makati Development Corporation</p>
            <p>Email: info@mdc.example</p>
            <p>Phone: +63 2 0000 0000</p>
          </div>
        </div>
      </div>
      <div class="footer-copy-container">
        <p class="footer-copy">Copyright © 2026 Makati Development Corporation. All rights reserved.</p>
      </div>
    </footer>

  </main>
`

const titleElement = document.querySelector<HTMLParagraphElement>('#slideTitle')
const imageElement = document.querySelector<HTMLImageElement>('#slideImage')
const metaElement = document.querySelector<HTMLParagraphElement>('#slideMeta')
const dotsElement = document.querySelector<HTMLDivElement>('#slideDots')
const prevBtn = document.querySelector<HTMLButtonElement>('#prevBtn')
const nextBtn = document.querySelector<HTMLButtonElement>('#nextBtn')
const menuToggle = document.querySelector<HTMLButtonElement>('#menuToggle')
const nav = document.querySelector<HTMLElement>('#siteNav')
const dropdownStacks = Array.from(document.querySelectorAll<HTMLElement>('.nav-dropdown-stack'))
const dropdownTriggers = Array.from(document.querySelectorAll<HTMLButtonElement>('.nav-dropdown-trigger'))
const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('#siteNav a'))

let currentIndex = 0
let autoSlideTimer: number | undefined

const setActiveDot = (index: number) => {
  const dots = Array.from(dotsElement?.querySelectorAll<HTMLButtonElement>('[data-slide-dot]') ?? [])
  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle('is-active', dotIndex === index)
    dot.setAttribute('aria-selected', dotIndex === index ? 'true' : 'false')
  })
}

const renderDots = () => {
  if (!dotsElement) {
    return
  }

  dotsElement.innerHTML = galleryItems
    .map(
      (_, index) => `
        <button
          type="button"
          class="spotlight-dot${index === 0 ? ' is-active' : ''}"
          aria-label="Go to slide ${index + 1}"
          aria-selected="${index === 0 ? 'true' : 'false'}"
          data-slide-dot
        ></button>
      `,
    )
    .join('')

  Array.from(dotsElement.querySelectorAll<HTMLButtonElement>('[data-slide-dot]')).forEach((dot, index) => {
    dot.addEventListener('click', () => {
      setSlide(index)
      restartAutoPlay()
    })
  })
}

const setSlide = (index: number) => {
  currentIndex = (index + galleryItems.length) % galleryItems.length
  const currentItem = galleryItems[currentIndex]

  imageElement?.classList.add('is-fading')

  if (titleElement) {
    titleElement.textContent = currentItem.title
  }

  if (metaElement) {
    metaElement.textContent = currentItem.location
  }

  setActiveDot(currentIndex)

  window.setTimeout(() => {
    if (imageElement) {
      imageElement.src = currentItem.image
      imageElement.alt = currentItem.title
      imageElement.classList.remove('is-fading')
    }
  }, 180)
}

const restartAutoPlay = () => {
  if (autoSlideTimer !== undefined) {
    window.clearInterval(autoSlideTimer)
  }

  autoSlideTimer = window.setInterval(() => {
    setSlide(currentIndex + 1)
  }, 4000)
}

prevBtn?.addEventListener('click', () => {
  setSlide(currentIndex - 1)
  restartAutoPlay()
})

nextBtn?.addEventListener('click', () => {
  setSlide(currentIndex + 1)
  restartAutoPlay()
})

const closeDropdowns = (exceptStack?: HTMLElement) => {
  dropdownStacks.forEach((stack) => {
    if (exceptStack && stack === exceptStack) {
      return
    }

    stack.classList.remove('is-open')
    const trigger = stack.querySelector<HTMLButtonElement>('.nav-dropdown-trigger')
    trigger?.setAttribute('aria-expanded', 'false')
  })
}

dropdownTriggers.forEach((trigger) => {
  trigger.addEventListener('click', (event) => {
    event.stopPropagation()

    const stack = trigger.closest<HTMLElement>('.nav-dropdown-stack')
    if (!stack) {
      return
    }

    const shouldOpen = !stack.classList.contains('is-open')
    closeDropdowns(stack)

    stack.classList.toggle('is-open', shouldOpen)
    trigger.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false')
  })
})

document.addEventListener('click', (event) => {
  const clickedInsideDropdown = dropdownStacks.some((stack) => stack.contains(event.target as Node))

  if (!clickedInsideDropdown) {
    closeDropdowns()
  }
})

menuToggle?.addEventListener('click', () => {
  const isOpen = nav?.classList.toggle('is-open')
  menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false')
})

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeDropdowns()
    nav?.classList.remove('is-open')
    menuToggle?.setAttribute('aria-expanded', 'false')
  })
})

renderDots()
setSlide(0)
restartAutoPlay()
