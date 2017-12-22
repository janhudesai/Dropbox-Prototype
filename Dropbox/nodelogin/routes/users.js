var express = require('express');
var router = express.Router();
var formidable = require('formidable');
const fs = require('fs');
var sql = require('./sql');
var user;
var url;
var CryptoJS = require("crypto-js");




/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});



router.post('/calculate', function (req, res, next) {


    if (req.body.operation == 'addition')
    {
        var result = parseFloat(req.body.number1) +parseFloat(req.body.number2);

    }

    if (req.body.operation == 'subtraction')
    {
        var result = parseFloat(req.body.number1) - parseFloat(req.body.number2);

    }
    if (req.body.operation == 'multi')
    {
        var result = parseFloat(req.body.number1) * parseFloat(req.body.number2);

    }
    if (req.body.operation == 'division')
    {
        var result = parseFloat(req.body.number1) / parseFloat(req.body.number2);

    }


    //console.log(req.body);
    //console.log(req.body.number1);
    res.status(200).json(JSON.stringify(result));


});

router.post('/login', function (req, res, next) {


    console.log(req.body);
    var bytes  = CryptoJS.AES.decrypt(req.body.password.toString(), '123');
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);
    console.log(bytes)
    console.log(plaintext)
    var query = "select * from users where userid='"+ req.body.username+"'and password='"+ plaintext+"'";
    console.log(query);


    function display(error,display)
    {
        console.log(display);
        if (display.length > 0)
        {
            user = display[0].userid;
            // remember to reset the variable after signoff
            res.status(200).json({message: "Login successful"});
        }

 }
    sql.fetch(display,query);

});

router.post('/signup', function (req, res, next) {


     console.log(req.body);
    var query = "insert into users values ('"+ req.body.username+ "','" + req.body.password+"','"+req.body.fname+"','"+req.body.lname+"','','','','','','');";
     console.log(query);


    function display(error,display)
    {
        console.log(display);
        console.log(error);
        if (error)
        {
            console.log("display");
            res.status(400).json({message: "Login successful"});
        }
        else
        {
            console.log("display");
            res.status(200).json({message: "Login successful"});
        }

    }
    sql.fetch(display,query);
});


router.post("/fileupload", function(req, res)
{
    var file;
    console.log(user);
    console.log(req.body.id);

    if(!req.files)
    {

        res.send("File was not found");
        return;
    }

    file = req.files.file.name;

    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10)
    {
        dd='0'+dd;
    }

    if(mm<10)
    {
        mm='0'+mm;
    }
    today = yyyy+'-'+mm+'-'+dd;

    console.log(today);


    //var query = "insert into files values ('"+ file+ "','" + today+"','"+user+"','"+root+"','"+file+"',null);";
    var temp;


    if (req.body.id =='null' )
    {

        var root= 1;
        console.log("inside 1")
        var query = "insert into files values ('"+ file+ "','" + today+"','"+user+"','"+root+"','"+file+"',null);";
        query =query+"insert into useractivites values ('"+user+"','Uploaded File','"+file+"','"+today+"')";

    }
    else
    {

        var root= req.body.id;
        console.log("inside 2")
        var query = "insert into files values ('"+ file+ "','" + today+"','"+user+"','"+root+"','"+file+"',null);";
        query =query+"insert into useractivites values ('"+user+"','Uploaded File','"+file+"','"+today+"')";
    }


    function display(error,display)
    {
        console.log(display);
        console.log(error);
        if (error)
        {
            console.log("display-error");
            res.status(400).json({message: "Login successful"});
        }
        else
        {
            req.files.file.mv("E:/273/users/"+file, function(err)
             {
                 console.log(err);
             });

            res.send("File Uploaded");
        }

    }
    sql.fetch(display,query);


});

