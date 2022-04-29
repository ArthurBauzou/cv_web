
// afficher les détails des experiences et des formations
function showdetail(e) {
    let et = e.currentTarget.querySelector('ul');
    let dur = e.currentTarget.querySelector('span.duree');
    et.hidden = !et.hidden;
    if (dur) {dur.hidden = !dur.hidden};
}
// création des boutons interactifs (event listeners)
let etis = document.querySelectorAll('.etiquette');
etis.forEach(e => e.addEventListener('click', showdetail))

