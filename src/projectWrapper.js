import React from 'react'
import { withNamespaces } from 'react-i18next'
import Main from './components/work/main.js'

export const ProjectWrapper = () => <Main />

export default withNamespaces('common')(ProjectWrapper)
