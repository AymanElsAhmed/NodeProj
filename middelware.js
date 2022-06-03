 const checkPage = (req,res,next)=>{
    if(!req.query.page)
        req.query.page = 1;
    
    next();
};


module.exports = {checkPage,};