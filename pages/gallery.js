import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

const images = [
    { src: "/interior1.jpg", alt: "Mossy Booths & Tree Columns" },
    { src: "/interior2.jpg", alt: "Cave-like Entrance Grove" },
    { src: "/interior3.jpg", alt: "Curved Furniture & Greenery" },
    { src: "/water-feature.jpg", alt: "Ripple Pool and Stream" },
    // Add more images as you have them (update src/alt)
]

export default function Gallery() {
    return (
        <div className="bg-earth-light min-h-screen font-serif flex flex-col">
            <Navbar />
            <main className="flex-1 py-12 px-4 max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-forest-dark mb-8 animate-fade-in-down">Interior Greenery Gallery</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {images.map((img, idx) => (
                        <div key={idx} className="rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 animate-fade-in-up hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-forest-light via-earth-light to-moss">
                            <Image src={img.src} alt={img.alt} width={400} height={300} className="w-full h-auto block" />
                            <div className="p-4 text-center text-stone font-semibold">{img.alt}</div>
                        </div>
                    ))}
                </div>
                <div className="mt-10 text-center">
                    <audio controls autoPlay loop className="mx-auto mb-2">
                        <source src="/forest-ambience.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    <div className="text-sm text-forest-dark">Ambient forest sounds play in the background for your virtual visit.</div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
