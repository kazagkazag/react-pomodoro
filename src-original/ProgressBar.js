import React, {PropTypes} from "react";

function ProgressBar(props) {
    const styles = {
        width: props.time / (props.max * 60) * 100 + "%"
    };

    const periodName = props.isTickingForWork ? "Work" : "Break";

    return (
        <section className="bar-wrapper">
            <span className="bar-label">{periodName}</span>
            <div
                className="bar"
                style={styles}
            ></div>
        </section>
    );
}

ProgressBar.propTypes = {
    time: PropTypes.number,
    max: PropTypes.number,
    isTickingForWork: PropTypes.bool
};

export default ProgressBar;