import type { UserFiledType, UserStoreType } from '@/types/user'
import { createSlice } from '@reduxjs/toolkit'
import type { AppDispatch } from '..'
import { getLocalToken, request, setLocalToken } from '@/utils'
import { LOGINURL } from '@/apis'

const userStore = createSlice({
  name: 'user',
  // 数据状态
  initialState: {
    token: getLocalToken() ?? ''
  } as UserStoreType,
  // 同步修改方法
  reducers: {
    setToken (state, action) {
      state.token = action.payload
      setLocalToken(action.payload)
    }
  }
})

// 解构出actionCreater
const { setToken } = userStore.actions

// 获取reducer函数
const userReducer = userStore.reducer

// 异步方法封装
const fetchLogin = (loginForm:UserFiledType) => {
  return async (dispatch:AppDispatch) => {
    const res = await request.post(LOGINURL, loginForm)
    dispatch(setToken(res.data.token))
  }
}

export { fetchLogin }

export default userReducer