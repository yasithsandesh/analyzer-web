"use client";
import styles from "@/components/Header/Header.module.css";
import { useState } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Header = () => {
  const [loginSucess, setLoginSucess] = useState('sucss');
  const[changeRealDemo,setChangeRealDemo] = useState()

  return (
    <header>
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4  z-50 bg-transparent ">
        <div className=" flex flex-row items-center ">
          <span className="header-title-c gap-2 invisible md:visible">
            DTrader
          </span>
          <MenuIcon className=" visible md:invisible"  onClick={toggleOptionPane}/>
          <div className=" cursor-pointer gap-2 ">
            {findTheme == "light" ? (
              <DarkModeIcon onClick={toggleMode} />
            ) : (
              <LightModeIcon onClick={toggleMode} style={{ color: "black" }} />
            )}
          </div>
        </div>
        <div className="flex flex-row gap-4 cursor-pointer invisible md:visible">
          <span className="header-title-c ">Analyser</span>
          <span className="header-title-c">Chart</span>
          <span className="header-title-c">Store</span>
          <span className="header-title-c">Bot</span>
        </div>
        <div className="flex gap-2  flex-shrink-0 justify-start md:justify-end">
          {loginSucess == "sucess" ? (
            <div className="flex flex-row items-center gap-3">
              <div className={styles.realStatus}>
                {changeRealDemo == "real" ? (
                  <span>REAL</span>
                ) : (
                  <span>DEMO</span>
                )}
              </div>
              <div
                className={styles.realDemoBtn}
                onClick={() => {
                  setChangeRealDemo("real");
                }}
              >
                <span>Real</span>
                <span>0.00 USD</span>
              </div>

            <div className={styles.realDemoBtn} onClick={()=>{setChangeRealDemo('demo')}}>
              <span>Demo</span>
              <span>11111111.00 USD</span>
            </div>
          </div>):( <><button className={styles.loginbtn}>Login</button><button className="signup-btn">Sign up</button></>)}
         
       
        </div>

      
      </nav>

      <div>
          <div
            className={navItem}
          >
            <span className="header-sm-title-c">Analyser</span>
            <span className="header-sm-title-c">Chart</span>
            <span className="header-sm-title-c">Store</span>
            <span className="header-sm-title-c">Bot</span>
          </div>
        </div>
    </header>
  );
};

export default Header;
