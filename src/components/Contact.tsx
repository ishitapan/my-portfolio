import { useState } from 'react'

type ContactForm = {
    name: string
    email: string
    message: string
}

function Contact() {
    const [form, setForm] = useState<ContactForm>({
        name: '',
        email: '',
        message: ''
    })

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setSuccess('')
        setError('')

        try {
            const response = await fetch(
                'https://porfolio-backend-f2vp.onrender.com/api/contact',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(form)
                }
            )

            if (!response.ok) {
                throw new Error('Failed to send message')
            }

            setSuccess('Message sent successfully. I will get back to you soon.')
            setForm({ name: '', email: '', message: '' })
        } catch (err) {
            setError('Something went wrong. Please try again later.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-16 px-4 bg-[url('https://www.rammaheshwari.com/assets/svg/common-bg.svg')] bg-cover bg-center">

            <div className="max-w-2xl mx-auto bg-white p-20 rounded-lg shadow-2xl">
                <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

                <p className="mb-8 text-gray-600 dark:text-gray-300">
                    Feel free to reach out for opportunities, collaboration, or just a
                    quick conversation.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border border-gray-300 dark:border-slate-600
                       bg-white dark:bg-slate-800 p-3 text-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border border-gray-300 dark:border-slate-600
                       bg-white dark:bg-slate-800 p-3 text-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border border-gray-300 dark:border-slate-600
                       bg-white dark:bg-slate-800 p-3 text-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-md bg-blue-600 px-6 py-3
                       text-white font-medium hover:bg-blue-700
                       transition disabled:opacity-60"
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>

                    {success && (
                        <p className="text-green-600 text-sm mt-2">{success}</p>
                    )}

                    {error && (
                        <p className="text-red-600 text-sm mt-2">{error}</p>
                    )}
                </form>

                {/* Optional static contact info */}

            </div>
        </section>
    )
}

export default Contact
