import TitleMain from "../Title/TitleMain";
import ChartLastDigit from "./ChartLastDigit";

export default function FirstView(){
    return(
        <div>
            <TitleMain title={'Last Digit Statistics Percentage'}/>
            <div>
                <ChartLastDigit/>
            </div>
        </div>
    )
}

