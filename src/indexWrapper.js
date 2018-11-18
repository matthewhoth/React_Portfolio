import React from 'react'

import { withNamespaces } from 'react-i18next'
import Profile from './components/profile.js'

export const IndexWrapper = () => <Profile />

export default withNamespaces('common')(IndexWrapper)
