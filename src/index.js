import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import * as serviceWorker from './sw.js';
import { Global } from '@emotion/react';

const client = new QueryClient();

<Global
    styles={`
@font-face {
font-family: 'FlechaM-Regular';
font-display: swap;
src: url(../../assets/fonts/FlechaM/FlechaLRegular.otf) format('otf');
unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
font-family: 'BwGradual-Regular', sans-serif;
font-display: swap;
src: url(../../assets/fonts/Gradual-Regular.otf) format('otf');
unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
`}
/>;

const theme = extendTheme({
    fonts: {
        heading: 'FlechaM-Regular',
        body: 'BwGradual-Regular',
    },
});

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={client}>
            <ChakraProvider theme={theme}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ChakraProvider>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();
