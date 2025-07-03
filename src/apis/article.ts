import { request } from "@/utils"
import { ARTICLECHANNEL, methodTyps } from "."

// 登录请求
export const getChannelAPI  =  () =>  {
    return request({
        url: ARTICLECHANNEL,
        method: methodTyps.GET,
    })
}