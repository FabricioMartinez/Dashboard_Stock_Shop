import React from "react";
import "./option.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faBagShopping, faMoneyBill, faCartShopping, faDollarSign, faChartSimple, faHandHoldingDollar, faStore } from '@fortawesome/free-solid-svg-icons';


function Option(){
    return(
        <>
        <div className="option"> 
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
            <a href="./ventas" className='linkHome'>
                <div className='option-contain'>
                    <FontAwesomeIcon className='icon' icon={faCartShopping} />
                    <p>Venta</p>
                </div>
            </a>
        </div>
        </>
    )
}

export default Option