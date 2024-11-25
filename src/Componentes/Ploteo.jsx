import React from 'react'
import check from '../imagenes M.A.C/checkbox.webp'
import ploteo1 from '../imagenes M.A.C/ploteo1.jpeg'
import ploteo4 from '../imagenes M.A.C/RAM__ploteada.webp'
import ploteo5 from '../imagenes M.A.C/ploteo5.webp'
import ploteo6 from '../imagenes M.A.C/ploteo6.webp'
import paleta from '../imagenes M.A.C/paleta__colores.webp'
import { useEffect } from 'react'


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
                        }  else if (element.classList.contains('aparecer__izquierda__suave')) {
                            element.classList.add('animacion__izquierda_suave');
                        } 
                        observer.unobserve(element); // Deja de observar después de animar.
                    }
                });
            },
            { threshold: 0.1 } // 10% del elemento visible para activarlo.
        );

        // Seleccionamos todos los elementos con las clases necesarias.
        const elements = document.querySelectorAll(
            '.aparecer, .aparecer__izquierda, .aparecer__derecha, .aparecer__izquierda__suave'
        );

        elements.forEach((el) => observer.observe(el));

        // Cleanup al desmontar el componente.
        return () => observer.disconnect();
    }, []);
}

const Ploteo = () => {

    useIntersectionAnimations();

  return (
    <section className='ploteo' id='ploter'>
        <div className='ploteo__text'>
            <h2 className='ploteo__title aparecer__izquierda__suave'>Servicio de ploteo</h2>
            <p className="ploteo__p aparecer__izquierda__suave">¡Transformá tu vehículo con nuestro <strong>servicio de ploteo</strong>! En nuestro taller, te ofrecemos una solución innovadora y práctica para renovar el aspecto de tu auto, camioneta o moto sin compromisos permanentes.</p>
        </div>
        <div className='ploteo__tiks'>
            <div className="tik aparecer__izquierda">
                <img src={check} alt="tik" className='tik__img'/>
                <p className="tik__p"><span className='gradiente__colores'>Variedad de Colores y Estilos</span>: Elegí entre una amplia gama de colores, tanto mate como brillantes, y personalizá tu vehículo según tu estilo y personalidad.</p>
            </div>
            <div className="tik aparecer__derecha">
                <img src={check} alt="tik" className='tik__img' />
                <p className="tik__p"><span className='gradiente__naranja'>Duración y Flexibilidad</span>: La pintura que utilizamos no es permanente, puede retirarse fácilmente si querés cambiar de color.</p>
            </div>
            <div className="tik aparecer__izquierda">
                <img src={check} alt="tik" className='tik__img' />
                <p className="tik__p"><span className="gradiente__verde">Económico y Eficiente</span>: Este servicio es más accesible que una pintura convencional, y en menos de una semana, podrás recoger tu vehículo con su nuevo look.</p>
            </div>
        </div>
        <div className='ploteo__galeria'>
            <img src={ploteo1} alt="PLOTEO 1" loading='lazy' className='aparecer'/>
            <img src={ploteo5} alt="PLOTEO 2" loading='lazy' className='aparecer'/>
            <img src={ploteo6} alt="PLOTEO 3" loading='lazy' className='aparecer'/>
            <img src={ploteo4} alt="PLOTEO 4" loading='lazy' className='aparecer'/>
            <img src={paleta} alt="PLOTEO 5" loading='lazy' className='aparecer'/>
        </div>
        <div className='ploteo__precios'>
            <h3 className='ploteo__title aparecer__izquierda__suave'>Precios económicos. ¿Qué esperás?</h3>
            <h4 className='ploteo__subtitle aparecer__izquierda__suave'>¡Ponéle color a tu vida, ponéle color a tu auto!</h4>
            <p className='ploteo__p aparecer__izquierda__suave'>Pintura inteligente de secado rápido, colores brillantes y colores mate. En 48 horas, retiras tu vehículo totalmente pintado y con el color que vos elijas. <br /><br />Estamos disponibles de 10:00 a 16:00</p>
        </div>
    </section>
  )
}

export default Ploteo