burger= document.querySelector('.burger')
navbar= document.querySelector('.navbar')
navList= document.querySelector('.nav-list')
rightNav= document.querySelector('.rightNav')

burger.addEventListener('click',()=>{
      rightNav.classList.toggle('v-class-resp');
      navList.classList.toggle('v-class-resp');
      navbar.classList.toggle('h-nav-resp');

})
document.getElementById('submit').addEventListener('mousedown',function(){
      document.getElementById('submit').innerText = "submitted";
      console.log("you have submitted")
})
document.getElementById('submit').addEventListener('mouseup',function(){
      document.getElementById('submit').innerText = "submit";
      })

