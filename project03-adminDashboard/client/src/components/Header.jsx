
function Header({ title, subtitle }) {
  return (
    <>
        <h1 className="font-bold text-3xl text-gray-300">{title}</h1>
        <p className="text-xl text-gray-400">{subtitle}</p>
    </>
  )
}

export default Header