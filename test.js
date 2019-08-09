const request= require('request')
request.get('http://localhost:8080/system/system',(err,res,body)=>{
    if(err){
        console.log(err)
    }
    // console.log(res)
    console.log('body',res.body)
})
 const data = {'username':'lamnn8945','password':'zxc12345655','email':'lamnn@gnail.com'}

request.post({
    url:'http://localhost:8080/system/system',
    body:data,
    json:true

},(err,res,body)=>{
    if(err){
        console.log(err)
    } 
    console.log(res.body)
})
