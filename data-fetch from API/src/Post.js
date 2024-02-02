const Post = ({ post }) => {
    return (
        <article className="border border-secondary d-flex flex-column p-2 bg-primary text-white w-25 h-50 m-3">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <p>Post ID: {post.id}</p>
        </article>
    )
}
export default Post