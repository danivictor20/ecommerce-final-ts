import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { UserModel } from '../models/user.model'

class AuthController {
    constructor(){

    }

    renderLogin(req:Request, res:Response){
        res.render('login')
    }


    renderRegister(req:Request, res:Response){
        res.render('register')
    }


    async register(req:Request, res:Response){
        const salt = await bcrypt.genSalt(10)
        const password = await bcrypt.hash(req.body.password, salt)

        const user = await UserModel.create({
            name: req.body.name,
            email: req.body.email,
            password: password,
            username: req.body.username,
            age: req.body.age,
            address: req.body.address,
            phone: req.body.prefijo + "" +req.body.phone,
            image: req.body.image,
        })

        res.json({user})
    }


    async login(req:Request, res:Response) {
        const user = await UserModel.findOne({email: req.body.email})
        if(user){
            const password:any = user.password
            const coincidePassword = await bcrypt.compare(req.body.password, password)

            if (coincidePassword) {
                const datos = {
                    name: user.name,
                    edad: user.age,
                    address: user.address
                }
                const token = jwt.sign(datos, 'clave_secreta')
                res.json({
                    datos,
                    token
                })
            }else res.send('escribí bien gato')

        }else{
            res.send('ni chance man')
        }
    }



}

export default new AuthController()