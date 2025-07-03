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

export interface ArticleImgType {
    type: ImageCountType
    images: string[]
}
export interface ArticleAddType {
    title: string,
    content: string,
    cover: ArticleImgType,
    channel_id: number
}
export interface ArticleListParamsType {
    page: number,
    per_page: number,
    begin_pubdate: string,
    end_pubdate: string,
    status: number,
    channel_id: number
}
export interface ArticleSearchType {
    status: number,
    date: Dayjs[],
    channel_id: number
}
