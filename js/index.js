import ajaxPetition from "./ajax.js"
import fetchPetition from "./fetch.js";

const d = document

d.addEventListener("DOMContentLoaded", e => {

    ajaxPetition();
    fetchPetition();
})