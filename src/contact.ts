import './style.css'
import { mountLogoLoader } from './pageLoader'

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
            <a href="/#aboutContent">History</a>
            <a href="/#aboutContent">Corporate Philosophy</a>
            <a href="/#aboutContent">Management</a>
            <a href="/#aboutContent">Corporate Governance</a>
            <a href="/#aboutContent">Awards</a>
            <a href="/#aboutContent">Certifications</a>
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
        <a href="/contact.html" class="active">Contact Us</a>
      </nav>
    </div>
  </header>

  <main class="main-layout">
    <section class="contact-page-shell reveal">
      <div class="contact-card">
        <aside class="contact-info-pane">
          <p class="contact-kicker">Contact Information</p>
          <p class="contact-info-lead">Contact us now!</p>

          <div class="contact-info-group">
            <div class="contact-info-row">
              <span class="contact-info-icon" aria-hidden="true">☎</span>
              <div>
                <p class="contact-info-label">Call Us</p>
                <p class="contact-info-value">+63 (2) 7759-0800</p>
              </div>
            </div>
          </div>

          <div class="contact-info-group">
            <div class="contact-info-row">
              <span class="contact-info-icon" aria-hidden="true">✉</span>
              <div>
                <p class="contact-info-label">Email Us</p>
                <p class="contact-info-value">
                  For inquiries, please contact inquiry@mdc.com.ph<br />
                  For career and internship inquiries, please contact careers@mdc.com.ph<br />
                  For vendor inquiries, please contact vendorhotline@mdc.com.ph
                </p>
              </div>
            </div>
          </div>

          <div class="contact-info-group">
            <div class="contact-info-row">
              <span class="contact-info-icon" aria-hidden="true">⌖</span>
              <div>
                <p class="contact-info-label">Visit Us</p>
                <p class="contact-info-value">
                  MDC Corporate Center<br />
                  Radian Street, Arca South<br />
                  Western Bicutan, Taguig City 1630
                </p>
              </div>
            </div>
          </div>

          <div class="contact-socials">
            <p class="contact-socials-label">Follow Us</p>
            <div class="contact-socials-list" aria-label="Social links">
              <a class="contact-social-link" href="https://www.linkedin.com" aria-label="LinkedIn">in</a>
              <a class="contact-social-link" href="https://www.facebook.com" aria-label="Facebook">f</a>
            </div>
          </div>
        </aside>

        <div class="contact-form-pane">
          <h2>Send us a Message</h2>
          <p class="contact-form-copy">Fill out the form below and we&apos;ll get back to you shortly.</p>

          <form class="contact-form" action="#" method="post">
            <label>
              First Name
              <input type="text" name="firstName" placeholder="Enter your first name" />
            </label>
            <label>
              Last Name
              <input type="text" name="lastName" placeholder="Enter your last name" />
            </label>
            <label>
              Email Address *
              <input type="email" name="email" placeholder="your@email.com" />
            </label>
            <label>
              Contact Number
              <input type="tel" name="phone" placeholder="+63 XXX XXX XXXX" />
            </label>

            <label class="contact-message">
              Message *
              <textarea name="message" rows="6" placeholder="Write your message here..."></textarea>
            </label>

            <button type="submit" class="contact-submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
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