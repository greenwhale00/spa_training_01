import React from 'react'
import Article from './Article'
import Aside from './Aside'
import '../css/Subpage.scss'

const Sub02 = ({ content }) => {
    const num = 1;
    return (
        <div className='Subpage'>
            <div className="nav_bar">
                <div className="inner">깔끔이청소 소개 / 깔끔이청소</div>
            </div>
            <div className="inner sub">
                <Article content={content} num={num} />
                <Aside />
            </div>
        </div>
    )
}

export default Sub02