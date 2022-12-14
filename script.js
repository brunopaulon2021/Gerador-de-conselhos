//URL API
const URL_BASE = 'https://api.adviceslip.com/advice'

//PEGANDO ELEMENTOS HTML
const btn = document.getElementById('btn')
const adv_nbr = document.getElementById('numberAdvice')
const adv = document.getElementById('advice')

//EVENTO CLICK
btn.addEventListener('click', function () {
  fetch(URL_BASE).then(function (response) {
    response.json().then(function (data) {
      show_adv(data)
    })
  })

  function show_adv (data) {
    adv_nbr.innerHTML = `<p>ADVICE #${data.slip.id}</p>`
    adv.innerHTML = `<p>"${data.slip.advice}"</p>`
  }
})
