import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact page',
    description: 'pagina de contacto',
    keywords: ['contact', 'gaston', 'misho', 'dada']
};



export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}