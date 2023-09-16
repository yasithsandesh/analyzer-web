import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import HeaderSelecter from "@/components/HeaderSelecter/HeaderSelecter";
import GridLayout from "react-grid-layout";
import FirstView from "@/components/FirstView/FirstView";
import SecondView from "@/components/SecondView/SecondView";
import ThirdView from "@/components/ThirdView/ThirdView";
import FourthView from "@/components/FourthView/FourthView";
import FifthView from "@/components/FifthView/FifthView";
import { Responsive, WidthProvider } from "react-grid-layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const ResponsiveGridLayout = WidthProvider(Responsive);

  return (
    <>
      <main className={`flex min-h-screen flex-col ${inter.className}`}>
        <Header />
        <HeaderSelecter />
        <div className=" p-10">
          <ResponsiveGridLayout
            className="layout"
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 800, md: 200, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={500}
           
          >
            <div key="a">
              <FirstView />
            </div>
            <div key="b">
              <SecondView />
            </div>
            <div key="c">
              <ThirdView />
            </div>
            <div key="d">
              <FourthView />
            </div>
            <div key="e">
              <FifthView />
            </div>
           
          </ResponsiveGridLayout>
        </div>
      </main>
    </>
  );
}
