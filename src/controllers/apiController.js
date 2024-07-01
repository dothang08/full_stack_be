const User = require("../models/users")
const { uploadSingleFile, uploadMultipleFiles } = require("../service/fileservice")
// Thao tác với Database (DB) thì dùng: await async vì nó chạy bất đồng bộ
const getUsersAPI = async (req, res) => {
    let results = await User.find({}); // chờ model
    return res.status(200).json(
        {
            errCode: 0,
            data: results
        })

}
// Tham khảo từ: https://mongoosejs.com/docs/index.html
const postCreateUserAPI = async (req, res) => {
    let email = req.body.email
    let name = req.body.myName
    let city = req.body.city
    let user = await User.create({
        email: email,
        name: name,
        city: city
    }) // ODM
    return res.status(200).json(
        {
            errCode: 0,
            data: user
        })
}

// https://mongoosejs.com/docs/api/model.html#Model.updateOne()
const putUpdateUserAPI = async (req, res) => {
    let email = req.body.email
    let name = req.body.myName
    let city = req.body.city
    let userID = req.body.userID
    let user = await User.updateOne({ _id: userID }, { email: email, name: name, city: city });

    return res.status(200).json(
        {
            errCode: 0,
            data: user
        })
}

// https://mongoosejs.com/docs/api/query.html#Query.prototype.deleteOne()
const deleteUserAPI = async (req, res) => {
    const id = req.body.userID

    let results = await User.deleteOne({ _id: id });
    return res.status(200).json(
        {
            errCode: 0,
            data: results
        })
}

const postUploadSingleFileApi = async (req, res) => {

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let result = await uploadSingleFile(req.files.image);

    return res.status(200).json(
        {
            EC: 0,
            data: result
        }
    )
}

const postUploadMultipleFilesAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    // console.log(req.files);
    //upload single => files is an object
    //upload multiple => files is an array
    if (Array.isArray(req.files.image)) {
        //upload multiple
        let result = await uploadMultipleFiles(req.files.image);
        return res.status(200).json({
            EC: 0,
            data: result
        })

    } else {
        //upload single
        return await postUploadSingleFileApi(req, res);
    }
}


module.exports = {
    getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI,
    postUploadSingleFileApi,
    postUploadMultipleFilesAPI
}