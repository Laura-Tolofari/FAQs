
function display(element) {
    let text = element.parentElement.nextElementSibling;
    let icon = element.nextElementSibling;
    if (text.style.display==='none' || text.style.display==='') {
     text.style.display = 'block';
     icon.src = 'icon-minus.svg';
    } else {
      text.style.display='none'
      icon.src = 'icon-plus.svg';
    }
}
