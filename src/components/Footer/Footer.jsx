import React from 'react'
import './Footer.css'

export const Footer = () => {

return (

    <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Nosotros</h3>
                        <ul>
                            <li className= "linksFooter">Carreras</li>
                            <li className= "linksFooter">Trabaja con nosotros</li>
                            <li className= "linksFooter">Resto del mundo</li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Legales</h3>
                        <ul>
                            <li className= "linksFooter">Términos y condiciones</li>
                            <li className= "linksFooter">Política de privacidad </li>
                            <li className= "linksFooter">Bases y condiciones</li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>LujanHardware</h3>
                        <p>LujanHardware fue inaugurado por un joven de argentina en el 2021 en el casco histórico del centro de Lujan, donde comenzamos con un pequeño local de venta de artículos de computación, desde el inicio estuvimos enfocados en brindar y solucionar problemas cotidianos que presentan nuestros clientes a diario, al pasar el tiempo fuimos creciendo y nos volvimos representantes de varias marcas tal como Redragon, HyperX, Logitech, Nisuta, Asus, Intel, Amd, Razer, Seagate, Xpg, Adata, Kingston, Aerocool, Aureox, Thermaltake, Epson, Hp, Gtc, Lg, Samsung, Pny, Jbl, Xp-Pen, Tp Link, etc. 

Contamos con departamento de venta y asesoramiento tanto para empresas como corporativos y o clientes donde los ayudaremos a despejar todas las dudas antes de comprar.

Les agradecemos a todos nuestros clientes y a los futuros por que sin ellos no estaríamos creciendo día a día.</p>
                    </div>
                </div>
                <p class="copyright">Nicolas Espuña © 2021</p>
            </div>
        </footer>
    </div>

)}

export default Footer