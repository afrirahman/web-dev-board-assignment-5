let btn6 = document.getElementById('cart6-btn');

const cart6Title = document.getElementById('cart6-title').innerText;

document.getElementById('cart6-btn').addEventListener('click', function(){
   btn6.disabled = true;
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
 
    const div6 = document.createElement('div');
    
    div6.style.backgroundColor= 'oklch(0.968 0.007 247.896)';
    div6.style.borderRadius='16px';
    div6.style.marginBottom = '10px';
    const p6 = document.createElement('p');
    
    p6.innerText = 
     `   You have completed the ${cart6Title} at 1:32:34 AM 
    ` 
       p6.style.fontSize= '18px' ;
       p6.style.paddingLeft ='8px';
       p6.style.padding= '8px';
   
    div6.appendChild(p6);
 
    activityLogContainer.appendChild(div6);
})