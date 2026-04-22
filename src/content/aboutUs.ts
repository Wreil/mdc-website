export type AboutUsItem = {
  id: string
  label: string
  title: string
  content: string
}

import { corporateProfileContent } from './aboutUs/corporateProfile'
import { historyContent } from './aboutUs/history'
import { corporatePhilosophyContent } from './aboutUs/corporatePhilosophy'
import { managementContent } from './aboutUs/management'
import { corporateGovernanceContent } from './aboutUs/corporateGovernance'
import { awardsContent } from './aboutUs/awards'
import { certificationsContent } from './aboutUs/certifications'

export const aboutUsItems: AboutUsItem[] = [
  {
    id: 'corporate-profile',
    label: 'Corporate Profile',
    title: 'Corporate Profile',
    content: corporateProfileContent,
  },
  {
    id: 'history',
    label: 'History',
    title: 'History',
    content: historyContent,
  },
  {
    id: 'corporate-philosophy',
    label: 'Corporate Philosophy',
    title: 'Corporate Philosophy',
    content: corporatePhilosophyContent,
  },
  {
    id: 'management',
    label: 'Management',
    title: 'Management',
    content: managementContent,
  },
  {
    id: 'corporate-governance',
    label: 'Corporate Governance',
    title: 'Corporate Governance',
    content: corporateGovernanceContent,
  },
  {
    id: 'awards',
    label: 'Awards',
    title: 'Awards',
    content: awardsContent,
  },
  {
    id: 'certifications',
    label: 'Certifications',
    title: 'Certifications',
    content: certificationsContent,
  },
]
