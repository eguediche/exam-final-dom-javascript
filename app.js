const form = document.querySelector("#log-form");
const body = document.querySelector("body");
const moodText = document.querySelector("#last-mood-name");
const moodImg = document.querySelector("#last-mood-img");
const moodList = document.querySelector("#list-mood");
let count = 0;

document.addEventListener("DOMContentLoaded", () => {
	
});

form.addEventListener("submit", (e) => {
	e.preventDefault();

	let container = document.createElement("div");
	container.classList.add("modal");
	container.innerHTML = `
		<form class="log-form">
				<button id="button" class="btn text" type="button" style="align-self: flex-end;">
				  <img src="assets/close.svg" alt="close">
				</button>
				<h2 class="text-preset-2">Log your mood</h2>
				<h3 class="text-preset-3">How was your mood today ?</h3>
				<label>
				  <input type="radio" name="mood" value="very-happy">
				  <h5 class="text-preset-5">Very Happy</h5>
				</label>
				<label>
				  <input type="radio" name="mood" value="happy">
				  <h5 class="text-preset-5">Happy</h5>
				</label>
				<label>
				  <input type="radio" name="mood" value="neutral">
				  <h5 class="text-preset-5">Neutral</h5>
				</label>
				<label>
				  <input type="radio" name="mood" value="sad">
				  <h5 class="text-preset-5">Sad</h5>
				</label>
				<label>
				  <input type="radio" name="mood" value="very-sad">
				  <h5 class="text-preset-5">Very Sad</h5>
				</label>
				<button class="btn block blue-600 neutral-o-text" type="submit">
				  <h4 class="text-preset-4">Log Mood</h4>
				</button>
			  </form>
    `;
	body.appendChild(container);

    const btn = document.querySelector("#button");
    btn.addEventListener("click", () =>{
        container.outerHTML = "";
    });

    const form2 = document.querySelector(".log-form");

	form2.addEventListener("submit", (a) => {
		a.preventDefault();

        count++;
        console.log(count);

		const data = new FormData(form2);

		const name = data.get("mood");
		console.log(name);
        container.outerHTML = "";

        let moodLast = [];
	    moodLast.push(name);



	if (moodLast == "very-happy") {
		moodText.textContent = "Very Happy";
		moodImg.src = "./assets/very-happy.svg";
		let card = document.createElement("div");
		card.classList.add("mood-card");
		card.classList.add("amber-300");
		card.innerHTML = `
            <p class="text-preset-4">
            Verry Happy
            </p>
            `;
		moodList.prepend(card);
	}

	if (moodLast == "happy") {
		moodText.textContent = "Happy";
		moodImg.src = "./assets/happy.svg";
		let card = document.createElement("div");
		card.classList.add("mood-card");
		card.classList.add("green-300");
		card.innerHTML = `
            <p class="text-preset-4">
            Happy
            </p>
            `;
            moodList.prepend(card);
	}

	if (moodLast == "neutral") {
		moodText.textContent = "Neutral";
		moodImg.src = "./assets/neutral.svg";
		let card = document.createElement("div");
		card.classList.add("mood-card");
		card.classList.add("blue-300");
		card.innerHTML = `
            <p class="text-preset-4">
            Neutral
            </p>
            `;
            moodList.prepend(card);
	}

	if (moodLast == "sad") {
		moodText.textContent = "sad";
		moodImg.src = "./assets/sad.svg";
		let card = document.createElement("div");
		card.classList.add("mood-card");
		card.classList.add("indigo-200");
		card.innerHTML = `
            <p class="text-preset-4">
            Sad
            </p>
            `;
            moodList.prepend(card);
	}

	if (moodLast == "very-sad") {
		moodText.textContent = "Very sad";
		moodImg.src = "./assets/very-sad.svg";
		let card = document.createElement("div");
		card.classList.add("mood-card");
		card.classList.add("red-300");
		card.innerHTML = `
            <p class="text-preset-4">
            Verry Sad
            </p>
            `;
            moodList.prepend(card);
    }   

    if(count > 7) {
        moodList.removeChild(moodList.lastChild)
    }
	});
});
