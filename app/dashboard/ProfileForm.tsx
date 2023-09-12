"use client";

import StyledLabel from "../components/Bio/StyledLabel";
import StyledInput from "../components/Bio/StyledInput";

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

    const res = await fetch("http://localhost:3000/api/user", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content Type": "application/json",
      },
    });

    await res.json();
  };

  return (
    <div className="w-full md:max-w-md max-w-xs mx-10 self-center mt-10">
      <form onSubmit={updateUser} className="">
        <div className="grid grid-cols-3 w-full ">
          <div className="col-span-2 my-10">
            <StyledLabel name="name" />
            <StyledInput name="name" defaultValue={user?.name ?? ""} />
          </div>
          <div className="col-end pl-3 my-10">
            <StyledLabel name="age" />
            <StyledInput name="age" defaultValue={user?.age ?? ""} />
          </div>
          <div className="col-span-full mb-5">
            <StyledLabel name="bio" />
            <textarea
              className="appearance-none bg-neutral-900 focus:outline-none focus:shadow-outline focus:border-neutral-500 focus:border-2 rounded w-full py-2 px-3  text-grey-700 leading-tight "
              name="bio"
              cols={60}
              rows={14}
              defaultValue={user?.bio ?? ""}
            >
            </textarea>
          </div>
        </div>
        <div className="col-span-full">
          <StyledLabel name="image" />
          <StyledInput name="image" defaultValue={user?.image ?? ""} />
        </div>
        <button
          className="transition duration-500 bg-green-700 hover:bg-green-500 hover:border-none text-white font-bold py-2 px-4 my-10 rounded"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
}
