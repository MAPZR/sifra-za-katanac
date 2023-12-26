import React, { Component } from 'react'
import Digit from './components/Digit'

class App extends Component {
    state = {

    };

    render() {
        return (
            <div className="App-container">
                <div className="App-central-square">
                    <div className="App-text-area">
                        <div className="App-headline">Poklon za Igora</div>
                        <div>31.12.2023-e tačno u ponoć prikazaće se šifra</div>
                        <div>Tada će Igor moći da otvori svoj poklon</div>
                        <div className="App-headline">Šifra za katanac:</div>
                    </div>

                    <div className="App-padlock-code">
                        <Digit></Digit>
                        <Digit></Digit>
                        <Digit></Digit>
                        <Digit></Digit>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;