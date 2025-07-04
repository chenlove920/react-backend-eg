import { Card, Breadcrumb, Form, Button, Radio, DatePicker, Select, Space, Table, Tag, type FormProps, Popconfirm, } from 'antd'
import locale from 'antd/es/date-picker/locale/zh_CN'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { type ArticleImgType, type ArticleParamsType, type ArticleSearchParamsType, type ArticleSearchType } from '@/types/article'
import error from '@assets/error.png'
import { Link, useNavigate } from 'react-router'
import { useChannel } from '@/hooks/useChannel'
import { useEffect, useState } from 'react'
import { delArticleAPI, getArticleListAPI } from '@/apis/article'
const { Option } = Select
const { RangePicker } = DatePicker

const Article = () => {
    const navagite = useNavigate()
    // 删除
    const delArticle = async (data: ArticleParamsType) => {
        await delArticleAPI(data.id)
        setParams({
            ...params
        })
    }
    // 准备列数据
    const { channelList } = useChannel()
    const columns = [
        {
            title: '封面',
            dataIndex: 'cover',
            width: 120,
            render: (cover: ArticleImgType) => {
                return <img src={cover.images[0] || error} width={80} height={60} alt="" />
            }
        },
        {
            title: '标题',
            dataIndex: 'title',
            width: 220
        },
        {
            title: '状态',
            dataIndex: 'status',
            render: (data: number) => {
                switch (data) {
                    case 0:
                        return <Tag color='default'>草稿</Tag>
                    case 1:
                        return <Tag color='primary'>待审核</Tag>
                    case 2:
                        return <Tag color='success'>审核通过</Tag>
                    case 3:
                        return <Tag color='error'>审核失败</Tag>
                }
            }
        },
        {
            title: '发布时间',
            dataIndex: 'pubdate'
        },
        {
            title: '阅读数',
            dataIndex: 'read_count'
        },
        {
            title: '评论数',
            dataIndex: 'comment_count'
        },
        {
            title: '点赞数',
            dataIndex: 'like_count'
        },
        {
            title: '操作',
            render: (data: ArticleParamsType) => {
                return (
                    <Space size="middle">
                        <Button
                            type="primary"
                            shape="circle"
                            icon={<EditOutlined />}
                            onClick={() => navagite(`/publish?id=${data.id}`)}
                         />
                        <Popconfirm
                            title="确认删除该条文章吗?"
                            onConfirm={() => delArticle(data)}
                            okText="确认"
                            cancelText="取消"
                        >
                            <Button
                                type="primary"
                                danger
                                shape="circle"
                                icon={<DeleteOutlined />}
                            />
                        </Popconfirm>
                    </Space>
                )
            }
        }
    ]

    // 文章列表数据管理
    const [article, setArticleList] = useState({
        list: [],
        count: 0
    })



    const fetchArticleList = async () => {
        const res = await getArticleListAPI(params)
        const { results, total_count } = res.data
        setArticleList({
            list: results,
            count: total_count
        })
    }

    // 筛选功能
    // 1. 准备参数
    const [params, setParams] = useState<ArticleSearchParamsType>({
        page: 1,
        per_page: 10,
        begin_pubdate: '',
        end_pubdate: '',
        status: 0,
        channel_id: 0
    })
    useEffect(() => {
        fetchArticleList()
    }, [params])
    // 2. 获取筛选数据
    const onFinish: FormProps<ArticleSearchType>['onFinish'] = (formValue) => {
        // 3. 把表单收集到数据放到参数中(不可变的方式)
        setParams({
            ...params,
            channel_id: formValue.channel_id,
            status: formValue.status,
            begin_pubdate: formValue.date[0].format('YYYY-MM-DD'),
            end_pubdate: formValue.date[1].format('YYYY-MM-DD'),
        })
        // 4. 重新拉取文章列表 + 渲染table逻辑重复的 - 复用
        // reqData依赖项发生变化 重复执行副作用函数 
    }
    // 分页
    const onPageChange = (page: number) => {
        // 修改参数依赖项 引发数据的重新获取列表渲染
        setParams({
            ...params,
            page
        })
    }


    return (
        <div>
            <Card
                title={
                    <Breadcrumb items={[
                        { title: <Link to={'/'}>首页</Link> },
                        { title: '文章列表' },
                    ]} />
                }
                style={{ marginBottom: 20 }}
            >
                <Form initialValues={{ status: -1 }} onFinish={onFinish}>
                    <Form.Item label="状态" name="status">
                        <Radio.Group>
                            <Radio value={-1}>全部</Radio>
                            <Radio value={0}>草稿</Radio>
                            <Radio value={2}>审核通过</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item label="频道" name="channel_id">
                        <Select
                            placeholder="请选择文章频道"
                            style={{ width: 120 }}
                        >
                            {
                                channelList.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item label="日期" name="date">
                        {/* 传入locale属性 控制中文显示*/}
                        <RangePicker
                            locale={locale}
                        ></RangePicker>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ marginLeft: 40 }}>
                            筛选
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
            <Card title={`根据筛选条件共查询到 ${article.count} 条结果：`}>
                <Table rowKey="id" columns={columns} dataSource={article.list} pagination={{
                    total: article.count,
                    pageSize: params.per_page,
                    onChange: onPageChange
                }} />
            </Card>
        </div>
    )
}

export default Article