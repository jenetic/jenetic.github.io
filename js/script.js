// Typewriter Effect
const typeEffect = (content, speed) => {
  let i = 0;
  let text = content;
  let interval = setInterval(function(){
      document.getElementById("name").innerHTML += content.charAt(i);
      i++;
      if (i >= text.length) {
          clearInterval(interval);
      }
  }, speed)
}
typeEffect("Hi! I'm Jenny.", 120); 

// Dark mode toggle
const toggleColorScheme = () => {
  let body = document.body;
  if (body.className === "dark") {
    body.className = "light";
  } else {
    body.className = "dark";
  }
}