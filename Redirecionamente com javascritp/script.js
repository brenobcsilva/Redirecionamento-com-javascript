function logar(){
    var usuario = document.GetElementById("usuario").value;
    var senha = document.GetElementById("senha").value;

  
    if(usuario.value == "123" && senha.value=="123"){
    
      window.location.href=  "https://www.google.com/";
    
    }else{
      alert('usuario invalido')
    }
  }
  