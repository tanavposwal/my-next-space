import UserCard from "@/components/UserCard"
import { prisma } from "@/lib/prisma"

export default async function Home() {
    const users = await prisma.user.findMany()!
    return (
        <div className="grid">
            {users.map(user => {
                return <UserCard key={user.id} {...user!} />
            })}
        </div>
    )
}