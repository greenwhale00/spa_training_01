import React from 'react'

const Footer = ({ content }) => {
    return (
        <footer className='Footer'>
            <address>
                {content.address}
            </address>
        </footer>
    )
}

export default Footer