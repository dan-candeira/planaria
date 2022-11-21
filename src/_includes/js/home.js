const socket = io();
const user = localStorage.getItem("planaria-user");

const userFormContainer = document.getElementById("user-form-container");
const userForm = document.getElementById("user-form");

const changeUsername = document.getElementById("user-change-button");
const cancelUsernameChange = document.getElementById("cancel-user-change");

const userInput = document.getElementById("user-name");
const users = document.getElementById("user-cards");

changeUsername.addEventListener("click", () => {
	userFormContainer.classList.remove("hidden");
});

userForm.addEventListener("submit", function (e) {
	e.preventDefault();
	if (userInput.value) {
		socket.emit("login", userInput.value);
		localStorage.setItem("planaria-user", userInput.value);
		userInput.value = "";
	}
});

cancelUsernameChange.addEventListener("click", () => {
	userFormContainer.classList.add("hidden");
});

if (user) {
	socket.emit("login", user);
}

socket.on("login", function (u) {
	const user = document.createElement("li");
	user.textContent = u;
	users.appendChild(user);
	userFormContainer.classList.add("hidden");

	// window.scrollTo(0, document.body.scrollHeight);
});
