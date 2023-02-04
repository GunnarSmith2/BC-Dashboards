import React from "react"
import './sidebar.css'

// Imported Images //
import BC from '../../images/BaseballCloud.jpg'

//Imported Icons //
import {HiShoppingCart} from 'react-icons/hi'

const Sidebar = () => {
    return(
        <div className="sideBar grid">
            <div className="logoDiv flex">
                <img src={BC} alt="BaseballCloud"  />
                <h2>BaseballCloud</h2>
            </div>

            <div className="menuDiv">

                <h3 className="divTitle">
                        <a href="#" className="menuLink flex">
                            <HiShoppingCart className/>
                            <span className="littleText">
                                Products
                            </span>
                        </a>
                </h3>
                <ul className="menulists grid">
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            Analyzr
                        </a>
                    </li>
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            BallR
                        </a>
                    </li>
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            BCTeam
                        </a>
                    </li>
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            PitchR
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar