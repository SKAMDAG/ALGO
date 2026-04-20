window.addEventListener('DOMContentLoaded', function() {
var doc=document,flower=doc.querySelector('.flower'),petalPartMarkup='<div class="box"><div class="shape"></div></div>',maxParts=20,maxPetals=6,partsFontStep=25/maxParts;createFlower();function createFlower(){var angle=360/maxPetals;for(var i=0;i<maxPetals;i++){var petal=createPetal(),currAngle=angle*i+'deg',transform='transform: rotateY('+currAngle+') rotateX(-30deg) translateZ(9vmin)';petal.setAttribute('style',transform);flower.appendChild(petal);}}function createPetal(){var box=createBox(null,0),petal=doc.createElement('div');petal.classList.add('petal');for(var i=1;i<=maxParts;i++){box=createBox(box,i);}petal.appendChild(box);return petal;}function createBox(box,pos){var fontSize=partsFontStep*(maxParts-pos)+'vmin',half=maxParts/2,bright='50';if(pos<half+1){fontSize=partsFontStep*pos+'vmin';}else{bright=10+40/half*(maxParts-pos);}var baseHue=190,hueVariation=20,saturation=70+(20*pos/maxParts),color='hsl('+(baseHue+(hueVariation*pos/maxParts))+', '+saturation+'%, '+bright+'%)',newShape=doc.createElement('div');newShape.classList.add('shape');var newBox=doc.createElement('div');newBox.classList.add('box');newBox.setAttribute('style','color: '+color+';font-size: '+fontSize);if(box)newBox.appendChild(box);newBox.appendChild(newShape);return newBox;}

function drawGalaxy(){var canvas=document.getElementById('galaxy-canvas');if(!canvas)return;var ctx=canvas.getContext('2d');function resize(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;}resize();window.addEventListener('resize',resize);var stars=[],numStars=120;for(var i=0;i<numStars;i++){stars.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*1.5+0.5,dx:(Math.random()-0.5)*0.7,dy:(Math.random()-0.5)*0.7,alpha:Math.random()*0.5+0.5});}function animate(){ctx.clearRect(0,0,canvas.width,canvas.height);for(var i=0;i<stars.length;i++){var s=stars[i];ctx.save();ctx.globalAlpha=s.alpha;ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fillStyle='rgba(255,182,193,0.9)';ctx.shadowColor='#ffb6d5';ctx.shadowBlur=2;ctx.fill();ctx.restore();s.x+=s.dx;s.y+=s.dy;if(s.x<0||s.x>canvas.width)s.dx*=-1;if(s.y<0||s.y>canvas.height)s.dy*=-1;}requestAnimationFrame(animate);}animate();}
document.addEventListener('DOMContentLoaded',drawGalaxy);

var mainContent = document.getElementById('main-content');
if (mainContent) mainContent.style.display = '';

// Botón typing
var startBtn = document.getElementById('start-btn');
var btnText = 'HOLAAAAA.';
startBtn.textContent = '';
startBtn.disabled = true;
let iBtn = 0;

function typeBtn() {
  if (iBtn < btnText.length) {
    startBtn.textContent += btnText.charAt(iBtn);
    iBtn++;
    setTimeout(typeBtn, 90);
  } else {
    startBtn.disabled = false;
  }
}
typeBtn();

// Mensajes
const messages = [
  'Hiiiiiiii BABY!!!',
  'Feliz 27 NO cumpleaños.',
  'Gracias por ser el novio más LINDOOOOOOO.',
  'Eres mi persona FAVORITA en el mundo.',
  'Te amo mucho mi muchachito lindo.',
  'See you soon sweetheart.',
  '¡Ten bonito dia!❤️'
];

var wrapper = document.querySelector('.wrapper');
var msg = document.querySelector('.flower-message');

// Centrar botón
var container = document.getElementById('start-btn-container');
container.style.position = 'fixed';
container.style.top = '50%';
container.style.left = '50%';
container.style.transform = 'translate(-50%,-50%)';
container.style.zIndex = '100';

startBtn.addEventListener('click', function() {

  var isMobile = window.innerWidth <= 600;
  container.style.display = 'none';
  wrapper.style.display = '';

  var music = document.getElementById('bg-music');
  if (music) {
    music.currentTime = 0;
    var playPromise = music.play();
    if (playPromise !== undefined) {
      playPromise.catch(function(error) {
        alert('No se pudo reproducir la música.');
      });
    }
  }

  if (isMobile) {

    msg.style.display = '';
    msg.style.opacity = 1;
    let current = 0;

    function typeText(text, cb) {
      msg.textContent = '';
      let i = 0;
      function type() {
        if (i < text.length) {
          msg.textContent += text.charAt(i);
          i++;
          setTimeout(type, 90);
        } else if (cb) {
          setTimeout(cb, 1000);
        }
      }
      type();
    }

    function showNext() {
      if (current < messages.length) {
        typeText(messages[current], function() {
          current++;
          showNext();
        });
      } else {

        // 🔥 REDIRECCIÓN FINAL (MÓVIL)
        setTimeout(function() {
          window.location.href = "index.html";
        }, 6000);

      }
    }

    showNext();

  } else {

    msg.style.display = '';
    msg.style.opacity = 1;
    let current = 0;

    function typeText(text, cb) {
      msg.textContent = '';
      let i = 0;
      function type() {
        if (i < text.length) {
          msg.textContent += text.charAt(i);
          i++;
          setTimeout(type, 90);
        } else if (cb) {
          setTimeout(cb, 1000);
        }
      }
      type();
    }

    function showNext() {
      if (current < messages.length) {
        typeText(messages[current], function() {
          current++;
          showNext();
        });
      } else {

        // 🔥 REDIRECCIÓN FINAL (DESKTOP)
        setTimeout(function() {
          window.location.href = "index.html";
        }, 6000);

      }
    }

    showNext();
  }
});
});
