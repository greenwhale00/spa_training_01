import React from 'react'

const Sub03 = () => {
    const num = 3;
    return (
        <div className='Subpage'>
            <div className="nav_bar">
                <div className="inner">{content[num].tit} / {content[0].tit}</div>
            </div>
            <div className="inner sub">
                <Article content={content} num={num} />
                <Aside />
            </div>
        </div>
    )
}

export default Sub03