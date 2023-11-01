import { useState } from "react";

function UserComponent(props){
    const [life, setLife] = useState(props.startingLife);

    const componentStyle = {
        borderColor: props.color,
        boxShadow: `0 0 6px ${props.color}`,
    };

    return(
        <div className="usercomponent" style={componentStyle}>
            <p className="usercomponent--life">{life}</p>
        </div>
    );
}

export default UserComponent;