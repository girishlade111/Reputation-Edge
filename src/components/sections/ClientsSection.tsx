import React from 'react';

const clientLogos = [
    { name: "Innovate Inc." },
    { name: "Future Forward" },
    { name: "Quantum Leap" },
    { name: "Apex Solutions" },
    { name: "Starlight Co." },
    { name: "Nexus Group" }
];

const LogoPlaceholder = ({ clientName }: { clientName: string }) => (
    <svg className="w-full h-full text-muted-foreground" fill="currentColor" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
      <text x="60" y="18" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="500" textAnchor="middle" alignmentBaseline="middle">{clientName}</text>
    </svg>
);

export function ClientsSection() {
    return (
        <section id="clients" className="py-12 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <h3 className="text-center text-lg font-semibold text-muted-foreground tracking-wider mb-8">
                    TRUSTED BY INDUSTRY LEADERS
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                    {clientLogos.map((client, index) => (
                        <div key={index} className="flex justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" title={client.name}>
                             <div className="h-8 w-32">
                                <LogoPlaceholder clientName={client.name} />
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
