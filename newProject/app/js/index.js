var showText = (function() {
	let $el, $search, $btn, $showBox, timer;
	return {
		init($ele) {
			$el = $($ele);
			$search = $el.children(".search");
			$showBox = $el.children(".showBox");
			$btn = $el.children(".btn-seach");
			this.event()
		},
		event() {
			let _this = this;
			$search.on("focus", function() {
				_this.show();
			})
			$search.on("click", function(e) {
				e = e || event;
				let target = e.target || e.srcElement;
				e.stopPropagation();
			})
			$search.on("input", function() {
				clearTimeout(timer);
				timer = setTimeout(_ => {
					_this.getData(this.value);
				}, 500)
			})
			window.onclick = function() {
				_this.hidden();
			}
			$showBox.on("click", function(e) {
				e = e || event;
				let target = e.target || e.srcElement;
				if(target.nodeName == "LI") {
					$search.val(target.innerHTML);
					_this.hidden();
				}
			})
		},
		show() {
			$showBox.css("display", "block");
		},
		hidden() {
			$showBox.css("display", "none");
		},
		getData(val) {
			const url = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su'
			const data = {
				wd: val,
				cb: 'showText.insertData'
			}
			sendJsonp(url, data);
		},
		insertData(data) {
			$showBox.html('');
			data.s.forEach(x => {
				const $li = document.createElement('li');
				$li.innerHTML = x;
				$showBox.append($li);
			})
		}
	}
}())

window.onscroll = function(e) {
	var $herdFix = document.querySelector(".headerFix");
	e = e || event;
	const doc = document.documentElement;
	let restScroll = parseInt(doc.scrollTop);
	if(restScroll > 177) {
		$herdFix.style.display = "block";
	} else {
		$herdFix.style.display = "none";
	}
}

var search = (function() {
	return {
		init() {
			this.event();
			this.getData()
				.then(data => {
					this.insertData(data.docType);
				})
		},
		event() {
		},
		getData() {
			let url = "http://yuedu.163.com/search.do";
			let data = {
				key: "我",
				type: 4
			}
			return sendAjax(url, data);
		},
		insertData(data) {
			console.log(data);
		}
	}


}())
var showContent = (function() {
	let $el, $showBox, $frag;
	return {
		init($ele) {
			$frag = document.createDocumentFragment();
			$el = document.querySelector($ele);
			$showBox = $el.childNodes[1];
			this.event()
		},
		event() {
			var _this = this;
			json.forEach(x => {
				for(var attr in x) {
					const $p = document.createElement("p");
					const $img = document.createElement("img");
					if(attr != "img") {
						$p.innerHTML += x[attr];
					}
					if(attr == "img") {
						$img.src = x[attr];
					}
					$frag.appendChild($p);
					$frag.appendChild($img);
				}
			})
			$showBox.appendChild($frag);
			this.clearNull();
		},
		clearNull() {
			for(let i = 0; i < $showBox.childNodes.length; i++) {
				if($showBox.childNodes[i].src == "") {
					$showBox.childNodes[i].remove();
				}
				if($showBox.childNodes[i].nodeName == "P") {
					if($showBox.childNodes[i].innerHTML == "") {
						$showBox.childNodes[i].remove();
					}
				}
			}
		}
	}
}())


