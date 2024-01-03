import { useState, useEffect } from 'react'
// import './App.css'
import { io } from "socket.io-client";
import ChatMessage from './components/ChatMessage';

const socket = io('ws://localhost:8080');

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Listen for the "message" event from the server
    socket.on("message", (data) => {
      // Update the messages state with the new message
        console.log(data)
      setMessages((prev) => [...prev, data]);
    });
    // Clean up the listener when the component unmounts
    return () => {
      socket.off("message");
    };
  }, []);

  const handleSend = (message) => {
    // Emit the "message" event to the server with the message data
    socket.emit("message", message);
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col max-w-screen-md mx-auto">
      <div className="bg-blue-500 text-white p-4">
        <h1 className="text-xl font-bold">Messenger</h1>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, i) => (
          <ChatMessage key={i} message={message} />
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
}

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

export default App
