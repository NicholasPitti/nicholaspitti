var elements = ["#element1", "#element2", "#element3"];

var template = Handlebars.compile('<div>{{name}}</div>');
var data = { name: 'Nick' };
var html = template(data);
document.body.innerHTML = html;

var timelineFooter = gsap.timeline({
    scrollTrigger: {
        trigger: "#skills",
        toggleActions: "restart none none none"
    },
    repeat: -1 // -1 means repeat indefinitely
});

timelineFooter.to(elements, {
    x: "75%",
    marginRight: "auto",
    duration: 1,
    stagger: 0.5 // adds a delay between each element animation
})