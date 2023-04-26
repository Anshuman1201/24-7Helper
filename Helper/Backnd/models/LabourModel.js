const db = require('./Dbconn')
const format = require('string-format')

class LabourModel {
    saveUser = async (data) => {
        return new Promise(async resolve => {

            var quString = format("insert into labour(user_name,phone_no,email,password) value('{}','{}','{}','{}')", data.name,data.phoneNo, data.email, data.password);

            var result = await db.query(quString)
                .catch((err) => 
                resolve({ status: false, msg: err.message }))

            resolve({ status: true, msg: "User Saved !" })
        });
    }


    listLabour = async () => { //status wala column and feature lagana h 
        return new Promise(async resolve => {
            var result = await db.query(`select * from labour`)
                .catch(err => resolve({ status: false, msg: err.message  }));
            resolve(result)
        })
    }
}

module.exports= new LabourModel();