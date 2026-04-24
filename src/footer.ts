const careersUrl =
  'https://www.linkedin.com/authwall?trk=bf&trkInfo=AQE-LbLj_KJaNQAAAZ24B1MI2z7OehBU3bCAb5r5yQE097zYUqk2x6u0M0DPM4xyL1b00Z-oaQRrJpWL1IErhFOh6EPZHg2GlLN1at9EUybx-swhjUVCCffDBA5YkFqTL5AcIAc=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fmakati-development-corporation%2F'

export const footerMarkup = `
  <footer class="feature-footer reveal" id="contact">
    <div class="feature-footer-inner">
      <div class="footer-links-grid">
        <div>
          <p class="footer-title">Quick Links</p>
          <a class="footer-quick-link" data-link-key="careers" href="${careersUrl}" target="_blank" rel="noopener noreferrer">Careers</a>
          <a class="footer-quick-link" data-link-key="contact" href="/contact.html">Contact Us</a>
          <a class="footer-quick-link" data-link-key="terms" href="/contact.html#terms">Terms of Use</a>
          <a class="footer-quick-link" data-link-key="privacy" href="/contact.html#privacy">Privacy Notice</a>
        </div>
        <div>
          <p class="footer-title">Social</p>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div>
          <p class="footer-title">Contact Us</p>
          <p>Makati Development Corporation</p>
          <a href="mailto:info@mdc.example">Email: info@mdc.example</a>
          <a href="tel:+6320000000">Phone: +63 2 0000 0000</a>
        </div>
      </div>
    </div>
    <div class="footer-copy-container">
      <p class="footer-copy">Copyright © 2026 Makati Development Corporation. All rights reserved.</p>
    </div>
  </footer>
`

const trackFooterQuickLink = async (linkKey: string) => {
  try {
    await fetch('/api/quick-links/click', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        linkKey,
        pagePath: window.location.pathname,
      }),
      keepalive: true,
    })
  } catch {
    // Tracking failures should not block navigation.
  }
}

export const initializeFooterQuickLinks = () => {
  const quickLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.footer-quick-link'))

  quickLinks.forEach((quickLink) => {
    if (quickLink.dataset.listenerAttached === 'true') {
      return
    }

    quickLink.dataset.listenerAttached = 'true'

    quickLink.addEventListener('click', () => {
      const linkKey = quickLink.dataset.linkKey
      if (!linkKey) {
        return
      }

      void trackFooterQuickLink(linkKey)
    })
  })
}
