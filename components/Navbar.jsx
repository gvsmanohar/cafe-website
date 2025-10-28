import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="bg-forest-dark text-earth-light py-4 px-8 flex justify-between items-center shadow-md font-serif">
            <Link href="/" className="text-2xl font-bold">Bean Board Endada</Link>
            <div className="flex space-x-8 text-lg">
                <Link href="/about">About</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/gallery">Gallery</Link>
                <Link href="/reserve">Reserve</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </nav>
    )
}
