import {Router} from "express";
import {ItemRecord} from "../records/item.record";

export const itemRouter = Router()
    .get('/search/article/:article?', async (req, res) => {
        const items = await ItemRecord.listAllArticle(req.params.article ?? '');
        res.json({items});
    })

    .get('/search/location/:location?', async (req, res) => {
        const items = await ItemRecord.listAllLocation(req.params.location ?? '');
        res.json({items});
    })

    .patch('/:id/:location', async (req, res) => {
        const item = await ItemRecord.update(req.params.id, req.params.location);
        res.json(item);
    })

    .post('/', async (req, res) => {
        const item = new ItemRecord(req.body);
        await item.insert();
        res.json(item);
    })
;
