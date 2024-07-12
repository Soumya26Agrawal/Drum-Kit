// document.querySelector("button").addEventListener("click",clickOutput);

// function clickOutput()
// {
//     alert("I got clicked!");
// }

buttonList=document.querySelectorAll("button");

for(let i=0;i<buttonList.length;i++)
{
    buttonList[i].addEventListener("click",function ()
    {

        let buttonContent= this.innerHTML;
        makeSound(buttonContent);
        buttonAnimation(buttonContent);
        


        // this.style.color="white";

      // let audio=new Audio ('sounds/crash.mp3');
        // audio.play();
    });
}


// function clickOutput()
// {
//     alert("I got clicked!");
// }
document.addEventListener("keydown",function (event)
{
makeSound(event.key);
buttonAnimation(event.key);
})

function makeSound(letter){

switch(letter)
        {
            case "w":
                let tom1=new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case "a":
                let tom2 =new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case "s":
                let snare=new Audio('sounds/snare.mp3');
                snare.play();
                break;
            case "d":
                let crash=new Audio('sounds/crash.mp3');
                crash.play();
                break;
            case "j":
                let tom3=new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "k":
                let kick=new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;
            case "l":
                let tom4=new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;

            default:
                console.log(letter);

        }

    }

    function buttonAnimation(letter)
    {
        let button= document.querySelector("."+letter);
        button.classList.add("pressed");

        setTimeout(function()
        {
            button.classList.remove("pressed");
        },100);

    }