import Link from "next/link"

interface Post {
    title: string,
    content: string,
    author: string,
    slug: string
}

export default async function Home() {

    const posts: Post[] = await fetch(process.env.SITE_URL + "/api/content", { cache: 'no-store' }).then(res=> res.json())

    return (
        <div className="mx-auto w-full">
            <ul className="list-decimal flex flex-col gap-4 ml-10">
            {posts.map(post => (
                <li key={post.slug}>
                    <Link href={"/blog/"+post.slug}>
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                    <div className="hover:underline text-slate-500 flex divide-x-2 divider-slate-700 gap-2">
                    <p>by {post.author}</p>
                    <p className="pl-2">blog/{post.slug}</p>
                    </div>
                    </Link>
                </li>
            ))}
            </ul>
        </div>
    )
}