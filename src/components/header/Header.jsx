import React from 'react'
import './header.css'
import CTA from './CTA'
// import HeaderSocials from './HeaderSocials'      currently not using this
// import Me from '../../assets/Me.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Hasanabbas Momin</h1>
        <h5 className="text_light">Software Engineer</h5>
        <CTA />
        {/* <HeaderSocials /> */}

        {/* <div className='me'>
          <img src={Me} alt='me' className='me_img'/>
        </div> */}

        {/* <a href='#contact' className='scroll_down'>Scroll Down</a> */}
      </div>
    </header>
  )
}

export default Header