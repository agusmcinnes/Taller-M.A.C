import React from 'react'
import check from '../imagenes M.A.C/checkbox.webp'
import ploteo1 from '../imagenes M.A.C/ploteo1.jpeg'
import ploteo4 from '../imagenes M.A.C/ploteo4.jpeg'
import ploteo5 from '../imagenes M.A.C/ploteo5.webp'
import ploteo6 from '../imagenes M.A.C/ploteo6.webp'
const Ploteo = () => {
  return (
    <section className='ploteo' id='ploter'>
        <div className='ploteo__text'>
            <h2 className='ploteo__title'>Servicio de ploteo</h2>
            <p className="ploteo__p">¡Transformá tu vehículo con nuestro <strong>servicio de ploteo</strong>! En nuestro taller, te ofrecemos una solución innovadora y práctica para renovar el aspecto de tu auto, camioneta o moto sin compromisos permanentes.</p>
        </div>
        <div className='ploteo__tiks'>
            <div className="tik">
                <img src={check} alt="" />
                <p className="tik__p"><span className='gradiente__colores'>Variedad de Colores y Estilos</span>: Elegí entre una amplia gama de colores, tanto mate como brillantes, y personalizá tu vehículo según tu estilo y personalidad.</p>
            </div>
            <div className="tik">
                <img src={check} alt="" />
                <p className="tik__p"><span className='gradiente__naranja'>Duración y Flexibilidad</span>: La pintura que utilizamos no es permanente, puede retirarse fácilmente si querés cambiar de color.</p>
            </div>
            <div className="tik">
                <img src={check} alt="" />
                <p className="tik__p"><span className="gradiente__verde">Económico y Eficiente</span>: Este servicio es más accesible que una pintura convencional, y en menos de una semana, podrás recoger tu vehículo con su nuevo look.</p>
            </div>
        </div>
        <div className='ploteo__galeria'>
            <img src={ploteo1} alt="PLOTEO 1" loading='lazy'/>
            <img src={ploteo5} alt="PLOTEO 2" loading='lazy'/>
            <img src={ploteo6} alt="PLOTEO 3" loading='lazy'/>
            <img src={ploteo4} alt="PLOTEO 4" loading='lazy'/>
        </div>
        <div className='ploteo__precios'>
            <h3 className='ploteo__title'>Precios económicos. ¿Qué esperás?</h3>
            <h4 className='ploteo__subtitle'>¡Ponéle color a tu vida, ponéle color a tu auto!</h4>
            <p className='ploteo__p'>Pintura inteligente de secado rápido, colores brillantes y colores mate. En 48 horas, retiras tu vehículo totalmente pintado y con el color que vos elijas.</p>
        </div>
    </section>
  )
}

export default Ploteo