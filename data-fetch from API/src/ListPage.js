import Post from "./Post"

const ListPage = ({ searchResults }) => {

    const results = searchResults.map(post => <Post key={post.id} post={post} />)

    const content = results?.length ? results : <article className="d-flex flex-row"><p>No Matching Posts</p></article>

    return (
        <main className="d-flex flex-row align-content-between flex-wrap col equal-height-col">{content}</main>
    )
}
export default ListPage;