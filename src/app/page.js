import HeaderImage from '@/assets/header.jpg'

const callouts = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

export default function Home() {
  return (
    <>
      <main className="flex-grow">
        <section className="bg-gradient px-5 py-32 flex flex-col items-center justify-center min-h-[80vh]">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl text-white text-center">Kaminow</h1>
          <p className="text-lg xl:text-xl text-white my-4 max-w-3xl text-center">Get ready to go product logo with Kaminow, I provide fast and smooth service for logo branding</p>
          <button className='bg-white rounded-xl py-2 px-6 md:text-lg 2xl:text-xl'>
            Contact now
          </button>
          <img src={HeaderImage.src} className='w-96 h-96 rounded-lg mt-10 object-cover' alt='' />
        </section>

        <section className='flex items-center flex-wrap justify-around gap-10 w-full max-w-7xl mx-auto py-20 px-4'>
          <div className='flex-shrink-0 w-96 h-96'>
            <img src={HeaderImage.src} className='filter drop-shadow w-full h-full object-cover rounded-lg' alt="" />
          </div>
          <div className='w-full max-w-xl '>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gradient text-center lg:text-left'>Design Title 3words</h1>
            <p className='text-gray-500 my-4 text-center lg:text-left text-lg'>
              lorem simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
            </p>
          </div>

          <div className='w-full flex items-center justify-around flex-wrap py-10 gap-5'>
            {
              [...Array(5).fill(1).keys()].map((item, i) => <div key={i} className='text-center w-40 h-40 rounded-lg'>
                <img src={HeaderImage.src} className='w-full h-full object-cover rounded-lg' alt="" />
              </div>)
            }
          </div>
        </section>


        <div className="bg-gradient">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center'>Collections</h1>
            <p className='text-gray-100 text-lg mt-2 text-center'>Explore the top category of designs</p>

              <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                {callouts.map((callout) => (
                  <div key={callout.name} className="group relative">
                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                      <img
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-white">
                      <a href={callout.href}>
                        <span className="absolute inset-0" />
                        {callout.name}
                      </a>
                    </h3>
                    <p className="text-base text-gray-50">{callout.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient text-center lg:text-left">Featured Product</p>
                  <p className="mt-6 text-lg leading-8 text-gray-600 text-center lg:text-left">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                    iste dolor cupiditate blanditiis ratione.
                  </p>
                </div>
              </div>
              <img
                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                alt="Product screenshot"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>


        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                  “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                  molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                </p>
              </blockquote>
              <figcaption className="mt-10">
                <img
                  className="mx-auto h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">Judith Black</div>
                  <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="text-gray-600">CEO of Workcation</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>

      </main>
    </>
  )
}