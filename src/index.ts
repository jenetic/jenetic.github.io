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
    window.location.pathname == "/";
  }
})
