fetch('http://www.mocky.io/v2/5ca792c1520000b30b97b63e')
.then( function(response) {
    console.log('response:', response);
    return response.json();
}).then( function(json_data) {
    console.log('json_data: ', json_data);
}).catch( function(err) {
    console.log('err: ', err);
});