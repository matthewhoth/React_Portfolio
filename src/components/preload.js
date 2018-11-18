import React from 'react'
import lyrical1 from '../images/lyricaltint.png'
import crypto1 from '../images/cryptotint.png'
import airbnb1 from '../images/airbnbtint.png'
import login1 from '../images/logintint.png'
import slackapp1 from '../images/slackapptint.png'
import lyrical2 from '../images/lyricaltintd.png'
import crypto2 from '../images/cryptotintd.png'
import airbnb2 from '../images/airbnbtintd.png'
import login2 from '../images/logintintd.png'
import slackapp2 from '../images/slackapptintd.png'

export default class PreloadImages extends React.PureComponent {
  render() {
    return (
      <div>
        <img alt="" src={lyrical1} />
        <img alt="" src={crypto1} />
        <img alt="" src={airbnb1} />
        <img alt="" src={login1} />
        <img alt="" src={slackapp1} />
        <img alt="" src={lyrical2} />
        <img alt="" src={crypto2} />
        <img alt="" src={airbnb2} />
        <img alt="" src={login2} />
        <img alt="" src={slackapp2} />
      </div>
    )
  }
}
