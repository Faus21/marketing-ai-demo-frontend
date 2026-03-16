import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden pt-16">{children}</main>
      <Footer />
    </>
  );
}
