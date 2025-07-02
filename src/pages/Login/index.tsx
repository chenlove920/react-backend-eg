import Tes from "@/components/Tes"
import { useAppDispatch, useAppSelector } from "@store/hook"
import {add} from '@store/modules/testStore'
export default () => {
    const {count} = useAppSelector(state => state.test)
    const dispatch = useAppDispatch()
    const plus = () => {
        dispatch(add())
    }
    return <div>login<Tes></Tes>{count}<button onClick={plus}>plus</button></div>
}