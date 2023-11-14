function rv(){
var review = document.myform.review.value;
if(review==null || review==""){
    alert("please fill review");
}
else{
    alert("Thanks for valuable review but it is not gonna submit because site under construction");
    
}
}

document.addEventListener('click', function(event) {
  if (event.target.id === 'home') {
    alert("You are already on Home page");
  }
});
