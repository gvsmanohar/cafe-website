import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Reserve() {
    const [form, setForm] = useState({
        name: '',
        date: '',
        time: '',
        guests: '1',
        email: ''
    })
    const [submitted, setSubmitted] = useState(false)

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        setSubmitted(true)
        // Here you can connect to a backend or send reservation email/API
    }

    return (
        <div className="bg-forest-dark min-h-screen font-serif flex flex-col">
            <Navbar />
            <main className="flex-1 flex flex-col justify-center items-center py-12 px-4">
                <h1 className="text-4xl font-bold text-earth-light mb-6 animate-fade-in-down">Reserve Your Forest Table</h1>
                {!submitted ? (
                    <form className="max-w-lg w-full p-8 bg-forest-light/90 rounded-2xl shadow-lg animate-fade-in-up" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-lg font-semibold text-stone mb-1">Name</label>
                            <input name="name" type="text" required className="w-full p-3 rounded-lg border border-earth-light bg-earth-light" value={form.name} onChange={handleChange} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-lg font-semibold text-stone mb-1">Date</label>
                            <input name="date" type="date" required className="w-full p-3 rounded-lg border border-earth-light bg-earth-light" value={form.date} onChange={handleChange} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-lg font-semibold text-stone mb-1">Time</label>
                            <input name="time" type="time" required className="w-full p-3 rounded-lg border border-earth-light bg-earth-light" value={form.time} onChange={handleChange} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-lg font-semibold text-stone mb-1">Guests</label>
                            <select name="guests" required className="w-full p-3 rounded-lg border border-earth-light bg-earth-light" value={form.guests} onChange={handleChange}>
                                {[...Array(10)].map((_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
                            </select>
                        </div>
                        <div className="mb-6">
                            <label className="block text-lg font-semibold text-stone mb-1">Email</label>
                            <input name="email" type="email" required className="w-full p-3 rounded-lg border border-earth-light bg-earth-light" value={form.email} onChange={handleChange} />
                        </div>
                        <button type="submit" className="w-full p-3 rounded-xl bg-accent text-stone font-bold text-lg hover:bg-moss transition-colors animate-bounce">Reserve Table</button>
                    </form>
                ) : (
                    <div className="max-w-lg w-full p-8 bg-earth-light rounded-2xl shadow-lg text-center animate-fade-in-up">
                        <h2 className="text-2xl font-bold text-forest-dark mb-3">Reservation Confirmed!</h2>
                        <p className="text-lg text-stone mb-3">
                            Thank you, <span className="font-bold">{form.name}</span>!<br />
                            Your table for {form.guests} on <span className="font-semibold text-forest">{form.date}</span> at <span className="font-semibold text-forest">{form.time}</span> is reserved.
                        </p>
                        <p className="text-md text-moss">We’ve sent confirmation to {form.email}<br />We look forward to welcoming you to our forest!</p>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    )
}
