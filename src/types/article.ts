import type { Dayjs } from "dayjs"

export interface ChannelType {
    id: string,
    name: string
}
export const enum ImageCountType {
    NO = 0,
    ONE = 1,
    THREE = 3,
    AUTO = -1
}
// 图片
export interface ArticleImgType {
    type: ImageCountType
    images: string[]
}
// 文章添加
export interface ArticleAddType {
    title: string,
    content: string,
    cover: ArticleImgType,
    channel_id: number
}

// 后端查询参数整合
export interface ArticleSearchParamsType {
    page: number,
    per_page: number,
    begin_pubdate: string,
    end_pubdate: string,
    status: number,
    channel_id: number
}
// 搜索框查询查询
export interface ArticleSearchType {
    status: number,
    date: Dayjs[],
    channel_id: number,
}
// 文章查看
export interface ArticleParamsType extends ArticleAddType {
    comment_count: number,
    like_count: number,
    pubdate: string,
    read_count: number,
    id: string
}
// 返回类型
export interface ArticleResponseType {
    data: ArticleParamsType,
    message: string
}

