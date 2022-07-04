

const logInForm = document.getElementById("log-in-form")
const formInputs = document.getElementsByTagName('input')
const errorContainers = document.querySelectorAll('input + span.error')
const errorIcons = document.getElementsByClassName('error-icon')

// if the browser's javascript is enable disable html validity
logInForm.setAttribute("novalidate","novalidate")


logInForm.addEventListener("submit",function(event){
    errorCheck=[];
    for(i=0;i<formInputs.length;i++){
        if (formInputs[i].validity.valid){
            errorContainers[i].textContent='';
            errorIcons[i].style.opacity = 0;
            errorContainers[i].className='error';
        }
        else{
            errorContainers[i].className='active';
            showError(i);
            errorCheck.push("error");
        }
    };

    if (errorCheck.length>0){
        event.preventDefault()
    }
})

function capitalize(a){
    // split the string into an array
    const arr = a.split(" ");
    // capitalize the first character of each item of the array
    for(let i= 0;i<arr.length;i++){
        arr[i]= arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    };
    // return the capitalized string
    return arr.join(' ');
}

function showError(i){
    if(formInputs[i].validity.valueMissing){
        errorContainers[i].textContent=`${capitalize(formInputs[i].getAttribute('name').replace('-',' '))} cannot be empty`;
        formInputs[i].placeholder = '';
        errorIcons[i].style.opacity = 1;
    }
    else if(formInputs['email-address'].validity.typeMismatch){
        errorContainers[2].textContent = 'Look like this is not an email';
        formInputs['email-address'].value = '';
        formInputs['email-address'].placeholder = 'email@example/com';
        // formInputs['email-address'].setAttribute('placeholder','abc@gmail.com')
        formInputs['email-address'].classList.add('error-type-placeholder')
        errorIcons[i].style.opacity = 1;
                
    }
}