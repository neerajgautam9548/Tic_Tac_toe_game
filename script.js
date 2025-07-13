// function showForm(formType){
//     const signup=document.getElementById("signup-form");
//     const login=document.getElementById("login-form");

//     if(formType === 'login'){
//         login.classList.remove("hidden");
//         signup.classList.add("hidden");
//     }
//     else{
//         signup.classList.remove("hidden");
//         login.classList.add("hidden");
//     }
// }
// document.getElementsByClassName("form").classList.add("hidden");
function showForm(formType) {
  const signup = document.getElementById("signup-form");
  const login = document.getElementById("login-form");

  const submit=document.getElementsByClassName("submit");
  if (formType === 'login') {
    login.classList.remove("hidden");
    signup.classList.add("hidden");
    
  } else {
    signup.classList.remove("hidden");
    login.classList.add("hidden");
    // alert("Signup successful! please login.");
  }
}

document.querySelector("#signup-form").addEventListener("submit",function(e){
  e.preventDefault();
  const inputs=this.querySelectorAll("input");
  const name=inputs[0].value;
  const email=inputs[1].value;
  const password=inputs[2].value;
  const confirmPassword=inputs[3].value;
  
  if(password!=confirmPassword) {
    alert("Passwords do not match");
    return ;
  }

  const user={name,email,password};
  localStorage.setItem("user",JSON.stringify(user));

  alert("signup successful! Please login.");
  showForm("login");
  this.reset();
})
document.querySelector("#login-form").addEventListener("submit",function(e){
  e.preventDefault();
  
  const inputs=this.querySelectorAll("input");
  const email=inputs[0].value;
  const password=inputs[1].value;

  const storedUser=JSON.parse(localStorage.getItem("user"));

  if(!storedUser){
    alert("No user found. Please sign up first.");
    return ;
  }

  if(email===storedUser.email && password===storedUser.password){
    alert("Login successful! Redirecting to dashboard...")
  }
  else{
    alert("Invalid email or password.");
  }
})