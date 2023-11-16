function tellFortune() {
e.preventDefault();

    numOfChildren = document.getElementById('children').value;
    partnerName = document.getElementById('partner').value;
    jobTitle = document.getElementById('job').value;

    
}
    
    document.getElementById('fortune').innerText = `you will be an ${jobTitle}  and will be married to ${partnerName} with ${numOfChildren} kids`;
{


function calculateDogAge(puppyAge) {
    dogAge = puppyAge * 7;
    console.log(`your dog is ${dogAge} years old in dog years`)
    
}

function calculateSupply(age, amountPerDay){
    age= document.getElementById("age").value;
    amountPerDay = document.getElementById()
    maxAge = 80;
    amountPerYear = amountPerDay * 365.25;
    totalAmount = (maxAge - age) * amountPerYear;
    console.log(`you will need ${totalAmount} to last until the age of ${maxAge}`);

}


function CalculateCirc(radius) {
    circumference = 2 * Math.PI * radius;
    console.log(` the circumference is ${circumference} `);

}

const calcArea = (radius) => console.log(`the area is ${math.PI * radius * radius}`);



function celToFair(celcius) {
    fahrenheit = celcius * 9 / 5 + 32;
    console.log (`${celcius} degrees celcius is ${fahrenheight} degrees fahrenheight`)
    
}

function fairToCel(fahrenheit) {
    celcius = (fahrenheit - 32) * 5 / 9;
    console.log (`${fahrenheit} degrees fahrenheit is ${celcius} degrees celcius`)

}
}