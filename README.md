# GoPrivacy 🛡️

**GoPrivacy** is a powerful privacy tool that lets users preview and remove metadata (EXIF) from files like images, PDFs, and DOCX before uploading them online. Built with a modern, responsive UI and high-performance Go backend.

![GoPrivacy Preview](./public/banner.png) <!-- Optional: Replace or remove -->

---

## ✨ Features

- 🔍 Preview image metadata before cleaning
- 🧼 One-click metadata removal
- 🖼️ Supports images, with plans for PDF & DOCX
- 📱 Fully responsive UI (mobile + desktop)
- ⚡ Fast backend using Go + Gin
- 💾 Files are automatically deleted after processing

---

## 📸 What Is Metadata?

Metadata (e.g. EXIF) is hidden info stored in files like:
- GPS location
- Device make/model
- Timestamps
- Author/owner info

**GoPrivacy** strips this data to protect your privacy.

---

## 🧰 Tech Stack

| Layer      | Tech Used                          |
|------------|------------------------------------|
| Frontend   | Vite + React + TypeScript          |
| Styling    | Tailwind CSS + ShadCN UI           |
| Icons      | Lucide Icons                       |
| Backend    | Go (Golang) + Gin Web Framework    |
| EXIF Logic | Custom Go EXIF stripping utilities |

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Go 1.21+
- Node.js 18+
- `pnpm` (or `npm` / `yarn`)

---

## 📦 Project Structure


---

## 🖥️ Frontend Setup (React + Vite)

```bash
cd frontend
pnpm install        # or yarn / npm install
pnpm dev            # or yarn dev / npm run dev

## Backend Setup(Go)
cd backend
go run main.go

Your backend will run on: http//localhost:8080

## 📡 API Endpoints

### `POST /clean`

Removes metadata from an uploaded file and returns the cleaned file.

---

#### 🧾 Request:

- `multipart/form-data`
- **Key**: `file`
- **Value**: image/pdf/docx file

---

#### 📤 Response:

- `application/octet-stream`
- Cleaned downloadable file

---

#### 🧪 Example (cURL):

```bash
curl -X POST http://localhost:8080/clean \
  -F "file=@path/to/image.jpg" \
  -o clean_image.jpg
