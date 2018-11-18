import React from 'react'
import ProjectWrapper from '../projectWrapper'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

const projectpage = () => (
  <I18nextProvider i18n={i18next}>
    <ProjectWrapper />
  </I18nextProvider>
)

export default projectpage
