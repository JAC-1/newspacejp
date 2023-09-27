// exported function that returns a JSX element that warns the user that there was an error fetching the news
export default function NewsError() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl">Error fetching news</h1>
      <h2 className="text-2xl">Please try again later</h2>
    </div>
  );
}
