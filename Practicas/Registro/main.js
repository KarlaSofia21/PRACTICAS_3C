function confirma(){
    pa=document.getElementById("pass").value
    pb=document.getElementById("pass2").value

    if(pa!=pb){
        alert("Los passwords no coinciden")
        return
    }
}