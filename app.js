const billAmt = document.querySelector("#bill-amt");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document. querySelector("#check-btn");
const message = document.querySelector("#error-msg");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000,500,100,20,10,5,1];

function checkClickHandler(){
    if(billAmt.value>0){

        if( cashGiven.value>billAmt.value){
           const amtToBeReturned = 
            cashGiven.value-billAmt.value
             calculateChange(amtToBeReturned);

        }else{
             showMessage("Do you wanna wash plates??");
             }
            
            }else{
        showMessage("Invalid Bill Amount!");
            }}

      function calculateChange( amtToBeReturned) {
        for(i=0; i<availableNotes.length;i++){
             noOfNotes[i].innerText =  Math.trunc(
                amtToBeReturned/availableNotes[i]);
                amtToBeReturned%= availableNotes[i];

        }
      }
function showMessage(msg){
message.innerHTML = msg
}
checkBtn.addEventListener("click", checkClickHandler)