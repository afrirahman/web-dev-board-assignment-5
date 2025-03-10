let btn4 = document.getElementById('cart4-btn');

const cart4Title = document.getElementById('cart4-title').innerText;

document.getElementById('cart4-btn').addEventListener('click', function(){
   btn4.disabled = true;
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
 
    const div4 = document.createElement('div');
    
    div4.style.backgroundColor= 'oklch(0.968 0.007 247.896)';
    div4.style.borderRadius='16px';
    div4.style.marginBottom = '10px';
    const p4 = document.createElement('p');
    
    p4.innerText = 
     `   You have completed the ${cart4Title} at 1:34:34 AM 
    ` 
       p4.style.fontSize= '18px' ;
       p4.style.paddingLeft ='8px';
       p4.style.padding= '8px';
   
    div4.appendChild(p4);
 
    activityLogContainer.appendChild(div4);
})