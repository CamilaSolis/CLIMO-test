import React from 'react';
import './products.scss';

const Products = () => {
    return (
    <div className="products">
        <h3>¿POR QUÉ CLIMO?</h3>
        <div className="products--easy">
            <div className="products--easy--text">
                <h2>La forma más simple de climatizar</h2>
                <p>En Climo buscamos que la climatización de hogares y empresas se haga de manera eficiente, confortable y sustentable. Para ello, ofrecemos un servicio de climatización completo, que contempla la facilitación de equipos y un <b>sistema de control y monitoreo para hacer gestión energética inteligente.</b> Y todo ello, en planes mensuales flexibles.</p>
            </div>
            <div className="products--easy--image"><img src="https://i.imgur.com/CLKiVtG.png" /></div>
        </div>
        <div className="products--features2">
            <div className="products--features2--item">
                <img src="https://i.imgur.com/Gp21C2A.png" />
                <h3>Cotiza</h3>
                <p>Haz tu cotización online y recibirás una propuesta con él o los equipos que mejor se adecuen para una óptima climatización de los espacios.</p>
            </div>
            <div className="products--features2--item">
                <img src="https://i.imgur.com/Iu3SNdX.png" />
                <h3>Contrata</h3>
                <p>Una vez que sepas cuál es el equipo adecuado, elige el plan que más te acomode: miClimo, miClimoPro o miFlexiClimo.</p>
            </div>
            <div className="products--features2--item">
                <img src="https://i.imgur.com/xRX6t7Q.png" />
                <h3>Instala</h3>
                <p>Una vez aceptado el contrato, nuestro equipo te contactará para ajustar todos los detalles y coordinar la instalación en el horario que más te acomode ¡Incluso los sábados!</p>
            </div>
            <div className="products--features2--item">
                <img src="https://i.imgur.com/al0NQpg.png" />
                <h3>Disfruta</h3>
                <p>Recibirás tu usuario y contraseña para acceder a la app CLIMO. ¡Sólo tendrás que preocuparte de disfrutar de tus espacios climatizados junto a quienes más quieres!</p>
            </div>
        </div>
    </div>
    )
}

export default Products