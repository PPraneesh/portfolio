const express  = require('express');
const ejs = require("ejs");     
const app= express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

var projectDetails= [
    {
        name:'Spotify Duplicates',
        description:'The JavaScript file powers a web-based music player application, offering an interactive interface for users to play, pause, skip, and queue songs. It manages a collection of songs stored in a database, enabling users to search for specific tracks and create a queue for continuous playback.',
        linkFiles:'https://github.com/PPraneesh/SpotifyDuplicates',
        linkProject:'https://ppraneesh.github.io/SpotifyDuplicates/'
    },{
        name:'The A-Z Proj',
        description:'Explore my Amazon replica, a Node.js and Express.js marvel with EJS, CSS, and HTML. Unveil diverse e-commerce functionalities in this concise showcase of innovation. Welcome to an immersive online shopping experience!',
        linkFiles:'https://github.com/PPraneesh/The_A-Z_Proj',
        linkProject:'https://a-z-project.glitch.me/'
    },{
        name:'CYBER-SECURITY CHATBOT',
        description:'This is a simple web-based chatbot for providing cybersecurity guidance and answering security-related questions in real-time. It uses the GPT-3.5 Turbo model from OpenAI to generate responses to user inputs.',
        linkFiles:'https://github.com/PPraneesh/ChatBot',
        linkProject:'https://parshipraneesh.pythonanywhere.com/'
    },{
        name:'EXPENSE TRACKER',
        description:'Effortlessly manage expenses with my user-friendly Expense Tracker. Track income, expenses, and balance, and delete entries seamlessly for a streamlined financial overview.',
        linkFiles:'https://github.com/PPraneesh/expenseTracker',
        linkProject:'https://ppraneesh.github.io/expenseTracker/'
    },{
        name:'PORTFOLIO',
        description:'Discover my skills in a sleek portfolio built with EJS, Node.js, CSS, and JavaScript. Explore engaging projects, dive into my expertise, and connect for opportunities. Your gateway to my creative and technical world!',
        linkFiles:'https://github.com/PPraneesh/portfolio',
        linkProject:'https://parshipraneesh.me'
    }
]

app.get('/', (req, res) => {
    res.render('home',{loc:'C:\\home>',theme:'yellow'});
});
app.get('/about', (req, res) => {
    res.render('about',{loc:'C:\\home\\about>',theme:'green'});
});
app.get('/projects', (req, res) => {
    res.render('projects',{loc:'C:\\home\\projects>',theme:'red',projectDetails:projectDetails});
});
app.get('/blogs', (req, res) => {
    res.render('blogs',{loc:'C:\\home\\blogs>',theme:'yellow'});
});
app.get('/resume',(req,res)=>{
    res.contentType("application/pdf");
    res.sendFile(__dirname+'/public/resume.pdf');
});
app.listen(3000|| process.env.PORT, () => {
    console.log('Server is running on port 3000');
});
