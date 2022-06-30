import {Router} from "express";

export const itemRouter = Router()
    .get('/item', async (req, res) => {
        console.log('Welcome to item!');
    })
;
