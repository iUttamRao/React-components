import React from "react";
import CustomText from "./component/CustomText";

// 1. render Method
// 2. componentDidMount
// 3. componentWillUnmount
class App extends React.Component{
  constructor(){ // First method to be executed but not a lifecycle method
    super(); // to access parent's method.
    console.log("Constructor is been called!");
    this.state = {
      counter:0,
    }
  }
  incrementByOne(){
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  render(){ // second method to be executed
    console.log("Render Method is been called!");
    const {counter} = this.state; //Destructure the state(object)
    return(
        <p>
          <CustomText 
        counter={counter}
        incrementCounterByOne={()=>this.incrementByOne()} />
          {/* Counter - {counter} */}
          </p>
    );
  }
  componentDidMount(){ // third method to be executed
    // All heavy lifting job is been executed here eg. api calls.
    console.log("ComponentDidMount is been called");
    // setInterval(()=>{
    //   this.setState({
    //     counter: this.state.counter + 1,
    //   })
    // },1000)
  }
  componentWillUnmount(){
    // It executes when component dies (what to do we will mention here)
    // if an api have to cancel due leak problem
    // or listener ko cancel karna ho
    console.log("ComponentWillUnmount is been called");
  }
}


export default App;