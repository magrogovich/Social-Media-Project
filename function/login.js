document.getElementById('button').addEventListener('click',function(){
    userName = document.getElementsByClassName("input_name")[0].value;
    lastName = document.getElementsByClassName('input_Last')[0].value
    email = document.getElementsByClassName('email')[0].value
    confEmail = document.getElementsByClassName('confemail')[0].value
    day = document.getElementsByClassName('dd')[0].value
    month = document.getElementsByClassName('mm')[0].value
    year = document.getElementsByClassName('year')[0].value

    test = true
    if ((userName.length == 0 )||( lastName.length == 0) || (email.length == 0) || (confEmail.length == 0) || (day.length == 0) || (month.length == 0) || (year.length == 0)){
        alert('fill all the coordinates')
        test = false
    }
    test2 = true
    if (test == true){
        for (i = 0;i<userName.length ;i++){
            if ((i.toUpperCase()))
        }
    }
})

