import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const EthHelper = window.libName.default;


const helper = new EthHelper({
    host: "ws://10.0.2.2",
    port: 8546
});

console.log("helper: ", helper);
helper.connect();

helper.getCoinbase()
    .then((base)=>{
        console.log("coinbase: " , base);
    }).catch((err)=>{
        console.log(err);
    });


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
