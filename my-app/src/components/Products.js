import {React,Component} from "react";
import Product from "./Product";
import products from "../products.json";
import { Row , Container } from "react-bootstrap";
import {  useEffect, useState } from "react";








export default function Products(){

        const [alert,setAlert]= useState(true);
        
    
        useEffect (()=> {
            setTimeout(() => {
                setAlert(false);
            }, 2000);
            
        });
        function handleVisible  () { 
            this.setState({alertVisible:true})
            setTimeout(() => { 
                this.setState({alertVisible:false})
            }, 3000);
        } 

        
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
    
        
    
    
  
    

