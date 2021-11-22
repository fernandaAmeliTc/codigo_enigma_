Swal.fire({
    title:"¡¡¡Bienvenidos a el codigo enigma!!!",
    text:"Lo que coloques en 'el campo de texto' sera encriptado al precionar cifrar y si quieres que vuelva ha estar normal presionas desifrar",
// 	// footer:
// 	// width:"280px",
// 	// padding:"20px",
// 	// background:
// 	// grow:
// 	// backdrop:
	timer:"22000",
    timerProgressBar:true,


    });
// buscar un gid frl internet

document.getElementById("btn-cambiar").addEventListener("click",function(){
    var mensaje = document.getElementById("textarea_msj").value;
    var codigosNew = [];
    var nuevoMsj="";
    for(let i=0;i<mensaje.length;i++){
        var codMsj = mensaje[i].charCodeAt();
        var codNew = codMsj + 1;
        codigosNew.push(codNew);
        nuevoMsj += String.fromCharCode(codNew);
    // if(codNew < 23){
    //     codMsj + 20;
    // }

    }

    document.getElementById("new_msj").innerHTML = nuevoMsj

    
})

// contador de palabras--
// function getId (id){
//     return getElementById(id).value;
// }
// function innerHTML (id , resultado){
//     return getElementById(id).innerHTML=resultado;
// }
// function contadorDeCaracteres(){
//     setInterval(function(){
//         var c =getId("textarea_msj");
//         if(c.length>300){
//             innerHTML("contador_palabras","solo se permite 300 caracteres")
//         } else{
//             innerHTML("contador_palabras",c.length)
//         } 
//     },0000);
    
// }