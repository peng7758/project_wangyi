var shopCar = (function() {
	let $bookInf, $shopBtn
	return {

		init() {
			$bookInf = document.querySelector(".book-inf");
			this.event()
		},
		event() {
			var _this = this;
			var url = window.location.href;
			var num = Number(url.split("?")[1].split("=")[1]);
			shop.forEach(x => {
				for(var attr in x) {
					if(x[attr] == num) {
						_this.insertData(x);
					}
				}
			})
		},
		insertData(data) {
			var htmlshop =`<div><a href=""><img src="${data.img}" alt=""></a>
                        	<div class="jianjie">
                            <h3>${data.title}
                                <span>${data.author}</span>
                            </h3>
                            <div class="description">
                            	${data.content}
							</div>
                            <div class="price">
                                <i class="iconfont icon-qian"></i>
                                <span>${data.price}元</span>
                                <em>6.6折!</em>
                                <a href="javascript:;" class="shopping-car">
                                    <i class="iconfont icon-gouwuche"></i>
                                    <span data-id="${data.id}" class="shop-btn">加入购物车</span>
                                </a>
                            </div>
                            <div class="notice" style="padding-bottom: 6px;">
                                <i class="iconfont icon-damuzhizhaoxia"></i>
                                <span class="baoyou">3.22起，全国包邮！！！无论你在中国哪里，都能享受包邮服务</span>
                            </div>
                        </div>
                        </div>
                        `;
			$bookInf.innerHTML = htmlshop;
			this.localstorage(htmlshop);
		},
		localstorage(data) {
			$shopBtn = document.querySelector(".shop-btn");
			var count = 0;
			$shopBtn.onclick = function() {
				if(localStorage.obj != undefined && localStorage.obj.includes(data)){	
					count += 1;
					localStorage.num = count;
					return
				}else{
					localStorage.obj += data;
				}
				
			}
		}

	}

}());


var showContent = (function() {
	let $comment, $bottombar
	return {

		init() {
			$comment = $(".comment-list");
			$bottombar = $(".bottombar");
			this.event()
		},
		event() {
			var _this = this;
			$bottombar.on("click", "button", function() {
				var $li = $("<li></li>");
				$li.html(`
							<div class="head-pic">
                            <img src="img/img/tx.png" alt="">
                            </div>
                            <div class="info"><i></i></div>
							<blockquote>${$("textarea").val()}</blockquote>
                            <div class="opt"></div>`
				);
            	$comment.append($li);
			})
		}
	}

}())
showContent.init()