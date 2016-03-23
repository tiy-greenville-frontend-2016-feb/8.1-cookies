console.log('nnnammmm naaammm naaammm');

// ########################################
// Cookies: regular js and jQuery
// ########################################
document.cookie="username=Cookie Moster";
document.cookie="likes-cookies=yes";

var loggedInUser = document.cookie;
console.log(loggedInUser);

var cookies = loggedInUser.split(';');
for(var i=0; i < cookies.length; i++){
  console.log(cookies[i]);
}


console.log($.cookie('username'));

$.cookie('username', 'dietz');

console.log($.cookie('username'));

// ########################################
// Local Storage: just regular
// ########################################

localStorage.setItem('favorite-flavor', 'oreo');

console.log('favorite-flavor', localStorage.getItem('favorite-flavor'));

localStorage.setItem('least-favorite-flavor', 'chocolate chip');

console.log('least-favorite-flavor', localStorage.getItem('least-favorite-flavor'));

localStorage.removeItem('least-favorite-flavor');

console.log('least-favorite-flavor', localStorage.getItem('least-favorite-flavor'));

var car = {};
car.wheels = 4;
car.doors = 2;
car.sound = 'vroom';
car.name = 'Lightning McQueen';
console.log( car );


localStorage.setItem('car', JSON.stringify(car));
console.log(localStorage.getItem('car'));

var myCar = JSON.parse(localStorage.getItem('car'));
console.log(myCar.wheels);


//
