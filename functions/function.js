function calculateDogAge() {
    puppyAge = document.getElementById("dogAge").value;
    dogAge = puppyAge * 7;
    document.getElementById("dogFinalAge").innerHTML = `your pupper will be ${dogAge} years old in human years`;
    
}
