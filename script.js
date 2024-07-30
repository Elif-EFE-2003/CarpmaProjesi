function getInfo(){
   var input=document.getElementById("input").value;
   var output=document.getElementById("output");
   var clear=document.getElementById("clear");
   var textarea=document.getElementById("input");
   if(input<=0 || input>1000){
    alert("Lütfen istenilen aralıkta sayı giriniz...");
   }else{
    output.innerHTML=" ";
    output.style.display="block";
    for(var i=0;i<=10;i++){
        var result=`${input} * ${i}=${input*i} <hr>`;
        output.innerHTML+=result;
    }
    textarea.value=" ";
    clear.style.display="block";
   }
}
function clearTable(){
    var output=document.getElementById("output");
    var clear =document.getElementById("clear");
    clear.style.display="none";
    output.style.display="none";
}
