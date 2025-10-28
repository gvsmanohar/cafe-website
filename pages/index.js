import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function Home() {
    return (
        <div className="bg-gradient-to-br from-forest-dark to-forest-light min-h-screen font-serif flex flex-col">
            <Navbar />
            <main className="flex-1 flex flex-col justify-center items-center px-4 py-12">
                <section className="text-center">
                    <h1 className="text-5xl font-bold animate-fade-in-down mb-4 tracking-tight text-earth-light">Forest Within A Café</h1>
                    <p className="text-xl mb-8 animate-fade-in-up text-earth-light/90 max-w-2xl mx-auto">
                        Escape the city. Enter a magical, earthy sanctuary full of greenery, soft light, and the best coffee in town.
                    </p>
                    <a href="/reserve" className="inline-block rounded bg-accent text-stone px-8 py-3 font-bold shadow animate-bounce hover:bg-forest">Reserve a Table</a>
                </section>
                <div className="mt-12 animate-fade-in">
                    <Image src="/cafe-greenery.jpg" alt="Cafe Interior Greenery" width={600} height={400} className="rounded-xl shadow-lg" />
                </div>
            </main>
            <Footer />
        </div>
    )
}
