import React from 'react';
function cours(){
    return (
        <div className="cours">
            <h1><span>N</span>os sponsors</h1>
            <div className="sponsors">
                <img alt="" src="https://kiwisoftwares.net/img/Logos/3docean.png"/>
                <img alt="" src="https://kiwisoftwares.net/img/Logos/audiojungle.png"/>
                <img alt="" src="https://kiwisoftwares.net/img/Logos/codecanyon.png"/>
                <img alt="" src="https://kiwisoftwares.net/img/Logos/graphicriver.png"/>
                <img alt="" src="https://kiwisoftwares.net/img/Logos/photodune.png"/>
            </div>
            <h1><span>C</span>ours privés </h1>
            <div className="boxes">
            <div className="box">
                <div className="Head">
                    <h4>Informatique</h4>
                </div>
                <div className="description">
                    <ul>
                        <li>Cours théorique</li>
                        <li>Pratique</li>
                        <li>Word</li>
                        <li>Excel</li>
                        <li>Power Point</li>
                    </ul>
                    <p>
                        <strong>200dt/20Heures</strong>
                    </p> 
                </div>
            </div>
            <div className="box">
                <div className="Head">
                    <h4>Programmation</h4>
                </div>
                <div className="description">
                    <ul>
                        <li>Pascal</li>
                        <li>HTML/ PHP</li>
                        <li>Java/ JEE</li>
                        <li>.NET</li>
                    </ul>
                    <p>
                        <strong>200dt/20Heures</strong>
                    </p> 
                </div>
            </div>
            <div className="box">
                <div className="Head">
                    <h4>Langues</h4>
                </div>
                <div className="description">
                    <ul>
                        <li>Espagnol</li>
                        <li>Français</li>
                        <li>Arabe</li>
                    </ul>
                    <p>
                        <strong>200dt/20Heures</strong>
                    </p> 
                </div>
                
            </div>
            </div>
        </div>


    )
}
export default cours;