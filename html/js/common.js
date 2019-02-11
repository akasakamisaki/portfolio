window.onload = function(){

	/* 開発中ラベル,スクロール禁止も指定 TODO削除 */
	let
		 $footer = document.getElementsByTagName("footer")[0]
		,$body   = document.body;

	function work() {
		$footer.setAttribute("style", "display:none;");
		//スクロール可
		$body.classList.remove("_no_scroll")
	}

	/* コンテンツごとにスクロール */
	//TODO セクションごとの位置を取得したほうがいいのでは？
	//TODO 普通にアニメーションもつけたいよね
	let
		 $scroll_point = document.getElementsByClassName("_scroll")[0]
		,$screen_height = window.innerHeight;

		console.log($screen_height);

	function contScroll() {
		scrollBy(0,$screen_height);
	}

	/* イベントリスナ */
	{
		//開発中ラベル
		$footer.addEventListener('click', work, false);
		//コンテンツごとにスクロール
		$scroll_point.addEventListener('click', contScroll, false);
	}

}
