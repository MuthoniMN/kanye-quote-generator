document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){

  fetch("https://api.kanye.rest")
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('p').innerText = data.quote
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
