import Faqs from "@/components/home/Faqs";
import Intro from "@/components/home/Intro";
import Search from "@/components/home/Search";
import Steps from "@/components/home/Steps";
import TestComponent from "@/components/TestComponent";

export default function Home() {

  return (
    <main className="bg-white">
      <Search/>
      <Intro />
      <Steps/>
      
    </main>
  );
}
