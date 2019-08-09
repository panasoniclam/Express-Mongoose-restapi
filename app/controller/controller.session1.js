const Session1 = require('./../model/model.session1')
module.exports = {
    list:(req,res,next)=>{
        Session1.find()
        .then(result=>{
            res.status(200).json({
                sucess:true,
                result
            })
        })
        .catch(err=>{
            res.status(500).json({
                err
            })
        })
    },
    create:(req,res,next)=>{
        const user = new Session1({
            username:req.body.username,
            password:req.body.password
        })
        user.save()
        .then(result=>{
            res.status(200).json({
                sucess:true,
                result
            })
        })
        .catch(err=>{
            res.status(500).json({
                sucess:false,
                err
            })
        })
    },
    findOne:(req,res,next)=>{
        const id = req.body._id;
        Session1.findById(id)
        .then(result=>{
            res.status(200).json({
                sucess:true,
                result
            })
        })
        .catch(err=>{
            res.status(500).json({
                sucess:false,
                err
            })
        })
    },
    remove:(req,res,next)=>{
        const id = req.body._id;
        Session1.findByIdAndRemove(id)
        .then(result=>{
            res.status(200).json({
                sucess:true
            })
        })
        .catch(err=>{
            res.status(500).json({
                sucess:false,
                err
            })
        })
    },
    edit:(req,res,next)=>{
        const id = req.body._id;
        Session1.findByIdAndUpdate(id,{
            username:req.body.username,
            password:req.body.password
        },new true)
        .then(result =>{
            res.status(200).json({
                success: true,
                result
            })
        })
        .catch(err=>{
            res.status(500).json({
                success:false,
                err
            })
        })
    }

}