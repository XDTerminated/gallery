import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://4tn74p3c9m.ufs.sh/f/Cu5EnWasMgW0K4PYVL5taruYwplZCEB9DPjLb1zQfsSR7OcH",
  "https://4tn74p3c9m.ufs.sh/f/Cu5EnWasMgW00QUR4ZXmuH8q495Qi31aj7zcCFsUOITxVfwl",
  "https://4tn74p3c9m.ufs.sh/f/Cu5EnWasMgW0FXLoUBObVLKmMhlBOkz4CgJ7uy2rtPxUqH1d",
  "https://4tn74p3c9m.ufs.sh/f/Cu5EnWasMgW0xVy30gilDM1WpyL5E8fHsSoIG3j9rYRBiNgV",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