router.post('/createdirectory', function (req, res, next) {

    // console.log(req.body.folder);
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10)
    {
        dd='0'+dd;
    }

    if(mm<10)
    {
        mm='0'+mm;
    }
    today = yyyy+'-'+mm+'-'+dd;
    var prent =1;
    var child = null;
    console.log("parent id:" +req.body.id)
    if (req.body.id == null)
    {
        var query = "insert into folder values ('"+ req.body.folder+ "','" + today+"','"+user+"','"+req.body.folder+"',null,null,null);";
        query= query+"insert into useractivites values ('"+user+"','Created Folder','"+req.body.folder+"','"+today+"')";
    }
    else
    {
        var query = "insert into folder values ('"+ req.body.folder+ "','" + today+"','"+user+"','"+req.body.folder+"','"+req.body.id+"',null,null);";
        query= query+"insert into useractivites values ('"+user+"','Created Folder','"+req.body.folder+"','"+today+"')";
    }

    console.log(query);
    var directory = 'E:/273/users/'+user+ req.body.folder;



    function display(error,display)
    {
        console.log(display);
        console.log(error);
        if (error)
        {
            console.log("display-error");
            res.status(400).json({message: "Login successful"});
        }
        else
        {
            fs.mkdir(directory,function (err) {
                if (err) throw err;
                res.status(201).json({message: "Login successful"});
            })
        }

    }
    sql.fetch(display,query);


});

router.post('/list', function (req, res, next) {

var query1 = " select name,date_format(date, '%e-%b-%y') as date,starred, 'folder' as display from folder where parentfolder is null and userid='"+ user+"';"



    var arrayObj;
    var output ={};

    var temp ={name:'',date:''}
    var folder={};
    var name1;

    function display(error,display)
    {
        console.log(display);
        arrayObj= display;

        console.log(arrayObj);
        output.dis = arrayObj;
        res.status(201).json({display});

// name:{}
    }
    sql.fetch(display,query1);

});

router.post('/childlist', function (req, res, next) {

    var query1 = " select name,date_format(date, '%e-%b-%y') as date,starred, 'folder' as display from folder where parentfolder ='"+req.body.parentid+"' and userid='"+ user+"';"
    console.log(query1)
    var arrayObj;
    var output ={};

    var temp ={name:'',date:''}
    var folder={};
    var name1;

    function display(error,display)
    {
        console.log(display);
        arrayObj= display;

        console.log(arrayObj);
        output.dis = arrayObj;
        res.status(201).json({display});

// name:{}
    }
    sql.fetch(display,query1);

});

router.post('/listfiles', function (req, res, next) {

    //var query2 = "select filename as name, date, starred,'file' as display from files where parentfolder =1 and userid='"+ user+"';"
    var query2 = "select filename as name, date_format(date, '%e-%b-%y') as date, starred,'file' as display from files where parentfolder =1 and userid='"+ user+"';"

    console.log(query2);
    var arrayObj;
    var output ={};

    var temp ={name:'',date:''}
    var folder={};
    var name1;

    function display(error,display)
    {
        console.log(display);
        arrayObj= display;

        console.log(arrayObj);
        output.dis = arrayObj;
        res.status(201).json({display});

// name:{}
    }
    sql.fetch(display,query2);

});

router.post('/childfiles', function (req, res, next) {

    var query2 = "select filename as name, date_format(date, '%e-%b-%y') as date, starred,'file' as display from files where parentfolder = '"+req.body.parentid+"' and userid='"+ user+"';"



    var arrayObj;
    var output ={};

    var temp ={name:'',date:''}
    var folder={};
    var name1;

    function display(error,display)
    {
        console.log(display);
        arrayObj= display;

        console.log(arrayObj);
        output.dis = arrayObj;
        res.status(201).json({display});

// name:{}
    }
    sql.fetch(display,query2);

});

router.post('/star', function (req, res, next) {

    var query2 = "select filename as name, date from files where starred is not null and userid='"+ user+"';"



    var arrayObj;
    var output ={};

    var temp ={name:'',date:''}
    var folder={};
    var name1;

    function display(error,display)
    {
        console.log(display);
        arrayObj= display;

        console.log(arrayObj);
        output.dis = arrayObj;
        res.status(201).json({display});

// name:{}
    }
    sql.fetch(display,query2);

});

