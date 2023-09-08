'use client';

export function ProfileForm({ user }: any) {
  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get('name'),
      age: formData.get('age'),
      image: formData.get('image'),
      bio: formData.get('bio'),
    };

    const res = await fetch('api/user', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content Type': 'application/json',
      },
    });

    await res.json();
  };

  return (
      <form onSubmit={updateUser} className='my-20 text-white rounded flex flex-col '>
      <div className="w-full my-9 flex">
        <div id="Name">
          <label htmlFor='name' className="block text-5xl py-5">Name</label>
          <div className="w-full bg-inputGrey h-full rounded-md">
            <input className='text-3xl rounded-sm justify-self-center bg-transparent p-7 w-full' type='text' name='name' defaultValue={user?.name ?? ''} />
          </div>
        </div>
        </div>
        <label htmlFor='bio' className="block text-5xl py-5">Bio</label>
        <div className="w-full bg-inputGrey h-full rounded-md">
          <textarea
            name='bio'
            cols={60}
            rows={5}
            defaultValue={user?.bio ?? ''}
          className="text-2xl rounded-sm w-full bg-transparent p-7"
          ></textarea>
        </div>
        <label htmlFor='age'className="block text-5xl py-5">Age</label>
        <div className="w-full bg-inputGrey h-full rounded-md">
          <input className='text-3xl rounded-sm justify-self-center bg-transparent p-7 w-full' type='text' name='age' defaultValue={user?.name ?? ''} />
        </div>
        <label htmlFor='image'>Profile Image URL</label>
        <input type='text' name='image' defaultValue={user?.image ?? ''} />
        <button type='submit'>Save</button>
      </form>
  );
}

// TODO: 
//    - Move Age next to Name
//    - Profile image upload has an image previewer (placeholder for now) with an upload underneath, centered
//    - Bigger save button.

