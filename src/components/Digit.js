import React, { Component } from 'react'

class Digit extends Component {
    constructor(props) {
        super(props);

        this.state = {
           // digit: '0',
        }
    }

    componentWillReceiveProps(nextProps) {
        // this.setState({ digit: this.props.digit });
    }

    render() {
        return (
            <div className="Digit-container">{this.props.digit}</div>
        )
    }
}

export default Digit;