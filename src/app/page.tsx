import { getProjects } from "../../sanity/sanity-utils";
import Image from 'next/image';
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  // console.log(projects);

  return (
    <div>
      <h1 className="text-7xl font-extrabold">Hello, I am
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"> Sanskruti!</span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">Hello everyone! Check out this books!</p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Books</h2>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">{projects.map((book) => (
        <Link href={`/projects/${book.slug}`} key={book._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">
          {book.image && (
            <Image
              src={book.image}
              alt={book.name}
              width={750}
              height={300}
              className="object-cover rounded-lg border border-gray-500"
            />
          )}
          <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            {book.name}
          </div>
        </Link>
      ))}
      </div>
    </div>
  )

}
