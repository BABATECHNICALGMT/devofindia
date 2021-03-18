const pagescroll = document.getElementById('pagescroll');
let hidecon = document.getElementById('main-menu');

const drow = ()=>{
  let a = document.querySelector('i');
  a.addEventListener('click',()=>{
    if(hidecon.style.display== 'none'){
      hidecon.style.display= 'block';
    }else{
      hidecon.style.display= 'none';
    }
   
  })}

  window.addEventListener("resize",()=>{
      let w = window.innerWidth;
    if(w<890){
  		let i = document.createElement('i');
  			i.classList.add('fas');
  			i.classList.add('fa-bars');
  			i.classList.add('icon');
  			pagescroll.appendChild(i);
 			drow()
    }else if(w>890){
    	let i = document.querySelector('i');
    	i.classList.remove('fas')
    	i.classList.remove('fa-bars')
    }else {
    	return;
    }
});
