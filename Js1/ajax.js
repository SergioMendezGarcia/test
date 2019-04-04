fetch('http://www.mocky.io/v2/5ca61ddc3400005f0076af55')
.then( function(response) {
    console.log('response:', response);
    return response.json();
}).then( function(json_data) {
    console.log('json_data: ', json_data);
}).catch( function(err) {
    console.log('err: ', err);
});