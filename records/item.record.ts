import {ItemEntity, NewItemEntity} from "../types";
import {pool} from '../utils/db'
import {FieldPacket} from "mysql2";
import {v4 as uuid} from 'uuid';
import {ValidationError} from "../utils/errors";

type ItemRecordResult = [ItemEntity[], FieldPacket[]];

export class ItemRecord implements ItemEntity {
    public id: string;
    public article: string;
    public name: string;
    public description: string;
    public quantity: number;
    public location: string;

    constructor(obj: NewItemEntity) {
        if (!obj.article || obj.article.length > 10) {
            throw new ValidationError('Item article number cannot be empty and have more than 10 signs.');
        }

        if (!obj.name || obj.name.length > 100) {
            throw new ValidationError('Item name cannot be empty and have more than 100 signs.');
        }

        if (obj.description.length > 100) {
            throw new ValidationError('Item description cannot have more than 100 signs.');
        }

        if (typeof obj.quantity !== 'number' || obj.quantity < 1 || obj.quantity > 999999) {
            throw new ValidationError('Item quantity has to be value between 1 and 999 999.');
        }

        if (!obj.location || obj.location.length > 5) {
            throw new ValidationError('Item location cannot be empty and have more than 5 signs.');
        }

        this.id = obj.id;
        this.article = obj.article;
        this.name = obj.name;
        this.description = obj.description;
        this.quantity = obj.quantity;
        this.location = obj.location;
    }

    static async getOne(id: string): Promise<ItemRecord | null> {
        const [results] = await pool.execute("SELECT * FROM `items` WHERE `id` = :id", {
            id,
        }) as ItemRecordResult;

        return results.length === 0 ? null : new ItemRecord(results[0]);
    }

    static async listAllArticle(article: string): Promise<{ quantity: number; name: string; description: string; location: string; id: string; article: string }[]> {
        const [results] = await pool.execute("SELECT * FROM `items` WHERE `article` LIKE :search", {
            search: `%${article}%`,
        }) as ItemRecordResult;

        return results.map(result => {
            const {
                id, article, name, description, quantity, location,
            } = result;

            return {
                id, article, name, description, quantity, location,
            };
        });
    }

    static async listAllLocation(location: string): Promise<{ quantity: number; name: string; description: string; location: string; id: string; article: string }[]> {
        const [results] = await pool.execute("SELECT * FROM `items` WHERE `position` LIKE :search", {
            search: `%${location}%`,
        }) as ItemRecordResult;

        return results.map(result => {
            const {
                id, article, name, description, quantity, location,
            } = result;

            return {
                id, article, name, description, quantity, location,
            };
        });
    }



    async insert(): Promise<void> {
        if (!this.id) {
            this.id = uuid();
        } else {
            throw new ValidationError('Cannot use same ID!');
        }
        await pool.execute("INSERT INTO `items`(`id`, `article`, `name`, `description`, `quantity`, `location`) VALUES(:id, :article, :name, :description, :quantity, :location)", this);
    }

}
