//Sbse phele meine button clas lee hee h.
const btn=document.querySelectorAll('.button');
//Kyuki hmme change puri body m krna h isliye meine body element select kiya
const body=document.querySelector("body");
// phir meine ek loop chlaya kyuki mjhe saari button pr iterate krna

btn.forEach(function(button){
    button.addEventListener('click', function(e){
        switch(e.target.id){
            case "gray":
                body.style.backgroundColor = e.target.id;
                break;
            case "red":
                body.style.backgroundColor = e.target.id;
                break;
            case "green":
                body.style.backgroundColor = e.target.id;
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id;
                break;
        }
    })
})
