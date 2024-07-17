let box = document.getElementById("main")
let one = document.getElementById("1")
    two = document.getElementById("2")
    tre = document.getElementById("3")
    fur = document.getElementById("4")
    fiv = document.getElementById("5")
    six = document.getElementById("6")
    sev = document.getElementById("7")
    eit = document.getElementById("8")
    nin = document.getElementById("9")
    reseter = document.getElementById("reset")
    counter = 1;
    boxes = {one, two};
    Ook = document.querySelector(".ok")
    Ook1 = document.querySelector(".ok-1")
    Ook2 = document.querySelector(".ok-2")
    Xok = document.querySelector("#ok")
    goldA = document.querySelector("#Owon-gold")
    whiteA = document.querySelector("#Owon-white")
    
function reseting(){
  one.innerText=("");
  two.innerText=("");
  tre.innerText=("");
  fur.innerText=("");
  fiv.innerText=("");
  six.innerText=("");
  sev.innerText=("");
  eit.innerText=("");
  nin.innerText=("");
  counter = 1 ;
  Owon.classList.add("none")
  Xwon.classList.add("none")
  goldA.classList.add("none")
  whiteA.classList.add("none")
}

reseter.onclick = function(){
    reseting();
}



one.onclick=function(){
    this.classList.remove("white")
    this.classList.remove("gold")
    this.classList.remove("blue")
    this.classList.remove("red")
    if(counter===1){
        this.innerText="X";
        this.classList.add("blue");
        counter++;
    }
    else{
        
        if     (f==="one"){this.classList.add("gold");}
        else if(f==="two"){this.classList.add("red");}
        else if(f==="three"){this.classList.add("white");}
       this.innerText="O"; counter--;
            }
};


two.onclick=function(){
    this.classList.remove("white")
    this.classList.remove("gold")
    this.classList.remove("blue")
    this.classList.remove("red")
    if(counter===1){
        this.innerText="X";
        this.classList.add("blue");
        counter++;
    }
    else{
        
        if     (f==="one"){this.classList.add("gold");}
        else if(f==="two"){this.classList.add("red");}
        else if(f==="three"){this.classList.add("white");}
       this.innerText="O"; counter--;
            }
};


tre.onclick=function(){
    this.classList.remove("white")
    this.classList.remove("gold")
    this.classList.remove("blue")
    this.classList.remove("red")
    if(counter===1){
        this.innerText="X";
        this.classList.add("blue");
        counter++;
    }
    else{
        
        if     (f==="one"){this.classList.add("gold");}
        else if(f==="two"){this.classList.add("red");}
        else if(f==="three"){this.classList.add("white");}
       this.innerText="O"; counter--;
            }
};

fur.onclick=function(){
    this.classList.remove("white")
    this.classList.remove("gold")
    this.classList.remove("blue")
    this.classList.remove("red")
    if(counter===1){
        this.innerText="X";
        this.classList.add("blue");
        counter++;
    }
    else{
        
        if     (f==="one"){this.classList.add("gold");}
        else if(f==="two"){this.classList.add("red");}
        else if(f==="three"){this.classList.add("white");}
       this.innerText="O"; counter--;
            }
};


fiv.onclick=function(){
    this.classList.remove("white")
    this.classList.remove("gold")
    this.classList.remove("blue")
    this.classList.remove("red")
    if(counter===1){
        this.innerText="X";
        this.classList.add("blue");
        counter++;
    }
    else{
        
        if     (f==="one"){this.classList.add("gold");}
        else if(f==="two"){this.classList.add("red");}
        else if(f==="three"){this.classList.add("white");}
       this.innerText="O"; counter--;
            }
};

six.onclick=function(){
    this.classList.remove("white")
    this.classList.remove("gold")
    this.classList.remove("blue")
    this.classList.remove("red")
    if(counter===1){
        this.innerText="X";
        this.classList.add("blue");
        counter++;
    }
    else{
        
        if     (f==="one"){this.classList.add("gold");}
        else if(f==="two"){this.classList.add("red");}
        else if(f==="three"){this.classList.add("white");}
       this.innerText="O"; counter--;
            }
};

sev.onclick=function(){
    this.classList.remove("white")
    this.classList.remove("gold")
    this.classList.remove("blue")
    this.classList.remove("red")
    if(counter===1){
        this.innerText="X";
        this.classList.add("blue");
        counter++;
    }
    else{
        
        if     (f==="one"){this.classList.add("gold");}
        else if(f==="two"){this.classList.add("red");}
        else if(f==="three"){this.classList.add("white");}
       this.innerText="O"; counter--;
            }
};

