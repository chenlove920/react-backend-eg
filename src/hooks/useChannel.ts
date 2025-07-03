import { getChannelAPI } from "@/apis/article"
import type { ChannelType } from "@/types/article"
import { useEffect, useState } from "react"

const useChannel = () => {
    // 获取频道列表
    const [channelList, setChannelList] = useState<ChannelType[]>([])

    const getChannelList = async () => {
        const res = await getChannelAPI()
        setChannelList(res.data.channels)
    }
    useEffect(() => {
        getChannelList()
    }, [])
    return {
        channelList
    }
}

export {useChannel}