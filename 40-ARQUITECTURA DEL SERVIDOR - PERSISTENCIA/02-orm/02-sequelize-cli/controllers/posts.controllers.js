import PostModel from '../models/posts.model.js'

export const getAllPosts = async(req, res)=>{
    try {
        const posts  = await PostModel.findAll()
        res.json(posts)
    } catch (error) {
        res.json({message: error.message})
    }
};

export const getPost = async (req, res)=>{
    try {
        const post = await PostModel.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json(post)
    } catch (error) {
        res.json({message: error.message})
    }
};

export const createPost = async (req, res)=>{
    try {
        await PostModel.create(req.body)
        res.json({'message': `Post creado correctamente (${req.body.title})`})
    } catch (error) {
        res.json({message: error.message})
    }
};

export const updatePost = async(req, res)=>{
    try {
        await PostModel.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({'message': 'Post actualizado correctamente'})
    } catch (error) {
        res.json({message: error.message})
    }
};

export const deletePost = async(req, res)=>{
    try {
        await PostModel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({'message': 'Post eliminado'})
    } catch (error) {
        res.json({message: error.message})
    }
};