import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { engine } from 'express-handlebars';
import db from './config/db/index.js';
// import path from 'path';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import router from './routes/index.js';

const app = express();
const port = 3000;

// connect to db
db.run();

// *HTTP logger
// app.use(morgan('combined'));

// *Template engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
  })
);
app.set('view engine', 'hbs');

// *Set views path
const viewsPath = join(
  dirname(fileURLToPath(import.meta.url)),
  'resources',
  'views'
);
app.set('views', viewsPath);

// routes init
router(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
