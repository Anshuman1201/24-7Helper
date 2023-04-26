const db = require('./Dbconn')
const format = require('string-format')

class PlumberModel {
    saveUser = async (data) => {
        return new Promise(async resolve => {

            var quString = format("insert into plumbers(user_name,phone_no,email,password) value('{}','{}','{}','{}')", data.name,data.phoneNo, data.email, data.password);

            var result = await db.query(quString)
                .catch((err) => 
                resolve({ status: false, msg: err.message }))

            resolve({ status: true, msg: "User Saved !" })
        });
    }


    listPlumber = async () => { //status wala column and feature lagana h 
        return new Promise(async resolve => {
            var result = await db.query(`select * from plumbers`)
                .catch(err => resolve({ status: false, msg: err.message  }));
            resolve(result)
        })
    }
}

module.exports= new PlumberModel();