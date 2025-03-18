import React from 'react';
import iconhouse from '../../image/icon-home.png'
import image1 from '../../image/Recurso1.png'
import './lista.css'

const Lista = () => {
  return (
    <div>
      <div className="App">
        <div class="text-center header">
          <div class="recuadro"></div>
        </div>
        <div class="container-fluid containerLis">
          <div class="row">
            <div class="col-sm-3 listaIzq ">
              <div class="cuadroIzquierdo table-responsive">
                <table class="tableder">
                  <tr>
                    <td ><img src={iconhouse} class="img-fluid "></img></td>
                    <td id="textoid">INICIO</td>

                  </tr>
                  <tr>
                    <td><img src={iconhouse} class="img-fluid "></img></td>
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
            <div class="col-sm-9 listaDerecha">
              <div class="cuadroDer">
                
                <div class="table-responsive table-recorrido">
                  <table class="table">
                    <thead >
                      <tr>
                        <th>Id</th>
                        <th>PATRULLA</th>
                        <th>CUADRANTE</th>
                        <th>UBICACION</th>
                        <th>RECORRIDO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="reco"></td>
                        <td class="reco"></td>
                        <td class="reco"></td>
                        <td class="reco"></td>
                        <td class="reco"></td>

                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div >
  );
}
export default Lista;