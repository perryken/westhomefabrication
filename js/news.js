//Pop SignUp

//Newsletter
var popError = document.getElementById('popup-error');
var  popsubmitError = document.getElementById('pop-submit-error');

//Validate Email
function validatePop(){
  var email = document.getElementById('popemail').value;

  if(email.length==0){
    popError.innerHTML = 'Email is required';
    return false;
  }
  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    popError.innerHTML = 'Please Enter a valid.';
    return false;
  }
  popError.innerHTML= '<i class="fa fa-check-circle"></i> ';
  return true;
}
    
 //Validate Submit
function validatepopup(){
  if(!validatePop()){
    newsubmitError.style.display = 'block';
    newsubmitError.innerHTML='Please Enter Valid Email Address';
    setTimeout(function(){newsubmitError.style.display = 'none';}, 3000);
    return false;
  }
  }

//Submit Validator
let popup = document.querySelector("#popupContainer2 form"),
statustext = popup.querySelector("span"); 
popup.onsubmit = (e)=>{
  e.preventDefault();
  statustext.style.color = "#0D6EFD";
  statustext.style.display = "block";
  statustext.innerText = "Subscribing in process";
  popup.classList.add("disabled");
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "newsletter.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
      let response = xhr.response;
      if(response.indexOf("Email required") != -1 || response.indexOf("Enter valid email") != -1 || response.indexOf("Sorry Subscription Failed") != -1){
        statustext.style.color = "red";
      }else{
        popup.reset();
        setTimeout(()=>{
          statustext.style.display = "none";
        }, 3000);
      }
      statustext.innerText = response;
      popup.classList.remove("disabled");
    }
  }
  let formData = new FormData(popup);
  xhr.send(formData);
}
  