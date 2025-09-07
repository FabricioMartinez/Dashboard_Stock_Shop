import React, { useState, useEffect } from "react";
import Header from '../header/header';
import Option from "../option/option";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faBagShopping, faMoneyBill, faCartShopping, faDollarSign, faChartSimple, faHandHoldingDollar, faStore } from '@fortawesome/free-solid-svg-icons';
import "./home.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Pie, PieChart, Sector } from 'recharts';

function Home() {

  const [resumen, setResumen] = useState({});
  const [productos, setProductos] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/ventas-por-local`)
      .then(res => res.json())
      .then(ventas => {
        const formatted = ventas.map(v => ({
          name: v.Locale?.nombre_local || "Desconocido",
          value: parseInt(v.totalVentas, 10)
        }));
        setData(formatted);
      });
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/resumen`)
      .then(res => res.json())
      .then(data => setResumen(data));
  }, []);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/productos`)
      .then(res => res.json())
      .then(data => setProductos(data));
  }, []);
  const chartData = productos.map(item => ({
    name: `${item.descripcion || ""}`,
    unidadesVendidas: item.Ventas?.reduce((sum, v) => sum + v.cantidad, 0) || 0,
    stock: item.Stock?.cantidad_actual || 0
  }));
    return(
    <>
        <Header/>
        <div className="conteiner">
            <Option/>
            <div className="data-info"> 
                <div className='info-sector'>
                    <FontAwesomeIcon icon={faChartSimple} className='iconInfo'/>
                    <p>Ganancia</p>
                    <p>${resumen.ganancia?.toLocaleString('de-DE') || 0}</p>
                </div>
                <div className='info-sector'>
                    <FontAwesomeIcon icon={faHandHoldingDollar} className='iconInfo'/>
                    <p>Total Gastado</p>
                    <p>${resumen.totalGastado?.toLocaleString('de-DE')|| 0}</p>
                </div>
                <div className='info-sector'>
                    <FontAwesomeIcon icon={faDollarSign} className='iconInfo'/>
                    <p>Total Vendido</p>
                    <p>${resumen.totalVendidos?.toLocaleString('de-DE')|| 0}</p>
                </div>
                <div className='info-sector'>
                    <FontAwesomeIcon icon={faStore} className='iconInfo'/>
                    <p>Productos Totales</p>
                    <p>{resumen.totalStock}</p>
                </div>
                
            </div>

            <div className="chart-container" style={{ width: "1600px", height: 400, marginTop: 30 }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => value.toLocaleString('de-DE')} />
                <Tooltip formatter={(value) => value.toLocaleString('de-DE')} />
                <Legend />
                <Bar dataKey="unidadesVendidas" fill="#8884d8" name="Unidades Vendidas" />
                <Bar dataKey="stock" fill="#82ca9d" name="Stock Disponible" />
                </BarChart>
            </ResponsiveContainer>
            </div>

<div className="TwoLevelPieChart"> 
  <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={90}
        dataKey="value"
        fill="#8884d8"
        label={(entry) => `${entry.name}: ${entry.value}`}
      />
    </PieChart>
  </ResponsiveContainer>
</div>
        </div>
    </>
    )
}

export default Home;
