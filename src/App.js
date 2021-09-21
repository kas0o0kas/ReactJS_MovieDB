import { useState, useEffect } from "react";
import Form from "./Form";
import Message from "./Message";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [BMI, setBMI] = useState("");
  const [notice, setNotice] = useState("");

  useEffect (() =>{
    messageOutput();
  }, [BMI]);

  const messageOutput = () => {
    if(BMI === ""){
      setNotice("");
    }
    else if(BMI<18.5) {
      setNotice("Underweight! You should eat more!")
    }
    else if(18.5 <= BMI && BMI < 24.9) {
      setNotice("You have a great BMI! Keep going!")
    }
    else if(24.9 <= BMI && BMI < 29.9) {
      setNotice("You are Overweight! You should go on a diet!")
    }
    else {
      setNotice("Dangerous Zone! !!!You are obese!!!");
    }
  }
  return (
    <div className="App">
      <header><h1>Monkie_J BMI Calculator</h1></header>
      <Form
        weight = {weight}
        setWeight = {setWeight}
        height = {height}
        setHeight = {setHeight}
        setBMI = {setBMI}
      ></Form>
      <Message
        BMI = {BMI}
        notice = {notice}
      ></Message>
    </div>
  );
}

export default App;
