import React from 'react'

import { Form, Input, Button } from 'antd';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { reg } from '../redux/auth/actions';

const Registration = () => {


    const history = useHistory()

    const dispatch = useDispatch()

    const onFinish = ( values ) => {
        console.log( 'Success:', values );

        dispatch( reg( values, history ) )

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
                        min: 3,
                        message: "please enter more than 3 letter"
                    },
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
                        min: 6,
                        message: "please enter more than 6 letter"
                    },
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
                    Registration User
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Registration
