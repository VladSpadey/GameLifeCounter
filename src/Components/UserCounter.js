import { useState } from "react";

function UserComponent(){
    const [life, setLife] = useState(20);

    return(
        <div className="UserComponent">
            <p className="UserComponent-Life">{life}</p>
        </div>
    );
}