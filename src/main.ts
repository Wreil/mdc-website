import './style.css'
import { mountLogoLoader } from './pageLoader'
import { footerMarkup, initializeFooterQuickLinks } from './footer'

mountLogoLoader()

const galleryItems = [
  {
    title: 'People at MDC',
    location: 'Our Workforce',
    image: '/Gemini_Generated_Image_1k4ixe1k4ixe1k4i_nobg.png',
  },
]

const preFeaturedItems = [
  { src: '/IMG_0319-1.jpg', alt: 'MDC project highlight 319' },
  { src: '/IMG_0503.jpg', alt: 'MDC project highlight 503' },
  { src: '/IMG_0588-1536x1024.jpg', alt: 'MDC project highlight 588' },
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
            <a href="/epc.html">EPC</a>
            <a href="/products.html">Products</a>
            <a href="/other-services.html">Other Services</a>
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
            <a href="/mdc-conqrete.html">MDC ConQrete, Inc.</a>
            <a href="/mdbi-construction.html">MDBI Construction Corporation</a>
            <a href="/mdtk-corporation.html">MDTK Corporation</a>
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
            <div class="working-submenu-group">
              <button
                id="cultureToggle"
                type="button"
                class="working-submenu-toggle"
                aria-expanded="false"
                aria-controls="cultureSubmenu"
              >
                Our Culture
              </button>
              <div id="cultureSubmenu" class="working-submenu-links" aria-label="Our Culture submenu">
                <a href="/learning-development.html">Learning and Development</a>
                <a href="/employee-engagement.html">Employee Engagement</a>
                <a href="/workforce-annual-report.html">Workforce Annual Report</a>
              </div>
            </div>
                      <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQE-LbLj_KJaNQAAAZ24B1MI2z7OehBU3bCAb5r5yQE097zYUqk2x6u0M0DPM4xyL1b00Z-oaQRrJpWL1IErhFOh6EPZHg2GlLN1at9EUybx-swhjUVCCffDBA5YkFqTL5AcIAc=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fmakati-development-corporation%2F">Careers</a>
</div>
        </div>
        <a href="/vendor-accreditation.html">Vendor Accreditation</a>
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

    <section class="pre-featured-gallery reveal" aria-label="Project image highlights">
      <div class="pre-featured-gallery-inner">
        <div class="pre-featured-stage">
          <img
            id="preFeaturedBack"
            src="${preFeaturedItems[1].src}"
            alt="${preFeaturedItems[1].alt}"
            class="pre-featured-image pre-featured-image-back"
          />
          <img
            id="preFeaturedSlide"
            src="${preFeaturedItems[0].src}"
            alt="${preFeaturedItems[0].alt}"
            class="pre-featured-image pre-featured-image-front"
          />
        </div>
        <div class="pre-featured-controls" aria-label="Project image highlights slides">
          <button id="preFeaturedPrev" type="button" class="pre-featured-arrow" aria-label="Previous highlight">‹</button>
          <div id="preFeaturedDots" class="pre-featured-dots" aria-label="Project image highlight slides"></div>
          <button id="preFeaturedNext" type="button" class="pre-featured-arrow" aria-label="Next highlight">›</button>
        </div>
      </div>
    </section>

    ${footerMarkup}

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
const preFeaturedSlideElement = document.querySelector<HTMLImageElement>('#preFeaturedSlide')
const preFeaturedBackElement = document.querySelector<HTMLImageElement>('#preFeaturedBack')
const preFeaturedDotsElement = document.querySelector<HTMLDivElement>('#preFeaturedDots')
const preFeaturedPrevButton = document.querySelector<HTMLButtonElement>('#preFeaturedPrev')
const preFeaturedNextButton = document.querySelector<HTMLButtonElement>('#preFeaturedNext')
const featuredPostElement = document.querySelector<HTMLElement>('.featured-post-content')
const dropdownStacks = Array.from(document.querySelectorAll<HTMLElement>('.nav-dropdown-stack'))
const dropdownTriggers = Array.from(document.querySelectorAll<HTMLButtonElement>('.nav-dropdown-trigger'))
const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('#siteNav a'))
const cultureToggle = document.querySelector<HTMLButtonElement>('#cultureToggle')
const cultureSubmenu = document.querySelector<HTMLElement>('#cultureSubmenu')

let currentIndex = 0
let autoSlideTimer: number | undefined
let preFeaturedIndex = 0
let preFeaturedAutoSlideTimer: number | undefined

