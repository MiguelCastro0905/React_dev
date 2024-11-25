import React from 'react';
import iconhouse from '../../image/icon-home.png'
import image1 from '../../image/Recurso 1.png'
import './lista.css'

const Lista = () => {
  return (
    <div>
      <div className="App">
        <div class="text-center header">
          <div class="recuadro"></div>
        </div>
        <div class="containerLista">
          <div class="row">
            <div class="col-sm-3 listaIzq ">
              <div class="cuadroIzq">
                <table class="table-responsive" >
                  <tr>
                    <td ><img src={iconhouse} class="img-responsive "></img></td>
                    <td id="textoid">INICIO</td>

                  </tr>
                  <tr>
                    <td><img src={iconhouse} class="img-responsive "></img></td>
                    <td>REPORTE CUADRANTE</td>
                  </tr>
                  <tr>
                    <td><img src={iconhouse} class="img-responsive "></img></td>
                    <td>CUADRANTES</td>
                  </tr>
                  <tr>
                    <td><img src={iconhouse} class="img-responsive"></img></td>
                    <td>PATRULLAS</td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="col-sm-9 listaDer">
              <div class="cuadroDer">
                <table class="table-responsive2 text-center">
                  <thead id="encabezado">
                    <tr>
                      <th>Id</th>

                      <th>PATRULLA</th>
                      <th>CUADRANTE</th>
                      <th>UBICACION</th>
                      <th>RECORRIDO</th>
                    </tr>
                  </thead>
                  <body>
                    <tr>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                    </tr>
                  </body>
                </table>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div >
  );
}
export default Lista;