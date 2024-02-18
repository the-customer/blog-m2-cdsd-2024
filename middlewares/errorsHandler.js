const errorHandler = (err,req,res,next)=>{
    console.log(err);
    const {status='Erreur',stack,message,statusCode=500} = err;
    return res.status(statusCode).json({
        message,
        stack,
        status
    });
}

module.exports = errorHandler;