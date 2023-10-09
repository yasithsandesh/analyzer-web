import styles from "@/components/HeaderSelecter/HeaderSelecter.module.css"
import SelectMarket from "./SelectMarket";
import SelectTicks from "./SelectTicks";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useState } from "react";
import TradeView from "../TradeEnter/TradeView";

const HeaderSelecter = ({symbolsArray}) => {

  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row  gap-2 md:gap-4  justify-center items-center">
      <div>
        <SelectMarket symbolsArray={symbolsArray}/>
      </div>

      <div>
        <SelectTicks/>
      </div>

      <div>
        <button onClick={()=>{
          setOpen(true)
        }}>Manual Trade <PowerSettingsNewIcon/></button>
      </div>

      <TradeView open={open} setOpen={setOpen}/>
    </div>
  );
};

export default HeaderSelecter;
