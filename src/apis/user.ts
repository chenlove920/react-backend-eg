import { request } from "@/utils";
import { LOGINURL, methodTyps, USERINFOAPI } from ".";
import type { UserFiledType } from "@/types/user";


// 登录请求
export const loginAPI  =  (formData:UserFiledType) =>  {
    return request({
        url: LOGINURL,
        method: methodTyps.POST,
        data: formData
    })
}

// 用户信息
export const  userInfoAPI = () => {
    return request({
        url: USERINFOAPI,
        method: methodTyps.GET,
    })
}