import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const menu = [
    {
        category: "Hot Coffee",
        items: [
            { name: "Forest Brew Espresso", price: "₹190", desc: "Earthy notes, strong finish, local beans." },
            { name: "Classic Americano", price: "₹170", desc: "Rich, smooth, best enjoyed with a sunrise." },
            // Add more items as needed
        ],
        color: "bg-forest-light",
    },
    {
        category: "Ice Coffee",
        items: [
            { name: "Mossy Mocha Chill", price: "₹210", desc: "Cool chocolate, refreshing mint, over ice." },
            // Add more items
        ],
        color: "bg-moss",
    },
    {
        category: "Teas & Herbal Brews",
        items: [
            { name: "Leaf Whisper Green Tea", price: "₹150", desc: "Organic green tea, filtered sunlight taste." },
            // Add more items
        ],
        color: "bg-earth-dark",
    },
    {
        category: "Specials",
        items: [
            { name: "Waffle Grove", price: "₹270", desc: "Golden waffle, wild berry compote, honey drizzle." },
            // Add more items
        ],
        color: "bg-accent",
    }
]

export default function Menu() {
    return (
        <div className="bg-moss/20 min-h-screen font-serif flex flex-col">
            <Navbar />
            <main className="flex-1 py-12 px-6 max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-forest-dark mb-8 animate-fade-in-down">Our Menu</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {menu.map((section, i) => (
                        <div key={i} className={`rounded-3xl shadow-lg p-6 ${section.color} animate-fade-in-up hover:scale-105 transition-transform duration-300`}>
                            <h2 className="text-2xl font-semibold mb-4 text-stone">{section.category}</h2>
                            <ul>
                                {section.items.map((item, j) => (
                                    <li key={j} className="mb-4 border-b border-stone/30 pb-2">
                                        <span className="block text-lg font-bold">{item.name}</span>
                                        <span className="block text-md text-stone/80">{item.desc}</span>
                                        <span className="block text-md font-semibold text-accent mt-1">{item.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-10 text-center">
                    <a href="/gallery" className="inline-block rounded bg-forest text-earth-light px-6 py-3 text-lg font-semibold shadow hover:bg-stone transition-colors">See the Café's Greenery</a>
                </div>
            </main>
            <Footer />
        </div>
    )
}
