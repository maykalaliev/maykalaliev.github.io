var openclick = document.getElementsByClassName('items__info--link');
var op = document.getElementById('openmodal');
var popup = document.getElementById('#modal');
var headercatalog = document.getElementById('headercatalog');
console.log(openclick);
console.log(popup);
console.log(headercatalog);


var openmenu = function() { 
  headercatalog.style.display = 'block';
}

var closemenu = function() {
  headercatalog.style.display = 'none';
}

var ales = function() {
  popup.classList.add('open');
}

var closemodal = function () {
   popup.classList.remove('open');
}




$('#thumbs').delegate('img','click', function(){
  $('#largeImage').attr('src',$(this).attr('src').replace('thumb','large'));
  $('#description').html($(this).attr('alt'));
});
