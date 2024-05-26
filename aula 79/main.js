nomeDosEstudantes=[];
function submit(){
    var name1=document.getElementById("nome1").value;
    var name2=document.getElementById("nome2").value;
    var name3=document.getElementById("nome3").value;
    var name4=document.getElementById("nome4").value;

    nomeDosEstudantes.push(name1);
    nomeDosEstudantes.push(name2);
    nomeDosEstudantes.push(name3);
    nomeDosEstudantes.push(name4);

    document.getElementById("display").innerHTML=nomeDosEstudantes;
    document.getElementById("botaoSubmit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}

function sort(){
    nomeDosEstudantes.sort();
    document.getElementById("display").innerHTML=nomeDosEstudantes;
}