gsap.from("header", {
  opacity: 0,
  duration: 2,
  delay: 1.6,
});

gsap.from("#bigheading p", {
  opacity: 0,
  duration: 2,
  delay: 1.6,
});
gsap.from("#bigheading h1", {
  y: 80,
  opacity: 0,
  duration: 1.5,
  delay: 1.6,
  stagger: 0.1,
});
gsap.from("#bigheading .bigheadp", {
  color: "black",
  y: 50,
  duration: 1.2,
  delay: 2.6,
});
gsap.from("#bigheading .bigheadp button", {
  color: "black",
  backgroundColor: "#111111",
  border: "#111111",
  y: 50,
  duration: 1.2,
  delay: 2.6,
});
gsap.from(".videosec", {
  opacity: 0,
  y: 200,
  duration: 1,
  delay: 3.6,
});
gsap.from(".backtotop", {
  opacity: 0,
  duration: 1,
  delay: 3,
});

gsap.from(".mainleftdiv", {
  y: 900,
  opacity: 0,
  duration: 2,
  delay: 0.5,
});
gsap.from(".mainrightdiv", {
  y: -900,
  opacity: 0,
  duration: 2,
  delay: 0.5,
});

const hoverArea = document.querySelector(".hover-area");

const customCursor = document.createElement("div");
customCursor.classList.add("custom-cursor");
customCursor.innerHTML = "<span>WATCH OUR SHOWREEL</span>";
hoverArea.appendChild(customCursor);

hoverArea.addEventListener("mousemove", (event) => {
  const rect = hoverArea.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  gsap.to(customCursor, {
    x: x,
    y: y,
    duration: 0.2,
    ease: "power3.out",
    opacity: 1,
  });
});

hoverArea.addEventListener("mouseleave", () => {
  gsap.to(customCursor, {
    opacity: 0,
    duration: 0.2,
  });
});

hoverArea.addEventListener("click", () => {
  window.location.href = "video.html";
});

// ---------------------------------------------------------------  footer cursor

const hoverArea2 = document.querySelector(".hover-area2");

const customCursor2 = document.createElement("div");
customCursor2.classList.add("custom-cursor2");
customCursor2.innerHTML = "<span>LETS TALK</span>";
hoverArea2.appendChild(customCursor2);

hoverArea2.addEventListener("mousemove", (event) => {
  const rect = hoverArea2.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  gsap.to(customCursor2, {
    x: x,
    y: y,
    duration: 0.2,
    ease: "power3.out",
    opacity: 1,
  });
});

hoverArea2.addEventListener("mouseleave", () => {
  gsap.to(customCursor2, {
    opacity: 0,
    duration: 0.2,
  });
});

hoverArea2.addEventListener("click", () => {
  window.location.href = "letstalk.html";
});
