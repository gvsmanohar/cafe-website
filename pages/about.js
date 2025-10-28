import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
    return (
        <div className="bg-earth-light min-h-screen font-serif flex flex-col">
            <Navbar />
            <main className="flex-1 px-4 py-12 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-forest-dark mb-6 animate-fade-in-down">Our Story</h1>
                <section className="bg-forest-light/60 p-8 rounded-lg shadow-md animate-fade-in">
                    <h2 className="text-2xl font-semibold mb-3 text-stone">A Forest Within A Café</h2>
                    <p className="text-lg mb-4 text-stone/90">
                        The Bean Board Endada is designed as an immersive biophilic café that transports customers into an earthy, magical forest dimension—blurring the boundaries between architecture and nature, creating a multi-sensory sanctuary for relaxation, connection and awe.
                    </p>
                    <p className="text-lg mb-4 text-stone/90">
                        The moment you step in, you’ll enter a cave-like space in a hidden forest grove. Layers of greenery, soft filtered light, earthy textures and subtle sounds of nature create an atmosphere that feels both otherworldly and grounding. Our vision is to awaken nostalgia, curiosity and calm—inviting patrons to breathe deep, reconnect with nature, and enjoy the finest coffee in town.
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-2 text-stone">
                        <li>Earthy cave-like architecture</li>
                        <li>Biophilic design with living greenery</li>
                        <li>Filtered ambient lighting & water features</li>
                        <li>Organic furniture & tactile details</li>
                        <li>Signature drinks and gourmet food specials</li>
                    </ul>
                </section>
            </main>
            <Footer />
        </div>
    )
}
