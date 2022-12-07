import React from 'react'; 

const HomePage = (props) => {
    return (
        <main>
            <div className="general">
                <h3>¿Qué es un motor y cuál es su funcionamiento?</h3>
                <p>¿Qué es un motor y cuál es su funcionamiento?
                    Son artefactos que tienen la capacidad de transformar la energía eléctrica en energía mecánica y así
                    pueden impulsar el funcionamiento de una máquina. Esto ocurre por la acción de campos magnéticos que
                    se
                    generan gracias a las bobinas, que son los pequeños cilindros con hilo metálico.</p>
                <h3>¿cuando se crearon los motores?</h3>
                <p>El 24 de enero de 1860 el ingeniero Étienne Levoir presentó el primer motor utilizable de combustión
                    interna, tras varios intentos por encontrar la forma de mover los coches autopropulsados.
                </p>
                <h3>¿Que tipos de motores existen?</h3>
            </div>
            <div className="tipos">
                <div className="tipo">
                    <h4>Motores gasolina</h4>
                    <p>Un motor de combustión convierte la energía liberada durante la combustión del combustible en
                        trabajo mecánico. El principio de funcionamiento es básicamente el mismo para todos los motores:
                        el combustible se quema a alta presión como una mezcla combustible-aire inflamable en una
                        explosión.La expansión repentina de energía pone en marcha un pistón. Este movimiento es
                        entonces guiado al tren de conducción del vehículo. En la mayoría de los coches, se suele situar
                        un motor de pistón alternativo bajo el capó en combinación con una biela y un cigüeñal. Otras
                        variantes como el motor Wankel o el motor radial son más exóticas, por lo que no hablaremos de
                        ellas en este artículo.</p>
                </div>
                <div className="tipo">
                    <h4>Motores diésel</h4>
                    <p>Se conoce como motor diésel a un tipo de motor de combustión interna que se caracteriza por usar
                        gasóleo como combustible y por que su funcionamiento se basa en la inflamación por compresión de
                        dicho combustible. Se caracterizan por un elevado rendimiento termodinámico propiciado en gran
                        medida porque la expansión provocada por la inflamación del combustible es relativamente
                        constante durante toda la carrera del pistón, a diferencia de los motores de gasolina o de
                        explosión.</p>
                </div>
               
                <div className="tipo">
                    <h4>Motores eléctricos</h4>
                    <p>Son artefactos que tienen la capacidad de transformar la energía eléctrica en energía mecánica y
                        así pueden impulsar el funcionamiento de una máquina. Esto ocurre por la acción de campos
                        magnéticos que se generan gracias a las bobinas, que son los pequeños cilindros con hilo
                        metálico. Son importantes para nuestros días, ya que se utilizan en aspiradoras, lavavajillas,
                        impresoras de ordenador, bombas de agua, industrias manufactureras, coches, máquinas,
                        herramientas, imprentas, entre otros más usos.</p>
                </div>
             
                <div className="tipo">
                    <h4>Motores de GLP y GNC</h4>
                    <p>El gas licuado de petróleo (GLP), también conocido como Autogas, es actualmente y desde hace
                        varios años, el combustible alternativo más utilizado en todo el mundo: en Europa a día de hoy
                        circulan más de 15 millones de vehículos de GLP, cifrándose en 50.000 en España. El sistema está
                        conformado por un depósito, componentes electrónicos, canalizaciones y sistema de inyección. El
                        GLP se canaliza desde el depósito a los inyectores a través de la bomba o sin ella. El sistema
                        realiza un cálculo de la cantidad de GLP que debe inyectar y en qué momento.
                        Un coche a GNC es un tipo de vehículo que cuenta con un único motor de combustión interna
                        capacitado para utilizar un gas como combustible, concretamente Gas Natural Comprimido, además
                        de la gasolina. La adaptación para funcionar con un combustible o el otro se puede hacer en
                        fábrica o una vez ya comprado.</p>
                </div>
            </div>
        </main>
    );
}
export default HomePage;