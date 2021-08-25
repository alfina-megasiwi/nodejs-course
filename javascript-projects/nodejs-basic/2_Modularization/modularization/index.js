const Tiger = require('./Tiger'); // TODO 3
const Wolf = require('./Wolf'); // TODO 4

const fighting = (tiger, wolf) => {
    if(tiger.strength > wolf.strength){
        tiger.growl();
        return;
    }
    if(wolf.strength > tigwe.strength){
        wolf.growl();
        return;
    }
    console.log('Tiger and wolf have same strength');
}

const tiger = new Tiger()
const wolf = new Wolf();

fighting(tiger, wolf)