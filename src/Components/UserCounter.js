import { useState } from "react";

function UserComponent(props){
    const [life, setLife] = useState(props.startingLife);
    const less = "<";
    const more = ">";

    const componentStyle = {
        borderColor: props.color,
        boxShadow: `0 0 6px ${props.color}`,
    };

    function subtractLife(){
        setLife(life-1);
    }
    function addLife(){
        setLife(life+1);
    }

    return(
        <div className="usercomponent" style={componentStyle}>
            <button className="subtract-health-button" onClick={subtractLife}>{less}</button>
            <p className="usercomponent--life">{life}</p>
            <button className="add-health-button" onClick={addLife}>{more}</button>
        </div>
    );
}

export default UserComponent;