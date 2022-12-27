import './main.css';
import {
  hashRoute
} from './router';


// SPA routing
document.addEventListener("click", (e) => {
  const {target}: any = e;
  if (target.matches(".route")) {
    e.preventDefault();
    hashRoute(); 
  }
})

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

// typeEffect("Hi! I'm Jenny.", 120);