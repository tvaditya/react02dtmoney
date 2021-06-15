import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import {App} from './App';

createServer({
    routes() {
        this.namespace ='api';

        this.get('/transactions', () => {
            return [
                {
                    id: 1,
                    title: 'FrontEnd with React Course',
                    amount: 300,
                    type: 'deposit',
                    category: 'Development',
                    createdAt: new Date()
                }
            ]
        })
    }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

