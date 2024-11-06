/*
var timelineContact = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact",
    toggleActions: "restart none restart none"
  }
});

timelineContact.to(".contact", {
  x: "50%",
  marginLeft: "auto",
  duration: 1.5
});
// Left to right animation for contact 
*/

var timelineHero = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    toggleActions: "restart none restart none"
  }
});


const numberOfRectangles = 4;

function animateRectangles() {
  const scene = document.querySelector('.hero');
  const rectangles = [];

  // Define the properties for each rect
  const rectProps = [
    { start: { x: "0%", y: "80%" }, end: { x: "50vw", y: "80%" }, duration: .4 },
    { start: { x: "0%", y: "80%" }, end: { x: "60vw", y: "80%" }, duration: .4 },
    { start: { x: "0%", y: "80%" }, end: { x: "70vw", y: "80%" }, duration: .4 },
    { start: { x: "0%", y: "80%" }, end: { x: "80vw", y: "80%" }, duration: .4 },
  ];

  for (let i = 0; i < numberOfRectangles; i++) {
    const rectangle = document.createElement('div');
    rectangle.className = 'rectangle';
    rectangle.style.position = "absolute";
    rectangle.style.top = rectProps[i].start.y;
    rectangle.style.left = rectProps[i].start.x;
    scene.appendChild(rectangle);
    rectangles.push(rectangle);
  }

  rectangles.forEach((rectangle, i) => {
    timelineHero.set(rectangle, {
      x: rectProps[i].start.x,
      y: rectProps[i].start.y
    });

    timelineHero.to(rectangle, {
      x: rectProps[i].end.x,
      y: rectProps[i].end.y,
      duration: rectProps[i].duration,
      ease: 'power2.out',
    });

  });

  scene.addEventListener('mouseleave', () => {
    //timelineContact.pause();
    //timelineHero.pause();
  });

  // Resume timelines on mouse enter
  scene.addEventListener('mouseenter', () => {
    timelineContact.play();
    timelineHero.play();
  });
}

animateRectangles();
