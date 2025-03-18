import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Login from'./components/login'
import Lista from './components/listadoinicial/lista';
import Dash from './components/dashboard/dash';
import Codigo from './components/codigoQr/codigoQr';
import Register from './components/registrorecorrido/registro'



function App() {
  
    // Función para realizar el registro de usuario utilizando fetch y try-catch
    document.getElementById("loginForm").addEventListener("submit", async function(event) {
        event.preventDefault();  // Evita que el formulario se envíe de la forma tradicional

        // Obtener los valores ingresados
        const correo = document.getElementById("username").value;
        const contrasena = document.getElementById("password").value;

        try {
            // Realizar la solicitud a la API para registrar el usuario
            const response = await fetch('http://127.0.0.1:8000/registro',  {
                method: 'POST',
                //mode: "no-cors", Si el servidor permite CORS, elimina esta línea.//
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: 4,
                    correo: correo,
                    contrasena: contrasena
                })
            });

            // Verificar si la respuesta fue exitosa
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }

            // Intentar convertir la respuesta en formato JSON
            const data = await response.json();

            // Mostrar el mensaje dependiendo del resultado
            if (response.ok) {
                document.getElementById("message").innerHTML = "<p style='color: green;'>¡Registro exitoso! Bienvenido, " + correo + ".</p>";
            } else {
                document.getElementById("message").innerHTML = "<p style='color: red;'>Error: " + data.message + "</p>";
            }

        } catch (error) {
            // Manejar cualquier error en la solicitud o la conversión a JSON
            document.getElementById("message").innerHTML = "<p style='color: red;'>Hubo un error al intentar registrarse: " + error.message + "</p>";
        }

        // Log de los datos enviados para depuración
        console.log(JSON.stringify({
            id: 4,
            correo: correo,
            contrasena: contrasena
        }));
    });
  return (
    <div>
      <Login/> 
    </div>
  );
}

export default App;
