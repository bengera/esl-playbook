const modalGameData =  [{
    title: 'Secret Zombie',
    icon: 'img/zombie.svg',
    overview: 'In this game students will practice target conversation language in a fun and interactive way, this is a very popular game for younger learners and one they often request to play again.',
    preparation: 'arrange an area to act as a safe Zone, make space for students to mingle',
    materials: '3 different colored markers',
    size: '10+',
    instruction: 'Each student will put their heads down on their desks...',
    tweaks: 'Change the number of Zombies depending on the size of the class',
    downloadTemplate: 'docs/zombie.pdf',
    downloadPowerpoint: 'docs/zombie.ppt'

},
{
    title: 'Bluff',
    icon: 'img/spy.svg',
    overview: 'In this game students will answer some basic questions, this is a game based on bluff. Students will have to ask furthur questions to determine who is lying and who is telling the truth',
    preparation: 'Put the class into 2-4 teams',
    materials: '3 miniboards and markers',
    size: 'Any',
    instruction: '3 students will come to the front of the class',
    tweaks: 'Give the students a list of questions they can ask if they are weak',
    downloadTemplate: 'docs/bluff.pdf',
    downloadPowerpoint: 'docs/bluff.ppt'
},






];



import {modalTemplate} from './modal-template.js';

document.querySelector(".modal").innerHTML = `
${modalGameData.map(modalTemplate).join('')}

`

