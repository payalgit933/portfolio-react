function Header() {
  return (
    <div className="header">
      <div className="logo p-8 bg-blue-200 relative">
      <h2 className="font-bold text-pink-500 text-4xl absolute text-blue-800">ℙ𝕒𝕪𝕒𝕝👩‍💻</h2>

      <div className="float-right">
        <a href="#" className="m-3 p-2 text-blue-1000 font-bold">Home</a>
        <a href="#about" className="m-3 p-2 text-blue-1000 font-bold">About</a>
        <a href="#education" className="m-3 p-2 text-blue-1000 font-bold">Education</a>
        <a href="#skills" className="m-3 p-2 text-blue-1000 font-bold">Skills</a>
        <a href="#contact" className="m-3 p-2 text-blue-1000 font-bold">Contact</a>
      </div>
    </div>
    </div>
  );
}

export default Header;
