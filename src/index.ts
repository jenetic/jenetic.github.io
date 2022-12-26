import './main.css';

// Typewriter Effect
const typeEffect = (content: string, speed: number): void => {
  let i = 0;
  let text = content;
  let interval = setInterval(function(){
      document.getElementById("title").innerHTML += content.charAt(i);
      i++;
      if (i >= text.length) {
          clearInterval(interval);
      }
  }, speed)
}

typeEffect("Hi! I'm Jenny.", 120);