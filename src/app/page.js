
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function Home() {
    return (
            <div>
                <main className="flex flex-col justify-center items-center w-full h-screen bg-slate-100">
                    <h1 className="text-2xl text-wrap text-blue-700">Section example</h1>
                </main>
                <Footer />
            </div>      
    )
}
