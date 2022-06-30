import express, {json} from "express";
import cors from "cors";
import 'express-async-errors';
import rateLimit from "express-rate-limit";
import { handleError } from "./utils/errors";
import {itemRouter} from "./routers/item.router";

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(json());
app.use(rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 5 minutes)
}));

app.use('/', itemRouter);

app.use(handleError);

app.listen(3001, '0.0.0.0', () => {
    console.log('Listening on http://localhost:3001');
});
