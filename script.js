// spcial thanks to css-tricks and Pankaj Parashar for the ideas

let strength = {
    0: "Unsafe ☹",
    1: "Bad ☹",
    2: "Weak ☹",
    3: "Good ☺",
    4: "Strong ☻"
}

let password = document.getElementById('pwd');

let meter = document.getElementById('pwd-strength-meter');

let text = document.getElementById('pwd-strength-text');

password.addEventListener('input', function()
{
    let val = password.value;
    let result = zxcvbn(val);

    // Update the password strength meter
    meter.value = result.score;
   
    // Update the text indicator
    if(val !== "") {
        text.innerHTML = "Password strength: " + "<strong>" + strength[result.score] + "</strong>"; 
    }
    else {
        text.innerHTML = "";
    }
});




    