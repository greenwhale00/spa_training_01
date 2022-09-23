import React from 'react'
import Article from './Article'
import Aside from './Aside'

const Sub01 = () => {
    return (
        <div className='Subpage'>
            <div className="nav_bar">
                <div className="inner">
                    page표시
                </div>
            </div>
            <div className="inner">
                <Article />
                <Aside />
            </div>
        </div>
    )
}

export default Sub01