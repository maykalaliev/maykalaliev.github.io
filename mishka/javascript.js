var menulist = document.getElementById('header__navs');
var menuitems = document.getElementById('headeritemes');
var menuopen = document.getElementById('menu__button');
var menuitem = document.getElementsByClassName('header__item');
var logo = document.getElementById('logo');
 menuopen.onclick = function () {
 menulist.style.display = 'block';	
 menuitems.style.flexDirection = 'column';
 menuitems.style.marginLeft = 60 + 'px';
 for (var i = 0; i < menuitem.length; i++) {
 	console.log(menuitem[i]);
 	menuitem[i].style.padding = 28 + 'px'+ ' '+  25+ 'px';
 	menuitem[i].style.border = 'none';
 }
 logo.style.order = '1';
}