import React from 'react';
import { Layout } from 'antd';
import {HeaderLayout, MainLayout, FooterLayout, UsersLayout} from './Layouts';
import './App.css';

function App() {
    return (
        <>
            <Layout className="layout">
                <HeaderLayout />
                <MainLayout />
                <FooterLayout />
                <UsersLayout />
            </Layout>
        </>
    );
}

export default App;