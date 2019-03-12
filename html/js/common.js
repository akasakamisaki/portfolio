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
		 $main          = document.getElementById("main_cont")
		,$scroll_point  = document.getElementsByClassName("_scroll")[0]      //スクロールボタン取得
		,$target_height = $main.getElementsByTagName("section")[0].clientHeight //要素の高さ取得
		,$my_posiion    = document.documentElement.scrollTop                 //自分のスクロールポジション
		,$scroll_position
		;

		//TODO 数字として認識させる 
	function contScroll() {
		$scroll_position = $my_posiion + $target_height;
		scrollBy(0,$scroll_position);
	}

	/* イベントリスナ */
	{
		//開発中ラベル
		$footer.addEventListener('click', work, false);
		//コンテンツごとにスクロール
		$scroll_point.addEventListener('click', contScroll, false);
	}

}
