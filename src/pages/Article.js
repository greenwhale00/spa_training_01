import React from 'react'

const Article = ({ content, num }) => {
    return (
        <article>
            <div className="tit">  {content[num].tit} / {content[0].tit}</div>
            <figure>

            </figure>


        </article>
    )
}

export default Article