// var http = require('http')
// const url = "mongodb://localhost:27017/serverdb"

// mongo.connect(conn_url, function (err, client) {
//     if(err) {
//        throw err;
//     }
// })
//  collection.insertOne(obj, (err, result) => {
// 	if (err) {
// 		throw err;
// 	}
					
// 	var ok = result.result.ok;
// 	client.close();
// })
// collection.find({}).sort( { CreateTime: -1 } ).skip(PageSize*PageIndex - PageSize).limit(PageSize).toArray((err, items) => {
// 	if (err) {
// 		client.close();
// 		throw err;
// 	}
//     client.close();
// })
// collection.find({}).count(function(err,count){
// 	if (err) {
// 		client.close();
// 		throw err;
// 	}						

// 	client.close();
// })
// collection.remove({},function(err,result){
// 	if (err) {
// 		client.close();
// 		throw err;
// 	}
// 	client.close();
// })
// http.createServer(function(req, res) {
//     router(req,res)

// }).listen(port)

// function router(req, res) {
//     var url = req.url
//     var dirs = url.split('/')
//     var html = ''
//     html = 'Not Found'
//     console.log('Node.js web server get request '+ url)

//     switch(dirs.length) {
// 		case 0:
// 		case 1:
// 			response_html(res,html);
// 			break;
// 		default:
// 			var pro = dirs[1];
// 			//API撰寫
// 			if(pro==''){
// 				callback_default(req,res);
// 			} else if(pro=='api'){//API 
// 				get_post(req,res,function(postData){
// 					callback_api(req,res,postData);
// 				});						
// 			} else {//Not Found
// 				reponse_html(res,html);				
// 			}
// 			break;			
// 	}
// }