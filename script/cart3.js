let btn3 = document.getElementById('cart3-btn');

const cart3Title = document.getElementById('cart3-title').innerText;

document.getElementById('cart3-btn').addEventListener('click', function(){
   btn3.disabled = true;
   alert('Board Updated Successfully');
   const taskNumber = getInnerTextByID('task-number');
   const checkboxNumber = getInnerTextByID('checkbox-number');
   const task = taskNumber - 1;
   setInnerTextByIDandValue('task-number',task)
    const checkbox = checkboxNumber + 1;
    setInnerTextByIDandValue('checkbox-number',checkbox);
    
    if(taskNumber === 1){
        alert('Congrates!!! You have completed all the current task');
      
    }

    
   
    const activityLogContainer = document.getElementById('activitylog-container');
 
    const div3 = document.createElement('div');
    
    div3.style.backgroundColor= 'oklch(0.968 0.007 247.896)';
    div3.style.borderRadius='16px';
    div3.style.marginBottom = '10px';
  
    const p3 = document.createElement('p');
    
    p3.innerText = 
     `   You have completed the ${cart3Title} at 1:34:34 AM 
    ` 
       p3.style.fontSize= '18px' ;
       p3.style.paddingLeft ='8px';
       p3.style.padding= '8px';
  
   
    div3.appendChild(p3);
 
    activityLogContainer.appendChild(div3);
})