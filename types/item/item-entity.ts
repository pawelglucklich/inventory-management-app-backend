export interface NewItemEntity extends Omit<ItemEntity, 'id'> {
    id?: string;
}

export interface ItemEntity {
    id: string;
    article: string;
    name: string;
    description?: string;
    quantity: number;
    location: string;
}
