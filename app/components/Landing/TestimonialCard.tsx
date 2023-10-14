export default function TestimonialCard() {
  return (
    <div className="md:w-1/3 md:h-72 md:my-20 my-5 md:mx-3 self-center w-64 bg-white rounded-lg shadow-lg md:p-4 pt-2 pb-7 px-7">
      <img
        className="w-fit h-24  rounded-full mx-auto m-5"
        src="https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
      <h2 className="text-center font-bold text-gray-900">Daniel Clifford</h2>
      <p className="text-center text-gray-500">Verified Graduate</p>
      <p className="text-center text-gray-700">
        “This app helped me improve my Japanese reading comprehension by 250%! ”
      </p>
    </div>
  );
}
