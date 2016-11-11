import React, {Component, PropTypes} from 'react';
import './App.css';

import Counter from "./Counter";
import ProgressBar from "./ProgressBar";
import Config from "./Config";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isRunning: false,
            time: 0,
            work: true,
            workTime: 10,
            breakTime: 3
        };

        this.timeout = null;

        this.changeBreakTime = this.changeBreakTime.bind(this);
        this.changeWorkTime = this.changeWorkTime.bind(this);
        this.toggleTimer = this.toggleTimer.bind(this);
    }

    toggleTimer() {
        window.clearTimeout(this.timeout);

        this.setState({
            time: 0,
            work: true,
            isRunning: !this.state.isRunning
        });
    }

    changeWorkTime(time) {
        this.setState({
            workTime: time
        });
    }

    changeBreakTime(time) {
        this.setState({
            breakTime: time
        });
    }

    componentDidMount() {
        this.setState({
            max: this.props.workMax
        });
    }

    componentDidUpdate() {
        if(this.state.isRunning) {
            this.tickIfNeeded();
        }
    }

    tickIfNeeded() {
        const tickingForWork = this.state.work && this.state.time < this.state.workTime * 60;
        const tickingForBreak = !this.state.work && this.state.time < this.state.breakTime * 60;

        if(tickingForWork || tickingForBreak) {
            this.tick();
        } else {
            this.changeCurrentPeriod();
        }
    }

    changeCurrentPeriod() {
        this.setState({
            time: 0,
            work: !this.state.work
        });
    }

    tick() {
        this.timeout = window.setTimeout(() =>{
            this.setState({
                time: this.state.time + 1
            });
        }, 1000);
    }

    renderProgressBar() {
        return this.state.isRunning ? (
            <ProgressBar
                time={this.state.time}
                max={this.state.work ? this.state.workTime : this.state.breakTime}
            />
        ) : null;
    }

    renderConfig() {
        return !this.state.isRunning ? (
            <Config
                workMax={this.props.workMax}
                breakMax={this.props.breakMax}
                workTime={this.state.workTime}
                breakTime={this.state.breakTime}
                changeWorkTime={this.changeWorkTime}
                changeBreakTime={this.changeBreakTime}
            />
        ) : null;
    }

    render() {
        return (
            <main>
                <Counter
                    time={this.state.time}
                    toggleTimer={this.toggleTimer}
                    isRunning={this.state.isRunning}
                />
                {this.renderProgressBar()}
                {this.renderConfig()}
            </main>
        );
    }
}

App.propTypes = {
    workMax: PropTypes.number,
    breakMax: PropTypes.number
};

export default App;
