import React from 'react'
import NavMenu from './NavMenu'

const Aside = () => {
    return (
        <aside>
            <div className="aside_lnb">
                <NavMenu />
            </div>

            <div className="side-customer">
                <img src={process.env.PUBLIC_URL + "/assetes/imges/slogan.png"} alt="" />
            </div>
        </aside>
    )
}

export default Aside