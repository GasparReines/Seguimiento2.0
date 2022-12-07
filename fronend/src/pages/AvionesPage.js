import React from 'react'; 

const AvionesPage = (props) => {
    return (
        <main>
            <div className="general">
                <p>¿Que tipos utilizan los aviones?</p>
                <p> En la aviación moderna se emplean básicamente dos tipos de motores, los de turbofan y los de
                    turbohélice. Pero estos no son los unicos exitentes tambien estan los: mostores de piston, motores
                    de turbina y turboreactior .</p>
            </div>
            <div className="turbinas">
               
                <div className="turbina">
                    <img src="images/avpiston.jfif" alt=""/>
                    <h4>Motores de pistón</h4>
                    <p> Los motores de pistón fueron los primeros que equiparon los primeros aviones, como el propio
                        Flyer I de los hermanos Wright, pioneros de la aviación. Los motores de pistón actuales aportan
                        una gran fiabilidad y unos costes de mantenimiento muy bajos. Actualmente, encontramos motores
                        de pistón en multitud de avionetas y aviones de uso particular y en otras aeronaves que
                        compartan varias características: ser ligeras, no necesariamente rápidas y sencillas y baratas
                        de operar.</p>
                </div>
                
                <div className="turbina">
                    <img src="images/avpiston.jfif" alt=""/>
                    <h4>Motores de turbina</h4>
                    <p> También llamados de reacción acapararon gran parte de la aviación por unas características muy
                        superiores a los motores de pistón. Eran más potentes, más seguros y simplemente permitían volar
                        más rápido y más alto que ningún otro motor antes. Funcionamiento: El aire que entra en este
                        tipo de motores se va comprimiendo mediante el uso de diferentes turbinas hasta llegar a una
                        cámara de combustión, que gracias al uso del combustible, enciende y expande los gases que salen
                        del motor haciendo girar otras turbinas que mantienen el movimiento de todo el sistema. El
                        resultado es una potencia giratoria disponible para conseguir mover el aire hacia atrás y
                        obtener el empuje necesario para mover el avión. El cómo usemos esa potencia, diferencia los
                        motores de turbina en varios tipos que enseguida veremos.</p>
                </div>
               
                <div className="turbina">
                    <img src="images/avturbohelice.jfif" alt=""/>
                    <h4>Turbohélice</h4>
                    <p> Imbatibles en eficiencia para la velocidad y potencia que necesitan en sus rutas de corta
                        distancia y baja o media demanda de plazas. Los turbohélice utilizan la potencia de la que
                        hablábamos antes en mover una hélice de alto rendimiento con generalmente cuatro o seis palas.
                    </p>
                </div>
                
                <div className="turbina">
                    <img src="images/avturboreactor.jfif" alt=""/>
                    <h4>Turborreactor</h4>
                    <p>Ahora prácticamente en desuso, salvo aplicaciones muy concretas, fueron los primeros motores a
                        reacción. El empuje para el avión se conseguía a través de la fuerza con la que esos gases
                        quemados salían por la parte trasera del motor. Dejaron de usarse pronto en los aviones
                        comerciales porque el afán de eficiencia de los fabricantes y aerolíneas pronto llevó a una
                        nueva generación con menos consumo y más prestaciones.</p>
                </div>
                <div className="turbina">
                    <img src="images//avturbofan.jfif" alt=""/>
                    <h4>Turbofan</h4>
                    <p>Así se llamó a esa nueva generación. Otras mejoras aparte, la gran novedad fue utilizar la
                        potencia obtenida para empujar aire a gran velocidad. Una primera turbina a la entrada del motor
                        movía el aire a través del mismo, una parte de él se usaba para el uso «típico» del motor a
                        reacción y otra parte simplemente aportaba un empuje adicional del motor.</p>
                </div>
            </div>
        </main>
    );
}
export default AvionesPage;