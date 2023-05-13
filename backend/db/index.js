// const {Pool} = require('pg') //destructuring Pool object
const Pool = require('pg').Pool

const pool  = new Pool(
    {
    user: 'postgres',
    host: 'resumeapp.cwnjtcnkyave.us-east-2.rds.amazonaws.com',
    database: 'postgres',
    password: 'PasswordDB',
}
);

pool.connect(function(err)
{
    if(err){
        console.error('database connection failed:' + err.stack);
        return;
    }
    console.log('connected to database');
});


module.exports = {
    query: (text, params) => pool.query(text, params),
}