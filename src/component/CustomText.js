import React from "react";

const CustomText = (props) =>{
    const {counter,incrementCounterByOne} =props ;
    return(
        <div>
        <p onClick={(e) => incrementCounterByOne()} > 
        Counter - {counter}
        </p>
           {(counter %2 ===0) ? "This is an Even Number" : "This is an Odd Number"} 
           {/* Conditional Rendering */}
        </div>
        );
    // if(counter%2===0){
    // return(
    //     <div>
    //     <p onClick={(e) => incrementCounterByOne()} > 
    //     Counter - {counter}
    //     </p>
    //         This is an Even Number.
    //     </div>
    //     );
    // }
    // else{
    //     return(
    //         <div>
    //         <p onClick={(e) => incrementCounterByOne()} > 
    //         Counter - {counter}
    //         </p>
    //             This is an Odd Number.
    //         </div>
    //         );
    // }
}

export default CustomText;