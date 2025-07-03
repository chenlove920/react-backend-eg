import { request } from "@/utils"
import { ARTICLEADDAPI, ARTICLECHANNELAPI, ARTICLELISTAPI, methodTyps } from "."
import type { ArticleAddType, ArticleListParamsType } from "@/types/article"

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
// 获取文章
export const getArticleListAPI = (params: ArticleListParamsType) => {
    return request({
        url: ARTICLELISTAPI,
        method: methodTyps.GET,
        params: params
    })
}