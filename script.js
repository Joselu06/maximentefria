const canvas = document.getElementById('canvas');
  const c = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const foto = new Image();
  foto.src = 'https://github.com/Joselu06/lujangordo/blob/main/maxi.webp?raw=true';

  let imagenCargada = false;

  foto.onload = () => {
    imagenCargada = true;
  };

  function dibujar(x, y) {
    if (imagenCargada) {
      c.drawImage(foto, x -100, y - 75, 200, 150);
    }
  }

  // PC: mousemove
  window.addEventListener('mousemove', event => {
    dibujar(event.clientX, event.clientY);
  });

  // Móviles: touchmove
  window.addEventListener('touchmove', event => {
    // Evitar scroll
    event.preventDefault();
    const touch = event.touches[0];
    dibujar(touch.clientX, touch.clientY);
  }, { passive: false });

  // Ajustar canvas si cambia tamaño de pantalla
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
