var showText = (function() {
	let $ele;
	return {
		init($ele) {
			$ele = $($ele);
			$search = $ele.children(".search");
			$showBox = $ele.children(".showBox");
			$btn = $ele.children(".btn-seach");
			this.event()
		},
		event() {
			let _this = this;
			$search.onfocus = function() {
				_this.show();
			}
			$search.onclick = function(e) {
				e = e || event;
				let target = e.target || e.srcElement;
				e.stopPropagation();
			}
			$search.oninput = function() {
				clearTimeout(timer);
				timer = setTimeout(_ => {
					_this.getData(this.value)
				}, 500)
			}
			window.onclick = function() {
				_this.hidden();
			}
			$ulbox.onclick = function(e) {
				e = e || event;
				let target = e.target || e.srcElement;
				if(target.nodeName == "LI") {
					$search.value = target.innerHTML;
					_this.hidden();
				}
			}
		},
		show() {
			$showBox.style.display = "block";
		},
		hidden() {
			$showBox.style.display = "none";
		},
		getData(val) {
			const url = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su'
			const data = {
				wd: val,
				cb: 'showBox.insertData'
			}
			sendJsonp(url, data);
		},
		insertData(data) {
			$showBox.innerHTML = '';
			data.s.forEach(x => {
				const $li = document.createElement('li');
				$li.innerHTML = x;
				$showBox.appendChild($li);
			})
		}
	}
}
}())