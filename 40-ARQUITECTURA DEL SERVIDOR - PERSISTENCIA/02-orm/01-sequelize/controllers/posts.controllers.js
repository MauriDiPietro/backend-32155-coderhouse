import PostModel from "../models/posts.model.js";

export const getAllPosts = async(req, res) => {
    try {
        const posts = await PostModel.findAll();
        res.json(posts);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const getPost = async(req, res) => {
    const { id } = req.params;
    try {
        const post = await PostModel.findOne({
            //SELECT * FROM coderhouse.posts WHERE id = 1
            where: {
                id: id
            }
        });
        res.json(post);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const createPost = async(req, res) => {
    try {
        await PostModel.create(req.body)
        res.json({'message': 'post created successfully!'})
    } catch (error) {
        res.json({message: error.message});
    }
}

export const updatePost = async(req, res) => {
    const { id } = req.params;
    try {
        await PostModel.update(req.body, {
            where: {
                id: id,
            }
        });
        res.json({'message': 'post updated ok!'})
    } catch (error) {
        res.json({message: error.message});
    }
}

export const deletePost = async(req, res) => {
    const { id } = req.params;
    try {
        await PostModel.destroy({
            where: {
                id: id
            }
        })
        res.json({'message': 'post deleted ok!'})
    } catch (error) {
        res.json({message: error.message});
    }
}