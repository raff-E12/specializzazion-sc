
// Snacks del Giorno
// Clonazione degli oggetti.


// Snacks 1

//   Significa che la variabile punta allo stesso oggetto preso in riferimento, 
//   quindi applicando la modifica cambia anche il valore dello stesso orginale, quindi fa solo da puntatore all'originale. 
//   l'oggetto creato solo uno ovvero l'originale.

const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

// console.log(hamburger.name, hamburger.weight); // l' oggetto viene memorizzato con la modifica della variabile secondBurger
// console.log(secondBurger.name, secondBurger.weight); // l'oggetto viene memorizzato dalla seconda variabile punta allo stesso oggetto modificato

// Snacks 2

    // Che sono creati due oggetti con array inclusi sulle due, ma con una differenza, la copia prende gli stessi valori del primo, però quando incortra l'array, le cose si compliano
    // perchè se si applica la modifica di un valore dalla copia, la copia punta alla stesso oggetto primario senza una separazione adeguata tra le due parti per array stesso.
    // Correzzione: per evitare questo andrebbero separati da una copia rispetto all'altra.

const hamburger_2 = { 
	name: "Cheese Burger", 
	weight: 250,
	ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger_2 = {...hamburger_2, ingredients: [...hamburger_2.ingredients]};
secondBurger_2.ingredients[0] = "Salad";

// console.log(hamburger_2);
// console.log(secondBurger_2);
// console.log(hamburger_2.ingredients[0]); // sono puntatori del oggetto stesso
// console.log(secondBurger_2.ingredients[0]); // sono puntatori del oggetto stesso

// Snack 3

const hamburger_3 = { 
	name: "Cheese Burger", 
	weight: 250,
	maker: {
		name: "Anonymous Chef",
		restaurant: {
			name: "Hyur's Burgers",
			address: "Main Street, 123",
			isOpen: true,
		},
		age: 29
	}
};

const fourBurger = structuredClone(hamburger_3);
const thirdBurger = structuredClone(hamburger_3);

// console.log(fourBurger);
// console.log(thirdBurger);

// Snack 4

const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
}

const restaurant = {
	name: "Hyur's Burgers",
	address: {
		street: 'Main Street',
		number: 123,
	},
	openingDate: new Date(2025, 3, 11),
	isOpen: false,
};

const clone_chef = {...chef};
const clone_restarunt = structuredClone(restaurant);

// console.log(clone_chef);
// console.log(clone_restarunt);

// Snack 5

// Il codice prevede di modificare e creare una copia del oggetto, in questo caso quando la copia dell'oggetto "maker" viene modificato
//     l'oggetto al col tempo stesso non prendere in considerazione di separare "maker" dal originale, in questo si applicano 
//     le stesse modifiche applicate anche all'orginale senza rispettare la distinzione tra le due i minima parte. Gli oggetti creati sono tre:
//     originale, copia stessa del oggetto e la copia del oggetto "maker" che appartiene all'originale che poi si collega alla copia del oggetto.

const hamburger_4 = { 
	name: "Cheese Burger", 
	weight: 250,
	maker: {
		name: "Anonymous Chef",
		restaurant: {
			name: "Hyur's Burgers",
			address: "Main Street, 123",
			isOpen: true,
		},
		age: 29
	}
};

const newRestaurant = {...hamburger_4.maker.restaurant};
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const FiveBurger = {...hamburger_4, maker: {...hamburger_4.maker}};
FiveBurger.maker.restaurant = newRestaurant;
FiveBurger.maker.name = "Chef Hyur";

// console.log(hamburger_4.maker.name); // Chef Hyur
// console.log(FiveBurger.maker.name); // Hyur's II
// console.log(hamburger_4.maker.restaurant.name); // Chef Hyur
// console.log(FiveBurger.maker.restaurant.name); // Hyur's II

// console.log("A", hamburger_4);
// console.log("B", FiveBurger);

// Snack 6

const chef_2 = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
	restaurant: {
		name: "Hyur's Burgers",
		welcomeClient: () => {
			console.log("Benvenuto!");
		},
		address: {
			street: 'Main Street',
			number: 123,
			showAddress: () => {
				console.log("Main Street 123");
			}
		},
		isOpen: true,
	}
}

const chef_clone_2 = {...chef_2, restaurant: {...chef_2.restaurant, 
    address: {...chef_2.restaurant.address} }};

// const chef_clone_3 = JSON.parse(JSON.stringify(chef_2));
// const chef_clone_4 = structuredClone(chef_2);

chef_clone_2.age = 30;
chef_clone_2.name = "Massimo Boffetti";
// chef_clone_2.makeBurger(n = 100);

// console.log("A", chef_2);
// console.log("B", chef_clone_2);
// console.log("C", chef_clone_3);
// console.log("D", chef_clone_4);



// Snacks 7 (Bonus)

function DeepCopyOBJ(obj) {
    if (typeof obj !== "object") { // Funzione Ricorsiva "Se non è un oggetto"
        return obj;
    }
    if (Array.isArray(obj)) {  // conflitto array con il type of "object"
        return obj.map(DeepCopyOBJ)
    }
    const copy = {};
    for (const key in obj) { // Iterazione con le diverse chiavi degli oggetti
        const value = obj[key];
        if (typeof value !== "object") { // Riconoscimento ricorsivo sugli oggetti
            copy[key] = value;
        } else {
            copy[key] = DeepCopyOBJ(value);
        }
    }
    return copy;
}

const copy_chef_10 = DeepCopyOBJ(hamburger_2);
console.log(copy_chef_10);
