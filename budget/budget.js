function calculateBudget() {
    income = document.getElementById("begin").value;
    firstexpense = document.getElementById("money1").value;
    secondexpense = document.getElementById("money2").value;
    thirdexpense = document.getElementById("money3").value;
    forthexpense = document.getElementById("money4").value;
    fithexpense = document.getElementById("money5").value;
    sixthexpense = document.getElementById("money6").value;
   


    Muns = income - firstexpense - secondexpense - thirdexpense - forthexpense - fithexpense - sixthexpense;
    document.getElementById(
        "left-over"
    ).innerHTML = `you have ${Muns} moneys lefty`;

    
};



document.getElementById("begin").addEventListener("click", function() {
    document.getElementsByName("food")[0].placeholder=`feed me`;

});







