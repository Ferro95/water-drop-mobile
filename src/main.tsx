import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { client } from './utils/apollo';
import { ConfigProvider, ErrorBlock } from 'antd-mobile';
import zhCN from 'antd-mobile/es/locales/zh-CN';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </ApolloProvider>
);
