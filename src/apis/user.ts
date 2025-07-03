import { request } from "@/utils";
import { LOGINURL, USERINFO } from ".";
import type { UserFiledType } from "@/types/user";

enum methodTyps   {
    POST = 'POST',
    GET = 'GET'
}
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
        url: USERINFO,
        method: methodTyps.GET,
    })
}