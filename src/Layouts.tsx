import { Layout, Menu, Breadcrumb, Card } from 'antd';
import { CustomForm } from './components/CustomForm';
import { IUser } from './components/interfaces';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import {AuthFrom} from "./components/AuthForm";
import { Tooltip } from 'antd'
import { observer } from 'mobx-react-lite'
import { useDrag, useDrop } from 'react-dnd'
import { useRootStore } from './index'
import { IContentModel } from './components/interfaces'
import { Articles } from './components/Articles/Articles'
import { Link } from 'react-router-dom'
import { ROUTES } from './Routes/Rourtes'
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
                { ROUTES.map((route) => {
                    return <Menu.Item key={ route.id }><Link to={ `${ route.path}` }>{ route.name }</Link></Menu.Item>
                }) }
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

export const ContentLayout = () => {


    return (
        <>
            <Content style={ { padding: '0 50px' } }>
                <Breadcrumb style={ { margin: '16px 0' } }>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className='site-layout-content'>

                    <Routes>
                        <Route path={ ROUTES[0].path } />
                        <Route path={ ROUTES[1].path } element={ <Articles /> } />
                        <Route path={ ROUTES[3].path } element={ <CustomForm /> } />
                    </Routes>
                </div>
            </Content>
        </>

    )
}
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
            <a href="https://github.com/AlexeiCaziuc/TWeb/tree/Lab6&7"> Alexei Caziuc</a>
        </Footer>
    );
};
const style = {
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move',
    margin: '5px'
}

export const CardCustom = observer(({ content }: { content: IContentModel, }) => {

    const { changeContentPosition, findContent } = useRootStore()

    const { title, description } = content

    const originalIndex = findContent(content.id)

    const [ { isDragging }, drag ] = useDrag(() => ({
        type: 'article.CONTENT',
        item: {
            id: content.id,
            originalIndex
        },
        collect: (monitor) => {
            return {
                isDragging: !!monitor.isDragging()
            }
        },
        end: (item, monitor) => {
            const { id, originalIndex } = item
            const didDrop = monitor.didDrop()
            if (!didDrop) {
                changeContentPosition(id, originalIndex)
            }
        }
    }), [ content.id, originalIndex, changeContentPosition ])

    const [ , drop ] = useDrop(
        () => ({
            accept: 'article.CONTENT',
            hover({ id: draggedId }: any) {
                if (draggedId !== content.id) {
                    const { index: overIndex } = findContent(content.id)
                    changeContentPosition(draggedId, overIndex)
                }
            }
        }),
        [ findContent, changeContentPosition ]
    )

    const opacity = isDragging ? 0 : 1

    return (
        <div
            ref={ (node) => drag(drop(node)) }
            style={ { ...style, opacity } }
        >
            <Card title={ <Tooltip title={ title }>{ title }</Tooltip> }>
                { description }
            </Card>
        </div>

    )

})