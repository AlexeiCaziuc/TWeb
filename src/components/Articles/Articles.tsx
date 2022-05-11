import { Row } from 'antd'
import { observer } from 'mobx-react'
// import { useCallback, useState } from 'react'
import { useDrop } from 'react-dnd'

import { useRootStore } from '../../index'
import { IContentModel } from '../interfaces'
import { CustomCards } from '../CustomCard'
export const Articles = observer(() => {
    const { contents } = useRootStore()
    const [ , drop ] = useDrop(() => ({ accept: 'article' }))

    return (
        <div
            ref={ drop }
        >
            <Row gutter={ 16 }>
                {
                    contents.map((content: IContentModel, index: number) => {
                        return (

                            <CustomCards
                                key={ index }
                                content={ content }
                            />
                        )
                    })
                }
            </Row>

        </div>

    )
})