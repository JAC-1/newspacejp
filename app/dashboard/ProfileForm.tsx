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
    <div>
      <form onSubmit={updateUser}>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' defaultValue={user?.name ?? ''} />
        <label htmlFor='bio'>Bio</label>
        <textarea
          name='bio'
          cols={60}
          rows={14}
          defaultValue={user?.bio ?? ''}
        ></textarea>
        <label htmlFor='age'>Age</label>
        <input type='text' name='age' defaultValue={user?.name ?? ''} />
        <label htmlFor='image'>Profile Image URL</label>
        <input type='text' name='image' defaultValue={user?.image ?? ''} />
        <button type='submit'>Save</button>
      </form>
    </div>
  );
}
