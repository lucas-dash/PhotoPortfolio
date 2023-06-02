import { gallery } from '../utils/gallery';

const Gallery = () => {
  return (
    <section className="min-h-[500px] px-3 sm:px-12 py-20">
      <div className=" columns-2 sm:columns-3 gap-3 space-y-3">
        {gallery.map((image, index) => {
          return (
            <div
              key={index}
              className="place-items-center sm:place-items-start"
            >
              <div className="h-max max-w-full rounded-lg overflow-hidden cursor-pointer shadow-lg shadow-textSecondary/50">
                <img
                  src={image}
                  alt={`image${index}`}
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Gallery;
