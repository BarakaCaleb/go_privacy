export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20 px-4 sm:px-8 lg:px-16 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          Have suggestions, want to contribute, or found a bug? Reach out or connect on GitHub!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:goprivacy@proton.me"
            className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
          >
            Email Us
          </a>
          <a
            href="https://github.com/BarakaCaleb/goprivacy"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary text-primary px-6 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </section>
  )
}
