
const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center p-4">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 border rounded-lg px-4 py-2 mr-4 focus:outline-none focus:ring"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-lg px-4 py-2"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;