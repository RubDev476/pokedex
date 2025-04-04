import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { Providers } from "@/store/Provider";

export const metadata: Metadata = {
    title: "Pokedex | Blue Axe",
    description: "Prueba técnica para Blue Axe",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <Header />

                    {children}

                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
