const modalGameData =  [{
    title: 'Secret Zombie',
    icon: 'img/zombie.png',
    overview: 'In this game students will practice target conversation language in a fun and interactive way, this is a very popular game for younger learners and one they often request to play again.',
    preparation: 'arrange an area to act as a safe Zone, make space for students to mingle',
    materials: '3 different colored markers',
    size: '10+',
    instruction: 'Each student will put their heads down on their desks...',
    tweaks: 'Change the number of Zombies depending on the size of the class',
    downloadTemplate: 'docs/zombie.pdf',
    downloadPowerpoint: 'docs/zombie.ppt'

},





];


import {modalTemplate} from './modal-template.js';

document.getElementById("modal").innerHTML = `
${modalGameData.map(modalTemplate).join('')}

`