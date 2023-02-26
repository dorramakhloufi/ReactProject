import { Component } from "react";
import { Alert, Button, Card, Col, Row } from "react-bootstrap";

export default class product extends Component {
    constructor(props) {
        super(props);
        this.state = {produit:this.props?.produit,alertVisible:false};
        this.addLike = this.addLike.bind(this);
        this.removeQuantity = this.removeQuantity.bind(this);
        this.handleVisible = this.handleVisible.bind(this);
    }
    addLike() {

        this.setState((oldState)=>({produit:{...oldState.produit,like:oldState.produit.like+1}}));
    }
    removeQuantity() {
        this.setState((oldState)=>({produit:{...oldState.produit,quantity:oldState.produit.quantity-1}}));
        this.handleVisible();
    }
     handleVisible = () => { 
        this.setState({alertVisible:true})
        setTimeout(() => { 
            this.setState({alertVisible:false})
        }, 2000);
    } 

  render() {

    return (
        <Col md={4}>
        <Card className="p-2" >
 
            <Card.Img style={{height:'20rem'}} variant="top" src={require('../assets/images/'+this.props?.produit.img)} />
            <Card.Title>{this.props?.produit.name}</Card.Title>
            <Card.Body>{this.props?.produit.description}</Card.Body>
            <Card.Body>{this.props?.produit.price}DT</Card.Body>
            <Row><Col><Button variant="primary" onClick={this.addLike}>Like👍</Button></Col> <Col><small>{this.state?.produit.like}</small></Col></Row>
            <br/>
            <Row><Col><Button variant="danger" onClick={this.removeQuantity} disabled={this.state?.produit.quantity===0}>Buy💲🤑</Button></Col><Col> <small>{this.state?.produit.quantity}</small></Col></Row>

            </Card>
              <Alert variant="primary" show={this.state?.alertVisible}  >You bought an Item</Alert>
              </Col>

    )
  }
}