import React, { useEffect } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useRootStore } from './index'
import './App.css'

import { Layout } from 'antd'
import {FooterLayout, HeaderLayout} from './Layouts'
import { ContentLayout } from './Layouts'

function App() {

    const { fetchContents } = useRootStore()

    useEffect(() => {
        fetchContents()
    }, [])

    return (
        <>
            <Layout className='layout'>
                <HeaderLayout />
                <DndProvider backend={ HTML5Backend }>
                    <ContentLayout />
                </DndProvider>
            </Layout>
            <FooterLayout/>
        </>
    )
}

export default App