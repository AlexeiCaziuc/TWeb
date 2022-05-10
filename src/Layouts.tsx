import { Layout, Menu, Breadcrumb, Card } from 'antd';
import { CustomForm } from './components/CustomForm';
import { IUser } from './components/interfaces';
import {BrowserRouter} from "react-router-dom";
import {AuthFrom} from "./components/AuthForm";

const { Header, Content, Footer} = Layout;

const tabs: Array<String> = ['Home', 'List', 'App', 'About'];

export const HeaderLayout = () => {
    return (
        <Header>
            <div className="logo" />
            <Menu
                mode="horizontal"
                theme="dark"
                defaultSelectedKeys={['0']}
                style={{ justifyContent: 'center' }}
            >
                {tabs.map((tab, index) => (
                    <Menu.Item key={index}>{tab}</Menu.Item>
                ))}
            </Menu>
        </Header>
    );
};

let user: IUser = {
    id: '1',
    nickname: 'Alexei',
    password: 'pass',
    email: 'email@test.ru',
    phone: '+373777777',
    comment: 'BLIA',
    gender: 'Male',
    adress: 'micurina 19/71 ap.72'
};

export const MainLayout = () => {
    console.log(user);
    return (
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Card bordered={false}>
                <AuthFrom />
            </Card>
        </Content>
    );
};
export const UsersLayout = () => {

    let p = <><p>{user.nickname}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.comment}</p>
        <p>{user.gender}</p>
    </>;
    return p;
}
export const FooterLayout = () => {
    return (
        <Footer style={{ textAlign: 'center', position: 'sticky', bottom: '0' }}>
            Nice shitty app, created by
            <a href="https://github.com/AlexeiCaziuc/TWeb/tree/Lab4"> Alexei Caziuc</a>
        </Footer>
    );
};