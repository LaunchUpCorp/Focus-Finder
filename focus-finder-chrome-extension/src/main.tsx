import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloProvider } from '@apollo/client'
import client from './GraphQL/index.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ApolloProvider client={client} >
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </ApolloProvider>
)
