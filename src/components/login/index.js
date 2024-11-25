import React from 'react';
import ReactDOM from 'react-dom/client';
import image1 from '../../image/Recurso 1.png'
import image2 from '../../image/Recurso 2.png';
import './index.css'


const Login = () => {
    return (
        <div>
            <div className="App">
                <div class="text-center header">
                    <div class="recuadro"></div>
                </div>
                <div class="container2">
                    <div class="row">
                        <div class="col-sm-6 recuadroIzq d-flex" >
                            <div class="widht-100">
                                <img src={image1} class="img-fluid text-center"></img>
                            </div>

                        </div>
                        <div class="col-sm-5 recuadroDer  justify-content-center align-items-center d-flex " >
                            <div class="container-fluid ">
                                <h1 class="ps-5" >SICRP</h1>
                                <p class="ms-5">SISTEMA INTEGRADO DE CONTROL DE RECORRIDOS DE POLICIA</p>
                                <div class="recuadro2">
                                    <div class="row">
                                        <div class="col-sm-12 mb-3">
                                            <div class="form-group">
                                                <input class="form-control" placeholder='ID_PATRULLA' id="pwd"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row" >
                                        <div class="col-sm-12 mb-3">
                                            <div class="form-group">
                                                <input  class="form-control" placeholder='CUADRANTE' id="pwd"></input>
                                            </div></div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <button type="button" class="btn btn-primary btn-block">INGRESAR</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;