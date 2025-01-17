//we use let, const and var for declaring variables in javascript
/**
 * const - const variables are variables that can not be changed once declared.
 * let - this are variables that can be changed after declaration.
 * var - this are variables that can be redeclared again and again.
 */

const container = document.querySelector(".container");
const textField = document.querySelector(".h2");

const subtraction = document.getElementById("substraction");
const reset = document.getElementById("reset");
const addition = document.getElementById("addition");

let changeProp = textField.innerHTML;
reRun();

function changeColor() {
  if (changeProp < 0 && changeProp > -5) {
    reRun();
    container.classList.add("sub1");
  } else if (changeProp < -5 && changeProp > -10) {
    reRun();
    container.classList.remove("sub1");
    container.classList.add("sub2");
  } else if (changeProp < -10 && changeProp > -15) {
    reRun();
    container.classList.remove("sub2");
    container.classList.add("sub3");
  } else if (changeProp < -15 && changeProp > -20) {
    reRun();
    container.classList.remove("sub3");
    container.classList.add("sub4");
  } else if (changeProp < -20 && changeProp > -25) {
    reRun();
    container.classList.remove("sub4");
    container.classList.add("sub5");
  } else if (changeProp < -25) {
    reRun();
    container.classList.remove("sub5");
    container.classList.add("sub6");
  } else if (changeProp >= 0 && changeProp < 2) {
    reRun();
    container.classList.add("res");
  }


  //addition color changing\


  if (changeProp < 5 && changeProp > 2) {
    reRun();
    container.classList.add("add1");
  } else if (changeProp < 10 && changeProp > 5) {
    reRun();
    container.classList.remove("add1");
    container.classList.add("add2");
  } else if (changeProp < 15 && changeProp > 10) {
    reRun();
    container.classList.remove("add2");
    container.classList.add("add3");
  } else if (changeProp < 20 && changeProp > 15) {
    reRun();
    container.classList.remove("add3");
    container.classList.add("add4");
  } else if (changeProp < 25 && changeProp > 20) {
    reRun();
    container.classList.remove("add4");
    container.classList.add("add5");
  } else if (changeProp > 25) {
    reRun();
    container.classList.remove("add5");
    container.classList.add("add6");
  } else if (changeProp >= 0 && changeProp < 2) {
    reRun();
    container.classList.add("res");
  }
  
}

function clickedBTNS(){

  subtraction.onclick = () => {
    reRun();
    textField.innerHTML--;
    changeProp = textField.innerHTML;
    changeColor();
  };
  reset.onclick = () => {
    reRun();
    textField.innerHTML = 0;
    changeProp = textField.innerHTML;
    reRun();
    changeColor();
  };
  addition.onclick = () => {
    reRun();
    textField.innerHTML++;
    changeProp = textField.innerHTML;
    changeSize();
    reRun();
    changeColor();
  };
}

clickedBTNS();

function reRun(){
  if (changeProp >= 0) {
    container.classList.remove("sub1");
  }
  if (changeProp > -5 || changeProp === 0) {
    container.classList.remove("sub2");
  }
  if (changeProp > -10 || changeProp === 0) {
    container.classList.remove("sub3");
  }
  if (changeProp > -15 || changeProp === 0) {
    container.classList.remove("sub4");
  }
  if (changeProp > -20 || changeProp === 0) {
    container.classList.remove("sub5");
  }
  if (changeProp > -25 || changeProp === 0) {
    container.classList.remove("sub6");
  }
  if (changeProp < 0 || changeProp > 2) {
    container.classList.remove("res");
  }


  //addcolor removal
  if (changeProp <= 2) {
    container.classList.remove("add1");
  }
  if (changeProp < 5 || changeProp === 0) {
    container.classList.remove("add2");
  }
  if (changeProp < 10 || changeProp === 0) {
    container.classList.remove("add3");
  }
  if (changeProp < 15 || changeProp === 0) {
    container.classList.remove("add4");
  }
  if (changeProp < 20 || changeProp === 0) {
    container.classList.remove("add5");
  }
  if (changeProp < 25 || changeProp === 0) {
    container.classList.remove("add6");
  }
  if (changeProp < 0 || changeProp > 2) {
    container.classList.remove("res");
  }
}

function changeSize(){
  if(changeProp > 9999999){
    textField.classList.remove("size");
    textField.classList.add("reduceSize");
  }
  if(changeProp < 9999999){
    textField.classList.remove("reduceSize");
    textField.classList.add("size");
  }
}
changeSize();
