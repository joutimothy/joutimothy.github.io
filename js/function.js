//calculation for the calculate button 
function cardCalculation(){
	var input1 = +document.getElementById("in1").value;
	var input2 = +document.getElementById("in2").value;
	var input3 = +document.getElementById("in3").value;
	var input4 = +document.getElementById("in4").value;
	var input5 = document.getElementById("in5").value;
	var input6 = document.getElementById("in6").value;
	//add error checking to see if input 1-4 are valid doubles
	var bCCTA = (input5 === 'CCTA'|input5 === 'ccta');
	var bCATH = (input5 === 'CATH'|input5 === 'cath');
	var bMale = (input6 === 'Male');
	var bFemale = (input6 === 'Female');

	if(!((bCCTA | bCATH) && (bMale | bFemale))){
		alert('Please enter either CATH or CCTA and M or F .');
		return;
	}

	var output1 = 0;
	var output2 = 0;
	var output3 = 0;
	if(input5 === 'CCTA'|input5 === 'ccta'){
		output1 = cctaFn(input4);
	}else if(input5 === 'CATH'|input5 === 'cath'){
		output1 = cathFn(input4);
	}
	
	if (bMale) {
		output2 = maleFn(input1,input2,output1).toFixed(2);
		output3 = maleFn(input1,input3,output1).toFixed(2);
		document.getElementById("out2").innerHTML = output2;
		document.getElementById("out3").innerHTML = output3;
	}else if (bFemale) {
		output2 = femaleFn(input1,input2,output1).toFixed(2);
		output3 = femaleFn(input1,input3,output1).toFixed(2);
		document.getElementById("out2").innerHTML = output2;
		document.getElementById("out3").innerHTML = output3;
	}else{
		//display Error 
		alert('Please enter either M or F.');
		return;
	}

	//calcualte percent drop
	var percentDrop = 0;	
	var temp = (output2-output3)/output2;
	if (temp < 0){
		percentDrop = temp*-100;
	}else{
		percentDrop = temp* 100;
	}
	document.getElementById("out4").innerHTML = percentDrop.toFixed(1);
	
}

function resetAllFields(){
	document.getElementById("in1").value = 125;
	document.getElementById("in2").value = 100;
	document.getElementById("in3").value = 100;
	document.getElementById("in4").value= 50;
	document.getElementById("range1").innerHTML = 125;
	document.getElementById("range2").innerHTML = 100;
	document.getElementById("range3").innerHTML = 100;
	document.getElementById("range4").innerHTML= 50;
	document.getElementById("out2").innerHTML = 0;
	document.getElementById("out3").innerHTML = 0;
	document.getElementById("out4").innerHTML = 0;
}

//function for CCTA + output for FFR
function cctaFn(input){
	return -0.0000940239*(Math.pow(input,2))+0.0072859161*input+0.7608424526;
}

//function for CATH + output for FFR
function cathFn(input){
	return -0.0035*input +1.0318;
}

function maleFn(in1,in2,in3){
	return -5.4+0.0364*in1-0.000107*(Math.pow(in1,2))+0.0758*in2+2.26*in3-0.000803*in1*in2+0.00000259*(Math.pow(in1,2))*in2;
}

function femaleFn(in1,in2,in3){
	return -6.3+0.0364*in1-0.000134*(Math.pow(in1,2))+0.0752*in2+3.6*in3-0.000904*in1*in2+0.00000337*(Math.pow(in1,2))*in2;
}

//function for displayign the number in slider
function showValue(newValue, spanId)
{
	document.getElementById(spanId).innerHTML=newValue;
}

function fillData()
{
	var input1 = document.getElementById("in1").value;
	var input2 = document.getElementById("in2").value;
	var input3 = document.getElementById("in3").value;
	var input4 = document.getElementById("in4").value;
	var input5 = document.getElementById("in5").value;
	var input6 = document.getElementById("in6").value;
	var output4 = document.getElementById("out4").innerHTML;

	document.getElementById("d1").innerHTML=input1;
	document.getElementById("d2").innerHTML=input2;
	document.getElementById("d3").innerHTML=input3;
	document.getElementById("d4").innerHTML=input4;
	document.getElementById("d5").innerHTML=input5;
	document.getElementById("d6").innerHTML=input6;
	document.getElementById("dout4").innerHTML=output4;


	/* dout4.value=out4.value; */
}



