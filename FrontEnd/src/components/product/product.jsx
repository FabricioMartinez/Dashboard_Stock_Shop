import React, { useState, useEffect } from "react";
import Header from "../header/header";
import Option from "../option/option";
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faBagShopping, faMoneyBill, faCartShopping, faDollarSign, faChartSimple, faHandHoldingDollar, faStore } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Product(){
      const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/productos")
      .then(res => res.json())
      .then(data => setProductos(data));
  }, []);

    return(
        <>
        <Header/>
        <div className="parent">
            <Option/>
        <div className="product-info">
          {productos.map((item) => (
            <Card style={{ width: '18rem', margin: '10px' }} key={item.id_detalle}>
              {/* Si tenés imagen real, reemplazá src */}
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{item.Producto?.nombre_producto}</Card.Title>
                <Card.Text>
                  {item.descripcion} <br />
                  Stock: {item.Stock?.cantidad_actual || 0}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
        </div>
        </>
    )
}

export default Product