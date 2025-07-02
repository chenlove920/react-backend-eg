import Tes from "@/components/Tes"
import { useAppDispatch, useAppSelector } from "@store/hook"
import { add } from '@store/modules/testStore'
import { Button, Flex } from 'antd';


export default () => {
    const { count } = useAppSelector(state => state.test)
    const dispatch = useAppDispatch()
    const plus = () => {
        dispatch(add())
    }
    return (
        <Flex gap="small" wrap>
            login
            <Tes></Tes>{count}
            <Button  type="primary" onClick={plus}>plus</Button>
        </Flex>
    )

}

import React from 'react';

