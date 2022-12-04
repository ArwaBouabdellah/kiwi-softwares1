import React from 'react'
import { FaNetworkWired, FaMobileAlt } from 'react-icons/fa';
import { RiComputerLine } from 'react-icons/ri';

function services(){
    return (
        <div className="services">
            <div className="titre">
                <h1><span>N</span>os Services</h1>
            </div>
            <div className="contenu">
                <div className="box">
                    <div className="imbox">
                        <h2>01</h2>
                            <h4>Développement Informatique</h4>
                            <p>On développe des applications web sur mesure qui résouent vos problèmes quotidiens.</p>
                            <div className="details">
                                <p><FaNetworkWired/>  Applications Web</p>
                                <p><RiComputerLine/>  Sites Web</p>
                                <p><FaMobileAlt/>  Applications Mobile</p>
                            </div>
                    </div>
                </div>
                <div className="box">
                    <div className="imbox">
                            <h2>02</h2>
                            <h4>Conception graphique</h4>
                            <p>Nous mettons à votre disposition de jeunes designers créatifs, qui ont fait leur preuve dans le domaine de l art. Ils sont capables de retranscrire vos rêves en format graphique Photoshop.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="imbox">
                            <h2>03</h2>
                            <h4>Référencement</h4>
                            <p>On s'occupe du référencement naturel efficace et durable de votre site pour qu'il atteigne une meilleure visibilité sur internet .</p>
                    </div>
                </div>
                <div className="box">
                    <div className="imbox">
                            <h2>04</h2>
                            <h4>Hébergement</h4>
                            <p>Nous nous occupons d'héberger votre site web ou application afin de vous décharger de tout souci relatif à ce sujet.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="imbox">
                            <h2>05</h2>
                            <h4>Télémaintenance &amp; assistance</h4>
                            <p>Kiwi Softwares s'engage à vous aider à résoudre tout type de défaillance dans votre système informatique et les problèmes informatiques que nos clients peuvent rencontrer chez eux via la prise de main à distance et cela 7j/7 et 24h/24.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="imbox">
                            <h2>06</h2>
                            <h4>Cours privés</h4>
                            <p>Nous vous proposons des cours basiques en informatique, en programmation (html/php, java/jee, pascal,.net...) et langues.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default services;