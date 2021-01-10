import connectDb from "../database/db";
import Post from "../models/postmodel";

const SinglePostHandler = async (req, res) => {
  //   GET A SINGLE POST BASED ON REQUEST ID
  const {
    query: { id },
  } = req;

  if (req.method === "GET") {
    try {
      const post = await Post.findById(id);
      if (!post) {
        return res.send("Post not found!");
      }
      res.send(post);
    } catch (error) {
      res.status(404).send("Post not found!");
    }
  }
};

export default connectDb(SinglePostHandler);
