import React, { Component } from 'react';


class Clock extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            date: props.date
        };
        console.log( props );
    }

    render() {
        const { date } = this.state;
        return (
            <div>
                <b>Clock: </b>
                <span>{date.toLocaleDateString()} {date.toLocaleTimeString()}</span>
            </div>
        )
    }

    tick() {
        this.setState( {
            date: new Date()
        } )
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillMount() {
        clearInterval( this.timerID );
    }
}

Clock.defaultProps = {
    date: new Date()
}

export default Clock;