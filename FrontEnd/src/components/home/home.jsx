import React from 'react'; 
import Header from '../header/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faBagShopping, faMoneyBill, faCartShopping, faDollarSign, faChartSimple, faHandHoldingDollar, faStore } from '@fortawesome/free-solid-svg-icons';
import "./home.css";

import "./home.css"

function Home() {
    return(
    <>
        <Header/>
        <div class="conteiner">
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
            <div class="data-info"> 
                <div className='info-sector'>
                    <FontAwesomeIcon icon={faChartSimple} className='iconInfo'/>
                    <p>NumData</p>
                </div>
                <div className='info-sector'>
                    <FontAwesomeIcon icon={faHandHoldingDollar} className='iconInfo'/>
                    <p>NumData</p>
                </div>
                <div className='info-sector'>
                    <FontAwesomeIcon icon={faDollarSign} className='iconInfo'/>
                    <p>NumData</p>
                </div>
                <div className='info-sector'>
                    <FontAwesomeIcon icon={faStore} className='iconInfo'/>
                    <p>NumData</p>
                </div>
                
            </div>
            <div class="page">
                <p></p>
            </div>
        </div>
    </>
    )
}

export default Home;
