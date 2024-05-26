let toastBox = document.getElementById("toastBox");
let successMsg = "<img src='/Toast Notification/Images/check.png'>successfully submited";
let errorMsg = "<img src='/Toast Notification/Images/error.png'> Please fix the error!";
let invalidMsg = "<img src='/Toast Notification/Images/invalid.png'>Invalid input, check again";

function showToast(msg){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }

    setTimeout(()=>{
        toast.remove();
    }, 6000)
}