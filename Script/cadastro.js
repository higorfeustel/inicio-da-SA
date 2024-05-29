
function salvarDados(){
    var nome =  document.getElementById('nome').value;
    var email =  document.getElementById('email').value;
    var senha =  document.getElementById('senha').value;
    var idade =  document.getElementById('idade').value;
    var cidade =  document.getElementById('cidade').value;

    var usuario ={
        nome: nome,
        email: email,
        senha: senha,
        idade: idade,

    }
    console.log(usuario)
}

function salvarDados(){
    var nome =  document.getElementById('nome').value;
    var email =  document.getElementById('email').value;
    var senha =  document.getElementById('senha').value;
    var idade =  document.getElementById('idade').value;
    var cidade =  document.getElementById('cidade').value;

    var usuario ={
        nome: nome,
        email: email,
        senha: senha,
        idade: idade,

    }
    console.log(usuario)
}



function openNav() {
    duocument.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

