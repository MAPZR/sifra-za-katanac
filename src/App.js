import React, { Component } from 'react'
import Digit from './components/Digit'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            digit1: '6',
            digit2: '7',
            digit3: '8',
            digit4: '9',
            number1: 6,
            number2: 7,
            number3: 8,
            number4: 9,
        };

        setInterval(this.updateDigits, 1000);
    }

    updateDigits = () => {
        let isNewYear = this.isNewYear();

        if (isNewYear) {
            this.setState({ number1: 5, number2: 2, number3: 7, number4: 3 });
        } else {
            let num1 = this.getRandomNumberFromZeroToNine();
            let num2 = this.getRandomNumberFromZeroToNine();
            let num3 = this.getRandomNumberFromZeroToNine();
            let num4 = this.getRandomNumberFromZeroToNine();
            console.log(num1, num2, num3, num4);
            this.setState({ number1: num1, number2: num2, number3: num3, number4: num4 });
        }
    }

    isNewYear = () => {
        // const newYearDate = new Date(2024, 0, 1, 0, 0, 1);
        const newYearDate = new Date(2023, 11, 26, 19, 14, 1);
        const currentDate = new Date();

        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const day = currentDate.getDate();

        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const secounds = currentDate.getSeconds();

        console.log(year, month, day, hours, minutes, secounds);

        if (currentDate.getTime() > newYearDate.getTime()) {
            return true;
        } else {
            return false;
        } 
    }

    getRandomNumberFromZeroToNine = () => {
        return Math.floor(Math.random() * 10); // Returns a random integer from 0 to 9:
    }

    render() {
        return (
            <div className="App-container">
                <div className="App-central-square">
                    <div className="App-text-area">
                        <div className="App-headline">Poklon za Igora</div>
                        <div>31.12.2023. tačno u ponoć prikazaće se šifra</div>
                        <div>Tada će Igor moći da otvori svoj poklon</div>

                    </div>

                    <div className="App-padlock">
                        <div className="App-headline">Šifra za katanac:</div>
                        <div className="App-padlock-code">
                            <Digit digit={this.state.number1}></Digit>
                            <Digit digit={this.state.number2}></Digit>
                            <Digit digit={this.state.number3}></Digit>
                            <Digit digit={this.state.number4}></Digit>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;