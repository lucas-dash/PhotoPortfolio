import { useState } from 'react';

const Shooting = () => {
  const categories = ['Family', 'Kids', 'NewBorn'];
  const [isActive, setIsActive] = useState(true);

  return (
    <section className="container mx-auto mt-40">
      <h2 className="font-primary text-3xl font-medium pb-14 text-center md:text-left">
        What Am I Shooting?
      </h2>

      <article className="">
        <div
          className="flex gap-10 bg-[#D9CF9E]/70 py-1 px-6 w-max rounded-3xl mx-auto md:mx-0"
          style={{ boxShadow: 'inset 0px 3px 4px #625D5D' }}
        >
          {categories.map((category, index) => {
            return (
              <button
                key={index}
                className={`${
                  isActive ? 'bg-secondary' : ''
                } py-1 px-4 rounded-2xl`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="min-h-[745px] bg-detail rounded-[20px] mt-5"></div>
      </article>
    </section>
  );
};
export default Shooting;
