
// afficher les détails des experiences et des formations
function showDetail(e) {
    // contenu details
    let et = e.currentTarget.querySelector('ul');
    et.hidden = !et.hidden;
    // durée
    let dur = e.currentTarget.querySelector('span.duree');
    if (dur) {dur.hidden = !dur.hidden};
    // pour la version mobile, toggle d’autres détails
    let spans = e.currentTarget.querySelectorAll('span');
    spans.forEach(e => {
        
        e.style.display = "block";

    });
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
        e.currentTarget.style.width = ''; // Supprime l’inline css 'width' pour revenir au comportement initial de l’élément 
        e.currentTarget.removeAttribute("deploy");
    }
})