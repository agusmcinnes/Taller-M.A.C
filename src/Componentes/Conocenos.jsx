import { Helmet } from 'react-helmet';
import colores from '../imagenes M.A.C/colorQueQuieras.webp'
import coloresSmartPhone from '../imagenes M.A.C/colorQueQuierasCellphone.webp'
import { useEffect } from 'react'

function useIntersectionAnimations() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        if (element.classList.contains('aparecer__izquierda')) {
                            element.classList.add('animacion__izquierda_suave');
                        } else if (element.classList.contains('aparecer__derecha')) {
                            element.classList.add('animacion__derecha_suave');
                        }
                        observer.unobserve(element); // Deja de observar después de animar.
                    }
                });
            },
            { threshold: 0.1 } // 10% del elemento visible para activarlo.
        );

        // Seleccionamos todos los elementos con las clases necesarias.
        const elements = document.querySelectorAll(
            '.aparecer__izquierda, .aparecer__derecha'
        );

        elements.forEach((el) => observer.observe(el));

        // Cleanup al desmontar el componente.
        return () => observer.disconnect();
    }, []);
}


const Conocenos = () => {

    useIntersectionAnimations();

  return (
    <>
    <Helmet>
        <script type="application/ld+json">
        {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoBodyShop",
            "name": "Talleres M.A.C",
            "description": "Especialistas en ploteo de autos, chapa y pintura con más de 50 años de experiencia.",
            "areaServed": "Mar del Plata, Argentina",
            "serviceType": ["Ploteo de vehículos", "Chapa y pintura"],
            "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mar del Plata",
            "addressCountry": "AR"
            }
        })}
        </script>
    </Helmet>
        <section className='conocenos' id='conocenos'>
                <div className="conocenos__text">
                    <h2 className='conocenos__title'>
                    Conócenos: Especialistas en Ploteo, Chapa y Pintura
                    </h2>
                    <div className='conocenos__parrafos'>
                        <p className="conocenos__p aparecer__izquierda">Nos dedicamos a transformar vehículos con un enfoque profesional y detallista. Somos <strong className='texto__naranja'>especialistas en ploteo de autos</strong>, ofreciendo soluciones modernas para personalizar y renovar el aspecto de cualquier vehículo.</p>
                        <p className="conocenos__p aparecer__izquierda">Con más de 50 años de experiencia en el rubro de <strong className='texto__naranja'>chapa y pintura</strong>, hemos construido una sólida reputación basada en la calidad y confianza de nuestros clientes. Nuestro compromiso es entregar resultados que superen expectativas, combinando acabados impecables con tiempos de entrega rápidos.</p>
                        <p className="conocenos__p aparecer__izquierda">En Talleres M.A.C, tu vehículo está en manos de expertos que entienden la importancia de cada detalle. ¡Conocenos y descubrí por qué somos la mejor opción para el cuidado y <strong className='texto__naranja'>personalización de tu auto</strong>!</p>
                    </div>
                </div>
                <div className='conocenos__img'>
                <picture>
        <source srcSet={coloresSmartPhone} media="(max-width: 1350px)" />
        <img src={colores} alt="Colores" />
    </picture>
                </div>
            </section>
    </>
);
};

export default Conocenos;