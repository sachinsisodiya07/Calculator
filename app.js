let inp = document.getElementById('inputBox');
let btns = document.querySelectorAll('button');

let str = "";
let arr = Array.from(btns);
arr.forEach((btn) => {
    btn.addEventListener("click",(e) =>{
        if(e.target.innerHTML == '='){
            str = eval(str);
            inp.value = str;
        }
        else if(e.target.innerHTML == 'AC'){
            str =" ";
            inp.value = 0;
        }
        else if(e.target.innerHTML == 'DEL'){
           str = str.substring(0,str.length-1);
           inp.value = str;
        }
        else{
            str += e.target.innerHTML;
            inp.value = str;
        }
    });
});
    
