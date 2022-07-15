import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="text-center fixed top-0 bg-blue-500 text-lg text-white w-full">
           <ul>
                <li className="inline-block pt-4 pb-4">
                   <Link to='/' className="pl-6 pr-8">
                       Home
                   </Link> 
                </li>

                <li className="inline-block pt-4 pb-4">
                   <Link to='/article-list' className="pl-6 pr-8">
                       Articles
                   </Link> 
                </li>

                <li className="inline-block pt-4 pb-4">
                   <Link to='/about' className="pl-6 pr-8">
                       About
                   </Link> 
                </li>
            </ul> 
        </nav>
    )
}

export default NavBar
