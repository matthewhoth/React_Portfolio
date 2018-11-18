import React from 'react'
import './styles/index.js'
import { withNamespaces } from 'react-i18next'
import Profile from './components/profile.js'

export const IndexWrapper = () => <Profile />

export default withNamespaces('common')(IndexWrapper)
