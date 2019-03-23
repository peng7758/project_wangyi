function sendJsonp(url, data) {
    const $script = document.createElement('script');
    // get请求需要把数据拼接到url中
    for(let attr in data) {
        url += `&${attr}=${data[attr]}`;   
    }
    url += '&_=' + Date.now();
    if(!url.includes('?'))
        url = url.replace('&', '?');
        
    $script.src = url;
    document.body.appendChild($script);
}