featuredPostElement?.remove()

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

  if (galleryItems.length <= 1) {
    dotsElement.innerHTML = ''
    prevBtn?.setAttribute('hidden', 'true')
    nextBtn?.setAttribute('hidden', 'true')
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

const setPreFeaturedSlide = (index: number) => {
  if (!preFeaturedSlideElement) {
    return
  }

  preFeaturedIndex = (index + preFeaturedItems.length) % preFeaturedItems.length
  const currentItem = preFeaturedItems[preFeaturedIndex]
  const backItem = preFeaturedItems[(preFeaturedIndex + 1) % preFeaturedItems.length]

  preFeaturedSlideElement.classList.add('is-fading')
  preFeaturedBackElement?.classList.add('is-fading')

  window.setTimeout(() => {
    preFeaturedSlideElement.src = currentItem.src
    preFeaturedSlideElement.alt = currentItem.alt
    preFeaturedSlideElement.classList.remove('is-fading')

    if (preFeaturedBackElement) {
      preFeaturedBackElement.src = backItem.src
      preFeaturedBackElement.alt = backItem.alt
      preFeaturedBackElement.classList.remove('is-fading')
    }

    const dots = Array.from(preFeaturedDotsElement?.querySelectorAll<HTMLButtonElement>('[data-pre-featured-dot]') ?? [])
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('is-active', dotIndex === preFeaturedIndex)
      dot.setAttribute('aria-selected', dotIndex === preFeaturedIndex ? 'true' : 'false')
    })
  }, 180)
}

const startPreFeaturedAutoPlay = () => {
  if (preFeaturedItems.length <= 1) {
    return
  }

  if (preFeaturedAutoSlideTimer !== undefined) {
    window.clearInterval(preFeaturedAutoSlideTimer)
  }

  preFeaturedAutoSlideTimer = window.setInterval(() => {
    setPreFeaturedSlide(preFeaturedIndex + 1)
  }, 2800)
}

const renderPreFeaturedDots = () => {
  if (!preFeaturedDotsElement) {
    return
  }

  if (preFeaturedItems.length <= 1) {
    preFeaturedDotsElement.innerHTML = ''
    preFeaturedPrevButton?.setAttribute('hidden', 'true')
    preFeaturedNextButton?.setAttribute('hidden', 'true')
    return
  }

  preFeaturedDotsElement.innerHTML = preFeaturedItems
    .map(
      (_, index) => `
        <button
          type="button"
          class="pre-featured-dot${index === 0 ? ' is-active' : ''}"
          aria-label="Go to highlight ${index + 1}"
          aria-selected="${index === 0 ? 'true' : 'false'}"
          data-pre-featured-dot
        ></button>
      `,
    )
    .join('')

  Array.from(preFeaturedDotsElement.querySelectorAll<HTMLButtonElement>('[data-pre-featured-dot]')).forEach((dot, index) => {
    dot.addEventListener('click', () => {
      setPreFeaturedSlide(index)
      startPreFeaturedAutoPlay()
    })
  })
}

prevBtn?.addEventListener('click', () => {
  setSlide(currentIndex - 1)
  restartAutoPlay()
})

nextBtn?.addEventListener('click', () => {
  setSlide(currentIndex + 1)
  restartAutoPlay()
})

preFeaturedPrevButton?.addEventListener('click', () => {
  setPreFeaturedSlide(preFeaturedIndex - 1)
  startPreFeaturedAutoPlay()
})

preFeaturedNextButton?.addEventListener('click', () => {
  setPreFeaturedSlide(preFeaturedIndex + 1)
  startPreFeaturedAutoPlay()
})

const closeCultureSubmenu = () => {
  cultureSubmenu?.classList.remove('is-open')
  cultureToggle?.setAttribute('aria-expanded', 'false')
}

const closeDropdowns = (exceptStack?: HTMLElement) => {
  closeCultureSubmenu()
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

cultureToggle?.addEventListener('click', (event) => {
  event.stopPropagation()
  const shouldOpen = !(cultureSubmenu?.classList.contains('is-open') ?? false)
  cultureSubmenu?.classList.toggle('is-open', shouldOpen)
  cultureToggle.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false')
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
renderPreFeaturedDots()
setPreFeaturedSlide(0)
startPreFeaturedAutoPlay()

initializeFooterQuickLinks()
