import Button from '../components/ButtonComponent';


function Navbar({buttonName, content,onClick }){

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center border-b-2">
      <h1 className="text-2xl font-bold">True Feedback</h1>
      {content}
      <Button onClick={onClick}>{buttonName}</Button>
    </nav>
  );
}

export default Navbar;