import React from 'react';
import { GiKiwiFruit } from "react-icons/gi";

function apropos(){
    return (
        <div className="apropos">
            <h1><span>A </span> propos</h1>
            <div className="contenu">
            <div className="row">
                <div className="description">
                    <p> <GiKiwiFruit className="icon"/> Kiwi Softwares est une société de développement informatique basée à Hammamet en Tunisie, spécialisée dans la conception et la réalisation d’applications Web, sites web, application mobiles.</p>
                    <p> <GiKiwiFruit className="icon"/> On s'occupe aussi du référencement, hébergement, ainsi que le support, assitance et maintenance des systèmes informatiques.</p>
                    <p> <GiKiwiFruit className="icon"/> Notre entreprise maîtrise les standards du Web et développe ses applications Web en utilisant différents frameworks et un ensemble de bonnes pratiques .</p>
                </div>
            </div>
            <div className="row">
                <div className="photo">
                    <img alt="kiwi" src="https://scontent.ftun16-1.fna.fbcdn.net/v/t1.6435-9/53084547_2248353311895239_7823427438133641216_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=vR58F-Ja4koAX-rbVhY&_nc_ht=scontent.ftun16-1.fna&oh=00_AT8rHS03d5hPTA4aqNDlhodnNUxWoeYeQ0HBtlhWHEpwXQ&oe=63326097"/>
                </div>
            </div> 
            </div> 
            <div className="quote">
                <h4>“Experience is the name everyone gives to their mistakes.”</h4>
                <h6>– Oscar Wilde</h6>
                <p>Poète et dramaturge irlandais</p>
            </div>      
        </div>
    )
}
export default apropos;