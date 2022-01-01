const text = document.querySelector('#name');
const textError = document.querySelector('.text-error');
text.addEventListener('input' , function(){
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
    if(!nameRegex.test(text.value)){
        textError.textContent = "Name Is Invalid";
    }else {
        (new Input_Form()).name = text.value;
        textError.textContent = " ";
    }
});

//Salary
const salary = document.querySelector('#salary');
const salaryOuput = document.querySelector('.salary-output');
salaryOutput.textContent = salary.value;
salary.addEventListener('input',function(){
    salaryOuput.textContent = salary.value;
});