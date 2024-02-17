'use strict';


const articleTab = document.querySelector('article');
const serviceTab = document.querySelector('.services');
const contactMain = document.querySelector('.contact--main');
const contact = document.querySelector('.contact');
const formIconClose = document.querySelector('.form--icon--close');
const navBtn = document.querySelector('.nav--btn');

// smooth scrolling 

serviceTab.addEventListener('click', function(e){
    e.preventDefault();
    articleTab.scrollIntoView({behavior: 'smooth'})
});

contact.addEventListener("click", function(e){
    e.preventDefault();
    contactMain.scrollIntoView({behavior: 'smooth'});
});

// Tapped Component

navBtn.addEventListener('click', function(){
    document.querySelector('.contact--main--1').classList.add('contact--main--active');
    document.querySelector('.form--icon').classList.add('form--icon--close');
});

document.querySelector('.contact--main--1').addEventListener('click', function(){
    document.querySelector('.contact--main--1').classList.toggle('contact--main--active');
});






