let a = 1; // test babel
require('./main.css');
function show(content){
    window.document.getElementById('app').innerHTML = 'hello, ' + content; 
}
module.exports = show;