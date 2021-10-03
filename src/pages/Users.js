import React, { useEffect } from 'react'
import { List, Avatar, Skeleton, Row, Col, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUsers } from '../redux/users/actions';
import { Link, useRouteMatch } from 'react-router-dom';

const Users = () => {


    let { url } = useRouteMatch();

    const dispatch = useDispatch()

    useEffect( () => {

        dispatch( getUsers() )
    }, [ dispatch ] )


    const { loading, data } = useSelector( state => state.userReducer )


    const removeUser = ( id ) => {
        dispatch( deleteUser( id ) )
    }

    return (
        <Row justify="center">
            <Col md={ 16 }>
                <List
                    className="demo-loadmore-list"
                    loading={ loading }
                    itemLayout="horizontal"
                    dataSource={ data && data }
                    renderItem={ item => (
                        <List.Item
                            actions={ [ <Link to={ `${ url }/${ item?.id }` } > Edit </Link>, <Button onClick={ () => removeUser( item?.id ) } > remove </Button>, <Link to={ `${ url }/${ item?.id }` } > info </Link> ] }
                        >
                            <Skeleton avatar title={ false }
                                loading={ loading }
                                active>
                                <List.Item.Meta
                                    avatar={
                                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    }
                                    description={ item?.username }
                                />
                            </Skeleton>
                        </List.Item>
                    ) }
                />
            </Col>
        </Row>
    )
}

export default Users
