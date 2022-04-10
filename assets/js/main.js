/* ==================== VISIBILITY PROJECTS/SKILLS TAB ==================== */

const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc => { // tc = tab content 
            tc.classList.remove('filter__active')
        })
        target.classList.add('filter__active')

        tabs.forEach(t => { // t = tab
            t.classList.remove('filter__tab__active')
        })
        tab.classList.add('filter__tab__active')
    })
})