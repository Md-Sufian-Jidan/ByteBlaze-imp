import { useLoaderData } from "react-router-dom";
import placeHolderImage from '/images/404.jpg'
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
    const blog = useLoaderData();
    // console.log(blog);
    const { cover_image, title, tags, body_html } = blog
    return (
        <div className="mx-auto group border border-opacity-30 hover:no-underline focus:no-underline p-2">
            <div>
                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || placeHolderImage} />
            </div>
            <div className="flex flex-wrap py-6 gap-2">
                {
                    tags.map((tag) => <a key={tag} className="px-3 py-1 rounded-sm hover:underline bg-default-600 text-black">#{tag}</a>)
                }
            </div>
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
            </div>
        </div>
    );
};

export default Content;