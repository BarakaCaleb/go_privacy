import { ArrowDownToLine } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section id="home" className="bg-white py-20 px-4 sm:px-8 lg:px-16 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          <Typewriter
            words={['Protect Your Privacy with GoPrivacy']}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          Easily remove hidden metadata from your photos, PDFs & docs before uploading online.
        </p>

        <a
          href="#upload"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
        >
          Get Started <ArrowDownToLine size={20} />
        </a>
      </div>
    </section>
  );
}
