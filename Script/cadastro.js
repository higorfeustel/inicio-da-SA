<<<<<<< HEAD:Script/cadastro.js
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
=======
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
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
>>>>>>> 67a7bbce352b94c1a87474dcb443727b3010c524:SA/Script/cadastro.js