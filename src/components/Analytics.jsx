export const Analytics=()=>{
    return(
        <>
         <div className="w-full max-w-5xl bg-gray-100 rounded-xl shadow-md grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-300 text-center p-6 mt-3">
        
        {/* 1. Registered Companies */}
        <div className="px-4 py-6">
          <h2 className="text-2xl font-bold text-gray-900">50+</h2>
          <p className="text-sm text-gray-600 mt-2">Registered Companies</p>
        </div>

        {/* 2. Happy Clients */}
        <div className="px-4 py-6">
          <h2 className="text-2xl font-bold text-gray-900">100,00+</h2>
          <p className="text-sm text-gray-600 mt-2">Happy Clients</p>
        </div>

        {/* 3. Developers */}
        <div className="px-4 py-6">
          <h2 className="text-2xl font-bold text-gray-900">500+</h2>
          <p className="text-sm text-gray-600 mt-2">Well Known Developers</p>
        </div>

        {/* 4. Service */}
        <div className="px-4 py-6">
          <h2 className="text-2xl font-bold text-gray-900">24/7</h2>
          <p className="text-sm text-gray-600 mt-2">Service</p>
        </div>
      </div>
        </>
    )
}