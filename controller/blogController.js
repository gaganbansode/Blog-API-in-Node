const Blog = require("../model/blogSchema");

const add = async (req, res, next) => {
    const postData=req.body;
    postData['image']=req.file.filename;
    let blog;
    try {
      blog = new Blog(postData);
  
      blog = await blog.save();
    } catch (err) {
      console.log(err);
      return next();
    }
    res.status(201).json({
      blog: blog,
    });
};

const get = async (req, res, next) => {
    let blog;
    try {
      blog = await Blog.find();
    } catch (err) {
      console.log(err);
      return next();
    }
    if (!blog) {
      return res.status(404).json({ message: "No product Found" });
    }
    res.status(200).json({ blog: blog });
  };

  const edit = async (req, res, next) => {
    blog = await Blog.findById(req.params.id);
    if(!blog){
      return res.status(404).send('something went wrong');
      
    }
    const postData=req.body;
    if(req.file){
      postData['image']=req.file.filename;
    }
    await Blog.findOneAndUpdate({_id:req.params.id},
      {
        $set: postData
      })
    return res.status(200).send('Success');
     next();
  };

  const delete_ = async (req, res, next) => {
    // console.log(req.params.id);
    blog = await Blog.findById(req.params.id);
    if(!blog){
      return res.status(404).send('something went wrong');
      
    }
    await Blog.findOneAndDelete({_id:req.params.id})
    return res.status(200).send('Success');
     next();
  };

module.exports={add,get,edit,delete_}
