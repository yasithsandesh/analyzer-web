import styles from "@/components/Header/Header.module.css";
import { useState } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import axios from "axios";

const Header = () => {
  const [loginSucess, setLoginSucess] = useState('sucess');
  const[changeRealDemo,setChangeRealDemo] = useState()

  return (
    <header >
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4  bg-transparent">
        <div className=" flex flex-row items-center gap-2">
          <span>DTrader</span>
          <div className=" cursor-pointer">
            <DarkModeIcon/>
          </div>
        </div>
        <div className="flex flex-row gap-4 cursor-pointer">
          <span>Analyser</span>
          <span>Chart</span>
          <span>Store</span>
          <span>Bot</span>
        </div>
        <div className="flex gap-2 justify-end">
          {loginSucess=='sucess'?(   <div className="flex flex-row items-center gap-3">
            <div className={styles.realStatus}>
            {changeRealDemo=='real'?(<span>REAL</span>):<span>DEMO</span>}
            </div>
            <div className={styles.realDemoBtn} onClick={()=>{setChangeRealDemo('real')}}>
              <span>Real</span>
              <span>0.00 USD</span>
            </div>

            <div className={styles.realDemoBtn} onClick={()=>{setChangeRealDemo('demo')}}>
              <span>Demo</span>
              <span>11111111.00 USD</span>
            </div>
          </div>):( <><button className={styles.loginbtn} >Login</button><button className="signup-btn">Sign up</button></>)}
         
       
        </div>
      </nav>
    </header>
  );
};

export default Header;