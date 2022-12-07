import React from 'react';

const ContactoPage = (props) => {
    return (
        <main>
            <div className="cols">
            <div className="columna left">
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name='' />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="email" />
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="comentario">Comentario</label>
                        <textarea id="comentaro"></textarea>
                    </p>
                    <p class="acciones"><input type="submit"  value="Enviar"/>
                    </p>
                </form>
            </div>
            <div className="columna right">
                <h2>Otras vias de contacto</h2>
                <p>Tambien se pueden comunicar con nosotros......</p>
                <ul>
                    <li>Telefono: 4335-2243</li>
                    <li>Email:solorespuestas@gmail.com</li>
                    <li>Facebook:</li>
                    <li>Twitter:</li>
                    <li>Skype:</li>
                </ul>
            </div>
        </div>
        </main>
    );
}
export default ContactoPage;