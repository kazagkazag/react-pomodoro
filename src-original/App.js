import React, {Component} from 'react';
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
            isTickingForWork: true,
            workDuration: 10,
            breakDuration: 3
        };

        this.timeout = null;

        this.changeBreakDuration = this.changeBreakDuration.bind(this);
        this.changeWorkDuration = this.changeWorkDuration.bind(this);
        this.toggleTimer = this.toggleTimer.bind(this);
    }

    toggleTimer() {
        window.clearTimeout(this.timeout);

        this.setState({
            time: 0,
            isTickingForWork: true,
            isRunning: !this.state.isRunning
        });
    }

    changeWorkDuration(minutes) {
        this.setState({
            workDuration: parseInt(minutes, 10)
        });
    }

    changeBreakDuration(minutes) {
        this.setState({
            breakDuration: parseInt(minutes, 10)
        });
    }

    componentDidUpdate() {
        if(this.state.isRunning) {
            this.tickIfNeeded();
        }
    }

    tickIfNeeded() {
        const shouldTickForWork = this.state.isTickingForWork && this.state.time < this.state.workDuration * 60;
        const shouldTickForBreak = !this.state.isTickingForWork && this.state.time < this.state.breakDuration * 60;

        if(shouldTickForWork || shouldTickForBreak) {
            this.tick();
        } else {
            this.changeCurrentPeriod();
        }
    }

    changeCurrentPeriod() {
        this.setState({
            time: 0,
            isTickingForWork: !this.state.isTickingForWork
        });
    }

    tick() {
        this.timeout = window.setTimeout(() =>{
            this.setState({
                time: this.state.time + 1
            });
        }, 100);
    }

    renderProgressBar() {
        return this.state.isRunning ? (
            <ProgressBar
                time={this.state.time}
                max={this.state.isTickingForWork ? this.state.workDuration : this.state.breakDuration}
                isTickingForWork={this.state.isTickingForWork}
            />
        ) : null;
    }

    renderConfig() {
        return !this.state.isRunning ? (
            <Config
                workDuration={this.state.workDuration}
                breakDuration={this.state.breakDuration}
                changeWorkDuration={this.changeWorkDuration}
                changeBreakDuration={this.changeBreakDuration}
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

export default App;
