var bol = true;
document.querySelector(".navbar-toggler").onclick=()=>{
   if (bol==false){
    document.querySelector(".navbar-nav").classList.add("hidden");
    bol = true;
   }else{
       bol=false;
       document.querySelector(".navbar-nav").classList.remove("hidden");
   }
}


var j=document.querySelectorAll(".content");
var i=document.querySelectorAll(".moin");
var k=document.querySelectorAll(".plus");

for(let index=0 ; index<=6; index++){
document.querySelectorAll(".title")[index].onclick=()=>{
    if (document.querySelectorAll(".content")[index].classList.contains("dispnon")){
           j[index].classList.remove("dispnon");
           i[index].classList.remove("dispnon");
           k[index].classList.add("dispnon");
    }
    else{
        j[index].classList.add("dispnon");
        i[index].classList.add("dispnon");
        k[index].classList.remove("dispnon");
    }
}
}

for(let p=0;p<=2;p++){
document.querySelectorAll(".agendadiv")[p].onmouseenter=()=>{
    document.querySelectorAll(".agenda")[p].classList.remove("dispnon");
    document.querySelectorAll(".down")[p].classList.add("dispnon");
    document.querySelectorAll(".up")[p].classList.remove("dispnon");
    document.querySelectorAll(".agendadiv")[p].style.height="450px";
}

document.querySelectorAll(".agendadiv")[p].onmouseleave=()=>{
    document.querySelectorAll(".agenda")[p].classList.add("dispnon");
    document.querySelectorAll(".down")[p].classList.remove("dispnon");
    document.querySelectorAll(".up")[p].classList.add("dispnon");
    if(window.innerWidth<990){
    document.querySelectorAll(".agendadiv")[p].style.height="60px";
    }else{
        document.querySelectorAll(".agendadiv")[p].style.height="115px";
    }
}
}


var mode = "light";
document.querySelector(".form-check-input").onchange=()=>{
    if (mode=="light"){
        document.querySelector("body").style.background="linear-gradient(165.86deg, #193D81 -0.28%, #1D0B19 28.21%, #180811 99.47%)";
        document.querySelector(".titre").src="What is VhackRD.png";
        document.querySelector(".description").style.color="white";
        for(let p=0 ; p<=5; p++){
        document.querySelectorAll(".sponsors")[p].style.color="white";
        }
        for(let p=0 ; p<=3; p++){
            document.querySelectorAll(".chang")[p].style.color="#B5B5D0";
        }
        for(let p=0 ; p<=3; p++){
        document.querySelectorAll(".p1")[p].style.color="white";
        document.querySelectorAll(".p2")[p].style.color="white";
        }
        for(let p = 0 ; p<=6 ; p++){
            document.querySelectorAll(".title")[p].style.color="white";
            document.querySelectorAll(".title")[p].style.borderBottom="1px solid white";
            document.querySelectorAll(".wp")[p].style.color="white";
            document.querySelectorAll(".content")[p].style.color="white";
        }
        document.querySelector(".footer-dark").classList.remove("footerdiv");
        document.querySelector(".footer-dark").classList.add("footerdivD");

        mode="dark";
    }else{
        document.querySelector("body").style.background="white";
        document.querySelector(".titre").src="What is VhackR.png";
        document.querySelector(".description").style.color="black";
        for(let p=0 ; p<=5; p++){
            document.querySelectorAll(".sponsors")[p].style.color="#1B1B3B";
        }
        for(let p=0 ; p<=3; p++){
            document.querySelectorAll(".chang")[p].style.color="#47448A";
        }
        for(let h=0 ; h<=3; h++){
            document.querySelectorAll(".p1")[h].style.color="black";
            document.querySelectorAll(".p2")[h].style.color="#545454";
        }
        for(let p = 0 ; p<=6 ; p++){
            document.querySelectorAll(".title")[p].style.color="rgba(0, 0, 0, 0.7)";
            document.querySelectorAll(".title")[p].style.borderBottom="1px solid #000000";
            document.querySelectorAll(".wp")[p].style.color="rgba(0, 0, 0, 0.7)";
            document.querySelectorAll(".content")[p].style.color="rgba(0, 0, 0, 0.7)";
        }
        document.querySelector(".footer-dark").classList.add("footerdiv");
        document.querySelector(".footer-dark").classList.remove("footerdivD");


        mode="light";
    }
}



  
  

