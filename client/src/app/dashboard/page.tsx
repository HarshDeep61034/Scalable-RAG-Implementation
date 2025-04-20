import FileUploadComponent from "@/components/file-upload";

export default function Dashboard() {
    return (
        <div className="min-h-screen w-screen flex">
            <div className="w-[30vw] min-h-screen">
                <FileUploadComponent />
            </div>
            <div className="w-[70vw] min-h-screen border-l-2 p-2">
                2
            </div>
        </div>
    )
}