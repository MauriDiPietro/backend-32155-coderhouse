import fs from 'fs';

export default class File {
    constructor(path) {
        this.path = path;
    }

    async save(obj) {
        try {
            const products = await this.getAll();
            products.push(obj);
            await fs.promises.writeFile(this.path, JSON.stringify(products));
            return obj;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            if (fs.existsSync(this.path)) {
                const list = await fs.promises.readFile(this.path, 'utf-8');
                return JSON.parse(list);
            } else {
                return [];
            }
        } catch (error) {
            console.log(error);
        }
    }
}