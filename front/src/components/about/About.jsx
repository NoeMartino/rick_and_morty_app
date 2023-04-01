import style from '../about/About.module.css'

export default function About () {
    return (
        <div className= {style.divAbout}>
            <h1>About me</h1>
            <p>¡Hola! ¡Bienvenidxs a mi página! Mi nombre es Noelia, tengo 32 años y soy de Buenos Aires, Argentina. Soy maestra jardinera, tengo dos perri-hijas y en mi tiempo libre me gusta mirar series.<br></br>Esta es mi primera aplicación realizada con React, espero que disfruten explorar su contenido. Me empecé a interesar por el desarrollo web hace poco tiempo y a partir de ahí descubrí un mundo que me apasiona.<br></br>¡Gracias por tu interés!</p>
            <img className= {style.imgAbout} src= "gorickyourself.png" alt= "Noe"></img>
        </div>
    )
}