import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavLink,
  NavItem,
  Row,
  Col,
  Button,
  Card,
  CardImg,
  CardBody,
  CardText
} from "reactstrap";
import './App.css';
import banner_img from './img/banner.jpg';
import footer_left from './img/footer-left.jpg';
import footer_middle from './img/footer-middle.jpg';
import footer_right from './img/footer-right.jpg';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return <div>
        <div className="container">
          <Navbar light expand="md">
            <NavbarBrand href="/">
              <h1 className="nav-title">Sweetaste</h1>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto nav-menu" navbar>
                <NavItem>
                  <NavLink href="#">
                    <span>首頁</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <span>甜點</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <span>登入</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>

        <div className="container banner">
          <img src={banner_img} className="img-fluid" alt="banner-img" />
        </div>

        <div className="container-fluid content-top">123</div>

        <div className="container-fluid content-middle">123</div>

        <div className="container-fluid content-bottom">123</div>

        <div className="container">
          <Row>
            <Col xs={6} md={4}>
              <Card>
                <CardImg top className="img-fluid" src={footer_left} alt="Card image cap" />
                <CardBody>
                  <CardText>焦糖瑪卡龍</CardText>
                </CardBody>
                <Button bsSize="large" block color="info">
                  加入購物車
                </Button>
              </Card>
            </Col>
            <Col xs={6} md={4}>
              <Card>
                <CardImg top className="img-fluid" src={footer_middle} alt="Card image cap" />
                <CardBody>
                  <CardText>焦糖瑪卡龍</CardText>
                </CardBody>
                <Button bsSize="large" block color="info">
                  加入購物車
                </Button>
              </Card>
            </Col>
            <Col xs={6} md={4}>
              <Card>
                <CardImg top className="img-fluid" src={footer_right} alt="Card image cap" />
                <CardBody>
                  <CardText>焦糖瑪卡龍</CardText>
                </CardBody>
                <Button bsSize="large" block color="info">
                  加入購物車
                </Button>
              </Card>
            </Col>
          </Row>
        </div>

      </div>;
  }
}

export default App;
