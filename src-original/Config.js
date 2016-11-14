import React, {PropTypes} from "react";
import Option from "./Option";

function Config(props) {
    return (
        <section className="config">

            <Option
                title={`Work duration (${props.workDuration} minutes)`}
                max={25}
                value={props.workDuration}
                onChange={props.changeWorkDuration}
            />

            <Option
                title={`Break duration (${props.breakDuration} minutes)`}
                max={10}
                value={props.breakDuration}
                onChange={props.changeBreakDuration}
            />

        </section>
    );
}

Config.propTypes = {
    breakDuration: PropTypes.number,
    workDuration: PropTypes.number,
    changeWorkDuration: PropTypes.func,
    changeBreakDuration: PropTypes.func
};

export default Config;