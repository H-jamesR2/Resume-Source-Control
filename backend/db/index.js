const {Pool} = require('pg') //destructuring Pool object

const pool  = new Pool();

module.exports = {
    query: (text, params) => pool.query(text, params),
}