router.post('/createdirectoryshare', function (req, res, next) {

    // console.log(req.body.folder);
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    var iscorrect = false;

    if(dd<10)
    {
        dd='0'+dd;
    }

    if(mm<10)
    {
        mm='0'+mm;
    }
    today = yyyy+'-'+mm+'-'+dd;

    var prent =1;
    var child = null;

    var ids =[];
    var split=req.body.members;

    ids = split.split(',');


    if (req.body.flag === 'new' ){
    var query = "insert into folder values ('"+ req.body.folder+ "','" + today+"','"+user+"','"+req.body.folder+"',null,null,null);";

    for (var i in ids)
    {
        var query = query+ "insert into folder values ('"+ req.body.folder+ "','" + today+"','"+ids[i]+"','"+req.body.folder+ids[i]+"',null,null,null);";
    }
    }
    else
    {
        var query ='';
        for (var i in ids)
        {
            var query = query+ "insert into folder values ('"+ req.body.folder+ "','" + today+"','"+ids[i]+"','"+req.body.folder+ids[i]+"',null,null,null);";
        }
    }

    query = query+"insert into useractivites values ('"+user+"','Shared Folder','"+req.body.folder+"','"+today+"')";
    console.log(query);

    var directory = 'E:/'+user+ req.body.folder;

    function display(error,display)
    {
        console.log(display);
        console.log(error);
        if (error)
        {
            console.log("display-error");
            res.status(400).json({message: "Not successful"});
        }
        else
        {
            fs.mkdir(directory,function (err) {
                if (err) throw err;
                res.status(201).json({message: "successful"});
            })
        }

    }
    sql.fetch(display,query);



});

router.post('/fileshare', function (req, res, next) {

    // console.log(req.body.folder);
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    var iscorrect = false;

    if(dd<10)
    {
        dd='0'+dd;
    }

    if(mm<10)
    {
        mm='0'+mm;
    }
    today = yyyy+'-'+mm+'-'+dd;

    var prent =1;
    var child = null;

    var ids =[];
    var split=req.body.members;

    ids = split.split(',');



        var query ='';
        for (var i in ids)
        {
            var root= 1;
            var query = query+"insert into files values ('"+ req.body.folder+ "','" + today+"','"+ids[i]+"','"+root+"','"+ids[i]+req.body.folder+"',null);";
        }
    query = query+"insert into useractivites values ('"+user+"','Shared File','"+req.body.folder+"','"+today+"')";

    console.log(query);



    function display(error,display)
    {
        console.log(display);
        console.log(error);
        if (error)
        {
            console.log("display-error");
            res.status(400).json({message: "Not successful"});
        }
        else
        {

                res.status(201).json({message: "successful"});

        }

    }
    sql.fetch(display,query);



});

router.post('/updatestar', function (req, res, next) {


    console.log(req.body.value);
    console.log(req.body.name);
    if (req.body.value =='yes'){
    var query = "update folder set starred = '"+req.body.value+"' where userid='"+user+"' and name='"+req.body.name+"';";
    }
    else
    {
        var query = "update folder set starred = "+" where userid='"+user+"' and name='"+req.body.name+"';";
    }
    console.log(query);


    function display(error,display)
    {
        console.log(display);
        console.log(error);
        if (error)
        {
            console.log("display");
            res.status(400).json({message: "Login successful"});
        }
        else
        {
            console.log("display");
            res.status(200).json({message: "Login successful"});
        }

    }
    sql.fetch(display,query);
});



router.post('/useractivity', function (req, res, next) {

    var query1 = " select * from users where userid='"+ user+"';"


    function display(error,display)
    {
        console.log(display);
        arrayObj= display;


        res.status(201).json({display});

// name:{}
    }
    sql.fetch(display,query1);

});

router.post('/updateuseractivity', function (req, res, next) {

    var query1 = " update users set sports = '"+req.body.Sports+"', fname= '"+req.body.fname+"' ,lname= '"+req.body.lname+"',work='"+req.body.work+"',education= '"+req.body.education+"',contact= '"+req.body.contact+"',Music= '"+req.body.Music+"',shows= '"+req.body.Show+"'where userid='"+ user+"';"


    function display(error,display)
    {
        console.log(display);
        arrayObj= display;


        res.status(201).json({display});

// name:{}
    }
    sql.fetch(display,query1);

});

router.post('/updateuseractivity2', function (req, res, next) {

    url = 'E:/273/users/'+req.body.id;
        res.download(url);


});

router.get('/updateuseractivity2', function (req, res, next) {


    res.download(url);


});

router.post('/activity', function (req, res, next) {

    var query2 = "select userid,activity,filename, date_format(date, '%e-%b-%y') as date from useractivites where userid='"+ user+"' order by date limit 5;"



    var arrayObj;
    var output ={};

    var temp ={name:'',date:''}
    var folder={};
    var name1;

    function display(error,display)
    {
        console.log(display);
        arrayObj= display;

        console.log(arrayObj);
        output.dis = arrayObj;
        res.status(201).json({display});

// name:{}
    }
    sql.fetch(display,query2);

});

module.exports = router;
