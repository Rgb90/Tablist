
function select1 () {
    tab1.classList.add("active");
    tab2.classList.remove("active");
    tab3.classList.remove("active");
    mescidiHaram.classList.remove("hide");
    mescidiNebevi.classList.add("hide");
    mescidiAksa.classList.add("hide");
}

function select2 () {
    tab1.classList.remove("active");
    tab2.classList.add("active");
    tab3.classList.remove("active");
    mescidiHaram.classList.add("hide");
    mescidiNebevi.classList.remove("hide");
    mescidiAksa.classList.add("hide");
}

function select3 () {
    tab1.classList.remove("active");
    tab2.classList.remove("active");
    tab3.classList.add("active");
    mescidiHaram.classList.add("hide");
    mescidiNebevi.classList.add("hide");
    mescidiAksa.classList.remove("hide");
}

