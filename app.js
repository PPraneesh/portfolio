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
        description:'This project is a replica of the popular e-commerce platform Amazon, built using Node.js, Express.js, EJS, CSS, and HTML. It aims to showcase various functionalities commonly found on e-commerce websites.',
        linkFiles:'https://github.com/PPraneesh/The_A-Z_Proj',
        linkProject:'https://a-z-project.glitch.me/'
    },{
        name:'CYBER-SECURITY CHATBOT',
        description:'This is a simple web-based chatbot for providing cybersecurity guidance and answering security-related questions in real-time. It uses the GPT-3.5 Turbo model from OpenAI to generate responses to user inputs.',
        linkFiles:'https://github.com/PPraneesh/ChatBot',
        linkProject:''
    },{
        name:'EXPENSE TRACKER',
        description:'This project is an Expense Tracker, designed to help users manage and track their expenses and income. The application provides a user-friendly interface for adding new expenses, viewing a summary of total income, total expenses, and current balance. It also allows users to delete specific expenses from the list.',
        linkFiles:'https://github.com/PPraneesh/expenseTracker',
        linkProject:'https://ppraneesh.github.io/expenseTracker/'
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
