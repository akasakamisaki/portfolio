{
	function work(){
		let fotter = document.getElementById("footer");

		footer.onclick = function(){
			this.setAttribute("style", "display:none;");
		}
	}

	//ページが読み込まれた時に処理開始
	window.onload = function(){
		work();
	}
}
