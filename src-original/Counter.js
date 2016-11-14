import React, {PropTypes} from "react";
import * as utils from "./utils";

function Counter(props) {
    const className = `controller ${!props.isRunning ? "paused" : ""}`;
    return (
        <h1 className="counter">
            {utils.formatTime(props.time)}
            <button
                className={className}
                onClick={props.toggleTimer}
            />
        </h1>
    );
}

Counter.propTypes = {
    time: PropTypes.number,
    toggleTimer: PropTypes.func,
    isRunning: PropTypes.bool
};

export default Counter;