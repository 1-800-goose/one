"use strict";
(function() {

  window.addEventListener("load", init);

  function init() {
    id("closed").addEventListener('click', function(){
      console.log("click");
      let music = new Audio("img/music.mp3");
      music.play();

      if (document.querySelector('.letter').classList.contains('letter--open')){
        document.querySelector('.letter').classList.remove('letter--open');
        document.querySelector('.letter').classList.add('letter--close');
        setTimeout(function(){
          document.querySelector('.letter').classList.remove('letter--close');
        }, 600);
      } else {
        document.querySelector('.letter').classList.remove('letter--close');
        id("closed").classList.add("hidden");
        document.querySelector('.letter').classList.add('letter--open');
      }
    });

    document.querySelector('.paper-close').addEventListener('click', function(){   document.querySelector('.letter').classList.remove('letter--open');
      document.querySelector('.letter').classList.add('letter--close');
      setTimeout(function(){
        document.querySelector('.letter').classList.remove('letter--close');
      }, 600);
    });
  };


  function id(idName) {
    return document.getElementById(idName);
  }
})();