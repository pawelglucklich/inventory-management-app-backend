import {Router} from "express";
import {ItemRecord} from "../records/item.record";

export const itemRouter = Router()
    .get('/search/:article?', async (req, res) => {
        const items = await ItemRecord.listAllArticle(req.params.article ?? '');
        res.json({items});
    })

    .get('/search/:location?', async (req, res) => {
        const items = await ItemRecord.listAllLocation(req.params.location ?? '');
        res.json({items});
    })

    .get('/:id', async (req, res) => {
        const item = await ItemRecord.getOne(req.params.id);
        res.json(item);
    })

    .post('/', async (req, res) => {
        const item = new ItemRecord(req.body);
        await item.insert();
        res.json(item);
    })
;
