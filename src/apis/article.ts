import { request } from "@/utils"
import { ARTICLEADDAPI, ARTICLEBYIDAPI, ARTICLECHANNELAPI, ARTICLELISTAPI, DELARTICLEAPI, methodTyps, UPDATEARTICLEAPI } from "."
import type { ArticleAddType, ArticleParamsType, ArticleResponseType } from "@/types/article"

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

// 更新文章
export const updateArticleAPI = (articleID:string, formData: ArticleAddType) => {
    return request({
        url: UPDATEARTICLEAPI.replace(':id', articleID),
        method: methodTyps.PUT,
        data: formData
    })
}
// 获取文章
export const getArticleListAPI = (params: ArticleParamsType) => {
    return request({
        url: ARTICLELISTAPI,
        method: methodTyps.GET,
        // 开启没数据
        // params: params
    })
}

// 删除文章
export const delArticleAPI = (id: string) => {
    return request({
        url: DELARTICLEAPI.replace(':id', id),
        method: methodTyps.DELETE,
    })
}

// 通过ID获取文章数据
export const getArticleById = (id: string):Promise<ArticleResponseType> => {
    return request({
        url: ARTICLEBYIDAPI.replace(':id', id),
        method: methodTyps.GET,
    })
}