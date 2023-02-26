import {React,Component} from "react";
import Product from "./Product";
import products from "../products.json";
import { Row , Container , Col} from "react-bootstrap";

export default class Products extends Component{

    render(){
        return(
            
            <Container>
               
                <Row>
                   {products.map((p,index)=>
                        <Product 
                        produit={p} key={index}
                        ></Product>
                    )} 


                </Row>
            </Container>

        
        )
                                    
    }
}

// import {  useEffect, useState } from "react";
// import Product from "./Product";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { Alert } from "react-bootstrap";
// import ProductsList from '../products.json';
// export default function Products(){

//     const [alert,setAlert]= useState(true);
//     // constructor(props) {
//     //     super(props);
//     //     this.state ={alertVisible:false}
//     //     this.handleVisible = this.handleVisible.bind(this);
//     // }

//     useEffect (()=> {
//         setTimeout(() => {
//             setAlert(false);
//         }, 2000);
//         //  console.log(" alert")
//     });
//     // handleVisible = () => { 
//     //     this.setState({alertVisible:true})
//     //     setTimeout(() => { 
//     //         this.setState({alertVisible:false})
//     //     }, 3000);
//     // } 
//     // componentDidMount() {
//     // this.handleVisible();
//     // }


//     // render(){
//         return (
//             <div>
//                 <Alert variant="success" show={alert}><Alert.Heading>Hey, Welcome To Our Shop <strong>MyStore</strong></Alert.Heading>
//                 <p>Thank you for choosing our store, we hope you enjoy your shopping experience!</p></Alert>
//                 <h1 style={{textAlign:'center',margin:'50px'}}>Products</h1>
//                 <Row>
//         {ProductsList.map((prod,i)=>(<Col key={i}><Product  product={prod}></Product></Col>))}
//       </Row>
//             </div>
     
//         );
//     // }
// }
