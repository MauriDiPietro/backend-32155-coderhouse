import { BooksModel } from '../models/books.js';

export const getAll = async (ctx, next) => {
    ctx.body = {            
      status: 'success',   
      data: await BooksModel.find({}),
    };
    ctx.status = 200;       
}


export const save = async (ctx, next) => {
  console.log(ctx.request);
  const data = ctx.request.body;

  const result = await BooksModel.create(data)

  ctx.body = {
    status: 'success',
    data: result,
  };
  ctx.status = 201;
}

export const getById = async (ctx, next) => {
  const { id } = ctx.params;
  ctx.body = {
    status: 'success',
    data: await BooksModel.findById(id),
  };
  ctx.status = 200;
}


export const updateBook = async (ctx, next) => {
  const { id } = ctx.params;

  const data = ctx.request.body;

  await BooksModel.findByIdAndUpdate(id, data)

  ctx.body = {
    status: 'success',
    data: data,
  };
  ctx.status = 200;
}

export const removeBook = async (ctx, next) => {
  const { id } = ctx.params;
  await BooksModel.findByIdAndDelete(id)

  ctx.status = 200;
  ctx.body = {
    status: 'success',
    message: `Book deleted with id: ${id}`,
  };
}
