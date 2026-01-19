const Contact = () => {
    return (
        <section id="contact" className="py-16 px-4 bg-[url('https://www.rammaheshwari.com/assets/svg/common-bg.svg')] bg-cover bg-center">
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-2xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold uppercase mb-3 text-teal-600 tracking-wide drop-shadow-lg">Contact</h2>
                    <p className="mt-4 text-sm text-gray-600">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
                </div>

                <form className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <label className="font-bold text-xs text-gray-700">Name</label>
                        <input type="text" placeholder="Enter Your Name" className="bg-gray-100 p-3 rounded-md focus:outline-indigo-600 text-sm" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-bold text-xs text-gray-700">Email</label>
                        <input type="email" placeholder="Enter Your Email" className="bg-gray-100 p-3 rounded-md focus:outline-indigo-600 text-sm" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-bold text-xs text-gray-700">Message</label>
                        <textarea rows={4} placeholder="Enter Your Message" className="bg-gray-100 p-3 rounded-md focus:outline-indigo-600 text-sm"></textarea>
                    </div>
                    <button className="bg-teal-600 text-white py-3 px-8 rounded font-bold self-end uppercase shadow-lg text-sm">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;