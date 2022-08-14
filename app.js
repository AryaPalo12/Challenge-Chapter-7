require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const authRouter = require('./src/auth/auth.router.js');
const swaggerDocument = require('./src/config/swagger.js');
const postRouter = require('./src/post/post.router.js');
const userRouter = require('./src/user/user.router')
const app = express();
const PORT = process.env.PORT || 7000

app.use(express.json());

//For Swagger UI API documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//This will show a heading in the front page if the app.js works
app.get('/', (req, res) => {
  res.send('<h1>This is the front page</h1>')
})

//Collection of routers
app.use(userRouter);
app.use(authRouter);
app.use(postRouter);


app.listen(PORT, () => console.log(`Listening from port ${PORT}`))