// alerta inicial
Swal.fire({
    title:"¡¡¡Bienvenidos a el codigo enigma!!!",
    text:"Lo que coloques en 'el campo de texto' sera encriptado al precionar cifrar y si quieres que vuelva ha estar normal presionas desifrar",
	timer:"22000",
    timerProgressBar:true,


    });
// contador de palabras contador_palabras !Evento input!
document.getElementById("textarea_msj").addEventListener("input",()=>{
    var textarea=document.getElementById("textarea_msj");
    var contador=document.getElementById("contador_palabras");
    contador.innerHTML=textarea.value.length;

})
// button para cifrar

document.getElementById("btn-cifrar").addEventListener("click",function(){
    var input = parseInt(document.getElementById("msj").value);

    var mensaje = document.getElementById("textarea_msj").value;
    var codigosNew = [];
    var nuevoMsj="";
    for(let i=0;i<mensaje.length;i++){
        var c =mensaje[i].toLowerCase();
        var codMsj = c.charCodeAt();
        var codNew = codMsj + input;
        if( codNew > 122){
            var d = codNew-122;
            codNew = 96 + d
        }

        nuevoMsj += String.fromCharCode(codNew);

    }

    document.getElementById("new_msj").innerHTML = nuevoMsj


})
// button para decifrar
document.getElementById("btn-decifrar").addEventListener("click",function(){
    var mensaje = document.getElementById("textarea_msj").value;
    var codigosNew = [];
    var nuevoMsj="";
    for(let i=0;i<mensaje.length;i++){
        var c =mensaje[i].toLowerCase();
        var codMsj = c.charCodeAt();
        var codNew = codMsj + 0;

        nuevoMsj += String.fromCharCode(codNew);
    }

    document.getElementById("new_msj").innerHTML = nuevoMsj


})
