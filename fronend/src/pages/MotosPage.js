import React from 'react'; 

const MotosPage = (props) => {
    return (
        <main>
            <div className="general">
                <p>Hay diferentes tipos de motores dependiendo del resultado que se busque en cada tipo de moto. La
                    inmensa mayoría de los motores que se fabrican hoy en día son motores 4 tiempos, los motores 2
                    tiempos han quedado sólo para motos específicas de enduro o motocross, o pequeños ciclomotores de 50
                    cc. Las diferentes configuraciones de los motores hacen que la entrega de potencia y par motor varíe
                    de un caso a otro, independientemente de la cilindrada de cada uno de ellos.</p>
            </div>
            <div className="motos">
                <div className="moto">
                    <img src="images/mtcilindrico.jfif" alt=""/>
                    <h4>Motor monocilíndrico</h4>
                    <p>Es el tipo de motor más sencillo de todos ya que sólo tiene un cilindro. Por ello es el más
                        económico de todos. Es también el tipo de motor más ligero y compacto de todos, por lo que la
                        mayoría de las motos offroad recurren a este tipo de configuración. Su mecánica además es
                        sencilla y es el que menor número de partes móviles comprende, por lo que su mantenimiento no es
                        exigente. Es el tipo de motor que transmite un mayor número de vibraciones, pero también el que
                        ofrece la potencia a un menor número de revoluciones.</p>
                </div>
                
                <div className="moto">
                    <img src="images/mtbicilindrico.jfif" alt=""/>
                    <h4>Motor bicilíndrico</h4>
                    <p>Los motores bicilíndricos pueden seguir muy diferentes configuraciones. Los cilindros pueden
                        estar dispuestos en forma de V, en forma de L, en paralelo uno junto al otro o incluso
                        enfrentados entre sí, como en los motores bóxer. Son los más populares en las motos de
                        cilindrada media e incluso entre muchas de alta cilindrada y muy alta cilindrada, pero sin duda
                        los más utilizados hasta los 600 cc. Ofrece una combinación muy equilibrada, suben más y más
                        rápido de vueltas que los motores de un cilindro, y a su vez consiguen una mayor potencia y un
                        menor número de vibraciones.</p>
                </div>
                
                <div className="moto">
                    <img src="images/mttricilindrico.jfif" alt=""/>
                    <h4>Motor tricilíndrico</h4>
                    <p>Los motores tricilíndricos son los más particulares, escasos y menos utilizados de todos, con
                        excepción de los hexacilíndricos, claro está. Se puede decir que los motores tricilíndricos
                        reúnen lo mejor de los motores bicilíndricos con lo mejor de los motores tetracilíndricos,
                        quedándose con las ventajas de cada configuración. Consiguen una rápida potencia y par, sin que
                        haya que esperar a las más altas revoluciones. Los cilindros están dispuestos en línea por lo
                        que no son tan estrechos como los bicilíndricos, y por su tamaño tampoco tan ligeros como éstos.
                    </p>
                </div>
                
                <div className="moto">
                    <img src="images/mttetracilindrico.jfif" alt=""/>
                    <h4>Motor tetracilíndrico</h4>
                    <p> La configuración más usual es la de situar los cuatro cilindros en línea, en paralelo unos junto
                        al otros, pero también se pueden encontrar como motores V4, en tal caso con dos V paralelas cada
                        una de dos cilindros. La complejidad en ambos casos hacen que sean motores más caros que los de
                        menor número de cilindros. Son grandes y pesados comparados con los motores de dos cilindros,
                        pero la finura de su funcionamiento hace que las vibraciones sean prácticamente inexistentes.
                        Cuentan con un alto rendimiento por lo que la potencia es elevada a un alto número de
                        revoluciones, pero la entrega de par es menor comparado con los motores bicilíndricos. </p>
                </div>
                
                <div className="moto">
                    <img src="images/mthexacilindrico.jfif" alt=""/>
                    <h4>Motor hexacilíndrico</h4>
                    <p>Se caracterizan por ofrecer una suavidad fuera de lo normal, por encima de los ya suaves motores
                        tetracilíndricos, con mucha potencia, finura y un sonido delicioso, pero también por su
                        aparatosidad, peso, volumen y.... elevado precio. BMW opta por una configuración de seis
                        cilindros en línea, mientras que Honda apuesta por una opción más original en disposición bóxer,
                        es decir, con los cilindros enfrentados formando tres grupos de dos.</p>
                </div>
            </div>
        </main>
    );
}
export default MotosPage;