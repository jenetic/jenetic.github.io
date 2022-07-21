import './main.css';

declare global {
  interface Window {
    toggleColorScheme: any;
  }
}

// Typewriter Effect
const typeEffect = (content: string, speed: number): void => {
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

// Dark mode toggle
const toggleColorScheme = (onload: boolean = false): void => {
  let body = document.body;
  let button = document.getElementById("toggle-color-scheme");

  if (onload) {
    if (localStorage.getItem("color-scheme") === null) {
      localStorage.setItem("color-scheme", "light");
      button.textContent = "Toggle Dark Mode";
    } else {
      if (localStorage.getItem("color-scheme") === "dark") {
        button.textContent = "Toggle Light Mode";
      }
    }
  } else {
    if (body.className === "dark") {
      localStorage.setItem("color-scheme", "light");
      button.textContent = "Toggle Dark Mode";
    } else {
      localStorage.setItem("color-scheme", "dark");
      button.textContent = "Toggle Light Mode";
    }
  }
  body.className = localStorage.getItem("color-scheme");
}

// Do stuff
window.toggleColorScheme = toggleColorScheme; // to make button work

typeEffect("Hi! I'm Jenny.", 120); 
toggleColorScheme(true);