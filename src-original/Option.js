import React, {PropTypes} from "react";

function Option(props) {
    return (
        <section className="work">

            <h2>{props.title}</h2>

            <input
                type="range"
                min="1"
                max={props.max}
                step="1"
                value={props.value}
                onChange={(event) => props.onChange(event.target.value)}
            />
        </section>
    );
}

Option.propTypes = {
    title: PropTypes.string,
    max: PropTypes.number,
    value: PropTypes.number,
    onChange: PropTypes.func
};

export default Option;