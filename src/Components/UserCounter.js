import { useState, useEffect } from "react";

function UserComponent(props){
    const startingLifeNum = parseInt(props.startingLife, 10)
    const clickIncrementNum = parseInt(props.clickIncrement, 10)

    const [life, setLife] = useState(startingLifeNum);
    const clickIncrement = clickIncrementNum;
    const less = "<";
    const more = ">";

    const componentStyle = {
        borderColor: props.color,
        boxShadow: `0 0 6px ${props.color}`,
    };

    const lifeStyle = {
        color: life <= 0 ? '#660708' : '#f1faee',
    };

    function subtractLife(){
        setLife((prevLife) => prevLife - clickIncrement);
    }
    function addLife(){
        setLife((prevLife) => prevLife + clickIncrement);
    }

    return(
        <div className="usercomponent" style={componentStyle}>
            <button className="subtract-health-button" onClick={subtractLife}>{less}</button>
            <p className="usercomponent--life" style={lifeStyle}>{life}</p>
            <button className="add-health-button" onClick={addLife}>{more}</button>
        </div>
    );
}

export default UserComponent;