import "./sale.css"
import Header from '../header/header';
import Option from "../option/option";
import React, { useState, useEffect } from "react";

function Sale() {
    const [ventas, setVentas] = useState([]);
    useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/ventas`)
        .then(res => res.json())
        .then(data => setVentas(data));
    }, []);

    return (
        <>
            <Header />
            <div className="conteiner">
                <Option />
                <div className="info-venta">
                    <div className="productoVentido">
                        {ventas.length > 0 ? (
                            ventas.map(v => (
                                <li key={v.id_venta}>
                                    {v.fecha} - {v.ProductoDetalle?.descripcion} - {v.Locale?.nombre} - Cant: {v.cantidad} - ${v.precio_unitario}
                                </li>
                            ))
                        ) : (
                            <p>No hay ventas registradas</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Sale;
