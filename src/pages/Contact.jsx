
export default function Contact () {
    return (
        <section className="max-w-4xl mx-auto px-6 py-16 text-gray-300">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">Contact</h2>
            <p className="mb-4">
                I’m currently open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <a
                href="mailto:prerna.rajput.dev@gmail.com"
                className="inline-block mt-4 bg-blue-400 text-black px-6 py-3 rounded-md 
             hover:bg-teal-500  shadow-md hover:shadow-blue-400/40 t
             transition duration-300 ease-in-out"
            >
                Say Hello!
            </a>

        </section>
    );
}
