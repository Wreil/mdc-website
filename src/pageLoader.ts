export const mountLogoLoader = () => {
  mountMdcFaqWidget()

  const existingLoader = document.querySelector<HTMLElement>('[data-mdc-loader]')
  if (existingLoader) {
    return () => existingLoader.remove()
  }

  const loader = document.createElement('div')
  loader.className = 'mdc-loader'
  loader.setAttribute('data-mdc-loader', 'true')
  loader.setAttribute('aria-hidden', 'true')
  loader.innerHTML = `
    <div class="mdc-loader-card">
      <div class="mdc-loader-pie" aria-hidden="true">
        <svg class="mdc-loader-pie-art" viewBox="0 0 100 100" role="presentation">
          <path class="mdc-loader-slice slice-1" d="M50 50 L50 6 A44 44 0 0 1 88 72 Z" />
          <path class="mdc-loader-slice slice-2" d="M50 50 L88 72 A44 44 0 0 1 12 72 Z" />
          <path class="mdc-loader-slice slice-3" d="M50 50 L12 72 A44 44 0 0 1 50 6 Z" />
        </svg>
        <div class="mdc-loader-core">
        <img src="/MDCLOGO%20(1).png" alt="" />
        </div>
      </div>
    </div>
  `

  document.body.append(loader)
  document.body.classList.add('is-loading')

  let removed = false

  const removeLoader = () => {
    if (removed) {
      return
    }

    removed = true
    loader.classList.add('is-hidden')
    window.setTimeout(() => {
      loader.remove()
      document.body.classList.remove('is-loading')
    }, 320)
  }

  if (document.readyState === 'complete') {
    window.setTimeout(removeLoader, 900)
  } else {
    window.addEventListener('load', () => window.setTimeout(removeLoader, 900), { once: true })
  }

  return removeLoader
}

const mountMdcFaqWidget = () => {
  if (document.querySelector<HTMLElement>('[data-mdc-faq]')) {
    return
  }

  const faqItems = [
    {
      question: 'What services does MDC provide?',
      answer:
        'MDC provides end-to-end Engineering, Procurement, and Construction services including design, planning, project execution, and post-construction support across commercial, residential, and infrastructure sectors.',
    },
    {
      question: 'What types of projects does MDC handle?',
      answer:
        'MDC handles high-rise buildings, mixed-use developments, industrial facilities, land development, and major infrastructure projects in key growth areas nationwide.',
    },
    {
      question: 'Does MDC offer sustainable construction solutions?',
      answer:
        'Yes. MDC integrates sustainability in project delivery through resource-efficient methods, digital design coordination, and standards-aligned construction practices.',
    },
    {
      question: 'Can MDC support design and build delivery?',
      answer:
        'Yes. MDC supports design and build through integrated engineering teams, BIM-enabled coordination, and construction management expertise that improve cost, schedule, and quality outcomes.',
    },
    {
      question: 'How can I inquire about projects or partnerships?',
      answer:
        'You can send your inquiry through the Contact Us page. Our team will route your request to the proper department for faster response.',
    },
  ]

  const faqRoot = document.createElement('aside')
  faqRoot.className = 'mdc-faq-widget'
  faqRoot.setAttribute('data-mdc-faq', 'true')

  faqRoot.innerHTML = `
    <button type="button" class="mdc-faq-fab" aria-label="Open MDC FAQ" aria-expanded="false" aria-controls="mdcFaqPanel">?</button>
    <section id="mdcFaqPanel" class="mdc-faq-panel" aria-label="MDC Frequently Asked Questions" hidden>
      <header class="mdc-faq-header">
        <div>
          <p class="mdc-faq-title">MDC Frequently Asked Questions</p>
          <p class="mdc-faq-subtitle">Quick answers about MDC</p>
        </div>
        <button type="button" class="mdc-faq-close" aria-label="Close FAQ">×</button>
      </header>
      <div class="mdc-faq-list" role="list"></div>
      <footer class="mdc-faq-footer">
        <p>Still have questions?</p>
        <a href="/contact.html" class="mdc-faq-contact">Contact Us</a>
      </footer>
    </section>
  `

  document.body.append(faqRoot)

  const panel = faqRoot.querySelector<HTMLElement>('#mdcFaqPanel')
  const fab = faqRoot.querySelector<HTMLButtonElement>('.mdc-faq-fab')
  const closeBtn = faqRoot.querySelector<HTMLButtonElement>('.mdc-faq-close')
  const list = faqRoot.querySelector<HTMLElement>('.mdc-faq-list')

  if (!panel || !fab || !closeBtn || !list) {
    return
  }

  list.innerHTML = faqItems
    .map(
      (item, index) => `
        <article class="mdc-faq-item" role="listitem">
          <button type="button" class="mdc-faq-question" aria-expanded="false" aria-controls="mdcFaqAnswer${index}">
            <span>${item.question}</span>
            <span class="mdc-faq-plus" aria-hidden="true">+</span>
          </button>
          <div id="mdcFaqAnswer${index}" class="mdc-faq-answer" hidden>
            <p>${item.answer}</p>
          </div>
        </article>
      `,
    )
    .join('')

  const openPanel = () => {
    panel.hidden = false
    faqRoot.classList.add('is-open')
    fab.setAttribute('aria-expanded', 'true')
  }

  const closePanel = () => {
    panel.hidden = true
    faqRoot.classList.remove('is-open')
    fab.setAttribute('aria-expanded', 'false')
  }

  fab.addEventListener('click', () => {
    if (panel.hidden) {
      openPanel()
      return
    }

    closePanel()
  })

  closeBtn.addEventListener('click', closePanel)

  list.querySelectorAll<HTMLButtonElement>('.mdc-faq-question').forEach((questionBtn) => {
    questionBtn.addEventListener('click', () => {
      const answerId = questionBtn.getAttribute('aria-controls')
      if (!answerId) {
        return
      }

      const answer = list.querySelector<HTMLElement>(`#${answerId}`)
      if (!answer) {
        return
      }

      const isOpen = questionBtn.getAttribute('aria-expanded') === 'true'
      questionBtn.setAttribute('aria-expanded', isOpen ? 'false' : 'true')
      answer.hidden = isOpen
      questionBtn.closest('.mdc-faq-item')?.classList.toggle('is-open', !isOpen)
    })
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closePanel()
    }
  })
}
