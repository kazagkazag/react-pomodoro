import React, {PropTypes} from "react";
import Option from "./Option";

function Config(props) {
    return (
        <section className="config">

            <Option
                title={`Work duration (${props.workTime} minutes)`}
                max={props.workMax}
                value={props.workTime}
                onChange={props.changeWorkTime}
            />

            <Option
                title={`Break duration (${props.breakTime} minutes)`}
                max={props.breakMax}
                value={props.breakTime}
                onChange={props.changeBreakTime}
            />

        </section>
    );
}

Config.propTypes = {
    workMax: PropTypes.number,
    breakMax: PropTypes.number,
    breakTime: PropTypes.number,
    workTime: PropTypes.number,
    changeWorkTime: PropTypes.func,
    changeBreakTime: PropTypes.func
};

export default Config;