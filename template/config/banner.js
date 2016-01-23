var pack = require('../package.json')

var VERSION = process.env.VERSION || pack.version
var YEAR = new Date().getFullYear()

var BANNER = '/*!\n' +
    '* ' + pack.name + ' v' + VERSION + '\n' +
    '* (c) ' + YEAR + ' ' + pack.author + '\n' +
    '* Release under the ' + pack.license + ' License.\n' +
    '*/\n'

module.exports = BANNER
