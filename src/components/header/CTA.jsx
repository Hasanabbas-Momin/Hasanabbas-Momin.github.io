import React from 'react'
import CV from '../../assets/Hasan_CV.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            {/* <a href='#header' className='btn'>Download CV</a> */}
            { <a href={CV} download className="btn"> Download CV </a> }
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA