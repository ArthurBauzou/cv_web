
// afficher les détails des experiences et des formations
function showDetail(e) {
    let et = e.currentTarget.querySelector('ul');
    let dur = e.currentTarget.querySelector('span.duree');
    et.hidden = !et.hidden;
    if (dur) {dur.hidden = !dur.hidden};
}
// création des boutons interactifs sur les étiquettes
let etis = document.querySelectorAll('.etiquette');
etis.forEach(e => e.addEventListener('click', showDetail))


// Création d’un onglet cliquable pour déployer les détails de contacts
document.querySelector('.contact').addEventListener('click', (e) => {
    if (!e.currentTarget.hasAttribute("deploy")) {
        console.log("click1")
        e.currentTarget.setAttribute("deploy", "");
        e.currentTarget.style.width = '220px';
    }
    else {
        console.log("click2")
        e.currentTarget.style.width = '';
        e.currentTarget.removeAttribute("deploy");
    }
})