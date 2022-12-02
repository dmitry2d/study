
import Post from "./Post.js";

class PostController {

    async create (res, req) {
        try {
            const {author, title, content, picture} = req.body
            const post = await Post.create ({author, title, content, picture})
            res.json (post)
        } catch (error) {
            res.status(500).json({error})
        }
    }

}

export default new PostController ();