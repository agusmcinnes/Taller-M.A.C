
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons/faMapLocationDot';
import Conocenos from './Componentes/Conocenos';
import Ploteo from './Componentes/Ploteo';
import { XyzTransition, XyzTransitionGroup } from '@animxyz/react'
import { useEffect } from 'react';

import logo from './imagenes M.A.C/logo__header.png'
import logo__firstPage from './imagenes M.A.C/logo_MAC_GRANDE.webp'
import mustang from './imagenes M.A.C/mustangCalidad.webp'

function useIntersectionAnimations() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        if (element.classList.contains('aparecer')) {
                            element.classList.add('animacion');
                        } else if (element.classList.contains('aparecer__izquierda')) {
                            element.classList.add('animacion__izquierda');
                        } else if (element.classList.contains('aparecer__derecha')) {
                            element.classList.add('animacion__derecha');
                        }
                        observer.unobserve(element); // Deja de observar después de animar.
                    }
                });
            },
            { threshold: 0.1 } // 10% del elemento visible para activarlo.
        );

        // Seleccionamos todos los elementos con las clases necesarias.
        const elements = document.querySelectorAll(
            '.aparecer, .aparecer__izquierda, .aparecer__derecha'
        );

        elements.forEach((el) => observer.observe(el));

        // Cleanup al desmontar el componente.
        return () => observer.disconnect();
    }, []);
}


function App() {
    useIntersectionAnimations();

    return (
        <div className="App">
            <header>
                <div className='redes header__item'>
                    <div className='red__header'>
                        <a href="https://web.whatsapp.com/">
                        <FontAwesomeIcon icon={faWhatsapp} />
                        <span>223-1111-111</span>
                    </a>
                    </div>
                    <div className='red__header'>
                    <a href="https://www.facebook.com/home.php">
                        
                        <FontAwesomeIcon icon={faFacebook} />
                        <span>boeeeeeee</span>
                    </a>

                    </div>
                    <div className='red__header'>
                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>soycarlitos@gmail.com</span>
                    </a>
                    </div>
            </div>

            <nav className="navbar header__item">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#">Conócenos</a>
                    </li>
                    <li className="nav__item">
                        <a href="#ploter">Ploteados</a>
                    </li>
                    <li className="nav__item">
                        <a href="#">Contáctanos</a>
                    </li>
                </ul>
            </nav>

            <div className="logo header__item">
                <img src={logo} alt="taller mac" loading='lazy' />
            </div>
        </header>

        <main>
            <div className='first__page'>
                <div className="first__page-text">
                    <img src={logo__firstPage} alt="Taller MAC" className='aparecer'/>
                    <h1>Especializados en <strong className="texto__naranja aparecer">pintura renovable</strong></h1>
                    <a href='#ploter' className='button__ploteo aparecer__izquierda'>Ploteo en acción!</a>
                </div>
                <div className='mustang'>
                    <img src={mustang} alt="Mustang" loading='lazy' className='aparecer__derecha'/>

                </div>

            </div>

            <Conocenos></Conocenos>

            <div className='banner'>
                <h2 className='banner__title'>¡Anímate al cambio!</h2>
                <p className="banner__text">Traé tu auto y experimentá la magia del ploteo. Convertimos tu idea en realidad y te garantizamos que no te vas a arrepentir</p>
            </div>
            <Ploteo></Ploteo>
        </main>
        <footer>
            <div className='logo__footer'>
                <img src={logo} alt="" />
            </div>
            <div className='contacto'>
                <span className='contactanos__title'>Contáctanos</span>
                <div className='redes__footer'>
                    <div className='red__header red__footer'>
                        <a href="https://web.whatsapp.com/">
                        <FontAwesomeIcon icon={faWhatsapp} className='whatsapp'/>
                        <span>223-1111-111</span>
                    </a>
                    </div>
                    <div className='red__header red__footer'>
                    <a href="https://www.facebook.com/home.php">
                        
                        <FontAwesomeIcon icon={faFacebook} />
                        <span>boeeeeeee</span>
                    </a>

                    </div>
                    <div className='red__header red__footer'>
                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>soycarlitos@gmail.com</span>
                    </a>
                    </div>
                </div>

            </div>
            <div className='footer__direc'>
                    <a href="https://www.google.com/maps/place/CFR,+3+de+Febrero+5818,+B7604+Mar+del+Plata,+Provincia+de+Buenos+Aires/@-37.9798027,-57.5793692,17z/data=!3m1!4b1!4m6!3m5!1s0x9584d9155afc99d7:0x18f6dd170d207153!8m2!3d-37.979807!4d-57.5767943!16s%2Fg%2F11k54mtqfm?authuser=0&entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D" className='footer__link'>
                    <FontAwesomeIcon icon={faMapLocationDot} className='icon__map'/>
                    <span className='footer__direc-text'>3 de febrero 5818 <br />Mar del Plata</span>
                    </a>

                </div>
        </footer>
        </div>

    );
}

export default App;
