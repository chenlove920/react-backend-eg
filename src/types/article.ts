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
export interface ArticleAddType {
    title: string,
    content: string,
    cover: {
        type: ImageCountType
        images: string[] 
    },
    channel_id: number
}