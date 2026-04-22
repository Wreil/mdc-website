import './style.css'
import { mountLogoLoader } from './pageLoader'
import { awardsContent } from './content/aboutUs/awards'

mountLogoLoader()

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
            <a href="/#products">EPC</a>
            <a href="/#products">Products</a>
            <a href="/#products">Other Services</a>
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
            <a href="/#subsidiaries">MDC ConQrete, Inc.</a>
            <a href="/#subsidiaries">MDBI Construction Corporation</a>
            <a href="/#subsidiaries">MDTK Corporation</a>
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
            <a href="/#culture" class="submenu-arrow">Our Culture</a>
            <a href="/#culture">Learning and Development</a>
            <a href="/#culture">Employee Engagement</a>
            <a href="/#culture">Workforce Annual Report</a>
            <a href="/#culture">Careers</a>
          </div>
        </div>
        <a href="/#vendor">Vendor Accreditation</a>
        <a href="/#news">News</a>
        <a href="/contact.html">Contact Us</a>
      </nav>
    </div>
  </header>

  <main class="main-layout">
    <section class="about-page-shell reveal">
      ${awardsContent}
    </section>

    <footer class="feature-footer reveal" id="contact">
      <div class="feature-footer-inner">
        <div class="featured-post-block hero-copy feature-copy" id="news">
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

const menuToggle = document.querySelector<HTMLButtonElement>('#menuToggle')
const nav = document.querySelector<HTMLElement>('#siteNav')
const dropdownStacks = Array.from(document.querySelectorAll<HTMLElement>('.nav-dropdown-stack'))
const dropdownTriggers = Array.from(document.querySelectorAll<HTMLButtonElement>('.nav-dropdown-trigger'))
const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('#siteNav a'))

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