import React from "react";
import Header from "../header/header";
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faBagShopping, faMoneyBill, faCartShopping, faDollarSign, faChartSimple, faHandHoldingDollar, faStore } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Product(){

    return(
        <>
        <Header/>
        <div className="parent">
            <div class="option"> 
                <a href="./" className='linkHome'>
                    <div className='option-contain'>
                        <FontAwesomeIcon className='icon' icon={faDesktop} />
                        <p>Dashboar</p>
                    </div>
                </a>
                <a href="./productos" className='linkHome'>
                    <div className='option-contain' >
                        <FontAwesomeIcon className='icon' icon={faBagShopping} />
                        <p>Productos</p>
                    </div>
                </a>
                <a href="" className='linkHome'>
                    <div className='option-contain'>
                        <FontAwesomeIcon className='icon' icon={faMoneyBill} />
                        <p>Gastos</p>
                    </div>
                </a>
                <a href="" className='linkHome'>
                    <div className='option-contain'>
                        <FontAwesomeIcon className='icon' icon={faCartShopping} />
                        <p>Venta</p>
                    </div>
                </a>
            </div>
            <div className="product-info"> 
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
        </>
    )
}

export default Product