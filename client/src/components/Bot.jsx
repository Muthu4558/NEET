import React, { useState } from 'react';
import axios from 'axios';
import { Bot as BotIcon } from 'lucide-react';
import './Bot.css';
import { LiaRobotSolid } from "react-icons/lia";

const Bot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: '👋 Hi! I’m your NEET Study Bot. Ask me anything about Physics, Chemistry, or Biology!' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const GEMINI_API_KEY = 'AIzaSyDOa1mi0fYSJ4_p5qB0r-TLIl7MNuip_gc'; // Add your Gemini API key
  const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

  const toggleChat = () => setOpen(!open);

  const handleSend = async () => {
  if (!input.trim()) return;

  const userMessage = { sender: 'user', text: input };
  setMessages(prev => [...prev, userMessage]);
  setInput('');
  setIsTyping(true);

  const greetingRegex = /^(hi+|hello|hey+|whats up|what's up|heyy|hii+|sup)$/i;
  const farewellRegex = /bye|goodbye|see you/i;

  if (greetingRegex.test(input.trim())) {
    setTimeout(() => {
      setMessages(prev => [...prev, {
        sender: 'bot',
        text: '👋 Hey there! Ask me any NEET topic — I’ll give you a clear, point-wise answer in Physics, Chemistry, or Biology.'
      }]);
      setIsTyping(false);
    }, 1000);
    return;
  }

  if (farewellRegex.test(input)) {
    setTimeout(() => {
      setMessages(prev => [...prev, {
        sender: 'bot',
        text: '👋 Goodbye! Stay focused and keep preparing well for NEET!'
      }]);
      setIsTyping(false);
    }, 1000);
    return;
  }

  try {
    const response = await axios.post(GEMINI_API_URL, {
      contents: [{
        role: 'user',
        parts: [{
          text: `
You're a helpful assistant for NEET students. Respond to the question below with a **point-by-point** format. 
Avoid long paragraphs. Keep each point short and numbered (e.g., 1., 2., 3., etc.).

Question: "${input}"
          `.trim()
        }]
      }]
    });

    let rawText = response?.data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that.";

    // Strip Markdown characters and extra spaces
    rawText = rawText.replace(/\*\*|\*/g, '').trim();

    // Split into points based on numbered pattern (1., 2., etc.)
    const pointLines = rawText
      .split(/(?=\d+\.\s)/) // split when "1. ", "2. ", etc. appears
      .map(line => `🔹 ${line.trim()}`)
      .join('\n');

    setMessages(prev => [...prev, { sender: 'bot', text: pointLines }]);
  } catch (err) {
    setMessages(prev => [...prev, {
      sender: 'bot',
      text: '⚠️ Error contacting Gemini API. Please try again later.'
    }]);
  }

  setIsTyping(false);
};



  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Bubble Message */}
      {!open && (
        <div className="bot-greeting-bubble animate-bounce">
          👋 Hey, I'm here to help you!
        </div>
      )}

      {/* Floating Bot Icon */}
      <div className="bot-toggle-btn" onClick={toggleChat}>
        <BotIcon size={28} />
      </div>

      {/* Chat Box */}
      {open && (
        <div className="whatsapp-container">
          <div className="chat-header">
            <span className='flex items-center gap-2'><LiaRobotSolid  size={28}/>AI-Powered Study Bot</span>
            <button className="close-btn" onClick={toggleChat}>×</button>
          </div>
          <div className="chat-body">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="message bot typing">
                <span className="dot"></span><span className="dot"></span><span className="dot"></span>
              </div>
            )}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your NEET question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button onClick={handleSend}>➤</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Bot; 