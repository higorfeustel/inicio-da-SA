
//navbar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }


//Function do jogo
document.querySelectorAll('.signal').forEach(function(signal) {
    signal.addEventListener('click', function() {
        const isCorrect = signal.getAttribute('data-correct') === 'true';
        const result = document.getElementById('result');
        if (isCorrect) {
            result.textContent = 'Parabéns! Você escolheu o sinal correto!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Ops! Esse não é o sinal correto. Tente novamente!';
            result.style.color = 'red';
        }
    });
});
