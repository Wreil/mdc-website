import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        awards: resolve(__dirname, 'awards.html'),
        certifications: resolve(__dirname, 'certifications.html'),
        contact: resolve(__dirname, 'contact.html'),
        corporateGovernance: resolve(__dirname, 'corporate-governance.html'),
        corporatePhilosophy: resolve(__dirname, 'corporate-philosophy.html'),
        corporateProfile: resolve(__dirname, 'corporate-profile.html'),
        employeeEngagement: resolve(__dirname, 'employee-engagement.html'),
        epc: resolve(__dirname, 'epc.html'),
        history: resolve(__dirname, 'history.html'),
        learningDevelopment: resolve(__dirname, 'learning-development.html'),
        management: resolve(__dirname, 'management.html'),
        mdbiConstruction: resolve(__dirname, 'mdbi-construction.html'),
        mdcConqrete: resolve(__dirname, 'mdc-conqrete.html'),
        mdtkCorporation: resolve(__dirname, 'mdtk-corporation.html'),
        otherServices: resolve(__dirname, 'other-services.html'),
        products: resolve(__dirname, 'products.html'),
        vendorAccreditation: resolve(__dirname, 'vendor-accreditation.html'),
        workforceAnnualReport: resolve(__dirname, 'workforce-annual-report.html'),
      },
    },
  },
})
