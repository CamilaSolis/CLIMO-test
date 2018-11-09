import React from 'react';
import './history.scss';

const History = () => {
    return(
        <div className="history">
            <h2>¿QUÉ ES CLIMO?</h2>
            <div className="history--video">
                <iframe src="https://www.youtube.com/embed/740L8LOO4hY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="history--features">
                <div className="history--features--item">
                    <img src="https://i.imgur.com/WrIdG2f.png" />
                    <div className="history--features--item--text">
                        Servicio de <b>climatización frío o calor</b> para tu hogar o empresa con equipos AA inverter <b>desde 25.990.</b>
                    </div>
                </div>
                <div className="history--features--item">
                    <img src="https://i.imgur.com/0TrmF93.png" />
                    <div className="history--features--item--text">
                        Los equipos Climo son los <b>más eficiente del mercado.</b> Permiten hasta un <b>70 % de ahorro.</b>
                    </div>
                </div>
                <div className="history--features--item">
                    <img src="https://i.imgur.com/e9xW3nt.png" />
                    <div className="history--features--item--text">
                        Los equipos CLIMO <b>no contaminan</b> tu hogar ni el medio ambiente.
                    </div>
                </div>
                <div className="history--features--item">
                    <img src="https://i.imgur.com/pv7Hra3.png" />
                    <div className="history--features--item--text">
                        Servicio técnico y <b>mantenciones incluidas</b> en cada plan.
                    </div>
                </div>
                <div className="history--features--item">
                    <img src="https://i.imgur.com/WqpWp1U.png" />
                    <div className="history--features--item--text">
                        Control a distancia, <b>reportes de gastos.</b>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History;