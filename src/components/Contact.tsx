const Contact = () => {
    return (
        <section id="contact" className="py-24 px-4 bg-[url('https://www.rammaheshwari.com/assets/svg/common-bg.svg')] bg-cover bg-center">
            <div className="max-w-3xl mx-auto bg-white p-10 rounded-lg shadow-2xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold uppercase mb-4">Contact</h2>
                    <div className="w-10 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-600">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
                </div>

                <form className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-sm text-gray-700">Name</label>
                        <input type="text" placeholder="Enter Your Name" className="bg-gray-100 p-4 rounded-md focus:outline-blue-600" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-sm text-gray-700">Email</label>
                        <input type="email" placeholder="Enter Your Email" className="bg-gray-100 p-4 rounded-md focus:outline-blue-600" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-bold text-sm text-gray-700">Message</label>
                        <textarea rows={6} placeholder="Enter Your Message" className="bg-gray-100 p-4 rounded-md focus:outline-blue-600"></textarea>
                    </div>
                    <button className="bg-blue-600 text-white py-4 px-12 rounded font-bold self-end uppercase shadow-lg">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;