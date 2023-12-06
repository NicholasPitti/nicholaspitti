// Select all the cubes
const cubes = document.querySelectorAll('.cube');

// Loop through each cube
cubes.forEach(cube => {
  // Add a mouseover event listener to each cube
  cube.addEventListener('mouseover', () => {
    // Use GSAP to animate the cube's position and rotation
    gsap.to(cube, {
      duration: 1,
      x: Math.random() * 400 - 200,
      y: Math.random() * 400 - 200,
      z: Math.random() * 400 - 200,
      rotationX: Math.random() * 360,
      rotationY: Math.random() * 360,
      rotationZ: Math.random() * 360
    });
  });
});