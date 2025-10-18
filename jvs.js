let boxes=document.querySelectorAll(".box")
let player="none"
let winner=document.querySelector("#winner")
let box1=document.querySelector("#_1")
let box2=document.querySelector("#_2")
let box3=document.querySelector("#_3")
let box4=document.querySelector("#_4")
let box5=document.querySelector("#_5")
let box6=document.querySelector("#_6")
let box7=document.querySelector("#_7")
let box8=document.querySelector("#_8")
let box9=document.querySelector("#_9")
win=[["_1","_2","_3"],["_4","_5","_6"],["_7","_8","_9"],["_1","_4","_7"],["_2","_5","_8"],["_3","_6","_9"],["_1","_5","_9"],["_3","_5","_7"]]
let l1=[]
let l2=[]

let chk;
let ip;
let sym;
boxes.forEach(box => box.disabled = true);
alert("Please select X or O first");
ip=document.querySelectorAll("input[name='symbol']")
function playerslc(){
    ip.forEach((inp)=>{
        inp.addEventListener("click",()=>{
            chk=document.querySelector("input[name='symbol']:checked")
            sym = chk.value.toUpperCase();
            if (sym === "X") {
                boxes.forEach(box => box.disabled = false);
                player = "1";
                console.log("you p1")
                alert("You are Player 1 and will start the game");
            } else if(sym === "O") {
                boxes.forEach(box => box.disabled = false);
                player = "2";
                console.log("you p2")
                alert("You are Player 2. Player 1 will start the game");
            }
        })
    })
}
playerslc()
    

boxes.forEach((box) =>{
    
    box.addEventListener("click", ()=>
        {
        
        if(player=="1"){
            
            
            box.innerText="X"
            console.log("p1")
            l1.push(box.id)
            win.forEach((x) =>{
                
                if(l1.includes(x[0]) && l1.includes(x[1]) && l1.includes(x[2]) ){
                    console.log(`${player} wins!!`)
                    winner.innerText=`Player ${player} WINS!!! CONGRATULATIONS!!`
                    winner.style.visibility = "visible";
                    boxes.forEach((b)=> b.disabled = true)
                }
            }
            )
            player="2"

        }else if(player=="2"){
            
            box.innerText="O"
            console.log("p2")
            l2.push(box.id)
            win.forEach((x) =>{
                
                if(l2.includes(x[0]) && l2.includes(x[1]) && l2.includes(x[2]) ){
                    console.log(`${player} wins!!`)
                    winner.innerText=`Player ${player} WINS!!! CONGRATULATIONS!!`
                    winner.style.visibility = "visible";
                    boxes.forEach((b)=> b.disabled = true)
                }
                
            }
            )   
            player="1"
        }
        
        box.disabled = true;
        
        
        }
    )
}
)
let rst=document.querySelector("#reset")
rst.addEventListener("click", () =>{
    l1.forEach((j)=>{
        l1.pop(j)
    })
    l2.forEach((k)=>{
        l2.pop(k)
    })
    boxes.forEach((b)=> {b.innerText = ""})
    boxes.forEach((b)=> b.disabled = false)
    
    winner.innerText=""
    winner.style.visibility = "hidden";
    
    
    
})
let nw=document.querySelector("#new")
nw.addEventListener("click", () =>{
    l1.forEach((j)=>{
        l1.pop(j)
    })
    l2.forEach((k)=>{
        l2.pop(k)
    })
    boxes.forEach((b)=> {b.innerText = ""})
    ip.forEach(inp => inp.checked = false);
    chk=null
    sym=null
    player="none"
    winner.innerText=""
    winner.style.visibility = "hidden";
    
    
})