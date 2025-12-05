function verificador_login(req,res,next){
    if (!req.session.idUsuario){
        return res.redirect('/entrar');
    }
    else{
        return next();
    }
}

function verificador_administrador(req,res,next){
    if (req.session.tipoUsuario !== 'administrador'){
        return res.send('Acesso negado você é betinha!')
    }
    else{
        return next();
    }
}
module.exports = {
    verificador_administrador,
    verificador_login,
}