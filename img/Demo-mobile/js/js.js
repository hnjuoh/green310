$(document).ready(function(){

	
 var timer=setInterval(function(){
	//변수 시간 데이터 저장

	var now= new Date();
	var hr = now.getHours();
	var min= now.getMinutes();
	var sec= now.getSeconds();

if(sec>=10){
	SNum =sec}
	else{

	SNum = "0"+sec;}





	$("p span").eq(0).text(hr);
	$("p span").eq(1).text(min);
	$("p span").eq(2).text(SNum);

},1000);


 $("nav li").eq(0).click(function(){

 	$("#wrap").removeClass();
 	$("#wrap").addClass("morning")

 });
  $("nav li").eq(1).click(function(){

 	$("#wrap").removeClass();
 	$("#wrap").addClass("afternoon")

 });
   $("nav li").eq(2).click(function(){

 	$("#wrap").removeClass();
 	$("#wrap").addClass("evening")

 });
    $("nav li").eq(3).click(function(){

 	$("#wrap").removeClass();
 	$("#wrap").addClass("night")

 });

 var now= new Date();
	var hr = now.getHours();
	var min= now.getMinutes();
	var sec= now.getSeconds();


//시간에따라 화면 테마변경 (새로고침시)
if(min>=15 && min<17){

 	$("#wrap").removeClass();
 	$("#wrap").addClass("afternoon")
}else if(min>=18 && min<20){

 	$("#wrap").removeClass();
 	$("#wrap").addClass("evening")
 }

})