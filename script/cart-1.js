let btn = document.getElementById('cart1-btn');

const cart1Title = document.getElementById('cart1-title').innerText;


document.getElementById('cart1-btn').addEventListener('click', function(){
   btn.disabled = true;
   alert('Board Updated Successfully');
   const taskNumber = getInnerTextByID('task-number');
   const checkboxNumber = getInnerTextByID('checkbox-number');
   const task = taskNumber - 1;
   setInnerTextByIDandValue('task-number',task)
    const checkbox = checkboxNumber + 1;
    setInnerTextByIDandValue('checkbox-number',checkbox);


    const activityLogContainer = document.getElementById('activitylog-container');
 
    const div = document.createElement('div');
    
    div.style.backgroundColor= 'oklch(0.968 0.007 247.896)';
    div.style.borderRadius='16px';
    div.style.marginBottom = '10px';
  
    const p = document.createElement('p');
    
    p.innerText = 
     `   You have completed the ${cart1Title} at 1:24:33 AM
    ` 
       p.style.fontSize= '18px' ;
       p.style.paddingLeft ='8px';
       p.style.padding= '8px';
  
   
    div.appendChild(p);
 
    activityLogContainer.appendChild(div);

})

