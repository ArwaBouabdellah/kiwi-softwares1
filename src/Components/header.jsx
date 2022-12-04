import React, { Component } from 'react'
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn} from 'react-icons/fa';
import {useState} from 'react'
import { TiThMenu } from 'react-icons/ti';

function Header (){
        const [click,setClick]= useState(false)
        const handleClick = ()=>setClick(click)

        const [color, setColor] = useState(false)
        const changeColor= ()=>{
            if (window.scrollY>0){
                setColor(true)
            }else{
                setColor(false)
            }
        }

        window.addEventListener('scroll', changeColor)
        const [isOpen, setIsOpen] = useState(false);

        return (
        <React.Fragment>
            <div className='top' id='top'>
                <p>
                    <strong>Suivez-nous:  </strong>
                </p>
                <div className="social">
                    <ul>
                    <li><a className ="instagram" href="https://www.instagram.com/kiwi_softwares/?hl=fr" target="_blank"><FaInstagram/></a></li>
                    <li><a className="twitter" href="https://twitter.com/kiwi_softwares " target="_blank"><FaTwitter/></a></li>
                    <li><a className="facebook" href="https://www.facebook.com/kiwisoftwares" target="_blank"><FaFacebookF/></a></li>
                    <li><a className="linkedin" href="https://www.linkedin.com/company/kiwi-softwares/" target="blank"><FaLinkedinIn/></a></li>
                    </ul>
                </div>
           </div>
            <div className={color ? 'header header-bg' : 'header'}>
                <span className='logo'>
                    <img src="https://kiwisoftwares.net/img/tsagaan.png" alt="kiwi softwares logo"></img>
                </span>
                <span className="menu">
                    <TiThMenu/>
                    <div className="bar"></div>
                </span>
                <div className="navbar">
                    <ul className="navbar">
                        <li> <a className={color ? 'a a-bg' : 'a'} href="accueil">Accueil </a></li>
                        <li> <a className={color ? 'a a-bg' : 'a'} href="apropos">A propos</a></li>
                        <li> <a className={color ? 'a a-bg' : 'a'} href="service ">Nos services</a></li>
                        <li> <a className={color ? 'a a-bg' : 'a'} href="# ">Nos réalisations</a></li>
                        <li> <a className={color ? 'a a-bg' : 'a'} href="# ">Contactez-Nous</a></li>
                    </ul>
                </div>
            </div>
            
        </React.Fragment>);

        
    }

 
export default Header;