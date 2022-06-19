// if the browsers javascript is enable disable html validity

const logInForm = document.getElementById("log-in-form")

const formInputs = document.getElementsByTagName('input')
console.log(formInputs)

const errorContainer = document.querySelectorAll('input + span.error')
console.log(errorContainer)
logInForm.setAttribute("novalidate","novalidate")


logInForm.addEventListener("submit",function(event){
    errorCheck=[];
    for(i=0;i<formInputs.length;i++){
        if (formInputs[i].validity.valid){
            errorContainer[i].textContent='';
            errorContainer[i].className='error';
        }
        else{
            errorContainer[i].className='active';
            showError(i);
            errorCheck.push("error");
            // console.log(errorCheck)
        }
    };

    if (errorCheck.length>0){
        event.preventDefault()
    }
})

function showError(i){
    if(formInputs[i].validity.valueMissing){
        errorContainer[i].textContent='This field cannot be empty';
    }
    else if(formInputs[i].validity.patternMismatch){
        errorContainer[i].textContent='You have not matched the required pattern';
    }

}