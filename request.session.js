const request = require('request');
const log4js = require('log4js');
const md5 = require('md5')

const Session1 = require('./app/model/model.session1')

const logger = log4js.getLogger('MO')
const md = md5(`${process.env.MO_SECRETKEY}`);
const date = new Date()
const month = date.getMonth() <= 9 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString()
const day = date.getDay() <= 9 ? '0' + (date.getDate() + 1).toString() : date.getDate().toString()

logger.info({ 'md5': md })
logger.info({ 'md5': `${process.env.MO_SECRETKEY}${day}/${month}/${date.getFullYear()}` })
const Request = (data) => {
    return new Promise((resolve, reject) => {
        request.post({
            'uri': 'http://localhost:8080/session1/create',
            'headers': {
                'Contend-Type': 'application/json',
                'token': md
            },
            'method': 'POST',
            body:data,
            json:true
        }, (err, res, body) => {
            if (!err) {
                logger.info({ 'response_api_mo': body })
                
                try {
                    let user = new Session1({
                        username:"lam",
                        password:  "lamnnn"
                    })
                    user.save()

                } catch (e) {
                    logger.info({ 'save_to_db_error': "mo" })
                }
                resolve(body)
            }else{
                logger.error({'save_api_mo_error':err})
                logger.error({'response_api_mo_error_body,':body})
                reject(err)
            }
        })
    })
}
const data = {"username":"lamnn8","password":"lamnn9"}
Request(data)
