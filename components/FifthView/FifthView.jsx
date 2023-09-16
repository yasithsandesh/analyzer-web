import TitleMain from "../Title/TitleMain";
import FifthViewChart from "./FifthViewChart";
import Styles from "@/components/FifthView/FifthView.module.css"

export default function FifthView(){
    return(
        <div>
            
            <div className=" flex flex-col justify-center gap-4">
            <TitleMain title={'Candle Color Analysis'}/>
                <div>
                    <input placeholder="Candle Count" className={Styles.fifthViewInput}/>
                </div>

                <div>
                    <input placeholder="Candle Interval" className={Styles.fifthViewInput}/>
                </div>
            </div>
            <FifthViewChart/>
        </div>
    )
}