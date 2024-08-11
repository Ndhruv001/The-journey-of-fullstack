function MessageBox({message, createdAt}) {
  return (
      <div className="max-w-lg   bg-gray-800 text-white border-2 rounded-lg p-6 ">
        <h2 className="text-xl font-semibold mb-4">{message}</h2>
        <p className="text-base">
          {createdAt}
        </p>
      </div>
  );
}

export default MessageBox;
