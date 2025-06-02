import { useState } from "react"
import axios from "axios"

export default function MetadataPreview() {
  const [file, setFile] = useState<File | null>(null)
  const [metadata, setMetadata] = useState<Record<string, string> | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null)
    setMetadata(null)
    setError("")
  }

  const handlePreview = async () => {
    if (!file) {
      setError("Please upload an image first.")
      return
    }

    setLoading(true)
    setError("")

    const formData = new FormData()
    formData.append("file", file)

    try {
      const res = await axios.post("http://localhost:8080/preview", formData)
      setMetadata(res.data)
    } catch (err) {
      setError("Failed to read metadata.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white shadow-md p-6 rounded-lg max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Preview EXIF Metadata</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />

      <button
        onClick={handlePreview}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading ? "Loading..." : "Preview Metadata"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {metadata && (
        <div className="mt-6 max-h-60 overflow-y-auto border-t pt-4 text-left">
          <h3 className="font-semibold mb-2 text-gray-700">Metadata Found:</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            {Object.entries(metadata).map(([key, value]) => (
              <li key={key}><strong>{key}</strong>: {value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
