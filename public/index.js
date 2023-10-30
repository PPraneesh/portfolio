var prevLoc = document.getElementsByClassName('logo')[0].innerHTML;

document.getElementsByClassName('home')[0].addEventListener('mouseover',function(){
    document.getElementsByClassName('logo')[0].innerHTML=prevLoc+' cd ..';
})
document.getElementsByClassName('aboutMe')[0].addEventListener('mouseover',function(){
    document.getElementsByClassName('logo')[0].innerHTML=prevLoc+' cd about';
})
document.getElementsByClassName('blogs')[0].addEventListener('mouseover',function(){
    document.getElementsByClassName('logo')[0].innerHTML=prevLoc+' cd blogs';
})
document.getElementsByClassName('projects')[0].addEventListener('mouseover',function(){
    document.getElementsByClassName('logo')[0].innerHTML=prevLoc+' cd projects';
})
document.getElementsByClassName('home')[0].addEventListener('mouseout',function(){
    document.getElementsByClassName('logo')[0].innerHTML=prevLoc;
})
document.getElementsByClassName('aboutMe')[0].addEventListener('mouseout',function(){
    document.getElementsByClassName('logo')[0].innerHTML=prevLoc;
})
document.getElementsByClassName('blogs')[0].addEventListener('mouseout',function(){
    document.getElementsByClassName('logo')[0].innerHTML=prevLoc;
})
document.getElementsByClassName('projects')[0].addEventListener('mouseout',function(){
    document.getElementsByClassName('logo')[0].innerHTML= prevLoc;
})