import React, { useState } from 'react'; // Importamos useState
import ReactDOM from 'react-dom/client';
import image1 from '../../image/Recurso1.png';
import image2 from '../../image/Recurso2.png';
import './index.css';

const Login = () => {
  // Estado para almacenar el rol seleccionado
const [selectedRole, setSelectedRole] = useState('Elegir Rol');

  // Función para manejar la selección de un rol
const handleRoleSelect = (role) => {
    setSelectedRole(role); // Actualiza el estado con el rol seleccionado
};

return (
        <div className="App">
        <div className="cuadro-inferior1">
            <div className="recuadro"></div>
        </div>

        {/* Contenedor principal para centrar el contenido */}
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container2">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="recuadroDer p-4">
                            <h2 className="text-center">LOGIN</h2>
                            <div className="recuadro2 p-3">
                            {/* Dropdown para seleccionar el rol */}
                            <div className="row">
                            <div className="col-sm-12 mb-3">
                            <div className="dropdown">
                                <button
                                className="btn btn-secondary dropdown-toggle w-100"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                >
                                <div className="Elegir_rol">{selectedRole}</div>
                                </button>
                                <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                                    <li>
                                        <a
                                        className="dropdown-item"
                                        href="#"
                                        onClick={() => handleRoleSelect('Aprendiz')} // Selecciona "Aprendiz"
                                        >
                                        Aprendiz
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                        className="dropdown-item"
                                        href="#"
                                        onClick={() => handleRoleSelect('Instructor')} // Selecciona "Instructor"
                                        >
                                        Instructor
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                        className="dropdown-item"
                                        href="#"
                                        onClick={() => handleRoleSelect('Administrativos')} // Selecciona "Administrativos"
                                        >
                                        Administrativos
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                        className="dropdown-item"
                                        href="#"
                                        onClick={() => handleRoleSelect('Administrador')} // Selecciona "Administrador"
                                        >
                                        Administrador
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Campo de correo institucional */}
                    <div className="row">
                        <div className="col-sm-12 mb-3">
                        <div className="form-group">
                            <input className="form-control" placeholder="Correo Institucional" id="email" />
                        </div>
                        </div>
                    </div>
                    {/* Campo de contraseña */}
                    <div className="row">
                        <div className="col-sm-12 mb-3">
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Contraseña" id="password" />
                        </div>
                        </div>
                    </div>
                    {/* Botón de iniciar sesión */}
                    <div className="text-center">
                        <button type="button" className="btn btn-primary btn-block">
                        Iniciar sesión
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div className="cuadro-inferior2">
            <div className="recuadro"></div>
        </div>
        </div>
    );
};

export default Login;
