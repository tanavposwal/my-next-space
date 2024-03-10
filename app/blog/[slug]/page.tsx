interface Post {
    title: string,
    content: string,
    author: string,
    slug: string
}

export default async function Home({params}: {params: {slug: string}}) {

    const posts: Post[] = await fetch("http://localhost:3000/api/content", { cache: 'no-store' }).then(res=> res.json())
    const post = posts.find(post => post.slug === params.slug)!

    return (
        <div>
            <h1 className="text-xl font-extrabold mb-3">{post.title}</h1>
            <p className="mt-2 mb-4">by {post.author}</p>
            <p>{post.content}</p>
        </div>
    )
}