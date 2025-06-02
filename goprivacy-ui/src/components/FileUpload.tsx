import { useState } from "react"
import { UploadCloud, Trash2 } from "lucide-react"

export default function Upload() {
  const [file, setFile] = useState<File | null>(null)

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    if (e.dataTransfer.files.length) {
      setFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFile(e.target.files[0])
  }

  const handleRemove = () => setFile(null)

  const handleStrip = async () => {
    if (!file) return

    const formData = new FormData()
    formData.append("file", file)

    const res = await fetch("http://localhost:8080/clean", {
      method: "POST",
      body: formData,
    })

    const blob = await res.blob()
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `cleaned_${file.name}`
    link.click()
  }

  return (
    <section id="upload" className="bg-white py-20 px-4 sm:px-8 lg:px-16 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Upload File to Clean</h2>
      <p className="text-gray-600 mb-6">Drag and drop a file or click to select. We’ll clean its metadata for you.</p>

      <label
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed border-primary bg-gray-50 p-10 rounded-xl cursor-pointer block max-w-xl mx-auto"
      >
        {file ? (
          <div className="space-y-2">
            <p className="text-gray-700 font-medium">{file.name}</p>
            <div className="flex justify-center gap-4">
              <button onClick={handleStrip} className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700">
                Strip Metadata
              </button>
              <button onClick={handleRemove} className="text-red-500 hover:underline flex items-center gap-1">
                <Trash2 size={16} /> Remove
              </button>
            </div>
          </div>
        ) : (
          <div className="text-gray-500 flex flex-col items-center gap-2">
            <UploadCloud size={36} />
            <span>Click or drop a file here (JPG, PNG, PDF, DOCX)</span>
          </div>
        )}
        <input type="file" onChange={handleChange} hidden />
      </label>
    </section>
  )
}
