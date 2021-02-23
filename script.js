// Mixed Messages

// Lists with messages to combine
const messages1 = ['Inte halvvägs ut till Farsta.', 'Sen blev det aldrig bättre än så.', 'Varje sandkorn har ett nummer.', 'Jag läste Buster & Fantomen.'];
const messages2 = ['Fan, fan, fan, det skulle vart du.', 'Alla klockors körer.', 'Allt på en och samma gång.'];
const messages3 = ['Beväpna dig med vingar.', 'Det är som vackrast dar på natten.', 'När kristallskeppen kommer in.', 'Då blåser den dit man vill.', 'Jag såg att månen den var nästan hel.'];

// Create message randomly from the three lists.
function createRandomMessage() {
    let index1 = Math.floor(Math.random() * messages1.length);
    let index2 = Math.floor(Math.random() * messages2.length);
    let index3 = Math.floor(Math.random() * messages3.length);
    return `${messages1[index1]} ${messages2[index2]} ${messages3[index3]}`;
}

// Function call and log the message.
console.log(createRandomMessage());