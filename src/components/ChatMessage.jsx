
const ChatMessage = ({ message }) => {
  return (
    <div className="flex items-start mb-4">
      {/* <img
        src={`https://i.pravatar.cc/40?u=${sender}`}
        alt={sender}
        className="w-10 h-10 mr-3 rounded-full"
      /> */}
      <div className="flex flex-col">
        <p className="text-xs">{message.id}</p>
        <div className="px-4 py-2 bg-gray-200 rounded-lg">
          <p className="text-sm text-gray-800">{`${message.message}`}</p>
        </div>
        {/* <span className="mt-1 text-xs text-gray-300">{time}</span> */}
      </div>
    </div>
  );
};

export default ChatMessage;