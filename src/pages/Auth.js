import React from 'react'

import { Form, Input, Button } from 'antd';
import { login } from '../redux/auth/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Auth = () => {


    const history = useHistory()

    const dispatch = useDispatch()

    const onFinish = ( values ) => {
        console.log( 'Success:', values );

        dispatch( login( values, history ) )

    };

    const onFinishFailed = ( errorInfo ) => {
        console.log( 'Failed:', errorInfo );
    };

    return (
        <Form
            name="basic"
            labelCol={ {
                span: 8,
            } }
            wrapperCol={ {
                span: 8,
            } }

            onFinish={ onFinish }
            onFinishFailed={ onFinishFailed }
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={ [
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ] }
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={ [
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ] }
            >
                <Input.Password />
            </Form.Item>



            <Form.Item
                wrapperCol={ {
                    offset: 8,
                    span: 16,
                } }
            >
                <Button type="primary" htmlType="submit">
                    Login User
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Auth
