const db = require('./Dbconn')
const format = require('string-format')

class ElectricianModel {
    saveUser = async (data) => {
        return new Promise(async resolve => {

            var quString = format("insert into electrician(user_name,phone_no,email,password) value('{}','{}','{}','{}')", data.name,data.phoneNo, data.email, data.password);

            var result = await db.query(quString)
                .catch((err) => 
                resolve({ status: false, msg: err.message }))

            resolve({ status: true, msg: "User Saved !" })
        });
    }


    listElectrician = async () => { //status wala column and feature lagana h 
        return new Promise(async resolve => {
            var result = await db.query(`select * from electrician`)
                .catch(err => resolve({ status: false, msg: err.message  }));
            resolve(result)
        })
    }
}

module.exports= new ElectricianModel();