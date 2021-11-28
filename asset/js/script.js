// alerta inicial
Swal.fire({
    title:"¡¡¡Bienvenidos a el codigo enigma!!!",
    text:"Este es una pagina de comunicacion entre policias cifrando el codigo para mas seguridad , recuerda que Lo que coloques en 'el campo de texto' sera encriptado al precionar cifrar y si quieres que vuelva ha estar normal presionas decifrar",
	timer:"22000",
    timerProgressBar:true,
    confirmButtonColor:'rgb(0, 81, 255)',
    imageUrl:"https://c.tenor.com/Dq8XFeK86X4AAAAC/sarazanmai-anime.gif",
    imageWidth:"500px",
    
    });
// contador de palabras contador_palabras !Evento input!
document.getElementById("textarea_msj").addEventListener("input",()=>{
    var textarea=document.getElementById("textarea_msj");
    var contador=document.getElementById("contador_palabras");
    contador.innerHTML=textarea.value.length;

})
// button para cifrar
//
document.getElementById("btn-cifrar").addEventListener("click",function(){
    var input = parseInt(document.getElementById("msj").value);
    var mensaje = document.getElementById("textarea_msj").value;
    var codigosNew = [];
    var nuevoMsj="";

    if( input > 0 & input <= 24){
        for(let i=0;i<mensaje.length;i++){
        var c =mensaje[i].toLowerCase();
        var codMsj = c.charCodeAt();
        var codNew = 32;
        if(codMsj != 32 ){
            codNew = codMsj + input;
        }
        if( codNew > 122){
            var d = codNew-122;
            codNew = 96 + d
                }

        nuevoMsj += String.fromCharCode(codNew);
        var msj =document.getElementById(msj);
         
    Swal.fire({
        title:"¡¡¡El codigo Cifrado  es!!!",
        timer:"22000",
        html:'<h3><span id="new_msj"></span></h3>',
        imageUrl:"https://66.media.tumblr.com/67c0fcc1c47a59567d807f5937a92a07/tumblr_pr2nufmCcf1vmiunio1_540.gif",
        timerProgressBar:true,
        imageWidth:"500px",
        confirmButtonColor:'rgb(0, 81, 255)',
        });}
    document.getElementById("new_msj").innerHTML = nuevoMsj
    } else{
        Swal.fire({
            title:"¡¡¡HUBO UN FALLO ( ´･.･)ﾉ(._.`)!!!",
            text:"Recuerda que si quieres el codigo cifrado antes debes colocar la clave secreta y no debe ser mayor a 24",
            timerProgressBar:true,
            confirmButtonColor:'rgb(0, 81, 255)',
            imageUrl:"https://64.media.tumblr.com/dce3d71dd5dc64c115c5e96841219518/tumblr_pt257xH2FS1wj1nn0o1_250.gifv",
            imageWidth:"500px",
            
            });}
    
    
})
// button para decifrar
document.getElementById("btn-decifrar").addEventListener("click",function(){
    var mensaje = document.getElementById("textarea_msj").value;
    var input = parseInt(document.getElementById("msj").value);

    var codigosNew = [];
    var nuevoMsj="";
    if( input > 0 & input <= 24){
    for(let i=0;i<mensaje.length;i++){
        var c =mensaje[i].toLowerCase();
        var codMsj = c.charCodeAt();
        var codNew = codMsj + 0;

        nuevoMsj += String.fromCharCode(codNew);
    }
    Swal.fire({
        title:"¡¡¡El codigo secreto es!!!",
        timer:"22000",
        html:'<h3><span id="new_msj"></span></h3>',
        timerProgressBar:true,
        confirmButtonColor:'rgb(0, 81, 255)',
        imageUrl:"https://64.media.tumblr.com/ed4cb413756680d0bb40e43d3c87cb7c/tumblr_pt39znI0V21vgzd4so1_r1_400.gifv",
        imageWidth:"250px",
        
        });

    document.getElementById("new_msj").innerHTML = nuevoMsj

    }else{
        Swal.fire({
            title:"¡¡¡HUBO UN FALLO ( ´･.･)ﾉ(._.`)!!!",
            text:"Recuerda que si quieres el codigo cifrado antes debes colocar la clave secreta que no debe ser mayor a 24 (⊙_⊙;)",
            timerProgressBar:true,
            confirmButtonColor:'rgb(0, 81, 255)',
            imageUrl:"https://64.media.tumblr.com/0156c96ca898b2061d30b6a34f955e0b/tumblr_psdsr01E1J1t0lt8go1_540.gifv",
            imageWidth:"500px",
             })} })

// BOTON ENVIAR
    document.getElementById("btn-enviar").addEventListener("click",function(){
        var input = parseInt(document.getElementById("msj").value);
        if( input > 0 & input <= 24){
            Swal.fire({
            title:"¡ENVIAR!",
            timer:"22000",
            html:'<p>En el campo de texto colocar el nombre de a quien se le van a mandar el mensaje ╰(*°▽°*)╯"</p><input type="email" class="input_enviar" required placeholder="Ingrese el nombre a quien quiera enviarlo">',
            timerProgressBar:true,
            confirmButtonText:"enviar",
            confirmButtonColor:'rgb(0, 81, 255)',
            footer:'<span class="footer_">una vez coloques el email y presiones "enviar" tu mensaje sera enviado</span>'
            });}
            else{
                Swal.fire({
                    title:"¡ FALLO (╯°□°）╯︵ ╰ !!!",
                    text:"No hay mensaje para enviar",
                    timerProgressBar:true,
                    confirmButtonColor:'rgb(0, 81, 255)',
                    imageUrl:"https://i.pinimg.com/originals/d2/19/08/d219082bd445b9e45043f583a339e208.gif",
                    imageWidth:"500px",
                     })}


    })