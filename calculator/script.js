document.body.setAttribute('style','background-color:grey;')

var container = document.createElement('div');
container.setAttribute('class', 'container');
container.setAttribute('style','background-color:white;')

var row = document.createElement('div');
row.setAttribute('class', 'row');


var column = document.createElement('div');
column.className='col text-center';
column.setAttribute('style', 'border:1px solid black');

row.append(column);
container.append(row);
document.body.append(container);

//Heading
var heading = document.createElement('h3');
heading.className='h3';
heading.innerText="Calculator";
column.append(heading);

var screen = document.createElement('p');
screen.className='p';
screen.id='screen';
screen.innerText='Enter in format num1 operator num2';
screen.setAttribute('style', 'border:1px solid black; padding:10px;');
column.append(screen);

var operator = document.createElement('div');
operator.className='operator';
column.append(operator);

var addition = document.createElement('button');
addition.className='btn btn-light'
addition.innerText= '+';
addition.setAttribute('style', 'margin: 0 5px; ');
operator.append(addition);


var subtract = document.createElement('button');
subtract.className='btn btn-light';
subtract.innerText= '-';
subtract.setAttribute('style', 'margin: 0 5px;');
operator.append(subtract);

var mul = document.createElement('button');
mul.className='btn btn-light'
mul.innerText= '*';
mul.setAttribute('style', 'margin: 0 5px;');
operator.append(mul);

var divide = document.createElement('button');
divide.className='btn btn-light'
divide.innerText= '/';
divide.setAttribute('style', 'margin: 0 5px;');
operator.append(divide);

var mPlus = document.createElement('button');
mPlus.className='key btn btn-warning';
mPlus.innerText= 'M+';
mPlus.setAttribute('style', 'margin: 5px 5px; ');
operator.append(mPlus);
// var br = document.createElement('br');
// operator.append(br);

var keypad = document.createElement('div');
keypad.className="keypad";
column.append(keypad);

var num1 = document.createElement('button');
num1.className='key btn btn-light';
num1.innerText= '1';
num1.setAttribute('style', 'margin: 5px 5px; ');

keypad.append(num1);

var num2 = document.createElement('button');
num2.className='key btn btn-light';
num2.innerText= '2';
num2.setAttribute('style', 'margin: 5px 5px; ');

keypad.append(num2);

var num3 = document.createElement('button');
num3.className='key btn btn-light';
num3.innerText= '3';
num3.setAttribute('style', 'margin: 5px 5px; ');
keypad.append(num3);

var num4 = document.createElement('button');
num4.className='key btn btn-light';
num4.innerText= '4';
num4.setAttribute('style', 'margin: 5px 5px; ');
keypad.append(num4);

var mMinus = document.createElement('button');
mMinus.className='key btn btn-warning';
mMinus.innerText= 'M-';
mMinus.setAttribute('style', 'margin: 5px 5px; ');
keypad.append(mMinus);

var keypad1 = document.createElement('div');
keypad1.className="keypad";
column.append(keypad1);

var num5 = document.createElement('button');
num5.className='key btn btn-light';
num5.innerText= '5';
num5.setAttribute('style', 'margin: 5px 5px; ');
keypad1.append(num5);

var num6 = document.createElement('button');
num6.className='key btn btn-light';
num6.innerText= '6';
num6.setAttribute('style', 'margin: 5px 5px; ');
keypad1.append(num6);

var num7 = document.createElement('button');
num7.className='key btn btn-light';
num7.innerText= '7';
num7.setAttribute('style', 'margin: 5px 5px; ');
keypad1.append(num7);

var num8 = document.createElement('button');
num8.className='key btn btn-light';
num8.innerText= '8';
num8.setAttribute('style', 'margin: 5px 5px; ');
keypad1.append(num8);

var mClear = document.createElement('button');
mClear.className='key btn btn-warning';
mClear.innerText= 'MC';
mClear.setAttribute('style', 'margin: 5px 5px; ');
keypad1.append(mClear);

var keypad2 = document.createElement('div');
keypad2.className="keypad";
column.append(keypad2);

var num9 = document.createElement('button');
num9.className='key btn btn-light';
num9.innerText= '9';
num9.setAttribute('style', 'margin: 5px 5px; ');
keypad2.append(num9);

var num0 = document.createElement('button');
num0.className='key btn btn-light';
num0.innerText= '0';
num0.setAttribute('style', 'margin: 5px 5px; ');
keypad2.append(num0);

var eq = document.createElement('button');
eq.className='key btn btn-primary';
eq.innerText= '=';
eq.setAttribute('style', 'margin: 5px 5px; ');
keypad2.append(eq);

var clear = document.createElement('button');
clear.className='key btn btn-danger';
clear.innerText= 'C';
clear.setAttribute('style', 'margin: 5px 5px; ');
clear.addEventListener('click', function(){ text_to_display='';
                                            document.getElementById('screen').innerText='Enter in format num1 operator num2';});
keypad2.append(clear);

var mRetrive = document.createElement('button');
mRetrive .className='key btn btn-warning';
mRetrive .innerText= 'MR';
mRetrive .setAttribute('style', 'margin: 5px 5px; ');
keypad2.append(mRetrive );


num1.addEventListener('click',function (){print('1');});
num2.addEventListener('click',function (){print('2');});
num3.addEventListener('click',function (){print('3');});
num4.addEventListener('click',function (){print('4');});
num5.addEventListener('click',function (){print('5');});
num6.addEventListener('click',function (){print('6');});
num7.addEventListener('click',function (){print('7');});
num8.addEventListener('click',function (){print('8');});
num9.addEventListener('click',function (){print('9');});
num0.addEventListener('click',function (){print('0');});

addition.addEventListener('click',function (){print('+');});
subtract.addEventListener('click',function (){print('-');});
mul.addEventListener('click',function (){print('*');});
divide.addEventListener('click',function (){print('/');});

document.body.addEventListener('keydown', logKey);

function logKey(e){
    console.log(typeof (e.key));
    if(+e.key>=0 && +e.key<=9){
        console.log((e.key));
        print(e.key);
    }
    else{
        document.getElementById('screen').innerText='Only Number allowed!!!';
    }
}

var text_to_display='';
function print(text){
    text_to_display+=text;
    document.getElementById('screen').innerText=text_to_display;
}

eq.addEventListener('click', calculate);

function calculate(){
    text_to_display = eval(text_to_display)
    document.getElementById('screen').innerText = text_to_display;
}

var mem = 0;
mPlus.addEventListener('click', function(){ mem+= +eval(text_to_display);});

mMinus.addEventListener('click', function(){mem -= +eval(text_to_display);});

mClear.addEventListener('click', function(){mem = 0;});

mRetrive.addEventListener('click', function(){text_to_display=''; print(mem);});
