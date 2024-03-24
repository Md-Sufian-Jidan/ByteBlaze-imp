import toast from "react-hot-toast";

 export const getBlog = ()=> {
    let blogs = [];
 const storedBlogs = localStorage.getItem('blogs')
 if(storedBlogs){
    blogs = JSON.parse(storedBlogs);
 }
 return blogs;
}

export  const saveBlog = (blog) => {
    let blogs = getBlog();
    const isExist = blogs.find((b) => b.id === blog.id);
    if(isExist){
        return toast.error('Already BookMarked');
    } 
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    toast.success('SuccessFully BookMarked');
}

export  const deleteBlog = (id) => {
    const savedBlog = getBlog();
    const remaning = savedBlog.filter((blog) => blog.id !== id);
    localStorage.removeItem('blog', JSON.stringify(remaning));
    toast.success('Blog Removed from BookMarked')
}
