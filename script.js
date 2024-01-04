

const panels = document.querySelectorAll('.pannel')
console.log(panels[1]);

panels.forEach(() => {
     panels.addEventListener('click', () => {
        panel.classList.add('active')
     })
})


