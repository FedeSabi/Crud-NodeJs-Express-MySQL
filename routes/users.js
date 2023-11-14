
import express  from "express"
const router=express.Router()

import passport from 'passport'
import crypto from 'crypto'
//import async from 'async'
//import nodemailer from 'nodemailer'

//pedir el user model
//import User from '../models/usermodel.js'

//obtener rutas GET

router.get('/login',(req,res)=>{
    res.render('users/login')
})

router.get('/olvide', (req,res)=>{
    res.render('users/olvide')
})

/* reveer en ejs
 router.get('/salir', (req,res)=>{
    res.redirect('/login')
})*/

router.get('/alluser', (req,res)=>{
    res.render('users/alluser')
})

//Obtener rutas POST

router.post('/signup',(req,res)=>{
   let{name,email,password} = req.body
   let userData={
    name:name,
    email:email
   } 
   userData.save()
})

export default router
