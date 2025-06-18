let function1=document.querySelectorAll(".box");
let function2=document.querySelector("#hide");
let function3=document.querySelector(".container");
let function4=document.querySelector("header");
let function5=document.querySelector(".new_game");
let function6=document.querySelector(".game_winner");
let function7=document.querySelector(".exit");
let function8=document.querySelector(".add");




let istrue=true;
let arr=["empty","empty","empty","empty","empty","empty","empty","empty","empty"];
let getValue=[false,false,false,false,false,false,false,false,false];
// let arr =[0,0,0,0,0,0];
let xo="X";
let arr1=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
function1.forEach((val,index)=>{
    let count=0;
    // console.log(val);
    // val.style.fontSize="70px";
    // let t=0;
    val.addEventListener("click",(element)=>{
        if(arr[index]==="empty"){
            if(xo==="X"){
                
                
                xo="O"
                console.log(xo);
                val.innerText=xo;
                val.style.color="#ffd700 ";
                // val.style.color="black"
                // let data1=0;
                // console.log(index);
                arr[index]=xo;
            }
        // else if(xo==="O" && val.innerText==="X" && val.innerText==="O"){
            else{
                xo="X";
                console.log(xo);
                val.innerText=xo;
                val.style.color="#B9F2FF";
                
                arr[index]=xo;
                
            }
            count++;
            istrue=!(istrue);
            // gameOver(xo);
            gameWin();
            
            arrfull();
        }
    })
});

let arrfull=()=>{
    let a=0;
    arr.forEach((set)=>{
        // console.log(set);
        if(set==="empty"){
            a++;
        }
    })
    if(a===0){
        console.log("match draw");
        // function6.style.display="flex";
        function6.innerText="Draw";
        // h1.innerText="Game Draw";
        function2.style.display="flex";
        function3.style.display="none";
        function4.style.display="none";
    }
    
}

let gameWin=()=>{
    let b=0;
    // arr1.forEach((ele)=>{
    for(let i=0; i<arr1.length; i++){
        
        let element1=arr[arr1[i][0]];
        let element2=arr[arr1[i][1]];
        let element3=arr[arr1[i][2]];
        if((element1==="X" && element2==="X" && element3==="X") ||(element1==="O" && element2==="O" && element3==="O")){
            gameOver(element1);
            return true;
        }
    }
}
    
const gameOver=(element11)=>{
    console.log("Game Over")
    console.log("Winner : "+element11);  
    // function8.style.display="flex";   
    function6.innerText="Winner is : "+element11;

    // function2.setAttribute(".winner",".winner1"); 
    // function8.style.display="flex";
    // function6.style.display="flex";
    function2.style.display="flex";
    function3.style.display="none";
    function4.style.display="none";
    // function6.style.display="flex";
    // function6.innerText="MATCH OVER "+element11;
}

function5.addEventListener("click",()=>{
    
    istrue=true;
    arr=["empty","empty","empty","empty","empty","empty","empty","empty","empty"];
    getValue=[false,false,false,false,false,false,false,false,false];
    restartgame(arr);
    function2.style.display="none";
    function3.style.display="flex";
    function4.style.display="flex";
});

const restartgame=(arr)=>{
    function1.forEach((value,index)=>{
        value.innerText="";


    })
}
function7.addEventListener("click",()=>{
    console.log("Thanks for playing game");
    function2.style.display="none";
    function8.style.display="flex";
    function8.innerText="Thanks for playing game";
    function5.style.display="flex";
    function5.style.color="flex";
    
    // function8.sytle.margin="20vh";

})