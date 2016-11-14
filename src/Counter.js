import React from "react";

function Counter() {
    
    const className = `controller`;
    
    return (
        <h1 className="counter">
            0:00
            <button
                className={className}
            />
        </h1>
    );
}

export default Counter;