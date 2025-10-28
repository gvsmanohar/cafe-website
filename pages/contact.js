import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
    return (
        <div className="bg-earth-light min-h-screen font-serif flex flex-col">
            <Navbar />
            <main className="flex-1 py-12 px-4 max-w-3xl mx-auto flex flex-col items-center">
                <h1 className="text-4xl font-bold text-forest-dark mb-6 animate-fade-in-down">Contact & Location</h1>
                <section className="w-full bg-forest-light p-8 rounded-xl shadow-md mb-8 animate-fade-in">
                    <ul className="space-y-2 mb-4 text-lg text-stone font-semibold">
                        <li><span className="font-bold text-moss">Address:</span> Endada, Visakhapatnam, Andhra Pradesh</li>
                        <li><span className="font-bold text-moss">Phone:</span> +91-XXXXXXXXXX</li>
                        <li><span className="font-bold text-moss">Email:</span> info@beanboardendada.com</li>
                        <li>
                            <span className="font-bold text-moss">Follow us:</span>
                            <a href="https://instagram.com/" className="ml-2 text-accent" target="_blank">Instagram</a>
                            <a href="https://linkedin.com/" className="ml-2 text-accent" target="_blank">LinkedIn</a>
                        </li>
                    </ul>
                    <div className="w-full h-64 rounded-xl overflow-hidden shadow border border-forest">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.3835479460846!2d83.31521010797341!3d17.749420341796364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395e3c5faaaaab%3A0xb7bb0199c7e97db4!2sEndada%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1695743765671!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
