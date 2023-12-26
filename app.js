let acc = document.getElementsByClassName('question');
let imageChange = document.getElementsByClassName('dismiss')
let i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        
        closeAllAccordions();// Closes all other accordions

        this.classList.toggle('active');
        this.parentElement.classList.toggle('active');
        
        
        let panel = this.nextElementSibling;
        
        
        if (panel.style.display === "block"){
            panel.style.display = 'none';
            
            
        } else {
            panel.style.display = 'block';
        
        }
    });
}

function closeAllAccordions() {
    for (i = 0; i < acc.length; i++) {
        // Remove the active class from all accordions
        acc[i].classList.remove('active');
        acc[i].parentElement.classList.remove('active');

        // Hide all accordion panels
        let panel = acc[i].nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = 'none';
        }
    }
}
