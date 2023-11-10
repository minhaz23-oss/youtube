window.addEventListener('mousemove',function(det){
   let rect = document.querySelector('.box');
  let xval =  gsap.utils.mapRange(
        0,
        window.innerWidth,
        200,
        window.innerWidth - 200,
        det.clientX
    );
  gsap.to('.box',{
    left: xval,
    ease : Power3
  }) 
});