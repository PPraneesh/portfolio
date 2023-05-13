const typeWriter = document.getElementById('typewriter-text');
const text = 'Hello, I am Praneesh , a web developer.';

typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);