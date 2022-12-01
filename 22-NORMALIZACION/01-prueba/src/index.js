import fs from 'fs';
import * as util from 'util';
import express from 'express';

const app = express();

app.get('/original', (req, res) => {
	const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
	res.json({
		data
	})
});

app.get('/articulos-por-autor', (req, res) => {
	const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

	// Id de ejemplo '6145f15975a527f507148a95';
	let response;
	const { authorId } = req.query

	response = data.filter((article) => article.author._id === authorId);
	
	console.log(util.inspect(response, true, 90, true));
	// console.log(response);

	res.json({
		articles: response
	})
})
//----------------------------------------------------------------------------------------------------

app.get('/comentarios-de-usuario', (req, res) => {
	// Ejemplo de userId  '6145f159b90a59691484f99d';
	const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
	const { userId } = req.query;
	const userComments = [];
	
	data.forEach((article) => {
		article.comments.forEach((comment) => {
			if (comment.commenter._id === userId) {
				userComments.push(comment);
			}
		});
	});
	
	// console.log(`Los comentarios del user con id ${userId} son los siguientes: `);
	// console.log(userComments);
	res.json({
		userComments
	})
})


app.get('/comentarios-por-usuario', (req, res) => {
	const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
	let commentsPerUser = {};

	data.forEach((article) => {
		article.comments.forEach((comment) => {
			if (commentsPerUser[comment.commenter._id]) {
				commentsPerUser[comment.commenter._id].count++;
			} else {
				commentsPerUser[comment.commenter._id] = {
					count : 1,
					...comment.commenter,
				};
			}
		});
	});

	return res.json({
		commentsPerUser,
		keys: Object.keys(commentsPerUser),
	})
})


app.listen(8080, () =>  console.log("Server ok port: 8080"))