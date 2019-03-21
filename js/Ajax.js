function sendAjax(url,options){
	var __DEFAULT = {
		method:'GET',
		data:null,
		dataType:'json',
		...options
	}
	var {data} = __DEFAULT.data; 
	var method = __DEFAULT.method.toUpperCase();
	if(__DEFAULT.method == "GET"){
		for(var attr in data){
			url += `&${attr}=${data[attr]}`;
		}
		url += "&_=" + Date.now();
		if(!url.includes("?")){
			url = url.replace("&","?")
		}
		data = null;
	}else {
		data = JSON.stringify(data);
	}
	var xhr =new XMLHttpRequest();
	xhr.open(__DEFAULT.method,url,true);
	xhr.send(data);
	return new Promise((resolve,reject) => {
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				var data = xhr.responseText;
				if(xhr.status == 200){
					if(__DEFAULT.dataType == "json"){
						data = JSON.parse(data);
					}
					resolve()
				}else{
					reject()
				}
			}
		}
	})
}
