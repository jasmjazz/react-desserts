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
import content_top from './img/content-top.jpg';
import content_middle from './img/content-middle.jpg';
import footer_left from './img/footer-left.jpg';
import footer_middle from './img/footer-middle.jpg';
import footer_right from './img/footer-right.jpg';

class App extends Component {
  constructor(props) {
    super(props);

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
            <NavbarToggler onClick={this.toggle.bind(this)} />
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

        <div className="container">
          <div className="row justify-content-center box">
            <div className="col col-lg-3 box-left-bg">
              <div className="box-left-text">
                <p>本日精選</p>
              </div>
            </div>
            <div className="col col-lg-3 box-middle-bg">
              <div className="box-middle-text">
                <p>人氣推薦</p>
              </div>
            </div>
            <div className="col col-lg-3 box-right-bg">
              <div className="box-right-text">
                <p>新品上市</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container content-top">
          <div className="row">
            <div className="col">
              <div className="content-top-img">
                <img src={content_top} className="img-fluid" alt="banner-img" />
              </div>
            </div>
            <div className="col-md-auto content-top-middle">
              <p>
                滾滾長江東逝水，浪花淘盡英雄。<br />
                是非成敗轉頭空。<br />
                青山依舊在，幾度夕陽紅。<br />
                白髮漁樵江渚上，慣看秋月春風。<br />
                一壺濁酒喜相逢。<br />
                古今多少事，都付笑談中。
              </p>
              <div></div>
              <p>
                庭院深深深幾許，雲窗霧閣常扃，<br />
                柳梢梅萼漸分明，春歸秣陵樹，<br />
                人老建康城。
              </p>
            </div>
            <div className="col col-lg-2 content-top-right">
              <p>
                <strong>為什麼</strong>
                <span className="span">—</span>
              </p>
              <p>
                <strong>&nbsp;選擇了做甜點？</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="container content-mid">
          <div className="row">
            <div className="col col-rg-2 content-mid-left">
              <p>
                滾滾長江東逝水，浪花淘盡英雄。<br />
                是非成敗轉頭空。<br />
                青山依舊在，幾度夕陽紅。<br />
                白髮漁樵江渚上，慣看秋月春風。<br />
                一壺濁酒喜相逢。<br />
                古今多少事，都付笑談中。
              </p>
              <p style={{ paddingRight: "45px" }}>
                庭院深深深幾許，雲窗霧閣常扃，<br />
                柳梢梅萼漸分明，春歸秣陵樹，<br />
                人老建康城。
              </p>
            </div>
            <div className="col-md-auto content-mid-middle">
              <p>
                <strong>為什麼</strong>
                <span>—</span>
              </p>
              <p>
                <strong>&nbsp;一定要吃甜點？</strong>
              </p>
            </div>
            <div className="col content-mid-right">
              <div className="content-mid-img">
                <img src={content_middle} className="img-fluid" alt="banner-img" />
              </div>
            </div>
          </div>
        </div>

        <div className="container content-bottom">
          <div className="row">
            <div className="col">
              <p>
                <strong>想吃甜點</strong>
                <span>—</span>
              </p>
              <p>
                <strong>&nbsp;是不需要理由的。</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="container footer">
          <Row>
            <Col xs={6} md={4}>
              <Card>
                <CardImg top className="img-fluid" src={footer_left} alt="Card image cap" />
                <CardBody>
                  <CardText className="card-text">
                    <Row>
                      <Col xs="6">脆皮甜甜圈</Col>
                      <Col xs="6">NT$450</Col>
                    </Row>
                  </CardText>
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
                  <CardText className="card-text">
                    <Row>
                      <Col xs="6">焦糖馬卡龍</Col>
                      <Col xs="6">NT$450</Col>
                    </Row>
                  </CardText>
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
                  <CardText className="card-text">
                    <Row>
                      <Col xs="6">水果優格杯</Col>
                      <Col xs="6">NT$450</Col>
                    </Row>
                  </CardText>
                </CardBody>
                <Button bsSize="large" block color="info">
                  加入購物車
                </Button>
              </Card>
            </Col>
          </Row>
        </div>

        <div className="container footer-rwd">
          <Row>
            <Col>
              <Card>
                <CardImg top className="img-fluid" src={footer_right} alt="Card image cap" />
                <CardBody>
                  <CardText className="card-text">
                    <Row>
                      <Col xs="6">水果優格杯</Col>
                      <Col xs="6">NT$450</Col>
                    </Row>
                  </CardText>
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
