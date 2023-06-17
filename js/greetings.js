"use strict";

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSummit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const usernameThatTheUserWrote = loginInput.value;
  localStorage.setItem(USERNAME_KEY, usernameThatTheUserWrote);
  paintGreetins(usernameThatTheUserWrote);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
  alert("linked!!");
}

loginForm.addEventListener("submit", onLoginSummit);

function paintGreetins(username) {
  greeting.innerText = `hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSummit);
} else {
  paintGreetins(savedUsername);
}
