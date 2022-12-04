import React from 'react';
import { GiPositionMarker } from 'react-icons/gi'
import { MdEmail } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn} from 'react-icons/fa';

function footer(){
    return (
        <div className="footer">
            <h1><span>C</span>ontactez-nous</h1>
            <div className="rows">
            <div className="row">
                <h4>Kiwi Softwares</h4>
                <p>Kiwi Softwares est une jeune societé Tunisienne située à Hammamet (Tunisie) spécialisée dans la création de logiciels informatiques, sites web, référencement, hébergement, téléassistance, maintenance, support...</p>
            </div>
            <div className="row">
                <h4>Contactez nous : </h4>
                <ul className="contact">
                    <li>
                        <GiPositionMarker className="GiPositionMarker "/>Rue Abdesslam Zarrouk 8050 Hammamet
                    </li> 
                    <li>
                        <MdEmail className="MdEmail"/>hey@kiwisoftwares.net
                    </li>
                    <li>
                        <MdEmail className="MdEmail "/>work@kiwisoftwares.net (stages+recrutement)
                    </li>
                    <li>
                        <BsFillTelephoneFill className="BsFillTelephoneFill "/>(+216) 23 966 380
                    </li>
                    <li>
                        <AiFillHome className="AiFillHome "/>(+216) 72 27 80 80
                    </li>
                    <ul className="social">
                        <li><a className ="instagram" href="https://www.instagram.com/kiwi_softwares/?hl=fr" target="_blank"><FaInstagram/></a></li>
                        <li><a className="twitter" href="https://twitter.com/kiwi_softwares " target="_blank"><FaTwitter/></a></li>
                        <li><a className="facebook" href="https://www.facebook.com/kiwisoftwares" target="_blank"><FaFacebookF/></a></li>
                        <li><a className="linkedin" href="https://www.linkedin.com/company/kiwi-softwares/" target="blank"><FaLinkedinIn/></a></li>
                    </ul>
                </ul>
            </div>
            <div className="row">
            <iframe width="600" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Kiwi%20Softwares%20Hammamet&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
            </div>
        </div>
    )
}
export default footer;