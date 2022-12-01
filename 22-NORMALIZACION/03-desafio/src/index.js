import { normalize, schema, denormalize } from 'normalizr';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const inputPath = path.join(__dirname, '../data/input.json');

import express from 'express';

const app = express();

app.get('/original', (req, res) => {
  const originalData = JSON.parse(fs.readFileSync(inputPath));

  res.json({
    originalData,
  });
});

const person = new schema.Entity(
  'person', {}, { 
    idAttribute: 'id',
  },
);


const company = new schema.Entity('company', {
  presidente: person,     
  vicePresidente: person, 
  empleados: [ person ],  
})

const finalSchema = [ company ];

app.get('/normalizar', (req, res) => {

  const originalData = JSON.parse(fs.readFileSync(inputPath));

  const normalizedData = normalize(originalData, finalSchema);

  const normalizedDataPath = path.join(__dirname, '../data/normalize.json');
  let contenido = JSON.stringify(normalizedData, null, '\t');

  fs.writeFileSync(normalizedDataPath, contenido);
  res.json({
    normalizedData,
  })
});




app.get('/get-presidente/:companyId', (req, res) => {
  const originalData = JSON.parse(fs.readFileSync(inputPath));

  const { companyId } = req.params;

  const normalizedData = normalize(originalData, finalSchema).entities;

  const { company, person } = normalizedData;

  const companyRequested = company[companyId];

  if(!companyRequested)
    return res.status(404).json({msg: 'Compania no existe'})

  const presidentId = companyRequested.presidente;
  res.json({
    result: person[presidentId]
  })
})


app.get('/desnormalizar', (req, res) => {
  const normalizedDataPath = path.join(__dirname, '../data/normalize.json');
  const normalizedData = JSON.parse(fs.readFileSync(normalizedDataPath));
  
  const denormalizedData = denormalize( normalizedData.result, finalSchema, normalizedData.entities);

  res.json({
    denormalizedData
  })
})


app.listen(8080, () => console.log('Server ok, port: 8080'));