import React from "react";

function Option() {
    return (
        <section className="work">

            <h2>Title</h2>

            <input
                type="range"
                min="1"
                max="20"
                step="1"
                value="10"
            />
        </section>
    );
}

export default Option;