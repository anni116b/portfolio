window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log(sidenVises);

    document.querySelector("#sky1_container").classList.add("move1");
    document.querySelector("#sky1_sprite").classList.add("floating");

    document.querySelector("#sky2_container").classList.add("floating2");


    document.querySelector("#sky3_sprite").classList.add("move2");
    document.querySelector("#sky3_container").classList.add("floating");



}
