module.exports = {
    index: (req, res) => {
        res.render('home');
    },
    login: (req, res) => {
        res.render('login');
    },
    ingresar: (req, res) => {
        res.send('Se ingreso');
    },
    register: (req, res) => {
        res.render('register');
    },
    create: (req, res) => {
        res.send('Se creo un nuevo usuario');
    }
}