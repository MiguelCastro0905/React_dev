import React from 'react';

import image1 from '../../image/Recurso1.png';
import image2 from '../../image/Recurso2.png';
import camera from '../../image/camara.png'
import './registro.css'


const Register = () => {
    return (
        <div>
            <div class="text-center header">
                <div class="recuadro"></div>
            </div>
            <div class="container">
                <div class='row'>
                    <div class="col-sm-12">
                        <div class="cuadrocentral">
                            <div class="cuadrocentraldentro">
                                <img src={camera} class="img-fluid image-camara"></img>
                                <div class="lineaver"></div>
                                <h4 class="letraScan">Scan or Gallery</h4>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;