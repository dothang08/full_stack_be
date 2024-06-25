const connection = require("../config/database")
const getAllUsers = async () => {
    let [results, fields] = await connection.query('SELECT * FROM Users')
    return results
}

const getUserByID = async (userID) => {
    let [results, fields] = await connection.query('SELECT * FROM Users where id = ?', [userID])
    let user = results && results.length > 0 ? results[0] : {}
    return user
}

const updateUserbyID = async (email, city, name, userID) => {
    let [results, fields] = await connection.query(
        `
        UPDATE Users 
        SET email = ?, city= ?, name = ?
        WHERE id = ?
        `, [email, city, name, userID],
    )
}

const deleteUserByID = async (id) => {
    let [results, fields] = await connection.query(
        `DELETE FROM Users WHERE id=?`, [id]
    )
}
module.exports = {
    getAllUsers, getUserByID, updateUserbyID,
    deleteUserByID
}