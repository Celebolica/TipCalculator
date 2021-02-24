/*This is how we are going to format the money*/
function formatMoney(value){
    /*This will make sure we are rounding up in the correct way*/
    value = Math.ceil(value * 100) / 100;
    /*This will fix our deciaml at two places */
    value = value.toFixed(2);
    /*This will format our money with a dollar sign */
    return "$" + value;
}

/*This function will formal the guests with a single value of Guest if only one is selected i.e equal to one.  It will return Guests when not one */
function formatPeople(value){
    if (value === "1") {
        return value + " Guest";}
    else {
        return value + " Guests";}
}

/*we are going to get our element by ID and add in its value/name/id i.e bill. we are then goin to make a variable using let.  Adding .value will give us the actual number value in the element rather than just the what it is, a number. with out .value it will only state number.  This was a string so we turned it into a number by using Number and wrapping that part of our function This is grabbing our user INPUTS*/
function update(){
    let bill = Number(document.getElementById("yourBill").value);
    let tipPercent = document.getElementById("tipInput").value;
    let splitValue = document.getElementById("splitInput").value;

/*Now we are making a variable to get the information of tipValue and do the math for the tip % on the bill*/
    let tipValue = bill * (tipPercent / 100);
    let tipEach = tipValue / splitValue;
    let newBillEach = (bill + tipValue) / splitValue;

    document.getElementById("tipPercent").innerHTML = tipPercent + "%";
    document.getElementById("tipValue").innerHTML = formatMoney(tipValue);
    document.getElementById("totalWithTip").innerHTML = formatMoney(bill + tipValue);
    document.getElementById("splitValue").innerHTML = formatPeople(splitValue);
    document.getElementById("billEach").innerHTML = formatMoney(newBillEach);
    document.getElementById("tipEach").innerHTML = formatMoney(tipEach);

/*Consolelog to make sure they are all working, if we put the console log in curly braces it will spit out the values but aldo the names of the values*/
/*console.log({bill, tipPercent, splitValue});*/
}
/*Keeping or JS and Html separate we are going to add an ID to the main container and accessing that ID. We will use an event listener instead of and on click wihtin htlm.  Best practices.*/
let container = document.getElementById('container')
container.addEventListener('input', update)