
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
