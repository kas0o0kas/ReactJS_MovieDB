import React from 'react';

const Form = ({height, setHeight, weight, setWeight, setBMI}) => {
    const heightInput = (e) => {
        e.preventDefault();
        setHeight(e.target.value);
    }

    const weightInput = (e) => {
        e.preventDefault();
        setWeight(e.target.value);
    }

    const submitForm = (e) => {
        e.preventDefault();
        setBMI(parseFloat(weight)*100*100/(parseFloat(height)*parseFloat(height)));
    }
    return (
        <form className = "input_form" onSubmit = {submitForm}>

            <div className = "input_container">
                <div className = "height_input">
                    <span>Height (in cm):</span>
                    <input type = "text" placeholder = "Height in cm" onChange = {heightInput}></input>
                </div>
                <div>
                    <span>Weight (in kg):</span>
                    <input type = "text" placeholder = "Weight in kg" onChange = {weightInput}></input>
                </div>
            </div>
            
            <button type = "submit">Calculate BMI</button>
        </form>
    );
};

export default Form;