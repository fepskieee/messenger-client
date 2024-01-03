
const ChatMessage = ({ message }) => {
  return (
    <div className="flex items-start mb-4">
      {/* <img
        src={`https://i.pravatar.cc/40?u=${sender}`}
        alt={sender}
        className="w-10 h-10 rounded-full mr-3"
      /> */}
      <div className="flex flex-col">
        <div className="bg-gray-200 rounded-lg px-4 py-2">
          <p className="text-sm text-gray-800">{`${message.id}: ${message.message}`}</p>
        </div>
        {/* <span className="text-xs text-gray-300 mt-1">{time}</span> */}
      </div>
    </div>
  );
};

export default ChatMessage;