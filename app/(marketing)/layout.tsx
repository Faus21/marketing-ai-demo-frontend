import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Starfield from "@/components/ui/starfield";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Starfield />
      <Header />
      <main className="relative z-10 overflow-x-hidden pt-14">{children}</main>
      <Footer />
    </>
  );
}
