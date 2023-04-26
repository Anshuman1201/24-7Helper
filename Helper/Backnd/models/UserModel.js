const db = require('./Dbconn')
const format = require('string-format')

class UserModel {
    saveUser = async (data) => {
        return new Promise(async resolve => {

            var quString = format("insert into users(user_name,phone_no,email,password) value('{}','{}','{}','{}')", data.name,data.phoneNo, data.email, data.password);

            var result = await db.query(quString)
                .catch((err) => 
                resolve({ status: false, msg: err.message }))

            resolve({ status: true, msg: "User Saved !" })
        });
    }


    getUser = async (data) => {
        return new Promise(async resolve => {
            var result = await db.query(`select * from users where email=? & password=?`,[data.email,data.password])
                .catch(err => resolve({ status: false, msg: err.message  }));
            resolve({ status: true, msg: "User found"})
        })
    }
}


module.exports = new UserModel();