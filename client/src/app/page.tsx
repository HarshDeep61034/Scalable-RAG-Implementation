import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import Link from "next/link";


export default function Home() {

  return (
    <div className="w-screen h-screen overflow-x-hidden flex justify-center items-center">
      <header className="flex justify-end items-center p-4 gap-4 h-16">
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      <div className="flex">
        <h1 className="text-5xl relative font-bold">
          DumpAI
        </h1>
        <SignedIn>
          <Link href="/dashboard">
            <button className="text-2xl mx-2 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer relative bottom-2 p-4 border-2 rounded-2xl">
              Dashboard
            </button>
          </Link>
        </SignedIn>

      </div>
    </div>
  );
}
