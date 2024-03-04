import type {Metadata} from "next";
import {Inter, Montserrat} from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/index";
import FooterPage from "./footer/index";

const montserrat = Montserrat({subsets: ["latin"], variable: '--font-mont'});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <html lang="en">
        <body className={`${montserrat.className} dark:bg-dark h-screen`}>
            <Navbar/>
            {children}
            <FooterPage/>
        </body>
        </html>
    );
}
