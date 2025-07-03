export interface ChannelType {
    id: string,
    name: string
}
const enum ImageCountType {
    NO = "0",
    ONE = "1",
    THREE = '3',
    AUTO = '-1'
}
export interface ArticleAddType {
    title: string,
    content: string,
    cover: {
        type: ImageCountType
        image?: string | string[] 
    },
    channel_id: number
}