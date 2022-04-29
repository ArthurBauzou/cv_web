
// afficher les détails des experiences et des formations
function showDetail(e) {
    let et = e.currentTarget.querySelector('ul');
    let dur = e.currentTarget.querySelector('span.duree');
    et.hidden = !et.hidden;
    if (dur) {dur.hidden = !dur.hidden};
}
// création des boutons interactifs (event listeners)
let etis = document.querySelectorAll('.etiquette');
etis.forEach(e => e.addEventListener('click', showDetail))


document.querySelector('.contact').addEventListener('click', (e) => {
    if (e.currentTarget.deploy = "false") {
        e.currentTarget.setAttribute("deploy", "true");
        e.currentTarget.style.width = '240px';
    }
    else {
        e.currentTarget.style.width = '32px';
        e.currentTarget.setAttribute("deploy", "false");
    }
})