var khautrang1 = document.querySelector('#khautrang1')
var anh1 = document.querySelector('.an1')
 khautrang1.addEventListener ('click',() =>{
  anh1.classList.toggle('an')
 })

 var tatkhautrang1 = document.querySelector('#tatkhautrang')
 tatkhautrang1.addEventListener('click',() =>{
    anh1.classList.toggle('an')
 })


 

 var khautrang2 = document.querySelector('#khautrang2')
 var anh2 = document.querySelector('.an2')
 khautrang2.addEventListener('click',() =>{
   anh2.classList.toggle('an')
 })

 var tatkhautrang2 = document.querySelector('#tatkhautrang2')
 tatkhautrang2.addEventListener('click',() =>{
    anh2.classList.toggle('an')
 })




 var khautrang3 = document.querySelector('#khautrang3')
 var anh3 = document.querySelector('.an3')
 khautrang3.onclick = function(){
   anh3.classList.toggle('an')
 }

 var tatkhautrang3 = document.querySelector('#tatkhautrang3')
 tatkhautrang3.onclick = function(){
    anh3.classList.toggle('an')
 }





 var khautrang4 = document.querySelector('#khautrang4')
 var anh4 = document.querySelector('.an4')
 khautrang4.onclick = function(){
   anh4.classList.toggle('an')
 }

 var tatkhautrang4 = document.querySelector('#tatkhautrang4')
 tatkhautrang4.onclick = function(){
    anh4.classList.toggle('an')
 }




 var khautrang5 = document.querySelector('#khautrang5')
 var anh5 = document.querySelector('.an5')
 khautrang5.onclick = function(){
   anh5.classList.toggle('an')
 }

 var tatkhautrang5 = document.querySelector('#tatkhautrang5')
 tatkhautrang5.onclick = function(){
    anh5.classList.toggle('an')
 }






 var khautrang6 = document.querySelector('#khautrang6')
 var anh6 = document.querySelector('.an6')
 khautrang6.onclick = function(){
   anh6.classList.toggle('an')
 }

 var tatkhautrang6 = document.querySelector('#tatkhautrang6')
 tatkhautrang6.onclick = function(){
    anh6.classList.toggle('an')
 } 
  

//   soluong
 function button1(){
   var a = document.querySelector('.hienthi').innerHTML
   a = parseInt(a) + 1;
   document.querySelector('.hienthi').innerHTML = a 
 }

 function button2(){
   var a = document.querySelector('.hienthi').innerHTML
   if(parseInt(a) > 0)
   {
   a = parseInt(a) - 1;
   }
   document.querySelector('.hienthi').innerHTML = a 
 }

 function button3(){
   var a = document.querySelector('.hienthi1').innerHTML
   a = parseInt(a) + 1;
   document.querySelector('.hienthi1').innerHTML = a 
 }

 function button4(){
   var a = document.querySelector('.hienthi1').innerHTML
   if(parseInt(a) > 0)
   {
   a = parseInt(a) - 1;
   }
   document.querySelector('.hienthi1').innerHTML = a 
 }

 function button5(){
   var a = document.querySelector('.hienthi2').innerHTML
   a = parseInt(a) + 1;
   document.querySelector('.hienthi2').innerHTML = a 
 }

 function button6(){
   var a = document.querySelector('.hienthi2').innerHTML
   if(parseInt(a) > 0)
   {
   a = parseInt(a) - 1;
   }
   document.querySelector('.hienthi2').innerHTML = a 
 }

 function button7(){
   var a = document.querySelector('.hienthi3').innerHTML
   a = parseInt(a) + 1;
   document.querySelector('.hienthi3').innerHTML = a 
 }

 function button8(){
   var a = document.querySelector('.hienthi3').innerHTML
   if(parseInt(a) > 0)
   {
   a = parseInt(a) - 1;
   }
   document.querySelector('.hienthi3').innerHTML = a 
 }

 function button9(){
   var a = document.querySelector('.hienthi4').innerHTML
   a = parseInt(a) + 1;
   document.querySelector('.hienthi4').innerHTML = a 
 }

 function button10(){
   var a = document.querySelector('.hienthi4').innerHTML
   if(parseInt(a) > 0)
   {
   a = parseInt(a) - 1;
   }
   document.querySelector('.hienthi4').innerHTML = a 
 }

 function button11(){
   var a = document.querySelector('.hienthi5').innerHTML
   a = parseInt(a) + 1;
   document.querySelector('.hienthi5').innerHTML = a 
 }

 function button12(){
   var a = document.querySelector('.hienthi5').innerHTML
   if(parseInt(a) > 0)
   {
   a = parseInt(a) - 1;
   }
   document.querySelector('.hienthi5').innerHTML = a 
 }


  //giohang

  function ancart(){
   var a = document.querySelector('.sukienan')
   a.classList.toggle('ancart')
  }
  
  function giohang1(){
   var a = document.querySelector('#mh1')
   a.classList.toggle('mh1')
   
  }

  function giohang2(){
   var a = document.querySelector('#mh2')
   a.classList.toggle('mh2')
   
  }
  function giohang3(){
   var a = document.querySelector('#mh3')
   a.classList.toggle('mh3')
   
  }
  function giohang4(){
   var a = document.querySelector('#mh4')
   a.classList.toggle('mh4')
   
  }
  function giohang5(){
   var a = document.querySelector('#mh5')
   a.classList.toggle('mh5')
   
  }
  function giohang6(){
   var a = document.querySelector('#mh6')
   a.classList.toggle('mh6')
   
  }


 



//  tongtien
function tongtien(){
   var a1 = document.querySelector('#mh1 p').innerHTML
   var a2 = document.querySelector('#mh2 p').innerHTML
   var a3 = document.querySelector('#mh3 p').innerHTML
   var a4 = document.querySelector('#mh4 p').innerHTML
   var a5 = document.querySelector('#mh5 p').innerHTML
   var a6 = document.querySelector('#mh6 p').innerHTML
   var b1 = document.querySelector('#mh1 div p').innerHTML
   var b2 = document.querySelector('#mh2 div p').innerHTML
   var b3 = document.querySelector('#mh3 div p').innerHTML
   var b4 = document.querySelector('#mh4 div p').innerHTML
   var b5 = document.querySelector('#mh5 div p').innerHTML
   var b6 = document.querySelector('#mh6 div p').innerHTML
  var c = parseInt(a1) * parseInt(b1) +  parseInt(a2) * parseInt(b2) +  parseInt(a3) * parseInt(b3) +  parseInt(a4) * parseInt(b4) +  parseInt(a5) * parseInt(b5) +  parseInt(a6) * parseInt(b6) 
  document.querySelector('.tien').innerHTML = c + '000'
}