export const mountLogoLoader = () => {
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