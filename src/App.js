
import { useEffect, useState } from "react";
import { Col, Row, Menu } from "antd";
import { Link } from "react-router-dom";
import Routes from "./router/Routes";

import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import { me } from "./redux/auth/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"



function App () {

  const dispatch = useDispatch()

  const history = useHistory()

  useEffect( () => {
    dispatch( me( history ) )
  }, [ dispatch, history ] )

  const [ state, setState ] = useState( {
    current: 'posts'
  } )


  const handleClick = e => {
    console.log( 'click ', e );
    setState( ( prevState ) => ( {
      ...prevState,
      current: e.key
    } ) )
  }

  const { current } = state

  return (
    <div>

      <Row gutter={ [ 8, 8 ] } justify="center" >
        <Col md={ 24 } >
          <Menu onClick={ handleClick } selectedKeys={ [ current ] } mode="horizontal">
            <Menu.Item key="posts" icon={ <MailOutlined /> }>
              <Link to="/posts"> posts </Link>
            </Menu.Item>
            <Menu.Item key="poststwo" icon={ <AppstoreOutlined /> }>
              <Link to="/poststwo"> poststwo </Link>
            </Menu.Item>
            <Menu.Item key="todos" icon={ <AppstoreOutlined /> }>
              <Link to="/todos"> todos </Link>
            </Menu.Item>
            <Menu.Item key="auth" icon={ <AppstoreOutlined /> }>
              <Link to="/auth"> Login </Link>
            </Menu.Item>
            <Menu.Item key="registration" icon={ <AppstoreOutlined /> }>
              <Link to="/registration"> Registration </Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col md={ 24 }><Routes /></Col>
      </Row>

    </div>
  );
}

export default App;
