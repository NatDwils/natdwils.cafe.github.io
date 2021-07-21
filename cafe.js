
function ish()
{
var ord1=document.getElementById("ord1").value;
var ord2=document.getElementById("ord2").value;
var ord3=document.getElementById("ord3").value;
var ord4=document.getElementById("ord4").value;
var ord5=document.getElementById("ord5").value;
var ord6=document.getElementById("ord6").value;
var ord7=document.getElementById("ord7").value;
var ord8=document.getElementById("ord8").value;
var ord9=document.getElementById("ord9").value;
var ord0=document.getElementById("ord0").value;
 var subtot = (ord1*50)+(ord2*80)+(ord3*150)+(ord4*100)+(ord5*90)+(ord6*40)+(ord7*70)+(ord8*200)+(ord9*140)+(ord0*120);
document.getElementById("subtot").innerHTML = subtot;
 var tax =(5/100)*subtot;
document.getElementById("tax").innerHTML= tax;
 var  total = subtot+tax;
document.getElementById("total").innerHTML = total;
}
function div_show() {
document.getElementById('abc').style.display = "block";
}

function abc(){
alert("ThankYou For Your FeedBack! We hope You Like Our PoliCies.");

}
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    alert("Successfully Pail.ThankYou!!");
  }