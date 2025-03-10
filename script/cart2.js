let btn2 = document.getElementById('cart2-btn');

const cart2Title = document.getElementById('cart2-title').innerText;

document.getElementById('cart2-btn').addEventListener('click', function(){
   btn2.disabled = true;
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
 
    const div2 = document.createElement('div');
    
    div2.style.backgroundColor= 'oklch(0.968 0.007 247.896)';
    div2.style.borderRadius='16px';
    div2.style.marginBottom = '10px';
    const p2 = document.createElement('p');
    
    p2.innerText = 
     `   You have completed the ${cart2Title} at 1:33:34 AM 
    ` 
       p2.style.fontSize= '18px' ;
       p2.style.paddingLeft ='8px';
       p2.style.padding= '8px';
   
    div2.appendChild(p2);
 
    activityLogContainer.appendChild(div2);
})