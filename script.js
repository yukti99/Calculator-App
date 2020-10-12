function getHistory(){
    return document.getElementById("history-value").innerText;

}
//alert(getHistory());

function printHistory(num){
    document.getElementById("history-value").innerText=num;

}
//printHistory("9*9+8");

function getOutput(num){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    if (num==""){
        document.getElementById("output-value").innerText=num;

    }else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}
}

function getFormattedNumber(num){
    if (num=="-"){
        return "";
    }
    var n = Number(num);
    // to make sure big numbers are comma separated values
    var value = n.toLocaleString("en");
    return value;
}

//printOutput("3423423423");
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));

}
// to check if function is working correctly or not
//alert(reverseNumberFormat(getOutput()));

var operator = document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        //alert("The operator clicked: "+this.id);
        if (this.id=="clear"){
            printHistory("");
            printOutput("");
        }else if (this.id=="backspace"){
            var output = reverseNumberFormat(getOutput()).toString();
            if (output){
                // if output has a value
                output = output.substr(0, output.length-1);
                printOutput(output);
            }
        }else{
            var output = getOutput();
            var history = getHistory();
            if (output==""&&history!=""){
                // using isNotaNumber function
                if (isNaN(history[history.length-1])){
                    history = history.substr(0,history.length-1);
                }
            }
            if (output!="" || history!=""){
                output = output==""?output:reverseNumberFormat(output);
                history=history+output;
                if (this.id=="="){
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
				}else if (this.id=="√"){
					var result = Math.sqrt(output);
					printOutput(result);
                    printHistory("");
				}
				else{
                    history = history+ this.id;
                    printHistory(history);
                    printOutput("");
                }

            }

        }

    });
}



var number = document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        //alert("The number clicked: "+this.id);
        var output = reverseNumberFormat(getOutput());
        if (output!=NaN){
            // if output is a number
            //alert("this.id = ",this.id);
            output = output+this.id;
            printOutput(output);            
        }

    })
}



