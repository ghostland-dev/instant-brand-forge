
import Features from "@/components/Features";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
