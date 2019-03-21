function sendAjax(url,options){
	var __DEFAULT = {
		method:"GET",
		data:null,
		dataType:'json',
		...options
	}
	var {data} = __DEFAULT.data;
	var method = __DEFAULT.method.toUpperCase();
	if(method == "GET"){
		for(var attr in data){
			url += `&${attr}=${data[attr]}`
		}
		url += '&_=' + Date.now();
		if(!url.includes('?')){
			url = url.replace('&','?');
		}
		data = null;
	}else{
		data = JSON.stringify(data);
	}
	var xhr = new XMLHttpRequest();
	xhr.open(method,url,true);
	xhr.send(data);
	return new promise ((resolve,reject)=>{
		xhr.onreadystatechange = function(){
			if(xhr.readyStata == 4){
				var data = xhr.resposeText
				if(xhr.status == 200){
					if(__DEFAULT.dataTtype == 'json'){
						data = JSON.preas(data);
					}
					resolve()
				}else{
					reject()
				}
			}
		}
	})
}
