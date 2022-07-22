const Auth_user = require('../model_schema/auth_schema')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwt_secret = "nam"

const login = async (req, res) => {
    const { namauser, password } = req.body;
    const User = await Auth_user.findOne({
        namauser
    }).lean()
    if (!User) {
        return res.json({ status: "error", error: "invalid username/password" })
    }

    if (await bcrypt.compare(password, User.password)) {
        const token = jwt.sign(
            { id: User._id, namauser: User.namauser },
            jwt_secret
        );
        console.log("berhasil masuk")
        return res.status(200).json({ token });
    }
    res.json({ status: "error", error: "Invalid username/password" });

}

const register = async (req, res) => {
    const { namauser, email, password: textPassword, alamat } = req.body

    //auth namauser type string
    if (!namauser || typeof namauser !== "string") {
        return res.json({ status: "error", error: "Invalid username" });
    }
    //auth email type string
    if (!email || typeof email !== "string") {
        return res.json({ status: "error", error: "Invalid email" });
    }
    //auth password type string
    if (!textPassword || typeof textPassword !== "string") {
        return res.json({ status: "error", error: "Invalid password" });
    }


    const password = await bcrypt.hash(textPassword, 10);
    try {
        const authUserRegis = await Auth_user.create({
            namauser,
            email,
            password,
            alamat
        })
        res.json({ authUserRegis });
    } catch (error) {
        if (namauser === namauser) {
            console.log("username used")
            return res.json({ status: "error", error: "Username already in use" })
        }
        throw error
    }
    res.status(200)
}

module.exports = {
    login,
    register
}