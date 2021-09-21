import React from 'react';

const Message = ({BMI,notice}) => {
    return (
        <div className = "message">
            <span className = "BMI_output">{BMI===""?"":"Your BMI is: " + BMI.toFixed(2)}</span>
            <span 
            style = {
                {color: (notice === "Dangerous Zone! !!!You are obese!!!")? "red":(notice === "You have a great BMI! Keep going!")?"cyan":"yellow"}
            }
            className = "message_output">{notice}</span>
        </div>
    );
};

export default Message;