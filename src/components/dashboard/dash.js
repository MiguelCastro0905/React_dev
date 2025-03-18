import React from "react";
import image1 from "../../image/Recurso1.png"
import image2 from "../../image/Recurso2.png"
import iconhouse from "../../image/icon-home.png"
import './dash.css'




const Dash = () => {
    return (
        <div>
            <div className="App">
                <div class="text-center header">
                    <div class="recuadro"></div>
                </div>
                <div class="container-fluid containerLista">
                    <div class="row">
                        <div class="col-sm-3 listaIzq">
                            <div class="cuadroIzq table-responsive">
                                <table>
                                    <tr>
                                        <td ><img src={iconhouse} class="img-fluid "></img></td>
                                        <td id="textoid">INICIO</td>
                                    </tr>
                                    <tr>
                                        <td><img src={iconhouse} class="img-fluid"></img></td>
                                        <td>REPORTE CUADRANTE</td>
                                    </tr>
                                    <tr>
                                        <td><img src={iconhouse} class="img-fluid "></img></td>
                                        <td>CUADRANTES</td>
                                    </tr>
                                    <tr>
                                        <td><img src={iconhouse} class="img-fluid"></img></td>
                                        <td>PATRULLAS</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="col-sm-9 listaDer d-block">
                            <div class="cuadroDerecho text-center d-flex">
                                
                                    <img src={image1} class="img-fluid imgfondo"></img>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dash;