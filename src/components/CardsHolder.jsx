import React from 'react'
import WebCard from './WebCard'

import logoWeb_1 from '../images/pexels-logo.jpeg'


export const CardsHolder = () => {

    let tags = ['#Stock', '#Photography', '#WebDesign']

    return (
        <div className='cardsholder'>
            <WebCard webIcon={logoWeb_1} webName='Pexels' tags={tags} webLink='https://www.pexels.com/new-photos/'/>
            <WebCard webIcon={logoWeb_1} webName='Pexels' tags={tags} webLink='https://www.pexels.com/new-photos/'/>
            <WebCard webIcon={logoWeb_1} webName='Pexels' tags={tags} webLink='https://www.pexels.com/new-photos/'/>
            <WebCard webIcon={logoWeb_1} webName='Pexels' tags={tags} webLink='https://www.pexels.com/new-photos/'/>
        </div>
    )
}
