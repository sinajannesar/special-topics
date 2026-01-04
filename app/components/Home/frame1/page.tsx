export default function HeroSection() {
    return (
      <div className='min-h-screen flex flex-row items-center bg-linear-to-b  to-white'>
        {/* Left Side */}
        <div className='w-1/2 px-12 py-20'>
          <h1 className='text-6xl font-bold text-gray-900 leading-tight mb-6'>
            Here begins the <br /> journey
          </h1>
          <p className='text-gray-600 text-lg leading-relaxed'>
            We offer a diverse selection of dresses for your ceremonies, providing you with ample choices to suit your preferences
          </p>
        </div>
  
        {/* Right Side - Grid Layout */}
        <div className='w-1/2 px-8 '>
          <div className='grid grid-cols-2 gap-6'>
            {/* Top Purple Card */}
            <div className=' flex flex-col  bg-linear-to-br from-purple-500 to-purple-600 rounded-bl-4xl p-8 text-white shadow-lg'>
              <p className='text-5xl font-bold mb-2'>+2,564</p>
              <p className='text-lg'>Satisfied <br /> customers</p>
            </div>
  
            {/* Image Cards */}
            <div className='bg-white rounded-3xl overflow-hidden shadow-lg aspect-square flex items-center justify-center bg-linear-to-br from-amber-100 to-amber-50'>
              <div className='w-full h-full bg-linear-to-b from-amber-200 to-amber-100'></div>
            </div>
  
            <div className='bg-white rounded-3xl overflow-hidden shadow-lg aspect-square flex items-center justify-center bg-linear-to-br from-pink-100 to-pink-50'>
              <div className='w-full h-full bg-linear-to-b from-pink-200 to-pink-100'></div>
            </div>
  
            <div className='col-span-2 bg-white rounded-3xl overflow-hidden shadow-lg aspect-video flex items-center justify-center bg-linear-to-br from-purple-100 to-purple-50'>
              <div className='w-full h-full bg-linear-to-b from-purple-200 to-purple-100'></div>
            </div>
  
            {/* Bottom Dark Card */}
            <div className='col-span-2 bg-linear-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white shadow-lg'>
              <p className='text-5xl font-bold mb-2'>+1,884</p>
              <p className='text-lg'>Satisfied <br /> customers</p>
            </div>
          </div>
        </div>
      </div>
    );
  }