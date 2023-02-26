import { Component } from "react";
import { Alert, Button, Card, Col, Row } from "react-bootstrap";
import { useState } from "react";

export default function Product (props) {
    // constructor(props) {
    //     super(props);
    //     this.state = {produit:this.props?.produit,alertVisible:false};
    //     this.addLike = this.addLike.bind(this);
    //     this.removeQuantity = this.removeQuantity.bind(this);
    //     this.handleVisible = this.handleVisible.bind(this);
    // }
    
    const [produit,setProduit] = useState(props.produit);
const className=produit.like>5?"text-center bestProduct":"text-center"
   const  addLike = ()=>{
    setProduit({...produit,like:produit.like +1});
   }

   const buyProducts = ()=>{
    setProduit({...produit,quantity:produit.quantity-1});
   }
    // function removeQuantity() {
    //     this.setState((oldState)=>({produit:{...oldState.produit,quantity:oldState.produit.quantity-1}}));
    //     this.handleVisible();
    // }
    // function handleVisible  ()  { 
    //     this.setState({alertVisible:true})
    //     setTimeout(() => { 
    //         this.setState({alertVisible:false})
    //     }, 2000);
    // } 

  

    return (
    <Col md={4}>
    {<Card style={{ width: '18rem' }} className={className}>
    <Card.Img variant="top" 
 
    />
  
    <Card.Img variant="top" style={{ height: '17rem' }}

      src={require("../assets/images/"+produit.img)}
    />
    <Card.Body>
    <Card.Title>name{produit.name}</Card.Title>
      <Card.Title>quantity{produit.quantity}</Card.Title>
      <Card.Title>nbr like{produit.like}</Card.Title> 
      <Card.Text>
          
     
      </Card.Text>
      <Button variant="danger"  onClick={buyProducts} disabled={produit.quantity===0}>buy</Button>
      {/* onClick={handleClick} */}
      <Button variant="primary" onClick={addLike} >Like</Button>

    </Card.Body>
<div><Alert variant="success"   show={alert}  dismissible>
{/* onClose={handleClose} */}

<p>
 you bought a product
</p>
<hr />

</Alert></div>:<div></div>
  </Card>}
  </Col>

    )
  }
