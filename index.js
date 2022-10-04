let num = 1;





function Click(element){
    if(num<9){

        console.log("element",element)
        if(num%2 != 0){

            

            document.getElementById(element.id).innerHTML="X"
            element.classList.add("add")
    
        }
        else{
    
            document.getElementById(element.id).innerHTML="O"
            element.classList.add("add")
            element.classList.add("O")

        }
        num++
      if(win()){
        alert("win")
        reset()

        }
    }
    
    else{

        window.alert("Match draw")
        reset()

    }

   

}


function reset(){
for (var i=1;i<=9;i++)
{
    document.getElementById("id"+i).innerHTML="";
}
num = 1;

}

function getId(id){

    return document.getElementById(id).innerHTML;

}


function condition(id1,id2,id3){

if(getId(id1) != '' && getId(id2) != '' && getId(id3) != '' && getId(id1) == getId(id2) && getId(id2) == getId(id3))
    {
        return true
    }

}




function win(){
    if(condition('id1','id2','id3') || condition('id4','id5','id6') || condition('id7','id8','id9') || condition('id1','id4','id7') || condition('id2','id5','id8') || condition('id3','id6','id9') || condition('id1','id5','id9') || condition('id7','id5','id3')){

       return true

    }
}
 