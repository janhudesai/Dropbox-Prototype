/**
 * http://usejsdoc.org/
 */

var mysql = require('mysql');
var ejs = require('ejs');

// function connection()
// {
//     var connection = mysql.createConnection(
//         {
//             host : 'localhost',
//             user : 'root',
//             password : 'root',
//             database : 'dropbox',
//             port	 : 3306,
//             multipleStatements: true
//         }
//     );
//     return connection;
// }

function connection()
{
    var connection = mysql.createPool(
        {
            host : 'localhost',
            user : 'root',
            password : 'root',
            database : 'dropbox',
            port	 : 3306,
            multipleStatements: true
        }
    );
    return connection;
}

// function fetch(callback,query)
// {
//     var connection1 = connection();
//
//     connection1.query(query,function(error, data , field)
//     {
//         if(!error)
//         {
//             callback(error,data);
//         }
//         else
//         {
//             callback(error,data);
//             console.log("Error occured"+ error.message);
//         }
//     });
//
//     console.log("Connection closed");
//     connection1.end();
//
// }

function fetch(callback,query)
{
    var connection1 = connection();

    connection1.getConnection(function(err, conn){
        if (err) {
            throw err;
        }
        conn.query(query,function(error, data , field)
    {
        if(!error)
        {
            callback(error,data);
            conn.release();
        }
        else
        {
            callback(error,data);
            console.log("Error occured"+ error.message);
            conn.release();
        }
    }
    );

    console.log("Connection closed");
    //connection1.end();

});
}
exports.fetch=fetch;