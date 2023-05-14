const typeWriter = document.getElementById('typewriter-text');
const text = "Iam Praneesh, a <span>pro</span>grammer.";

typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);