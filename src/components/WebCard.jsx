import React from 'react'

const WebCard = (props) => {
    return (
        <a href={props.webLink} target='_blank' className='webcard'>
            <img className='webcard-icon' src={props.webIcon} alt=' ' />
            <div style={{ width: '55%' }}>
                <h3 className='webcard-name'>{props.webName}</h3>
                <p className='webcard-tags'>{props.tags}</p>
            </div>
            <div className='textcover'></div>
        </a>
    )
}

export default WebCard