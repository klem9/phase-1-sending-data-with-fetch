function submitData(name,email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email
        }),
      })
    .then(resp => resp.json())
    .then(data => {
        let body = document.querySelector('body')
        let h1 = document.querySelector('h1')
        h1.innerHTML= `${data.id}`;
        body.appendChild(h1);
    }).catch(error => {
        document.body.innerHTML = error.message
    })
}

submitData()