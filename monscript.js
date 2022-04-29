function showdetail(e) {
    // console.log(e.currentTarget.parentNode.querySelector('ul'))
    let et = e.currentTarget.querySelector('ul');
    et.hidden = !et.hidden
    // e.target.style.color = 'red';
}
    
let etis = document.querySelectorAll('.etiquette');
etis.forEach(e => e.addEventListener('click', showdetail))