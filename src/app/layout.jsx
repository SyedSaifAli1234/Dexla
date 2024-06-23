export const metadata = {
    title: 'NS Avocat',
    description: 'Web site created with Next.js.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    )
}
