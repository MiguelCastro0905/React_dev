import React from 'react';
import ReactDOM from 'react-dom/client';
import image1 from '../../image/Recurso1.png'
import image2 from '../../image/Recurso2.png';
import './codigo.css'


const Codigo = () => {
    return (
        <div>
            <div class="text-center header">
                <div class="recuadro"></div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="cuadroFondo">
                            <div class="cuadroInterior text-center ">
                                <img class="img-fluid imagenInterior " src={image1}></img>
                                <div class="linea-central"></div>
                                <div class="letra-interior">
                                    <h2 class="h2">ESCANEAR QR</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Codigo;