const mongoose = require('mongoose');

const connection = async () =>{
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Connexion a la base de donnee reussie!')
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

connection();