const ObrasdeArte = []


class ObraArte {
    constructor(id, autor, tecnica, periodo, objeto, soporte, img /*img2*/) {
        this.id = id;
        this.autor = autor;
        this.tecnica = tecnica;
        this.periodo = periodo;
        this.objeto = objeto;
        this.soporte = soporte;
        this.img = img;
        /*this.img2 = img2;*/
    }
}


const objeto1 = new ObraArte(001, "Expo Marta Minujin - en exhibición  ", "Del 25 de Marzo de 2022 al 15 de Agosto de 2022", "Presentación en el Hall central", "De marzo a junio, el Museo Moderno presenta “Pandemia”, la obra más reciente de Marta Minujín, realizada durante el período del aislamiento, que da cuenta de la emergencia sanitaria mundial, el paso del tiempo y el propio proceso de construcción de la pieza.", "Durante la pandemia, Marta Minujín ideó y llevó a cabo una obra original y de largo aliento que le demandó más de once meses de encierro. En extensas jornadas de trabajo, la artista fue aplicando manualmente tiras minúsculas de tela, pintadas con cuadrados blancos, negros y de distintos tonos de gris, en un gran bastidor de 2,60 metros de altura por 2,10 metros de ancho.", "img/minujin2.jpg" )
const objeto2 = new ObraArte(002, "Expo Diana Dowek - en exhibición", "Del 12 de Abril de 2021 al 9 de Junio de 2022", "Salas 32 y 33, primer piso", "El Museo exhibe un conjunto de obras de la década de 1970 de la artista argentina Diana Dowek, algunas de ellas de la colección del Museo Nacional de Bellas Artes, a 50 años del Cordobazo", "La historia presente habita la obra de Diana Dowek con un sesgo peculiar. A veces, el drama de las violencias políticas aparece bajo la forma de metáforas; otras veces, se presenta de forma eminente.", "img/dowek1.jpg")
const objeto3 = new ObraArte(003, "Expo Le-parc - en exhibición", "Del 21 de Agosto de 2021 al 17 de Noviembre de 2022", "Pabellón de exposiciones temporarias", "La muestra “Julio Le Parc. Transición Buenos Aires-París (1955-1959)”, presenta en el Pabellón de exposiciones temporarias un centenar de pinturas, dibujos, acuarelas y grabados, algunos de ellos nunca exhibidos, que celebran la obra temprana del gran artista argentino.", "", "img/le-parc.jpg")
const objeto4 = new ObraArte(004, "Expo Kimsooja - en exhibición", "Del 16 de Septiembre de 2021 al 21 de Noviembre de 2021", "Sala 33 / Primer piso", "El Museo Moderno exhibe, del 16 de septiembre al 21 de noviembre, la muestra “Kimsooja. Nómada”, que presenta por primera vez en Buenos Aires la obra de la artista coreana Kimsooja (1957, Daegu, Corea del Sur), referente internacional del arte conceptual multimedia y del videoarte, como parte de la tercera edición de la Bienal Internacional de Arte Contemporáneo del Sur (BIENALSUR).", "", "img/obra.jpg")
const objeto5 = new ObraArte(005, "Expo Clorindo testa - en exhibición", "Del 11 de Diciembre de 2021 al 17 de Febrero de 2022", "Salas 39 y 40", "32 obras expuestas", "El Museo ha seguido de cerca la trayectoria de este gran artista argentino nacido en Italia, y hoy, a cinco años de su fallecimiento, nos enorgullece presentar esta muestra, que permite repensar, desde una mirada actual, su importante y singular legado plástico.", "img/testa1.jpg" )


ObrasdeArte.push(objeto1)
ObrasdeArte.push(objeto2)
ObrasdeArte.push(objeto3)
ObrasdeArte.push(objeto4)
ObrasdeArte.push(objeto5)




const login = () => {
    let nombredeusuario = document.getElementById("b1").value;
    let pass = document.getElementById("b2").value;

    let dato = datoCliente.find(e => e.nombredeusuario == nombredeusuario)
    let contraseña = datoCliente.find(e => e.pass == pass)
    if (dato != null) {
        alert("Usuario Correcto")
    } else {
        alert("Usuario no registrado")
    }
    if (contraseña != null) {
        alert("Bienvenido " + nombredeusuario)
        
        location.replace("src=obras.html")

    } else {
        alert("contraseña invalida")
    }
}


function closeForm() {
    document.getElementById("formpop").style.display = "none";
}


let seccion = document.getElementById("mostrarAca")

ObrasdeArte.forEach(Element => {
    let div1 = document.createElement("div")
    div1.setAttribute("class", "div1")

    let section = document.createElement("section")
    section.setAttribute("class", "section1")

    let div2 = document.createElement("div")
    div2.setAttribute("class", "div2")

    let div3 = document.createElement("div")
    div3.setAttribute("class", "div3")

    let div4 = document.createElement("div")
    div4.setAttribute("class", "div4")

    let btn = document.createElement("button")
    btn.setAttribute("class", "btn1")
    btn.setAttribute("id", Element.autor)
    btn.setAttribute("data", Element.soporte)
    btn.innerHTML = "comprar entrada";



    btn.onclick = function ($event) {
        document.getElementById("formpop").style.display = "block";
        
    };



    let p2 = document.createElement("p")
    p2.setAttribute("class", "titulo")
    p2.textContent = Element.autor

    let img = document.createElement("img")
    img.setAttribute("class", "arteImg")
    img.setAttribute("src",  `${Element.img}`)
    /*let img2 = document.createElement("img2")
    img.setAttribute("class", "arteImg2")
    img.setAttribute("src",  `${Element.img2}`)*/

    let p3 = document.createElement("p")
    p3.setAttribute("class", "tecnica")
    p3.textContent = Element.tecnica

    let p4 = document.createElement("p")
    p4.textContent = Element.periodo

    let p5 = document.createElement("p")
    p5.textContent = Element.objeto

    let p6 = document.createElement("p")
    p6.textContent = Element.soporte


    div1.appendChild(section)
    section.appendChild(p2)
    div1.appendChild(div2)
    div2.appendChild(div3)
    div2.appendChild(img)
    div3.appendChild(p3)
    div3.appendChild(p4)
    div3.appendChild(p5)
    div3.appendChild(p6)
    div1.appendChild(div4)
    div4.appendChild(btn)
    
    

    seccion.appendChild(div1)

})


const imprimir = () => {
    let nombreusuario = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let tickets = document.getElementById("entradas").value;

    const ventana = window.open('', 'PRINT', 'height=400,width=600');
    ventana.document.write("<p>Este Ticket fue generado para </p>");
    ventana.document.write(nombreusuario + apellido);
    ventana.document.write("<p>Y la cantidad de tickets es</p>");
    ventana.document.write(tickets);
    ventana.document.close();
    ventana.print();
    return true;

}