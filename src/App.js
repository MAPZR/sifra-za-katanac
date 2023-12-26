import React, { Component } from 'react'
import Digit from './components/Digit'
import Snowflakes from './components/Snowflakes'

class App extends Component {
    constructor(props) {
        super(props);

        let number1 = 6;
        let number2 = 7;
        let number3 = 8;
        let number4 = 9;
        let animStyle= "noSnow";

        if (this.isNewYear()) {
            number1 = 5;
            number2 = 2;
            number3 = 7;
            number4 = 3;
            animStyle = "snowflake";
        }

        this.state = {
            digit1: number1,
            digit2: number2,
            digit3: number3,
            digit4: number4,
            animationStyle: animStyle, 
        };

        setInterval(this.updateDigits, 1000);
    }

    updateDigits = () => {
        let isNewYear = this.isNewYear();

        if (isNewYear) {
            this.setState({ digit1: 5, digit2: 2, digit3: 7, digit4: 3, animationStyle: "snowflake", });
        } else {
            let num1 = this.getRandomNumberFromZeroToNine();
            let num2 = this.getRandomNumberFromZeroToNine();
            let num3 = this.getRandomNumberFromZeroToNine();
            let num4 = this.getRandomNumberFromZeroToNine();
            console.log(num1, num2, num3, num4);
            this.setState({ digit1: num1, digit2: num2, digit3: num3, digit4: num4 });
        }
    }

    isNewYear = () => {
        // const newYearDate = new Date(2024, 0, 1, 0, 0, 1);
        // const newYearDate = new Date(2023, 11, 26, 22, 16, 10);
        const newYearDate = new Date(2023, 11, 27, 0, 0, 1);
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
                        <h1 className="App-headline">Poklon za Igora</h1>
                        <div>31.12.2023. tačno u ponoć prikazaće se šifra</div>
                        <div>Tada će Igor moći da otvori svoj poklon</div>

                    </div>

                    <div className="App-padlock">
                        <h1 className="App-headline">Šifra za katanac:</h1>
                        <div className="App-padlock-code">
                            <Digit digit={this.state.digit1}></Digit>
                            <Digit digit={this.state.digit2}></Digit>
                            <Digit digit={this.state.digit3}></Digit>
                            <Digit digit={this.state.digit4}></Digit>
                        </div>
                    </div>
                </div>

                {/* Ovaj div sadrzi pahuljice i ima position absolute. Pozicioniran je preko svih elemenata glavnog kontejnera i ne utice na njihov raspored */}
                <Snowflakes animationStyle={this.state.animationStyle}></Snowflakes>
            </div>
        )
    }
}

export default App;