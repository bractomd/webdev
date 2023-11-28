function calculateBudget() {
    let income = document.getElementById("begin").value;
    let firstexpense = document.getElementById("money1").value;
    let secondexpense = document.getElementById("money2").value;
    let thirdexpense = document.getElementById("money3").value;
    let forthexpense = document.getElementById("money4").value;
    let fithexpense = document.getElementById("money5").value;
    let sixthexpense = document.getElementById("money6").value;
   


    let Muns = income - firstexpense - secondexpense - thirdexpense - forthexpense - fithexpense - sixthexpense;
    document.getElementById(
        "left-over"
    ).innerHTML = `you have ${Muns} moneys lefty`;

    if (Muns >= 0)
        document.getElementById("advice1").innerHTML = `john is impressed with your money managing skills`
    else if (Muns < 0)
        document.getElementById("advice2").innerHTML = `john says you should get a job`


    




    
};



document.getElementById("begin").addEventListener("click", function() {
    document.getElementsByName("food")[0].placeholder=`feed me`;

});







