import MainLayout from "@/components/layout/Main";
import Heading from "@/components/Heading";
import Footer from "@/components/Footer";

export default function Marketing() {
  return (
    <MainLayout>
      <div className="min-h-full flex flex-col">
        <div className="flex flex-col items-center justify-content-center md:justify-center text-center gap-y-8 flex-1 px-6 pb-10">
          <Heading />
        </div>
        <Footer />
      </div>
    </MainLayout>
  );
}
