interface Post {
    title: string,
    content: string,
    slug: string
}

export default async function Home({params}: {params: {slug: string}}) {

    const posts: Post[] = await fetch("http://localhost:3000/api/content").then(res=> res.json())
    const post = posts.find(post => post.slug === params.slug)!

    return (
        <div>
            <h1 className="text-xl font-extrabold mb-3">{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}