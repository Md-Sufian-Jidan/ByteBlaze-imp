import { useLoaderData } from "react-router-dom";

const Author = () => {
    const blog = useLoaderData();
    const {user} = blog;
    const {name} = user;
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default Author;