import { tw } from "twind"
import { PostsType } from '../utils/locate.ts'

interface ContentProps {
  posts: PostsType;
}

export default function Content(props: ContentProps) {
  return (
    <section class="lg:px-36 lg:py-32 sm:px-20 px-10 py-28 space-y-4">
      <p class="opacity-50 font-semibold">
        Total of{" "}
        {Object.values(props.posts).map((p) => p.length).reduce(
          (a: number, b: number) => a + b,
          0,
        )} posts
      </p>
      <div class="flex flex-wrap items-center lg:justify-start justify-center gap-5">
        {Object.entries(props.posts).map(([key, value]) =>
          value.map((post) => {
            return (
              <a
                href={`/${key}/${post?.url}`}
                class="bg-white lg:w-80 w-full h-96 rounded shadow-md overflow-hidden cursor-pointer relative sm:flex lg:block "
              >
                <img
                  class="lg:h-1/2 sm:h-full h-1/2 lg:w-full sm:w-1/2 w-full bg-cover bg-center"
                  src={`/thumbnails/${post?.url}.jpg`}
                  alt={post?.title}
                />
                <div class="my-4 mx-3 space-y-4">
                  <span
                    class="border border-red-500 rounded-sm text-red-500 px-2 py-1 opacity-60 capitalize"
                  >
                    {key}
                  </span>
                  <h3 class="lg:text-lg sm:text-3xl text-xl capitalize">
                    {post?.title}
                  </h3>
                  <p
                    class="absolute bottom-1 lg:left-0 sm:right-0 mx-2 text-xs text-black opacity-40"
                  >
                    By&nbsp;
                    <span class="font-semibold">Guilherme Guerreiro</span>
                    <span class="mx-2">•</span>
                    {
                      typeof(post?.date) === "string" ?  new Date(post.date).toDateString() : post?.date?.toDateString()
                    }
                  </p>
                </div>
              </a>
            );
          })
        )}
      </div>
    </section>
  );
}
