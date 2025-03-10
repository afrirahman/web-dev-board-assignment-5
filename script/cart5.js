let btn5 = document.getElementById('cart5-btn');

const cart5Title = document.getElementById('cart5-title').innerText;

document.getElementById('cart5-btn').addEventListener('click', function(){
   btn5.disabled = true;
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
 
    const div5 = document.createElement('div');
    
    div5.style.backgroundColor= 'oklch(0.968 0.007 247.896)';
    div5.style.borderRadius='16px';
    div5.style.marginBottom = '10px';
    const p5 = document.createElement('p');
    
    p5.innerText = 
     `   You have completed the ${cart5Title} at 1:34:34 AM 
    ` 
       p5.style.fontSize= '18px' ;
       p5.style.paddingLeft ='8px';
       p5.style.padding= '8px';
   
    div5.appendChild(p5);
 
    activityLogContainer.appendChild(div5);
})