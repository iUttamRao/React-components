import React , { useState } from "react";
import CustomText from "./component/CustomText";

const App =()=>{
    const [counter,setCounter] = useState(0);
    const [name,setName] = useState("Uttam");
    // destructuring an array from useState
    // 0th index to read
    // 1st index to update
    // console.log(typeof useState())
    const incrementCounterByOne = () => {
        setCounter(counter+1);
    }

    return(
        <CustomText 
        counter={counter}
        incrementCounterByOne={incrementCounterByOne} /> 
        // Signature is same that's why we can directly call function name
    )
}

export default App; 