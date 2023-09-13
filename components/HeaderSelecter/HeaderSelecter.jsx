import styles from "@/components/HeaderSelecter/HeaderSelecter.module.css"
import SelectMarket from "./SelectMarket";
import SelectTicks from "./SelectTicks";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const HeaderSelecter = () => {
  return (
    <div className="flex flex-row  gap-2 md:gap-4 justify-center items-center">
      <div>
        <SelectMarket/>
      </div>

      <div>
        <SelectTicks/>
      </div>

      <div>
        <button>Manual Trade <PowerSettingsNewIcon/></button>
      </div>
    </div>
  );
};

export default HeaderSelecter;
