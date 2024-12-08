"use client";

import MockMateLogo from "@/public/logo.svg"
import Image from "next/image";
import Link from "next/link";
import ShinyButton from "./shiny-button";

const Navbar = () => {
    return ( 
    <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between gap-1 rounded-3xl border border-gray-200/50 px-2 py-1 w-full my-4 bg-gradient-to-b from-white/60 to-white/30 backdrop-blur-md shadow-sm">
                <Link className="flex items-center justify-center px-1 py-1.5" href="/">
                    <div className="flex h-9 w-9 items-center justify-center rounded-3xl transition-colors md:h-8 md:w-8 bg-black text-white font-bold hover:bg-black hover:text-white">
                        <Image src={MockMateLogo} alt="MockMate Logo" className="p-[5px]"/>
                    </div>
                    <span className="ml-2 text-lg font-bold">
                        MockMate
                    </span>
                </Link>
                <div className="flex items-center gap-1">
                    <a href="/dashboard">
                        <ShinyButton className="rounded-3xl">
                            Get started
                        </ShinyButton>
                    </a>
                </div>
            </nav>
        </div>
    </header> );
}
 
export default Navbar;