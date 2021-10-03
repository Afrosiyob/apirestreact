import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form, Input, Button } from 'antd';
import { useHistory, useParams } from 'react-router'
import { useDispatch } from 'react-redux';
import { editUser } from '../redux/users/actions';

const SingleUser = () => {


    const { id } = useParams();

    const [ form ] = Form.useForm();

    const history = useHistory()
    const dispatch = useDispatch()

    const onFinish = ( values ) => {
        console.log( 'Success:', values );
        dispatch( editUser( values, id, history ) )

    };

    const onFinishFailed = ( errorInfo ) => {
        console.log( 'Failed:', errorInfo );
    };

    const [ state, setState ] = useState( {
        loading: false,
        data: [],
        error: null
    } )

    useEffect( () => {

        setState( prevState => ( {
            ...prevState,
            loading: true
        } ) )
        axios.get( `/api/user/${ id }`, {
            headers: {
                Authorization: `Bearer ${ localStorage.getItem( "accessToken" ) }`,
            }
        } ).then( ( response ) => {
            console.log( response );
            setState( prevState => ( {
                ...prevState,
                loading: false,
                data: response?.data?.data
            } ) )

            const { username, firstName, lastName, middleName } = response?.data?.data

            form.setFieldsValue( {
                username,
                firstName,
                lastName,
                middleName
            } );

        } )
            .catch( error => {
                setState( prevState => ( {
                    ...prevState,
                    loading: false,
                    error: error.response.data.message
                } ) )
            } )

    }, [ id, form ] )

    console.log( state );

    return (
        <div>


            <Form
                name="basic"
                labelCol={ {
                    span: 8,
                } }
                wrapperCol={ {
                    span: 8,
                } }
                form={ form }

                onFinish={ onFinish }
                onFinishFailed={ onFinishFailed }
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                // rules={ [
                //     {
                //         required: true,
                //         message: 'Please input your username!',
                //     },
                // ] }
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="firstName"
                    name="firstName"
                // rules={ [
                //     {
                //         required: true,
                //         message: 'Please input your firstname!',
                //     },
                // ] }
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="middleName"
                    name="middleName"
                // rules={ [
                //     {
                //         required: true,
                //         message: 'Please input your middlename!',
                //     },
                // ] }
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="lastName"
                    name="lastName"
                // rules={ [
                //     {
                //         required: true,
                //         message: 'Please input your lastname!',
                //     },
                // ] }
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                // rules={ [
                //     {
                //         required: true,
                //         message: 'Please input your password!',
                //     },
                // ] }
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
                        Edit  User
                    </Button>
                </Form.Item>
            </Form>

        </div>
    )
}

export default SingleUser
