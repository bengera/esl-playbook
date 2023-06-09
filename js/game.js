'use strict';

const cardDataGame =  [{
        title: "Secret Zombie",
        type: "Speaking",
        description: "In this game students will practice target conversation language in a fun and interactive way, this is a very popular game for younger learners and one they often request to play again.",
        icon: 'img/zombie.svg',
        modal: 'zombie'
        
    },
    {
        title: "Bluff",
        type: "Speaking",
        description: "In this game students will answer some basic questions, this is a game based on bluff. Students will have to ask furthur questions to determine who is lying and who is telling the truth",
        icon: 'img/spy.svg',
        modal: 'bluff'
    },
    {
        title: "Stand and say",
        type: "Speaking",
        description: "A fun an very enganging way to practice or review vocabulary, students have to stand and shout out words, keeps everyone on their toes",
        icon: 'img/stand.svg',
        modal: 'stand'
    },
    {
        title: "Boards and Bells",
        type: "Reading",
        description: "An engaging way to check reading comprehension using a miniboard and bells",
        icon: 'img/bell.svg',
        modal: 'board-bell'
    },

    
   

];


import {cardTemplate} from './template.js'


document.getElementById("cards").innerHTML = `
<h2 class="page-title">${cardDataGame.length} games for you to choose from</h1>
${cardDataGame.map(cardTemplate).join('')}

`






