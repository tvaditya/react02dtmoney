import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import {App} from './App';

createServer({
    models: {
        transaction: Model,
    },

    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: 'Python Basic Course',
                    type: 'deposit',
                    category: 'Sales',
                    amount: 197,
                    createdAt: new Date('2021-06-06 12:34:56'),
                },
                {
                    id: 2,
                    title: 'Headset Professional',
                    type: 'withdrawal',
                    category: 'Office',
                    amount: 399,
                    createdAt: new Date('2021-06-07 09:42:01'),
                }
            ]
        })
    },

    routes() {
        this.namespace ='api';

        this.get('/transactions', () => {
            return this.schema.all('transaction')
            // return [
            //     {
            //         id: 1,
            //         title: 'FrontEnd with React Course',
            //         amount: 300,
            //         type: 'deposit',
            //         category: 'Development',
            //         createdAt: new Date()
            //     }
            // ]
        });

        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody)

            return schema.create('transaction', data);
        });
    }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

