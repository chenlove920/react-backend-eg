import {
    Card,
    Breadcrumb,
    Form,
    Button,
    Radio,
    Input,
    Upload,
    Space,
    Select,
    type FormProps,
    type UploadProps,
    type RadioChangeEvent,
    type UploadFile
} from 'antd'
import ReactQuill from 'react-quill-new';
import { Link } from 'react-router'
import 'react-quill-new/dist/quill.snow.css';
import './index.scss'
import { useEffect, useRef, useState } from 'react';
import { createArticleAPI, getChannelAPI } from '@/apis/article';
import type { ArticleAddType, ChannelType } from '@/types/article';
import { PlusOutlined } from '@ant-design/icons';
import { baseURL } from '@/utils/request';
import { IMAGEUPLOADAPI } from '@/apis';


const Publish = () => {
    // 获取频道列表
    const [channelList, setChannelList] = useState<ChannelType[]>([])
    
    const getChannelList = async () => {
        const res = await getChannelAPI()
        setChannelList(res.data.channels)
    }
    useEffect(() => {
        getChannelList()
    }, [])

    const onFinsh: FormProps<ArticleAddType>['onFinish'] = (values) => {
        createArticleAPI(values)
    }
    // 控制图片Type
    const [imageList, setImageList] = useState<UploadFile[]>([])
    const cacheImageList = useRef<UploadFile[]>([])
    const [imageType, setImageType] = useState(0)
    const onTypeChange = (e: RadioChangeEvent) => {
        const type = e.target.value
        setImageType(type)
        if (type === 1) {
            // 单图，截取第一张展示
            const imgList = cacheImageList.current[0] ? [cacheImageList.current[0]] : []
            setImageList(imgList)
        } else if (type === 3) {
            // 三图，取所有图片展示
            setImageList(cacheImageList.current)
        }
    }

    const handleChange: UploadProps['onChange'] = (info) => {
        setImageList(info.fileList)
        cacheImageList.current = info.fileList 
    }
    const uploadUrl = `${baseURL}${IMAGEUPLOADAPI}`
    const { Option } = Select
    return (
        <div className="publish">
            <Card
                title={
                    <Breadcrumb items={[
                        { title: <Link to={'/'}>首页</Link> },
                        { title: '发布文章' },
                    ]}
                    />
                }
            >
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ type: imageType }}
                    onFinish={onFinsh}
                >
                    <Form.Item
                        label="标题"
                        name="title"
                        rules={[{ required: true, message: '请输入文章标题' }]}
                    >
                        <Input placeholder="请输入文章标题" style={{ width: 400 }} />
                    </Form.Item>
                    <Form.Item
                        label="频道"
                        name="channel_id"
                        rules={[{ required: true, message: '请选择文章频道' }]}
                    >
                        <Select placeholder="请选择文章频道" style={{ width: 400 }}>
                            {
                                channelList.map((item, key) => <Option key={key} value={item.id}>{item.name}</Option>)
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item label="封面">
                        <Form.Item name="type">
                            <Radio.Group onChange={onTypeChange}>
                                <Radio value={1}  >单图</Radio>
                                <Radio value={3}>三图</Radio>
                                <Radio value={0}>无图</Radio>
                            </Radio.Group>
                        </Form.Item>
                        {imageType > 0 && <Upload
                            listType="picture-card"
                            showUploadList
                            action={uploadUrl}
                            name='image'
                            onChange={handleChange}
                            maxCount={imageType}
                            fileList={imageList}
                        >
                            <div style={{ marginTop: 8 }}>
                                <PlusOutlined />
                            </div>
                        </Upload>}
                    </Form.Item>
                    <Form.Item
                        label="内容"
                        name="content"
                        rules={[{ required: true, message: '请输入文章内容' }]}
                    >
                        <ReactQuill
                            className="publish-quill"
                            theme="snow"
                            placeholder="请输入文章内容"
                        />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 4 }}>
                        <Space>
                            <Button size="large" type="primary" htmlType="submit">
                                发布文章
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Publish