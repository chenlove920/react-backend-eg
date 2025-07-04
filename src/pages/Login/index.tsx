import { Button, Card, Form, Input, message, type FormProps } from "antd"
import type { UserFiledType } from "@/types/user"
import { useAppDispatch } from "@store/hook"
import { fetchLogin } from "@store/modules/userStore"
import logo from '@assets/logo.png'
import './index.scss'
import { useNavigate } from "react-router"


const Login = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [messageApi, contextHolder] = message.useMessage();

    const onFinish: FormProps<UserFiledType>['onFinish'] = async (values) => {
        // const { mobile, code } = values
        try {
            await dispatch(fetchLogin(values))
             messageApi.success('登录成功');
             navigate('/')
        } catch (error) {
            messageApi.error('登录失败')
        }
    }
    return (
        <div className="login">
            {contextHolder}
            <Card className="login-container">
                <img className="login-logo" src={logo} alt="" />
                {/* 登录表单 */}
                <Form
                    name="userForm"
                    onFinish={onFinish}
                    validateTrigger="onBlur"
                >
                    <Form.Item
                        name="mobile"
                        initialValue="13800000002"
                        rules={[
                            {
                                required: true,
                                message: '请输入手机号',
                            },
                            {
                                pattern: /^1[3-9]\d{9}$/,
                                message: '请输入正确的手机号格式'
                            }
                        ]}
                    >
                        <Input size="large" placeholder="请输入手机号" />
                    </Form.Item>
                    <Form.Item
                        name="code"
                        initialValue="246810"
                        rules={[
                            {
                                required: true,
                                message: '请输入验证码',
                            }
                        ]}
                    >
                        <Input size="large" placeholder="请输入验证码" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div >
    )
}

export default Login