fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(json => console.log(json))
