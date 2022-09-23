import React from 'react'

const Article = ({ content, num }) => {
    return (
        <article>
            {content[num].tit}
        </article>
    )
}

export default Article