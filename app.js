const ObrasdeArte = []


class ObraArte {
    constructor (id, autor, tecnica, periodo, objeto, soporte){
        this.id = id;
        this.autor = autor;
        this.tecnica = tecnica;
        this.periodo = periodo;
        this.objeto = objeto;
        this.soporte = soporte;
        }
}

const objeto1 = new ObraArte(001, "Negroni", "óleo", "XII-XVIII", "Pintura", "Sobre Tabla")
const objeto2 = new ObraArte(002, "Lieutaud", "Bronce-Marmol-Metal", "XII-XVIII", "Reloj", "-")
const objeto3 = new ObraArte(003, "Tiépolo", "Óleo", "XII-XVIII", "Pintura","Tela")
const objeto4 = new ObraArte(004, "Maldonado", "Óleo", "XX-XXI", "Pintura", "Tela")
const objeto5 = new ObraArte(005, "Iommi Enio", "Caños de Hierro", "XX - XXI", "escultura", "sobre base de yeso")


ObrasdeArte.push(objeto1)
ObrasdeArte.push(objeto2)
ObrasdeArte.push(objeto3)
ObrasdeArte.push(objeto4)
ObrasdeArte.push(objeto5)


const datoCliente = []

class registroCliente {
    constructor (nombre, email, direccion, pass, nombredeusuario){
        this.nombre = nombre;
        this.email = email;
        this.direccion = direccion;
        this.pass = pass;
        this.nombredeusuario = nombredeusuario;
    }
} 

const guardarDato = () => {
    let nombre = prompt("Ingrese su Nombre")
    let email = prompt("Ingrese su Email")
    let direccion = prompt("Ingrese su Direccion")
    let pass = prompt("Crea una Constraseña")
    let nombredeusuario = prompt("Crea un Nombre de Usuario")

    const Usuario1 = new registroCliente(nombre, email, direccion, pass, nombredeusuario)

    datoCliente.push(Usuario1)
    alert("TE HAS REGISTRADO CORRECTAMENTE! "+ nombre + " , se enviara un correo a tu email: " + email)
}





const login = () => {
    let nombredeusuario = prompt("Ingrese su Nombre de Usuario")
    let pass = prompt("Ingrese su contraseña")

    let dato = datoCliente.find(e => e.nombredeusuario == nombredeusuario)
    let contraseña = datoCliente.find(e => e.pass == pass)
    if (dato !=null){
        alert("Usuario Correcto")
    }else {
        alert("Usuario no registrado")
    }
    if (contraseña !=null){
        alert("Bienvenido " + nombredeusuario) 
    }else {
        alert("contraseña invalida")
    }
}



guardarDato()
login()

const VerObra = () => {
var holaMundo = prompt("Quiere ver el listado de obras? SI-NO");
if (holaMundo == "si") {
    alert("Genial veamos las obras! (: ");
} else{
    alert("no podemos ver las obras :(" );
}
}

VerObra()

/* Aca convierto los datos pero aun no los tengo definidos de cómo los voy a usar   */
let datoConvertido = JSON.stringify(ObrasdeArte)

localStorage.setItem("ObrasdeArte", datoConvertido)





let seccion = document.getElementById("mostrarAca")

ObrasdeArte.forEach(e => {
    let div1 = document.createElement("div")

    let p1 = document.createElement("p")
    p1.textContent = e.id 

    let p2 = document.createElement("p")
    p2.textContent = e.autor

    let p3 = document.createElement("p")
    p3.textContent = e.tecnica

    let p4 = document.createElement("p")
    p4.textContent = e.periodo

    let p5 = document.createElement("p")
    p5.textContent = e.objeto

    let p6 = document.createElement("p")
    p6.textContent = e.soporte


    div1.appendChild(p1)
    div1.appendChild(p2)
    div1.appendChild(p3)
    div1.appendChild(p4)
    div1.appendChild(p5)
    div1.appendChild(p6)

    seccion.appendChild(div1)
})




/*
cargarObrasdeArte = () => {
    let id = prompt("Ingrese nuevo id")
    let autor = prompt("Ingrese nuevo autor")
    let tecnica = prompt("Ingrese nueva tecnica")
    let periodo = prompt("Ingrese nuevo periodo")
    let objeto = prompt("Ingrese nuevo objeto")
    let soporte = prompt("Ingrese nuevo soporte")
}
*/





