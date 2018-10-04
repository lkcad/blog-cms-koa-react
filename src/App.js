import React, {Component} from 'react';
import {Button} from 'antd';
import './App.css';
import style from './example.scss'

class App extends Component {
    componentDidMount() {

    }


    render() {
        return (
            <div className="App">
                <div className={style.qqq}>import scss</div>
                <Button type="primary">Button</Button>
            </div>
        );
    }
}

export default App;
