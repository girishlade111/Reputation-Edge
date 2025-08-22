import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <div className="prose prose-lg max-w-4xl mx-auto">
                 {children}
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
