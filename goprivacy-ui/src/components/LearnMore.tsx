import { ShieldCheck, FileCheck2, Globe, Zap } from "lucide-react";

const features = [
  {
    title: "Privacy Protection",
    icon: <ShieldCheck size={32} className="icon-style" />,
    desc: "Remove sensitive metadata like GPS, author name, and creation date from files.",
  },
  {
    title: "Clean Files",
    icon: <FileCheck2 size={32} className="icon-style" />,
    desc: "Ensure your files are clean and safe before sharing them online.",
  },
  {
    title: "Universal Support",
    icon: <Globe size={32} className="icon-style" />,
    desc: "Supports images (JPEG, PNG), PDFs, and documents — all in one tool.",
  },
  {
    title: "Fast & Secure",
    icon: <Zap size={32} className="icon-style" />,
    desc: "Process files quickly in your browser without uploading to external servers.",
  },
];

export default function LearnMore() {
  return (
    <section id="learnmore" className="bg-gray-50 py-20 px-4 sm:px-8 lg:px-16 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Use GoPrivacy?</h2>
      <p className="text-gray-600 mb-12">Here’s what makes GoPrivacy essential before uploading your files.</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-[1.03] transition duration-300 ease-in-out"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
