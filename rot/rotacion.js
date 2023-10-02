const cont = document.getElementById("contenido");
const recordButton1 = document.getElementById("recordButton1");
const tel3 = document.getElementById("tel3");
const bt1 = document.getElementById("boton1");
const bt2 = document.getElementById("boton2");
const bentana1 = document.getElementById("llamada");
const bentana2 = document.getElementById("escuchar");
const sonido_1 = document.getElementById("son_1");
const sonido_2 = document.getElementById("son_2");
const sonido_3 = document.getElementById("son_3");
function mouse(variable){
    onmousemove = (e)=>{
        variable.style.transition="0s";
        const positionX=window.innerWidth/2
        const positionY=window.innerHeight/2
        variable.style.transform=`rotateY(${(e.clientX/positionX-1)*180}deg) rotateX(${(e.clientY/positionY-1)*180}deg)`;
       
     }
}
const car_1 =0;
const car_2 =3090;
const car_3 =6180;
const car_4 =9270;
const car_5 =12360;
const car_6 =15450;
const car_7 =18540;
const car_8 =21630;
const car_9 =24720;
const car_10 =27810;
const car_11 =30900;
const car_12 =33990;
const car_13 =37080;
const car_14 =40170;
const car_15 =43260;
const car_16 =46350;
const car_17 =49440;
const car_18 =52530;
const car_19 =55620;
const car_20 =58710;
const car_21 =61800;
const car_22 =64890;
const car_23 =67980;
var car_24 =71070;
var car_25 =74160;
var car_26 =77250;
var car_27 =80340;
var car_28 =83430;
var car_29 =86520;
var car_30 =89610;
var car_31 =92700;
var car_32 =95790;
var car_33 =98880;
var car_34 =101970;


var car_son_1 = 80;
var car_son_2 = 1080;
var car_son_3 = 2080;
var car_son_4 = 3080;
function boton1(entrada){
    if(entrada == true){
  
        ventana();
    
        setTimeout(function ejecucion1(){
            llamando();

        }, car_1)
        setTimeout(function ejecucion2(){
            llamando();
        },car_2)
        setTimeout(function ejecucion3(){
            llamando();
        },car_3)
        setTimeout(function ejecucion4(){
            llamando();
        },car_4)
        
        setTimeout(function ejecucion5(){
            llamando();
        },car_5)
        setTimeout(function ejecucion6(){
            llamando();
        },car_6)
        setTimeout(function ejecucion7(){
            llamando();
        },car_7)
        setTimeout(function ejecucion8(){
            llamando();
        },car_8)
        setTimeout(function ejecucion9(){
            llamando();
        },car_9)
        setTimeout(function ejecucion10(){
            llamando();
        },car_10)
        setTimeout(function ejecucion11(){
            llamando();
        },car_11)
        setTimeout(function ejecucion12(){
            llamando();
        },car_12)
        setTimeout(function ejecucion13(){
            llamando();
        },car_13)
        setTimeout(function ejecucion14(){
            llamando();
        },car_14)
        setTimeout(function ejecucion15(){
            llamando();
        },car_15)
        setTimeout(function ejecucion16(){
            llamando();
        },car_16)
        setTimeout(function ejecucion17(){
            llamando();
        },car_17)
        setTimeout(function ejecucion18(){
            llamando();
        },car_18)
        setTimeout(function ejecucion19(){
            llamando();
        },car_19)
        setTimeout(function ejecucion20(){
            llamando();
        },car_20)
        setTimeout(function ejecucion21(){
            llamando();
        },car_21)
        setTimeout(function ejecucion22(){
            llamando();
        },car_22)
        setTimeout(function ejecucion23(){
            llamando();
        },car_23)
        setTimeout(function ejecucion24(){
            llamando();
        },car_24)
        setTimeout(function ejecucion25(){
            llamando();
        },car_25)
        setTimeout(function ejecucion26(){
            llamando();
        },car_26)
        setTimeout(function ejecucion27(){
            llamando();
        },car_27)
        setTimeout(function ejecucion28(){
            llamando();
        },car_28)
        setTimeout(function ejecucion29(){
            llamando();
        },car_29)
        setTimeout(function ejecucion30(){
            llamando();
        },car_30)
        setTimeout(function ejecucion31(){
            llamando();
        },car_31)
        setTimeout(function ejecucion32(){
            llamando();
        },car_32)
        setTimeout(function ejecucion33(){
            llamando();
        },car_33)
        setTimeout(function ejecucion34(){
            llamando();
            tel3.style.transform="translate(-15000px)";
        },car_34)

    }else{
        finaalizar();

    }

}
function boton2(){
    ventana_1();
    bt2.style.background="green";


}
function ventana(){
    bentana1.style.transform="translate(-10px)";

   
}
function ventana_0(){
    bentana1.style.transform="translate(-1500px)";

}
function ventana_1(){
    bentana2.style.transform="translate(0px)";
    
}
function ventana_2(){
    bentana2.style.transform="translate(-1500px)";
    recordButton1.style.transform="translate(-1500px)";
    bt2.style.background="red";

    stopRecording();
    b = true;
}

function llamando(){
    setTimeout(function crear(){
        sonido_1.style.width="30px"
        sonido_1.style.height="30px"
        
    },car_son_1);
    setTimeout(function crear2(){
        sonido_2.style.width="40px"
        sonido_2.style.height="40px"
        
    },car_son_2);
    setTimeout(function crear3(){
        sonido_3.style.width="50px"
        sonido_3.style.height="50px"
        
    },car_son_3);
    setTimeout(function crear4(){
        sonido_1.style.width="0px"
        sonido_1.style.height="0px"
        sonido_2.style.width="0px"
        sonido_2.style.height="0px"
        sonido_3.style.width="0px"
        sonido_3.style.height="0px"

        
    },car_son_4);
   
}
function colgar(){

    bt1.style.background="red";
    ventana_0();


   

    
   
}

mouse(cont)

let x = new Boolean(true);
function validacion(){
   if(x == true){
      if(b==true){
        tel3.style.transform="translate(0px)";

      }else{
        tel3.style.transform="translate(0px)";
      }
      bt1.style.background="green";
      iniciar();
      x = false;
    
   }
   else if (x == false){
      bt1.style.background="red";
      finaalizar();
      x = true;
   } 
}
let b = new Boolean(true);
function validacion2(){
   if(b == true){
     bt2.style.background="green";
     boton2();
      b = false;
    
   }
   else if (b == false){
    bt2.style.background="red";
    ventana_2();
      b = true;
   } 
}


function iniciar(){
    boton1(true);
}

function finaalizar(){
    colgar();
    tel3.style.transform="translate(-15000px)";
    
}


