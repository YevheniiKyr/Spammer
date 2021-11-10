import User from "./user.js";
import nodemailer from  'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
class UserController {
    async send(req,res){
       try {
           const {email, text} = req.body;
           let transporter = nodemailer.createTransport({
               host: "smtp.gmail.com",
               port: 587,
               secure: false, // true for 465, false for other ports
               auth: {
                   user: 'testing133spam@gmail.com', // generated ethereal user
                   pass: 'testing133spampass', // generated ethereal password
               },
           });

// send mail with defined transport object
           let info = await transporter.sendMail({
               from: 'testing133spam@gmail.com', // sender address
               to: email, // list of receivers
               subject: "", // Subject line
               text: text, // plain text body
               /*html: "<b>Hello world?</b>", */})// html body

    }catch (e) {
           res.status(500).json(e)
       }
    }

    async create (req,res) {
        try {
            //res.json(req.body);

            const {surname, name, mail} = req.body
            const user = await User.create({surname, name, mail})
            res.json(user);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll (req,res) {
        try {
            //res.json(req.body);
            const users = await User.find();
            res.json(users);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getByID (req,res) {
        try {
            //res.json(req.body);
            const user = await User.findById(req.params.id);
            res.json(user);
        } catch(e){
            res.status(500).json(e)
        }

    }
    async update(req,res) {
        try {
            //res.json(req.body);
            const user = req.body;
            if(!user._id){
                res.status(400).json({message: 'no id'});
            }
            const updatedUser = await User.findByIdAndUpdate(user._id,  user, {new:true} );
            return res.json(updatedUser);
        } catch(e){
           // res.status(400).json(e)
           // res.status(400).json(e)
        }

    }
    async delete (req,res) {
        try {
            //res.json(req.body);
            const {id} = req.params
            if(!id){
                res.status(400).json({message: 'no id'});
            }
            const deletedUser = await User.findByIdAndDelete(id);
            if(deletedUser == null){res.json({message :"Cant find user with this id"})}
            else res.json(deletedUser);
        } catch(e){
            res.status(500).json(e)
        }

    }


}


export default new UserController()