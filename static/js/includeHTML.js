function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");

  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("include-html");

    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          elmnt.innerHTML = this.responseText;
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}

includeHTML();

// sub page menu select
const menuSelectKey = (item) => {
  const key = item['depth'];

  setTimeout(() => {
    document.querySelector('[data-include="header"] [data-page="' + key + '"]').classList.add('is-active')
  }, 100)

  setTimeout(() => {
    document.querySelectorAll('.box-header .box-menu ul li ul li').forEach((e) => {
      e.classList.contains('is-active') ? e.parentElement.parentElement.classList.add('is-active') : false;
    })
  }, 500)
}

// pageMainLink
const pageMainLink = (url, id) => {
  if( document.querySelectorAll('body.pc').length != 0 ){
    pageSubLink(url, id);
  }
}

// pageSubLink
const pageSubLink = (url, id) => {
  let go = url;

  if( url == 'index' ){
    go = 'index.html';
  }else if( url == 'OurStory' ){
    id == undefined ? 
      go = 'story.html'
        : 
      go = 'story.html' + '?' + id;
  }else if( url == 'OurQuality' ){
    go = 'quality.html';
  }else if( url == 'products' ){
    go = 'productlist.html';
  }else if( url == 'teaStories' ){
    go = 'storylist.html';
  }else if( url == 'contact' ){
    go = 'contact.html';
  }else if( url == 'throat' ){
    go = 'throat.html';
  }else if( url == 'sleep' ){
    go = 'sleep.html';
  }else if( url == 'citron' ){
    go = 'citron.html';
  }else if( url == 'stomach' ){
    go = 'stomach.html';
  }else if( url == 'omija' ){
    go = 'omija.html';
  }else if( url == 'quince' ){
    go = 'quince.html';
  }else if( url == 'koreantea' ){
    go = 'koreantea.html';
  }else if( url == 'teaweek' ){
    go = 'teaweek.html';
  }else if( url == 'teaware' ){
    go = 'teaware.html';
  }else if( url == 'usage' ){
    go = 'usage.html';
  }else if( url == 'teaexpert' ){
    go = 'teaexpert.html';
  }else if( url == 'ceremony' ){
    go = 'ceremony.html';
  }

  window.location.assign(go);
}

// pageTitle
const pageTitle = () => {
  let title = 'Hancha',
      subTitle = '',
      urlName = window.location.pathname;

  if( urlName.indexOf('story') >= 1){
    subTitle = 'OUR STORY';
  }else if( urlName.indexOf('quality') >= 1){
    subTitle = 'OUR QUALITY';
  }else if( urlName.indexOf('productlist') >= 1){
    subTitle = 'PRODUCT';
  }else if( urlName.indexOf('storylist') >= 1){
    subTitle = 'TEA STORY';
  }else if( urlName.indexOf('contact') >= 1){
    subTitle = 'CONTACT';
  }

  if( subTitle == '' ){ // subTitle 없을때 id data-title 체크
    subTitle = document.querySelector('#data-title').textContent;
  }

  document.title = subTitle + ' | ' + title;
}

pageTitle();

// pageAnchor
const pageAnchor = () => {
  let anchor = window.location.search,
      anchorId = anchor.replace('?','');

  if( anchor.indexOf('?') >= 0 ){
    let top = document.querySelector('#' + anchorId).offsetTop;
    window.scrollTo({ top: top, behavior: "smooth" });
  }
}

pageAnchor();