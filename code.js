let features = document.querySelector('.features')
features.addEventListener('click',function (){
    document.querySelector('.features-container').classList.toggle('toggle')
    // document.querySelector('.up').classList.toggle('down-f')
    document.querySelector('.up').classList.toggle('down-f')
    // document.querySelector('.down-f').style.display = 'active'
})

let company = document.querySelector('.company')
company.addEventListener('click',function (){
    document.querySelector('.company-container').classList.toggle('toggle')
})