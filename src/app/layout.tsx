import type { Metadata } from 'next'
import { ThemeProvider } from '@/context/ThemeContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollContainer from '@/components/ScrollContainer'
import './globals.css'

export const metadata: Metadata = {
    title: 'Inventio Inc | Premium Marketing & Design Solutions',
    description:
        'Comprehensive advertising and brand design solutions for business growth',
    keywords:
        'advertising, marketing, brand design, radio, billboard, social media',
    openGraph: {
        title: 'Inventio Inc',
        description: 'Premium Marketing & Design Solutions',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="min-h-screen flex flex-col bg-white dark:bg-primary-950">
                <ThemeProvider>
                    <Header />
                    <main className="flex-grow pt-[73px]">
                        <ScrollContainer>
                            {children}
                        </ScrollContainer>
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
