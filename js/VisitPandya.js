var lo=document.getElementById("login")



var si=document.getElementById("signin")

var id1=document.getElementById("id1")
function login(){
    
 
 
 
 lo.style.display="block"
 
 
 si.style.display="none"
 console.log("login")
 
 }
 function signin(){
     
 
 lo.style.display="none"
 
 
 si.style.display="block"
 console.log("signing working")
 
 
 
 
 }



 //control login
 function controllog(){
    si.style.display="none"
    lo.style.display="block"
    id1.style.display="none"
    
 }
 
 function bdy(){
   var search=document.getElementById("search")
    lo.style.display="none"
    si.style.display="none"
    id1.style.display="block"
   search.style.display="none"
 }
 
 //search
 function search(){
    var search=document.getElementById("search")
    search.style.display="block"
 }
 

 
 
 
 
 
 
 
 