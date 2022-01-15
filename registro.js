const datoCliente = []

class registroCliente {
    constructor(nombre, email, direccion, nombredeusuario, pass) {
        this.nombre = nombre;
        this.email = email;
        this.direccion = direccion;
        this.nombredeusuario = nombredeusuario;
        this.pass = pass;
    }
}


function registroUsuario() {

    let nombre = document.getElementById("t1").value;
    let email = document.getElementById("t2").value;
    let direccion = document.getElementById("t3").value;
    let nombredeusuario = document.getElementById("t4").value;
    let pass = document.getElementById("t5").value;


    if (nombre == '') {
        alert('Please enter your name');
    } else if (email == '') {
        alert('Please enter your user email id');
    } else if (direccion == '') {
        alert('Please enter the user name.');
    } else if (nombredeusuario == '') {
        alert('Please enter the user name.');
    } else if (pass == '') {
        alert('Please enter Password');
    } else {
        alert('Gracias por registrarte!!');
        // Redireccionamos a otra pagina 

        const Usuario1 = new registroCliente(nombre, email, direccion, nombredeusuario, pass)
        datoCliente.push(Usuario1)
        $('.registro').hide();
        


        /*window.location = "https://9gag.com/";*/
    }

}



