function alteraImg(img){
		document.getElementById("forms").src = img;
		}
		
function calcula_total(){
	var qtd = parseInt(document.getElementById('cqtd').value);
	tot = qtd * 50;
	document.getElementById('ctot').value = tot;
}