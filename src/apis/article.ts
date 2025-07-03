import { request } from "@/utils"
import {  ARTICLEADDAPI,  ARTICLECHANNELAPI,  methodTyps } from "."
import type { ArticleAddType } from "@/types/article"

// 登录请求
export const getChannelAPI = () => {
    return request({
        url: ARTICLECHANNELAPI,
        method: methodTyps.GET,
    })
}

// 提交文章
export const createArticleAPI = (formData: ArticleAddType) => {
 return request({
        url: ARTICLEADDAPI,
        method: methodTyps.POST,
        data: formData
    })
}