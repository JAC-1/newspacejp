"use client";

export function ProfileForm({ user }: any) {
  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get("name"),
      age: formData.get("age"),
      image: formData.get("image"),
      bio: formData.get("bio"),
    };

    const res = await fetch("api/user", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content Type": "application/json",
      },
    });

    await res.json();
  };

  return (
    <form
      onSubmit={updateUser}
      className="md:my-20 my-10 text-white rounded flex flex-col "
    >
      <div className="flex flex-row  w-full justify-between" id="name-id">
        <div className="w-2/3 my-9 flex" id="name">
          <div id="Name">
            <label htmlFor="name" className="block md:text-5xl py-5 text-3xl">Name</label>
            <div className="w-full bg-inputGrey md:h-20 h-12 rounded-md ">
              <input
                className="md:text-5xl text-2xl  h-12 md:h-20 rounded-sm text-center bg-transparent  md:py-4 md:px-6  w-full"
                type="text"
                name="name"
                defaultValue={user?.name ?? ""}
              />
            </div>
          </div>
        </div>

        <div className="w-1/4 my-9 flex pl-3" id="id">
          <div>
            <label htmlFor="age" className="block py-5 md:text-5xl text-3xl" id="age">
              Age
            </label>
            <div className="bg-inputGrey md:h-20  h-12 rounded-md w-full">
              <input
                className="md:text-3xl text-2xl md:h-20 h-12 text-center rounded-sm justify-self-center bg-transparent md:p-7 w-full"
                type="text"
                name="age"
                defaultValue={user?.name ?? ""}
              />
            </div>
          </div>
        </div>
      </div>
      <label htmlFor="bio" className="block md:text-5xl text-3xl py-5">Bio</label>
      <div className="w-full bg-inputGrey h-full rounded-md">
        <textarea
          name="bio"
          cols={60}
          rows={5}
          defaultValue={user?.bio ?? ""}
          className="text-2xl rounded-sm w-full bg-transparent p-7"
        >
        </textarea>
      </div>
      <div className="py-10" id="image">
        <label htmlFor="image" className="block md:text-5xl text-3xl py-5">
          Profile Image URL
        </label>
        <div className="w-full bg-inputGrey h-full rounded-md">
          <input
            className="text-2xl rounded-sm w-full bg-transparent p-7"
            type="text"
            name="image"
            defaultValue={user?.image ?? ""}
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold  h-20 py-2 px-16 rounded text-3xl my-10 self-center"
      >
        Save
      </button>
    </form>
  );
}

// TODO:
//    - Move Age next to Name
//    - Profile image upload has an image previewer (placeholder for now) with an upload underneath, centered
//    - Bigger save button.
