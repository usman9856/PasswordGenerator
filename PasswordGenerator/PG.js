let allChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^& *()_+~\\`|}{[]:;?><,./-=" //93
let allChar_s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^& *()_+~\\`|}{[]:;?><,./-=" //93
let index;

function generate(){
    let password = "";
    let value1 = document.getElementById("criteria1").checked;// checks if checkbox is checked or not
    let value2 = document.getElementById("criteria2").checked;// checks if checkbox is checked or not
    let length = document.getElementById("#len").value;
    if (length<4 || length>12)
    {
        alert("Password length is not appropriate. Please try again!");
        return 0;
    }
    else if (value1 == false && value2 == false) //if no checkbox the run this output is going to be combination of capital and large alphabets
    {
        for(i=0;i<length;i++){
            index = Math.floor(Math.random()*51);    
            password += allChar[index];
        }
        
    }
    else if (value1 == true && value2 == false) //if number checkbox checked then output = combination of alphabets+numbers
    {
        for(i=0;i<length;i++){
        index = Math.floor(Math.random()*61);   
        password += allChar[index];
        }        
    }
    else if (value1 == true && value2 == true)//if both checkbox checked then output = combination of alphabets+numbers+special character
    {
        for(i=0;i<length;i++){
        index = Math.floor(Math.random()*93); 
        password += allChar[index];
        }          
    }
    else if (value1 == false && value2 == true)//if special character checkbox checked then output = combination of alphabets+special characters
    {
        for(i=0;i<length;i++){
        index = Math.floor(Math.random()*81);  
        password += allChar_s[index];
        }         
    }

    
 document.querySelector("#result").innerHTML = password;    // reutrn and print the ans in html page
}