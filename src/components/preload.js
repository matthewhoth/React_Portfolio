import React from 'react'
import lyrical1 from '../images/lyricaltint.png'
import crypto1 from '../images/cryptotint.png'
import airbnb1 from '../images/airbnbtint.png'
import certification1 from '../images/certificationtint.png'
import slackapp1 from '../images/slackapptint.png'
import lyrical2 from '../images/lyricaltintd.png'
import crypto2 from '../images/cryptotintd.png'
import airbnb2 from '../images/airbnbtintd.png'
import certification2 from '../images/certificationtintd.png'
import slackapp2 from '../images/slackapptintd.png'

export default class PreloadImages extends React.PureComponent {
  render() {
    return (
      <div>
        <img alt="" src={lyrical1} />
        <img alt="" src={crypto1} />
        <img alt="" src={airbnb1} />
        <img alt="" src={certification1} />
        <img alt="" src={slackapp1} />
        <img alt="" src={lyrical2} />
        <img alt="" src={crypto2} />
        <img alt="" src={airbnb2} />
        <img alt="" src={certification2} />
        <img alt="" src={slackapp2} />
      </div>
    )
  }
}
