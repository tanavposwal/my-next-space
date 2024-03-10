import UserCard from "@/components/UserCard"
import { prisma } from "@/lib/prisma"

export default async function Home() {
    const users = await prisma.user.findMany()!
    return (
        <div className="grid grid-cols-3 gap-5">
            {users.map(user => (
                <UserCard key={user.id} {...user!} />
            ))}
        </div>
    )
}