// Checking if name is valid while Inputing

const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input' , function(){
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
    if(nameRegex.test(text.value)){
        textError.textContent = " ";
    }
    else{
         textError.textContent = "Name is Valid";
    }
});
// Checking if MailID is valid while Inputing
const mail = document.querySelector('#email');
const mailError = document.querySelector('.mail-error');
mail.addEventListener('input' , function(){
    let mailRegex = RegExp('^[A-Za-z0-9]+(.[A-Za-z0-9]+)*@[^_\\W]+(.[^_\\W]+)?(?=(.[^_\\W]{3,}$|.[a-zA-Z]{2}$)).*$')
    if(mailRegex.test(mail.value)){
        mailError.textContent = " ";
    }
    else{
        mailError.textContent = "Mail is InValid ,Input a valid Email ID";
    }
});
//Getting Output for Salary
const salary = document.querySelector('#salary');
const salaryOuput = document.querySelector('.salary-output');
salaryOutput.textContent = salary.value;
salary.addEventListener('input',function(){
    salaryOuput.textContent = salary.value;
});