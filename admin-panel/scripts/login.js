
const loginForm = document.querySelector('form');
let userDetails = [];
loginForm,addEventListener("submit",(e)=>{
    e.preventDefault();
    let password = loginForm.password.value;
    let username = loginForm.username.value;
    let fullName = loginForm?.fullName?.value || '';
    let email = loginForm?.email?.value || '';
    if(e.target.id === 'signUp'){
        let userDetail = {
            fullName,
            username,
            email,
            password
        }
        userDetails.push(userDetail);
        localStorage.setItem('users',JSON.stringify(userDetails));
    }else{
    let authShield = userAuthentication(username,password);
    isLogin(authShield)
   }
   loginForm.password.value = '';
   loginForm.username.value= '';
//    loginForm.fullName.value = '';
//    loginForm.email.value = '';

})
function userAuthentication(username,password){
    let userDetails = JSON.parse(localStorage.getItem('users'));
    for (let i = 0; i < userDetails.length; i++) {
        const element = userDetails[i];
        console.log(element.username,username);
        if(element.username === username && element.password === password){
            return true
        }else{
            return false
        }
    }
    
}

function isLogin(msg){
    let message = document.getElementById('message');
    if(msg){
        message.innerHTML = 'Login Sucsessfully';
        setTimeout(() => {
            message.innerText = ''
        }, 2000); 
        window.location.href='index.html'
    }else{
        message.innerText="Login failed"
    }
}