eit.onclick=function(){
    this.classList.remove("white")
    this.classList.remove("gold")
    this.classList.remove("blue")
    this.classList.remove("red")
    if(counter===1){
        this.innerText="X";
        this.classList.add("blue");
        counter++;
    }
    else{
        
        if     (f==="one"){this.classList.add("gold");}
        else if(f==="two"){this.classList.add("red");}
        else if(f==="three"){this.classList.add("white");}
       this.innerText="O"; counter--;
            }
};

nin.onclick=function(){
    this.classList.remove("white")
    this.classList.remove("gold")
    this.classList.remove("blue")
    this.classList.remove("red")
    if(counter===1){
        this.innerText="X";
        this.classList.add("blue");
        counter++;
    }
    else{
        
        if     (f==="one"){this.classList.add("gold");}
        else if(f==="two"){this.classList.add("red");}
        else if(f==="three"){this.classList.add("white");}
       this.innerText="O"; counter--;
            }
};



// $(function(){
//     reseter.click
// })

function kh(){
    if(one.innerText==="X"){
        alert("ertyui")
    }
}



$(function(){
    $(".box").click(function(){
    function kh(){
        if(
            one.innerText==="X" &&  two.innerText==="X" &&  tre.innerHTML==="X" ||
            fur.innerText==="X" &&  fiv.innerText==="X" &&  six.innerText==="X" ||
            sev.innerText==="X" &&  eit.innerText==="X" &&  nin.innerText==="X" ||
            one.innerText==="X" &&  fur.innerText==="X" &&  sev.innerText==="X" ||
            two.innerText==="X" &&  fiv.innerText==="X" &&  eit.innerText==="X" ||
            tre.innerText==="X" &&  six.innerText==="X" &&  nin.innerText==="X" ||
            one.innerText==="X" &&  fiv.innerText==="X" &&  nin.innerText==="X" ||
            tre.innerText==="X" &&  fiv.innerText==="X" &&  sev.innerText==="X"                    
        ){
            setTimeout(function(){
                Xwon.classList.remove("none");
            },200) 
        }

        else if(
            one.innerText==="O" &&  two.innerText==="O" &&  tre.innerHTML==="O" ||
            fur.innerText==="O" &&  fiv.innerText==="O" &&  six.innerText==="O" ||
            sev.innerText==="O" &&  eit.innerText==="O" &&  nin.innerText==="O" ||
            one.innerText==="O" &&  fur.innerText==="O" &&  sev.innerText==="O" ||
            two.innerText==="O" &&  fiv.innerText==="O" &&  eit.innerText==="O" ||
            tre.innerText==="O" &&  six.innerText==="O" &&  nin.innerText==="O" ||
            one.innerText==="O" &&  fiv.innerText==="O" &&  nin.innerText==="O" ||
            tre.innerText==="O" &&  fiv.innerText==="O" &&  sev.innerText==="O"                    
        ){
            setTimeout(function(){
                if ($("#main-div").hasClass("mode2")) {
                    Owon.classList.remove("none");
                }
                else if ($("#main-div").hasClass("mode1")) {
                    goldA.classList.remove("none");
                    }
                else if ($("#main-div").hasClass("mode3")) {
                    whiteA.classList.remove("none");
                    }
            },200) 
        }
}
kh();

// console.log($("1").hasClass("red")); 


    })

    $("#mode1").click(function(){
        // location.reload() && history.go();
        f ="one";
        mainer.classList.remove("mode2")
        mainer.classList.remove("mode3")
        reseter.classList.remove("crimsoning")
        reseter.classList.remove("whiten")
        reseting();
        console.log(f)
    })

    $("#mode2").click(function(){
        f ="two";
        mainer.classList.add("mode2")
        mainer.classList.remove("mode1")
        mainer.classList.remove("mode3")
        reseter.classList.add("crimsoning")
        reseter.classList.remove("whiten")
        reseting();
        console.log(f)
    })

    $("#mode3").click(function(){
        f ="three";
        mainer.classList.remove("mode1")
        mainer.classList.remove("mode2")
        mainer.classList.add("mode3")
        reseter.classList.remove("golden")
        reseter.classList.add("whiten")
        reseting();
        console.log(f)
    })
// console.log(khu)

})

var mainer = document.querySelector("#main-div")
var reseter = document.querySelector("#reset")


// setTimeout(function(){
//     .classList.add("mode2");
//     alert("oiuyt")
// },1000)

var f = "one";

Ook.onclick = function(){
    Owon.classList.add("none")
    reseting();
}

Xok.onclick = function(){
    Xwon.classList.add("none")
    reseting();
}

Ook1.onclick = function(){
    goldA.classList.add("none")
    reseting();
}

Ook2.onclick = function(){
    whiteA.classList.add("none")
    reseting();
}