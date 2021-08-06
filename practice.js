// celcias to farenhite
function celciasToFarenhite(n){
    farenhite = (n * 9/5) + 32;
    return farenhite;
}

let celcias = celciasToFarenhite(5);
console.log(celcias, 'degree farenhite')

// farenhite to celcias
function farenhiteToCelcias(x){
    celcias = (x-32) * 5/9;
    return celcias;
}

let farenhite2 = farenhiteToCelcias(3)
console.log(farenhite2, 'degree celcias')

// grading system
function yourGrade(number){
    if(number >= 80) {
        console.log('congratulation you got A+');
    }
    else if(number >= 70 && number < 80){
        console.log('congratulation you got A');
    }
    else if(number >= 60 && number < 70){
        console.log('congratulation you got A-');
    }
    else if(number >= 50 && number < 60){
        console.log('congratulation you got B');
    }
    else if(number >= 40 && number < 50){
        console.log('congratulation you got C');
    }
    else if(number >= 34 && number < 40){
        console.log('congratulation you got D');
    }
    else{
        console.log('jah feltu kothakar');
    }
}

let yourNumber = yourGrade(11);


function namta(n){
    for (var i = 1; i <= 10; i++) {
        console.log(i*n);
    }
}

namta(8)
