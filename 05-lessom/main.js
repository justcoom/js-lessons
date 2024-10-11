const pet = {
    name: "Strider",
    happiness: 50,
    hunger: 50,
    health: {
        hygiene: 75,
        energy: 50,
        dental: 100,
        coat: 30,
    },
    sayHi() {
        console.log('Meow!');
    },
    checkStatus() {
        console.log(`happiness: ${this.happiness}, hungry: ${this.hunger}`);
    },
    fedPet(foodQuantity) {
        this.hunger -= foodQuantity
        if (this.hunger < 0) {
            this.hunger = 0;
        }
        console.log(`pet was feed! Currently hunger: ${this.hunger}`)
    }
}

function generateHealthReport(pet) {
    console.log(`Report about health ${pet.name}:`);
    const health = pet.health;

    for (const key in health) {
        console.log(`${key}: ${health[key]}`);
    }
}


console.log(generateHealthReport(pet));



