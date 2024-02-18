const express = require('express');
const userRouter = require('./routes/userRoutes');
const articleRouter = require('./routes/articleRoutes');
const categoryRouter = require('./routes/catrgoryRoutes');
const commentRouter = require('./routes/commentRoutes');
const isLogin = require('./middlewares/isLogin');
const errorHandler = require('./middlewares/errorsHandler');
require('dotenv').config()
require('./config/dbConnect')

//
const app = express();
//LES MIDDLEWARES
app.use(express.json()); // <=> bodyParser

// ROUTES:
const API_PREFIX = process.env.API_PREFIX;
// Routes => Users
app.use(`${API_PREFIX}/users`,userRouter);
// Routes => Articles
app.use(`${API_PREFIX}/articles`,articleRouter);
// Routes => Category
app.use(`${API_PREFIX}/categories`,categoryRouter);
// Routes => Comment
app.use(`${API_PREFIX}/comments`,commentRouter);



// Gestion des erreurs
app.use(errorHandler);






const PORT = process.env.PORT || 4000;
//
app.listen(PORT,()=>{
    console.log(`Le serveur tourne sur le port : ${PORT}`)
})

