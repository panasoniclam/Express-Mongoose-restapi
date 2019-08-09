const Note = require('./../model/model.note')
module.exports = {
    findAll:(req,res,next)=>{
        Note.find()
        .then(result=>{
            res.status(200).json({
                success:true,
                result
            })
        })
        .catch(err=>{
            res.status(404).json({
                success:false,
                err
            })
        })
    },
    create:(req,res,next)=>{
        if(!req.body.title){
            req.status(500).json({
                message:'wrong!'
            })
        }
        const note = new Note({
            title:req.body.title,
            contend:req.body.contend
        })
        note.save()
        .then(result=>{
            res.status(200).json({
                success:true,
                result
            })
        })
        .catch(err=>{
            res.status(500).json({
                success:false,
                err
            })
        })
    },
    findById:(req,res,next)=>{
        
        const id = req.params.noteId;
        console.log(id)
        Note.findById(id)
        .then(result=>{
            res.status(200).json({
                success:true,
                result
            })
        })
        .catch(err=>{
            req.status(500).json({
                success:false,
                err
            })
        })
    },
    remove:async (req,res,next)=>{
        const id = req.params.noteId;
        console.log(id)
       await Note.findByIdAndRemove(id)
        .then(result=>{
            res.status(200).json({
                success:true,
            })
        })
        .catch(err=>{
            res.status(500).json({
                success:false,
                err
            })
        })
    },
    edit: async (req,res,next)=>{
        const id = req.params.noteId
        console.log(id)
        Note.findByIdAndUpdate(id,{
             title:req.body.title,
              contend:req.body.contend
        },{new :true})
        .then(result=>{
               res.status(200).json({
                   success:true,
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