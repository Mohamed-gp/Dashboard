
const Preloader = () => {
  return (
    <div className="preloader fixed left-0 top-0 w-screen h-screen">
        <div className="loader absolute w-20 h-20 top-1/2 left-1/2 border-10 border-blue-500 border-r-transparent animate-spin rounded-full">
        </div>
    </div>
  )
}

export default Preloader