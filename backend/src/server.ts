import express from 'express';
import cors from 'cors';
import path from 'path';
import 'express-async-errors';

import '../src/database/connection';
import errorHandler from './errors/handler';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);


app.listen(3333);

// Rota = conjunto
// Recurso = usuário

// Métodos HTTP = GET, POST, PUT, DELETE
// GET = BUSCAR INFORMAÇÃO
// POST = CRIAR INFORMAÇÃO
// PUT = EDITANDO UMA INFORMAÇÃO
// DELETE = DELETANDO UMA INFORMAÇÃO

// PARAMS
// Query Params: http://localhost:3333/users?search=diego
// Route Params: http://localhost:3333/users/1 (Identificar um Recurso)
// Body: http://localhost:3333/users/...