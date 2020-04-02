const helmet = require('helmet');
const compressino = require('compression');

module.exports = function(app){
    app.use(helmet);
    app.use(compressino);
}