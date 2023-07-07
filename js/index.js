import ajaxPetition from "./ajax.js"
import axiosPetition from "./axios.js";
import fetchPetition, { fetchAsync } from "./fetch.js";

const d = document

d.addEventListener("DOMContentLoaded", e => {

    // ajaxPetition();
    // fetchPetition();
    // fetchAsync();
    axiosPetition();
})