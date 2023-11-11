var timelineContact = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact",
        toggleActions: "restart none restart none"
    }
});

var timelineHero = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
        toggleActions: "restart none restart none"
    }
});

timelineContact.to(".contact", {
    x: "50%",
    marginLeft: "auto",
    duration: 1.5
});
/* Left to right animation for contact */

const numberOfCubes = 4;

function animateCubes() {
  const scene = document.querySelector('.hero');
  const cubes = [];

  // Define the properties for each cube
  const cubeProps = [
    { start: { x: "0%", y: "80%" }, end: { x: "50vw", y: "80%" }, duration: .4 },
    { start: { x: "0%", y: "80%" }, end: { x: "60vw", y: "80%" }, duration: .4 },
    { start: { x: "0%", y: "80%" }, end: { x: "70vw", y: "80%" }, duration: .4 },
    { start: { x: "0%", y: "80%" }, end: { x: "80vw", y: "80%" }, duration: .4 },
  ];

  for (let i = 0; i < numberOfCubes; i++) {
    const cube = document.createElement('div');
    cube.className = 'cube';
    cube.style.position = "absolute";
    cube.style.top = cubeProps[i].start.y;
    cube.style.left = cubeProps[i].start.x;
    scene.appendChild(cube);
    cubes.push(cube);
  }

  cubes.forEach((cube, i) => {
    timelineHero.set(cube, {
      x: cubeProps[i].start.x,
      y: cubeProps[i].start.y
    });

    timelineHero.to(cube, {
      x: cubeProps[i].end.x,
      y: cubeProps[i].end.y,
      duration: cubeProps[i].duration,
      ease: 'power2.out',
    });

  });

  scene.addEventListener('mouseleave', () => {
    timelineContact.pause();
    timelineHero.pause();
  });
  
  // Resume timelines on mouse enter
  scene.addEventListener('mouseenter', () => {
    timelineContact.play();
    timelineHero.play();
  });
}
animateCubes();