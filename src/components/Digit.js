import React, { Component } from 'react'

class Digit extends Component {
    constructor(props) {
        super(props);

        this.state = {
           
        }
    }

    render() {
        return (
            <div className="Digit-container">{this.props.digit}</div>
        )
    }
}

export default Digit;