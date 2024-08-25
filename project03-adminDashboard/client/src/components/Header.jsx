function Header({ title, subtitle }) {
  return (
    <>
      <h1 className="font-bold text-3xl text-gray-300 uppercase">{title}</h1>
      <p className="text-lg text-gray-400 mb-3">{subtitle}</p>
    </>
  );
}

export default Header;
