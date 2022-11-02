const active = [
	{
		id: 1,

		house: "Slytherin",
		color: " Colors: Green & Silver",
		animal: " Animal: Snake",
		traits: " Traits: Cunning & Ambition",
		founder: " Founder: Salazar Slytherin",
		imageurl:
			"https://cdn.shoplightspeed.com/shops/610403/files/27985189/300x250x2/ata-boy-harry-potter-slytherin-crest-pin.jpg",
	},

	{
		id: 2,

		house: "Gryffindor",
		color: " Colors: Scarlet and Gold",
		animal: " Animal: Lion",
		traits: " Traits: Bravery & Chivalry",
		founder: " Founder: Godric Gryffindor",
		imageurl: "https://logodix.com/logo/419359.jpg",
	},

	{
		id: 3,

		house: "Ravenclaw",
		color: " Colors: Blue & Bronze",
		animal: " Animal: Eagle",
		traits: " Traits: Wit & Learning",
		founder: " Founder: Rowena Ravenclaw",
		imageurl:
			"https://i.pinimg.com/originals/34/1c/5f/341c5fbc312db57b52da3618b87ae833.jpg",
	},
	{
		id: 4,

		house: "Hufflepuff",
		color: " Colors: Yellow & Black",
		animal: " Animal: Badger",
		traits: " Traits: Loyalty & Hard Working",
		founder: " Founder: Helga Hufflepuff",
		imageurl: "https://i.ebayimg.com/images/g/-30AAOSw1vFfSXqe/s-l400.jpg",
	},
];

const expelled = [
	{
		id: 1,

		house: "Voldemorts Army",
		color: " Colors: Green & Black",
		animal: " Followers: DeathEater",
		traits: " Traits: Evil & Relentless",
		founder: " Founder: Tom Riddle",
		imageurl:
			"https://www.seekpng.com/png/detail/365-3651365_transparent-death-eater-tattoo-more-dark-mark.png",
	},
];

const goodstudents = [
	{ name: "Cedric Diggory", house: "Hufflepuff" },
	{ name: "Luna Lovegood", house: "Ravenclaw" },
	{ name: "Draco Malfoy", house: "Slytherin" },
	{ name: "Albus Dumbledore", house: "Gryffindor" },
];
const evilpeople = [{ name: "Bellatrix Lestrange", house: "VoldemortsArmy" }];

const renderToDom = (divId, htmlToRender) => {
	const selectedDiv = document.querySelector(divId);
	selectedDiv.innerHTML = htmlToRender;
};
const cardOnDom = (goodstudents) => {
	let domString = "";

	for (const student of goodstudents) {
		domString += `<div class="card" style="width: 18rem;">
  <img src="${active.imageurl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${active.name} </h5>
    <h4 class="card-name ${student.house}">${active.house}</h4>
    <p class="founder">${active.founder}</p>
    <p class="traits">${active.traits}</p>
    <p class="animal">${active.color}</p>
    <p class="card-text">${active.animal}</p>
    <a href="#" class="btn btn-danger" id="delete--">Expelled</a>
  </div>
</div>`;
	}
	return domString;
};
renderToDom("#cards", cardOnDom(goodstudents, evilpeople));
cardOnDom(goodstudents, evilpeople);

// / / / Randomizer;
// Sort Button

const sortButton = () => {
	const name = document.querySelector("#studentName").value;
	const houses = ["Hufflepuff", "Ravenclaw", "Slytherin", "Gryffindor"];
	const randomnumber = Math.floor(Math.random() * houses.length);
	const randomHouse = houses[randomnumber];
	// const randomId = Math.floor(Math.random() * students.id.length);
	const newStudent = { id: name + randomHouse, name: name, house: randomHouse };
	students.push(newStudent);
	renderToDom("#cards", cardOnDom(students));
};

// Delete Button
const deleteButton = document.querySelector("#cards");
console.log("deleteButton", deleteButton);
cards.addEventListener("click", (e) => {
	console.log("delete");
	// if (e.target.id.includes("delete")) {
	// 	const [, id] = e.target.id.split("--");
	// 	const index = students.findIndex((e) => e.id === Number(id));
	// 	students.splice(index, 1);
	// 	cardOnDom(students);
	// }
});
// Search
// .filter()

const search = (event) => {
	const searchResult = students.filter((item) => item.type);
};

const filterButtons = (event) => {
	if (event.target.id === "Hufflepuff") {
		const hufflepuffStudents = students.filter(
			(taco) => taco.house === "Hufflepuff"
		);
		renderToDom("#cards", cardOnDom(hufflepuffStudents));
	} else if (event.target.id === "Gryffindor") {
		const gryffindorStudents = students.filter(
			(taco) => taco.house === "Gryffindor"
		);
		renderToDom("#cards", cardOnDom(gryffindorStudents));
	} else if (event.target.id === "Slytherin") {
		const slytherinstudents = students.filter(
			(taco) => taco.house === "Slytherin"
		);
		renderToDom("#cards", cardOnDom(slytherinstudents));
	} else if (event.target.id === "Ravenclaw") {
		const ravenclawinstudents = students.filter(
			(taco) => taco.house === "Ravenclaw"
		);
		renderToDom("#cards", cardOnDom(ravenclawinstudents));
	} else {
		const allhousestudents = students.filter(
			(taco) => taco.house === "all-houses"
		);
	}
};

const hogButton = document.querySelector("#hogwarts");
const huffButton = document.querySelector("#Hufflepuff");
const gryButton = document.querySelector("#Gryffindor");
const slthButton = document.querySelector("#Slytherin");
const ravenButton = document.querySelector("#Ravenclaw");
const showAllButton = document.querySelector("#all-houses");

hogButton.addEventListener("click", filterButtons);

// To Start App

const StartApp = () => {
	// Render CardsOnDom

	// Adds Search Input
	document.querySelector("#search").addEventListener("keyup", search);
	// Adds Button Filter
	// document.querySelector("#hogwarts").addEventListener("click", buttonFilter);
	// Sort Button
	document.querySelector("#sort").addEventListener("click", sortButton);
};
StartApp();
