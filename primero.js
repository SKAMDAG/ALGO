window.addEventListener('DOMContentLoaded', function() {

  const startBtn = document.getElementById('start-btn');
  const container = document.getElementById('start-btn-container');
  const wrapper = document.querySelector('.wrapper');
  const msg = document.querySelector('.flower-message');
  const canvas = document.getElementById('galaxy-canvas');

  /* 📱 DETECTAR MÓVIL */
  const isMobile = window.innerWidth <= 600;

  /* 🎯 CENTRAR BOTÓN */
  container.style.position = 'fixed';
  container.style.top = '50%';
  container.style.left = '50%';
  container.style.transform = 'translate(-50%,-50%)';
  container.style.zIndex = '100';

  /* ✍️ TEXTO BOTÓN */
  const btnText = 'HOLAAAAA.';
  let iBtn = 0;
  startBtn.textContent = '';
  startBtn.disabled = true;

  function typeBtn() {
    if (iBtn < btnText.length) {
      startBtn.textContent += btnText.charAt(iBtn);
      iBtn++;
      setTimeout(typeBtn, 80);
    } else {
      startBtn.disabled = false;
    }
  }
  typeBtn();

  /* 💬 MENSAJES */
  const messages = [
    'Hiiiiiiii BABY!!!',
    'Feliz 27 NO cumpleaños',
    'Gracias por ser el novio más LINDOOOOOOO.',
    'Eres mi persona FAVORITA en el mundo.',
    'Te amo mucho mi muchachito lindo.',
    'See you soon sweetheart.',
    'Ten bonito día ❤️'
  ];

  /* 🌌 GALAXIA */
  function startGalaxy() {
    canvas.style.display = '';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d');

    let dots = [];
    let numDots = isMobile ? 25 : 80;

    for (let i = 0; i < numDots; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach(dot => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 182, 193, 0.8)';
        ctx.fill();

        dot.x += dot.dx;
        dot.y += dot.dy;

        if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;
      });

      requestAnimationFrame(animate);
    }

    animate();
  }

  /* 🎬 CLICK */
  startBtn.addEventListener('click', function() {

    container.style.display = 'none';
    wrapper.style.display = '';
    msg.style.display = '';
    msg.style.opacity = 1;

    startGalaxy();

    let current = 0;

    function typeText(text, callback) {
      msg.textContent = '';
      let i = 0;

      function type() {
        if (i < text.length) {
          msg.textContent += text.charAt(i);
          i++;
          setTimeout(type, isMobile ? 60 : 80);
        } else if (callback) {
          setTimeout(callback, isMobile ? 800 : 1200);
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

        /* 💖 ANIMACIÓN FINAL SUAVE */
        setTimeout(() => {
          document.body.style.transition = "1s";
          document.body.style.opacity = "0";

          setTimeout(() => {
            window.location.href = "index.html";
          }, 1000);

        }, 2000);
      }
    }

    showNext();
  });

});
