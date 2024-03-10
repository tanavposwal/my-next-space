import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import FollowButton from "@/components/FollowButton/FollowButton";
import Image from "next/image";
FollowButton

interface Props {
    params: {
        id: string;
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const user = await prisma.user.findUnique({ where: { id: params.id } });
    return { title: `User profile of ${user?.name}` };
  }

export default async function Home({params}: Props) {
    const user = await prisma.user.findUnique({ where: {id: params.id}})
    const { name, bio, image, age, email } = user ?? {}

    return (
        <div>
        <h1 className="text-3xl font-extrabold">{name}</h1>
  
        <Image
          width={150}
          height={150}
          className="rounded-full my-2"
          src={image ?? '/profile.png'}
          alt={`${name}'s profile`}
        />
  
        <h3 className="text-lg font-bold">Bio</h3>
        <p className="mb-2">{bio}</p>
  
        <FollowButton targetUserId={params.id} />
      </div>
    )
}