import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'

let queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen='false' position='bottom-right'></ReactQueryDevtools>
    </QueryClientProvider>

);
