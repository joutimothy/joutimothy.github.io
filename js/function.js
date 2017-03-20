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
	var bMale = (input6 === 'M'|input6 === 'm');
	var bFemale = (input6 === 'F'|input6 === 'f');

	if(!((bCCTA | bCATH) && (bMale | bFemale))){
		alert('Please enter either CATH or CCTA and M or F .');
		return;
	}


	if(input5 === 'CCTA'|input5 === 'ccta'){
		document.getElementById("out1").value = cctaFn(input4);
	}else if(input5 === 'CATH'|input5 === 'cath'){
		document.getElementById("out1").value = cathFn(input4);
	}
	
	var output1 = +document.getElementById("out1").value;
	if(input6 === 'M'|input6 === 'm'){
		document.getElementById("out2").value = maleFn(input1,input2,output1);
		document.getElementById("out3").value = maleFn(input1,input3,output1);
	}else if (input6 === 'F'|input6 === 'f'){
		document.getElementById("out2").value = femaleFn(input1,input2,output1);
		document.getElementById("out3").value = femaleFn(input1,input3,output1);
	}else{
		//display Error 
		alert('Please enter either M or F.');
		return;
	}
	
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

function showValue(newValue, spanId)
{
	document.getElementById(spanId).innerHTML=newValue;
}



