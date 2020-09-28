var number = Math.floor(Math.random()*100); 
console.log(number);

var count = 6; 

document.getElementById('check').onclick = function() {
if(count > 0 ) {
  var usernum = document.getElementById('mynum').value; 
  usernum = parseInt(usernum);
  var out = document.getElementById('out')

  if(usernum == number) {
   alert('Ура! Вы угадли. Это число: ' + number);
   location.reload();
  }
  else if(usernum > number) {
   out.innerHTML = 'Загаданное число меньше'; 
  }

  else if(usernum < number) {
   out.innerHTML = 'Загаданное число больше'; 
  }
  
  document.getElementById('count').innerHTML = 'Осталось попыток: ' + count;
  count--;
 }
 else {
  alert('Увы( Но попытки закончились. Попробуйте снова!');
  location.reload(); 
 }
}