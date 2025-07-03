import { request } from "@/utils"
import { ARTICLEADD, ARTICLECHANNEL, methodTyps } from "."
import type { ArticleAddType } from "@/types/article"

// 登录请求
export const getChannelAPI = () => {
    return request({
        url: ARTICLECHANNEL,
        method: methodTyps.GET,
    })
}

// 提交文章
export const createArticleAPI = (formData: ArticleAddType) => {
 return request({
        url: ARTICLEADD,
        method: methodTyps.POST,
        data: formData
    })
}