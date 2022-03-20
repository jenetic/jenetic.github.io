// Typewriter Effect
function typeEffect(content, speed) {
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

// Execute Functions
typeEffect("Hi! I'm Jenny.", 120); 