import React from 'react'
import { Link } from 'react-router-dom'

const MainContent = ({ word }) => {
    return (
        <section className='MainContent'>
            <div className="inner">
                {
                    word.map((con, idx) => {
                        return (
                            <Link to={con.link}>
                                <figure key={con.id} >
                                    <img src={process.env.PUBLIC_URL + `/assetes/imges/main_s01${idx + 1}.jpg`} alt="" />
                                </figure>
                                <strong>{con.tit}</strong>
                                <p>
                                    {con.des}
                                </p>
                            </Link>
                        )
                    })

                }
            </div>
        </section >
    )
}

export default MainContent