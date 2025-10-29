//your JS code here. If required.
window.onload= function(){

	const square1 = document.getElementById('square1');
    const square2 = document.getElementById('square2');
    const square3 = document.getElementById('square3');

    // Store them in an array for easy iteration
    const squares = [square1, square2, square3];
const squares = document.querySelectorAll('.square');

	squares.forEach((square)=>{
		square.addEventListener('mouseenter',()=>{
			squares.forEach((s)=>{
                if(s !== square){
					s.style.backgroundColor='#6F4E37';
				}
			})
		})
		square.addEventListener('mouseleave', ()=>{
           squares.forEach((s)=>{
             s.style.backgroundColor = '#E6E6FA';
		   })
		})
	})
}