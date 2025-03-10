function getInnerTextByID(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}

function setInnerTextByIDandValue(id,value){
    document.getElementById(id).innerText = value;
}



// clear history

document.getElementById('clear-btn').addEventListener('click',function(){
    
    document.getElementById('activitylog-container').innerText= 'none';
    
    document.getElementById('activitylog-container').innerText= '';
    })

    // date
    let newDate = new Date(day , month , date , year);
    document.getElementById('new-date').innerText=newDate;

   