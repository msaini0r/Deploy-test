import './App.css'

export default function App() {
  return (
    <div>
      <h1 className="border-4 bg-golden_light mt-3">Hello world!</h1>
      <p className="text-xs sm:text-base md:text-lg text-yellow-800 lg:text-8xl mb-2">
        gold
      </p>
      <h1 className="text-cyan-600 decoration-red-700 decoration-wavy leading-normal decoration-2 underline-offset-1 text-4xl font-bold line-through mt-6 mb-5">
        Cyan
      </h1>
      <div style={{ width: '200px' }}>
        <p className="truncate text-rose-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="whitespace-nowrap break-all">
        <p className="text-rose-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="whitespace-nowrap break-all font-bold ">
        <p className="text-rose-700 -mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <p className="text-sm note text-blue-950">how are you?</p>
      <div className="flex flex-col space-y-2">
        <div className="w-6 h-16 bg-yellow-400 ">hello</div>
        <div className="w-6 h-16 bg-rose-400 ">hello</div>
      </div>
      <div className="flex flex-col">
        <div className="w-1/5 bg-yellow-400 ">hello</div>
        <div className="w-4/5 bg-rose-400 mt-5 h-25">hello</div>
      </div>
      {/*  ************************************* FLEX * *************************************/}
      <div className="text-rose-500">Header</div>
      <div className="flex flex-row-reverse bg-purple-800">
        <div className="mr-3">Main Content </div>
        <div>Sidebar</div>
      </div>
      <div className="flex">
        <h2 className="basis-5/12">Red</h2>
        <h2 className="basis-4/12">Yellow</h2>
        <h2 className="basis-3/12">Green</h2>
      </div>
      {/* Important */}
      <div className="flex flex-col md:flex-row">
        <div className="w-32 bg-sky-700">Sidebar</div>
        <div className="w-full bg-yellow-700">Text</div>
      </div>
      <div class="flex flex-col md:flex-row flex-wrap w-full">
        <div className=" w-32 grow">01</div>
        <div className=" w-32 grow">02</div>
        <div className=" w-32 grow">03</div>
        <div className=" w-32 grow">02</div>
        <div className=" w-32 grow">03</div>
      </div>
      <div className="flex items-center justify-evenly">
        <div>Mohit Saini</div>
        <div>
          The winner
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            neque nihil sed atque error dolor facere quibusdam rerum ipsa quia?
          </div>
        </div>
        <div>Another Sidebar</div>
      </div>
      {/* ************************* GRID *************************************  */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-white text-center">
        <div className="p-6 rounded-lg bg-pink-700 ">1</div>
        <div className="p-6 rounded-lg bg-pink-700">2</div>
        <div className="p-6 rounded-lg bg-pink-700">3</div>
        <div className="p-6 rounded-lg bg-pink-700 col-span-2">4</div>
        <div className="p-6 rounded-lg bg-pink-700">5</div>
        <div className="p-6 rounded-lg bg-pink-700">6</div>
      </div>
    </div>
  )
}
