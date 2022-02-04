"use strict";
(function() {

  window.addEventListener("load", init);

  function init() {
    id("cryptex").addEventListener("submit", check);
    id("next").addEventListener("click", next);

    let form = document.getElementById("cryptex");
    form.addEventListener('submit', (e) => {
      e.preventDefault();
    });

    id("closed").addEventListener('click', function(){
      // console.log("click");
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
        id("image").classList.remove("hidden");
        document.querySelector('.letter').classList.add('letter--open');
      }
      setTimeout(function(){
        id("next").classList.remove("hidden");
      }, 600);
    });

    // document.querySelector('.paper-close').addEventListener('click', function(){   document.querySelector('.letter').classList.remove('letter--open');
    //   document.querySelector('.letter').classList.add('letter--close');
    //   setTimeout(function(){
    //     document.querySelector('.letter').classList.remove('letter--close');
    //   }, 600);
    // });
  };

  function check() {
    console.log("hit");
    let first = id("F").value.toUpperCase();
    let second = id("U").value.toUpperCase();
    let third = id("C").value.toUpperCase();
    let fourth = id("K").value.toUpperCase();
    if (first==="F" && second==="U" && third==="C" && fourth==="K") {
      id("link").classList.remove("hidden");
    } else {
      id("F").value = "";
      id("U").value = "";
      id("C").value = "";
      id("K").value = "";
    }
  }

  function next() {
    id("next").classList.add("hidden");
    id("msgs").classList.remove("hidden");
    id("image").classList.add("hidden");
    id("cryptex").classList.remove("hidden");

    setTimeout(function(){
      id("one").textContent = `This is a cryptex, like in that movie The Da Vinci Code, the movie
      neither of us watched.`;
    }, 1000);
    setTimeout(function(){
      id("two").textContent = `Inside it will tell you where to retrieve your present at 9:00 P.M.
      tonight.`;
    }, 4000);
    setTimeout(function(){
      id("three").textContent = `The combination is a five-letter code that captures the essence
      of our third date. :)`;
    }, 7000);
    setTimeout(function(){
      id("four").textContent = `So you'll see your present tonight.`;
    }, 10000);
    setTimeout(function(){
      id("five").textContent = `Unless...You can't crack the code.`;
    }, 12000);
    setTimeout(function(){
      id("six").textContent = `<3`;
    }, 14500);
  }

  function id(idName) {
    return document.getElementById(idName);
  }
})();