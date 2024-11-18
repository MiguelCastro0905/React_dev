
import './App.css';
import image1 from './image/Recurso 1.png';
import image2 from './image/Recurso 2.png';
import image3 from './image/icon-home.png';



function App() {
  return (
    
    <div className="App">
      
      <div className="linea-container">
          <div className="lineasarribaizq"></div>
          <div className="lineasarribader"></div>
      </div>

      <div class="cuadrofondo"></div>

      <div className="IDpatrulla">
        <label>
          <input name="C1" placeholder="CUADRANTE"/>
        </label>
      </div>
      

      <div className="Ccuadrante">
        <label >
          <input name="C2" placeholder="ID PATRULLA"/>
        </label>
      </div>

      

      <div className="text1">
          <h1>SICRP</h1>
      </div>

      <div class="lineahor"></div>
      
      <div className="text2">
          <p>SISTEMA INTEGRADO DE CONTROL DE RECORRIDOS DE POLICIA</p>
        
      </div>
        
        <div className="lineaver"></div>

       
      
      <div className="botones">
          <button className="boton">
          INGRESAR
          </button>
        </div>
        
      <img src={image1} className="App-image1" alt="image" />
      <img src={image2} className="App-image2" alt= "image2"/>  


      {/*Segunda pagina*/}

      <div className="cuadro2-container2">
          <div className="pg2borde"></div>
          <div className="pg2bordeder"></div>
      </div>

      <div class="cuadroclasipg2">
      
      <div class ="cuadropg2der"></div>  
      </div>
      
      
      
      <div className="text1pg2"><p>INICIO</p></div>
      <div className="text2pg2"><p>REPORTE DE CUADRANTE</p></div>
      <div className="text3pg2"><p>CUADRANTES</p></div>
      <div className="text4pg2"><p>PATRULLA</p></div>
      <img src={image3} className="App-image3pg2" alt="image3"/> 
      
      <img src={image3} className="App-image4pg2" alt="image4"/>
      
      <img src={image3} className="App-image5pg2" alt="image5"/>
      <img src={image3} className="App-image6pg2" alt="image6"/>
      <img src={image2} className="App-image2pg2" alt= "image2"/>
      <img src={image1} className="App-image1pg2" alt= "image1"/>


      {/*Tercer Pagina*/}
      <div className="cuadro2-container2">
          <div className="pg3borde"></div>
          <div className="pg3bordeder"></div>
      </div>
      
      <div class="cuadroclasipg3">
      
      <div class ="cuadropg3der">
      <div class = "cuadrogris"/>  
      <div className= "table">
        <table>
        <thead>
            <tr>
            <th>ID</th>
            <th>PATRULLA</th>
            <th>CUADRANTE</th>
            <th>UBICACIÓN</th>
            <th>RECORRIDO</th>
            </tr>
          </thead>

        </table>
      </div>
      <img src={image1} className="App-image1pg3" alt= "image1"/>
      <img src={image2} className="App-image2pg3" alt= "image2"/>
      </div>  
      </div>
      <div className="text1pg2"><p>INICIO</p></div>
      <div className="text2pg2"><p>REPORTE DE CUADRANTE</p></div>
      <div className="text3pg2"><p>CUADRANTES</p></div>
      <div className="text4pg2"><p>PATRULLA</p></div>
      <img src={image3} className="App-image3pg3" alt="image3"/> 
      
      <img src={image3} className="App-image4pg3" alt="image4"/>
      
      <img src={image3} className="App-image5pg3" alt="image5"/>
      <img src={image3} className="App-image6pg3" alt="image6"/>
      


      
    </div>
    
    
  );

  
}

export default App;
