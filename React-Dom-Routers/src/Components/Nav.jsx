import { NavLink } from "react-router-dom"

function Nav() {
    return (
        <>
            {/* links */}
            <ul className="flex justify-center items-center gap-4 bg-yellow-500 text-white font-semibold text-2xl   h-16 w-full">
                <li>
                    <NavLink className="hover:text-gray-700" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="hover:text-gray-700" to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink className="hover:text-gray-700" to="/contact">Contact</NavLink>
                </li>
            </ul>

        </>
    )
}

export default Nav