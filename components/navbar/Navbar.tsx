import { HomeFillIcon, HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink"

const navItems = [
    { path: '/pricing', text: 'Pricing' },
    { path: '/about', text: 'About' },
    { path: '/contact', text: 'Contact' },
]

export const Navbar = () => {
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 rounded p-2 m-2">

            <Link className="flex items-center" href={'/'}>
                <HomeFillIcon className="mr-2" />
                <span>Home</span>
            </Link>

            <div className="flex flex-1"></div>

            {navItems.map(navItem => (
                <ActiveLink key={navItem.path} {...navItem} />
            ))}

        </nav>
    )
}
