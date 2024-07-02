import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing page',
    description: 'pagina de pricing',
    keywords: ['pricing', 'gaston', 'misho', 'dada']
};



export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}