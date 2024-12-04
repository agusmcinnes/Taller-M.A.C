
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons/faMapLocationDot';
import Conocenos from './Componentes/Conocenos';
import Ploteo from './Componentes/Ploteo';


import logo from './imagenes M.A.C/logo__header.png'
import logo__firstPage from './imagenes M.A.C/logo_MAC_GRANDE.webp'
import mustang from './imagenes M.A.C/mustangCalidad.webp'


function App() {

    return (
        <div className="App">
            <header>
                <div className='redes header__item'>
                    <div className='red__header'>
                        <a href="https://wa.link/kzfqbz" target='BLANK'>
                        <FontAwesomeIcon icon={faWhatsapp} />
                        <span>223-1111-111</span>
                    </a>
                    </div>
                    <div className='red__header'>
                    <a href="https://www.facebook.com/profile.php?id=100063825501915" target='BLANK'>
                        
                        <FontAwesomeIcon icon={faFacebook} />
                        <span>Taller Mac Caiati</span>
                    </a>


                    </div>
                    <div className='red__header'>
                    <a href="#contacto">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>codarabe@gmail.com</span>
                    </a>
                    </div>
            </div>

            <nav className="navbar header__item">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#conocenos">Conócenos</a>
                    </li>
                    <li className="nav__item">
                        <a href="#ploter">Ploteos</a>
                    </li>
                    <li className="nav__item">
                        <a href="#contacto">Contáctanos</a>
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
                    <img src={logo__firstPage} alt="Taller MAC"/>
                    <h1>Especializados en <strong className="texto__naranja aparecer">pintura renovable</strong></h1>
                    <a href='#ploter' className='button__ploteo'>Ploteo en acción!</a>
                </div>
                <div className='mustang'>
                    <img src={mustang} alt="Mustang" loading='lazy'/>

                </div>

            </div>

            <Conocenos></Conocenos>

            <div className='banner'>
                <h2 className='banner__title'>¡Anímate al cambio!</h2>
                <p className="banner__text">Traé tu auto y experimentá la magia del ploteo. Convertimos tu idea en realidad y te garantizamos que no te vas a arrepentir</p>
            </div>
            <Ploteo></Ploteo>
        </main>
        <footer id='contacto'>
            <div className='logo__footer'>
                <img src={logo} alt="" />
            </div>
            <div className='contacto'>
                <span className='contactanos__title'>Contáctanos</span>
                <div className='redes__footer'>
                    <div className='red__header red__footer'>
                        <a href="https://wa.link/kzfqbz"  target='BLANK'>
                        <FontAwesomeIcon icon={faWhatsapp} className='whatsapp'/>
                        <span>223-636-3450</span>
                    </a>
                    </div>
                    <div className='red__header red__footer'>
                    <a href="https://www.facebook.com/profile.php?id=100063825501915" target='BLANK'>
                        
                        <FontAwesomeIcon icon={faFacebook} />
                        <span>Taller Mac Caiati</span>
                    </a>

                    </div>
                    <div className='red__header red__footer'>
                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target='BLANK'>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>codarabe@gmail.com</span>
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
