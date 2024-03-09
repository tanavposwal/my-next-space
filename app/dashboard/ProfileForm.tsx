'use client';

export function ProfileForm({ user }: any) {

  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get('name'),
      bio: formData.get('bio'),
      age: formData.get('age'),
      image: formData.get('image'),
    };

    const res = await fetch('/api/user', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    await res.json();
  };

  return (
    <div>
      <h2 className="font-semibold text-lg">Edit Your Profile</h2>
      <hr />
      <form onSubmit={updateUser} className="flex flex-col mt-4">
        <label htmlFor="name">Name</label>
        <input type="text" className="border-2 hover:border-black transition py-1 px-3" name="name" defaultValue={user?.name ?? ''} />
        <label htmlFor="bio">Bio</label>
        <textarea
          name="bio"
          cols={30}
          rows={10}
          className="border-2 hover:border-black transition py-1 px-3" 
          defaultValue={user?.bio ?? ''}
        ></textarea>
        <label htmlFor="age">Age</label>
        <input type="text" className="border-2 hover:border-black transition py-1 px-3" name="age" defaultValue={user?.age ?? 0} />
        <label htmlFor="image">Profile Image URL</label>
        <input type="text" className="border-2 hover:border-black transition py-1 px-3"  name="image" defaultValue={user?.image ?? ''} />
        <button type="submit" className="my-2 py-2 px-4 h-fit text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition-colors">Save</button>
      </form>
    </div>
  );
}