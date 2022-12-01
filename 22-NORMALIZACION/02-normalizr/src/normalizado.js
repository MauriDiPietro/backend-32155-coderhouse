import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const inputPath = path.join(__dirname, '../data/input.json');
import { normalize, schema } from 'normalizr';

export const original = async (req, res) => {
  const data = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));
  res.json({
    original: data
  })
}

export const normalizado = async (req, res) => {
  const data = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));

  const user = new schema.Entity('users', {}, {
    idAttribute: '_id'
  });

  const comment = new schema.Entity('comments', {
    commenter: user
  });

  const article = new schema.Entity('articles', {
    author: user,
    comments: [comment]
  }) 

  const finalSchema = [article]
  const normalizedData = normalize(data, finalSchema)

  res.json({
    normalizedData
  })

}

