let clicks = 0;
const bgColors ={
    one : 'oklch(0.936 0.032 17.717)',
    two : 'oklch(0.967 0.067 122.328)',
    three : 'oklch(0.956 0.045 203.388)',
    bodyBg : 'oklch(0.968 0.007 247.896)'
};
const body = document.getElementById('body');
document.getElementById('theme-btn').addEventListener('click', function(event){
  clicks += 1;
  if(clicks === 1){
    body.style.backgroundColor = bgColors.one;
  }
  else if(clicks === 2){
    body.style.backgroundColor = bgColors.two;
  }
  else if(clicks === 3){
    body.style.backgroundColor = bgColors.three;
}
else{
    body.style.backgroundColor = bgColors.bodyBg;
}
});