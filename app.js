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
const objeto5 = new ObraArte(005, " Iommi, Enio", "Caños de Hierro", "XX - XXI", "escultura", "sobre base de yeso")


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
guardarDato()

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
        alert("Bienvenido " + nombre) 
    }else {
        alert("contraseña invalida")
    }
}
login()



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





