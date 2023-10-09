'use client'
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

const DerivAPIBasic = require('@deriv/deriv-api/dist/DerivAPIBasic');
import { useEffect, useState } from "react";

const app_id = 1089; // Replace with your app_id or leave the current one for testing.
const connection = new WebSocket(
  `wss://ws.derivws.com/websockets/v3?app_id=${app_id}`
);
const api = new DerivAPIBasic({ connection });

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  const ResponsiveGridLayout = WidthProvider(Responsive);

 

  const [symbols,setSymbols] = useState([])

  const symbolsArray =  symbols.active_symbols;
   
  const active_symbols_request = {
   // landing_company: "maltainvest", // Uncomment landing_company if you want to retrieve specific symbols.
   active_symbols: "brief",
   product_type: "basic",
 };

 const activeSymbolsResponse = async (res) => {
   const data = JSON.parse(res.data);

   setSymbols(data)

   if (data.error !== undefined) {
     console.log("Error : ", data.error?.message);
     connection.removeEventListener("message", activeSymbolsResponse, false);
     await api.disconnect();
   }

   if (data.msg_type === "active_symbols") {
     console.log(data.active_symbols);
   }

   connection.removeEventListener("message", activeSymbolsResponse, false);
 };

 const getActiveSymbols = async () => {
   connection.addEventListener('message', activeSymbolsResponse);
   await api.activeSymbols(active_symbols_request);
 };
 
 useEffect(()=>{
   getActiveSymbols()
 },[])

  return (
    <>
      <main className={`flex min-h-screen flex-col ${inter.className}`}>
        <Header />
        <HeaderSelecter symbolsArray={symbolsArray}/>
        <div className="p-10">
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
