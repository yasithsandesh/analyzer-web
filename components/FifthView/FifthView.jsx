import TitleMain from "../Title/TitleMain";
import FifthViewChart from "./FifthViewChart";

export default function FifthView(){
    return(
        <div>
            <TitleMain title={'Candle Color Analysis'}/>
            <div>
                <div>
                    <input placeholder="Candle Count"/>
                </div>

                <div>
                    <input placeholder="Candle Interval"/>
                </div>
            </div>
            <FifthViewChart/>
        </div>
    )
}