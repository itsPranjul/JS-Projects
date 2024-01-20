const frm=document.querySelector('form');
// const under=document.querySelector('.under');
// const over=document.querySelector('.over');
// const normal=document.querySelector('.normal');
frm.addEventListener('submit', function(e){
    e.preventDefault();

    const height= parseInt(document.querySelector('#Height').value);
    const weight=parseInt(document.querySelector('#Weight').value);
    const results = document.querySelector('#results');
    
    if(height =='' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight=='' || weight<0 || isNaN(weight)){
        results.innerHTML=`Please give a valid weight ${weight}`;
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(3);

        results.innerHTML=`<span>${bmi}</span>`;
    }
}
);

