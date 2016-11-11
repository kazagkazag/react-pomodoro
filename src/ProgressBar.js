import React, {PropTypes} from "react";

function ProgressBar(props) {
    const styles = {
        width: props.time / (props.max * 60) * 100 + "%"
    };

    return (
        <section className="bar-wrapper">
            <div
                className="bar"
                style={styles}
            ></div>
        </section>
    );
}

ProgressBar.propTypes = {
    time: PropTypes.number,
    max: PropTypes.number
};

export default ProgressBar;