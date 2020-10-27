var atualdata = new Date();
var mes = atualdata.toLocaleString('pt-BR', {month: 'long'});  
    document.getElementById("mes").innerHTML = mes; 
var nomedia = atualdata.toLocaleString('pt-BR', {weekday: 'long'});
    document.getElementById("nomedia").innerHTML = nomedia;
var numerodia = atualdata.getDate();     
    document.getElementById("numerodia").innerHTML = numerodia;    
var ano = atualdata.getFullYear();   
    document.getElementById("ano").innerHTML = ano; 

const AdicionarZero = n => {
    return ('0' + n).slice(-2);
}

const Relogio = setInterval(()=>{
    var horario = new Date();
    var hora = horario.getHours();
    var minutos = AdicionarZero(horario.getMinutes())+":";
    var segundos = AdicionarZero(horario.getSeconds());
    var tempo = "" + ((hora > 12) ? hora - 12 : hora);
    if (hora >= 12){
        tempo = hora+":";
        tempo += minutos;
        tempo += segundos;
        tempo += " P.M.";
    }
    else {
        tempo = "0"+hora+":";
        tempo += minutos;
        tempo += segundos;
        tempo += " A.M.";
    }
    document.getElementById("funcao").innerHTML=tempo;
},500);  
   
    

