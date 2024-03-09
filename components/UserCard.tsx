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
        <div className="border rounded-lg p-3 shadow-md w-fit flex flex-col items-center justify-center">
        <img
          src={image ?? '/mememan.webp'}
          alt={`${name}'s profile`}
          className="rounded-full w-12 h-12"
        />
        <div className="text-center mt-3">
          <h3>
            <Link href={`/users/${id}`} className="font-semibold">{name}</Link>
          </h3>
          <p className="text-sm text-slate-600">Age: {age}</p>
        </div>
      </div>
    )
}