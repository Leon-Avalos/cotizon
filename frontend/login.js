function login(){
    let url = 'http://localhost:3000/login'
    let usuario = document.getElementById('loginCorreo')
    let password = document.getElementById('loginClave')

    axios.post(url,{user: usuario, pass: password}).then(response => {
        console.log(response)
    }).catch(err => {
        console.log(err)
    })
}   