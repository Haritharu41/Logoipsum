function Navbar() {
  return (
    <nav className="bg-bg-primary px-6 md:px-20 py-4 font-roboto font-medium">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="Logo">
          <img src="logo.png"  alt="logo" className="h-8 cursor-pointer" />
        </div>

        <div className="Tab_bar cursor-pointer flex flex-col sm:flex-row items-center gap-4 text-text-primary text-base md:text-lg">
          <h1>Products</h1>
          <h1>Solutions</h1>
          <h1>Help center</h1>
          <h1>Get started</h1>
        </div>

        <div className="Button cursor-pointer flex flex-col sm:flex-row items-center gap-3 text-button-primary">
          <button className="px-4 py-2">Login</button>
          <button className="text-bg-primary px-5 py-2 bg-button-primary rounded-2xl">
            Request a demo
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
