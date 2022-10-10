var Globalvar=10
function fun1(){
    oopsGlobal=5;
}
function fun2(){
    var output="";
    if(typeof Globalvar !="undefined"){
        output+="Global:"+Globalvar;
    }
    if(typeof oopsGlobal!="undefined"){
        output+="oopsGlobal:"+oopsGlobal;
    }
    console.log(output)
}
fun1();
fun2();