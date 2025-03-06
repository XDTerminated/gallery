import Link from "next/link";

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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
