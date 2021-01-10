import connectDb from "./database/db";
import Post from "./models/postmodel";
import APIFeature from "./utils/apiFeature";

const PostHandler = async (req, res) => {
  // GET ALL POST
  if (req.method === "GET") {
    const features = new APIFeature(Post.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    try {
      const posts = await features.query;
      res.send(posts);
    } catch (error) {
      res.status(404).send("something went wrong, try again");
    }
  }
  //   CREATE A NEW POSTS
  if (req.method === "POST") {
    const post = new Post({
      title: req.body.title,
      description: req.body.description,
      author: req.body.author,
    });

    try {
      await post.save();
      res.status(201).send(post);
    } catch (error) {
      res.status(400).send("Something went wrong, try again!");
    }
  }
};

export default connectDb(PostHandler);
