import Image from "next/image"
import Link from "next/link"

interface Props {
    id: string,
    name: string | null,
    age: number | null,
    bio: string | null,
    image: string | null
}

export default function UserCard({id, name, age, image}: Props) {
    return (
        <div className="border rounded-lg shadow-md w-auto py-5 flex flex-col items-center justify-center overflow-clip">
        <Image
          src={image ?? '/mememan.webp'}
          alt={`${name}'s profile`}
          className="rounded-full"
          width={50}
          height={50}
        />
        <div className="text-center mt-3">
          <h3>
            <Link href={`/users/${id}`} className="font-semibold">{name?.split(" ").slice(0, 2).join(' ')}</Link>
          </h3>
          <p className="text-sm text-slate-600">Age: {age}</p>
        </div>
      </div>
    )
}