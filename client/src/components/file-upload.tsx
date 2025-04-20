"use client"
import * as React from "react";
import { Upload } from "lucide-react";

const FileUploadComponent: React.FC = () => {
    const handleFileUpload = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.pdf';
        input.addEventListener('change', async (event) => {
            if (input.files && input.files.length > 0) {
                const file = input.files[0];
                if (file) {
                    const formData = new FormData();
                    formData.append('pdf', file);
                    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
                    await fetch(apiUrl + "/upload/pdf", {
                        method: "POST",
                        body: formData
                    });
                    console.log("file uploaded successfully");
                }
            }
        })
        input.click();
    }
    return (
        <div className="flex justify-center h-full items-center bg-zinc-900">

            <button onClick={handleFileUpload} className="flex cursor-pointer hover:bg-zinc-800 flex-col justify-center rounded-xl p-2 border-2 border-zinc-700 items-center">
                <h1>Upload a PDF file</h1>
                <Upload />
            </button>

        </div>
    )
}

export default FileUploadComponent;