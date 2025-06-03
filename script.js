const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Cargar la imagen de GitHub
const foto = new Image();
foto.src = 'https://github.com/Joselu06/lujangordo/blob/main/maxi.webp?raw=true'; // Cambia aquí por la URL correcta de la imagen

// Para guardar la posición actual del mouse
let mouse = {
  x: undefined,
  y: undefined
};

// Dibuja la imagen en la posición del mouse
function arrastrar() {
  // Opcional: limpiar el canvas para que no se acumulen las imágenes
  // c.clearRect(0, 0, canvas.width, canvas.height);

  if(mouse.x && mouse.y){
    // Dibuja la imagen en la posición actual del mouse
    c.drawImage(foto, mouse.x -100 , mouse.y -75, 200, 150);
  }
}

// Actualizar la posición del mouse
window.addEventListener('mousemove', event => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;

  arrastrar();
});

// Actualizar tamaño del canvas cuando cambia la ventana
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});