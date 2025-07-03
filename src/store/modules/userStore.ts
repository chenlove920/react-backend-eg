import type { UserFiledType, UserInfoType, UserStoreType } from '@/types/user'
import { createSlice } from '@reduxjs/toolkit'
import type { AppDispatch } from '..'
import { clearLocalToken, getLocalToken, request, setLocalToken } from '@/utils'
import { LOGINURL, USERINFO } from '@/apis'
import { loginAPI, userInfoAPI } from '@/apis/user'

const userStore = createSlice({
  name: 'user',
  // 数据状态
  initialState: {
    token: getLocalToken() ?? '',
    userInfo: {}
  } as UserStoreType,
  // 同步修改方法
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      setLocalToken(action.payload)
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload
    },
    clearUserInfo(state) {
      state.token = ''
      state.userInfo = {} as UserInfoType
      clearLocalToken()
    }
  }
})

// 解构出actionCreater
const { setToken, setUserInfo, clearUserInfo } = userStore.actions

// 获取reducer函数
const userReducer = userStore.reducer

// 异步方法封装
const fetchLogin = (loginForm: UserFiledType) => {
  return async (dispatch: AppDispatch) => {
    const res = await loginAPI(loginForm)
    // if (res.data.token) {
    dispatch(setToken(res.data.token))
    // }
  }
}
// 获取个人信息
const fetchUserInfo = () => {
  return async (dispatch: AppDispatch) => {
    const res = await userInfoAPI()
    // if (res.data) {
    dispatch(setUserInfo(res.data))
    // }

  }
}


export { fetchLogin, fetchUserInfo, clearUserInfo }

export default userReducer