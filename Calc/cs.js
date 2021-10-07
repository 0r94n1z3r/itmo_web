var mem = 0;
var act = '';

function action(action){
	mem = parseInt(inp.value);
	act = action;
	inp.value = 0;
}

function number_click(n){
	if(inp.value == '0'){
		inp.value = n;
	}else{
		inp.value += n;
	}
}

function clear_input(){
	inp.value = 0;
	mem = 0;
	act = '';
}

function del_last(){
	inp.value = inp.value.slice(0,-1);
	if(!inp.value.length)inp.value = 0;;
}

function result(){
	var val = parseInt(inp.value);
	
	switch (act){
		case 'a0':
			inp.value = mem + val;
		break;
		case 'a1':
			inp.value = mem - val;
		break;
		case 'a2':
			inp.value = mem * val;
		break;
		case 'a3':
			inp.value = Math.round(mem / val);
		break;
	}
	act = '';
}

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.btn').
		forEach(
			(obj) => { 

				obj.addEventListener('click',()=>{
					obj.setAttribute('active','');
				},false);

				document.addEventListener('mouseup',()=>{
					setTimeout(()=>{
						obj.removeAttribute('active');
					},1);
				},false);
				document.addEventListener('keyup',()=>{
					obj.removeAttribute('active');
				},false);

			},
		);
});

document.onkeydown = function(e){
	switch(e.key){
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		case '9':
		case '0':
			document.getElementById('n'+e.key).click();
		break;
		case '+':
			a0.click();
		break;
		case '-':
			a1.click();
		break;
		case '*':
			a2.click();
		break;
		case '/':
			a3.click();
		break;
		case 'Backspace':
			a4.click();
		break;
		case 'с':
		case 'С':
			a5.click();
		break;
		case '=':
		case 'Enter':
			a6.click();
		break;

	}
};