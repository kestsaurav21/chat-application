import { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {

  const[open, setOpen] = useState(false);
  const[text, setText] = useState("");

  const handleEmoji = e => {
    setText((prev) => prev + e.emoji);
    setOpen(false)
  }


  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Saurabh Kestwal</span>
            <p>Lorem ipsum, dolor sit.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias cumque repellat odit labore inventore nostrum, saepe ipsum est accusamus sequi quaerat sed repellendus similique porro delectus ullam laboriosam. Fuga, accusamus.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias cumque repellat odit labore inventore nostrum, saepe ipsum est accusamus sequi quaerat sed repellendus similique porro delectus ullam laboriosam. Fuga, accusamus.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias cumque repellat odit labore inventore nostrum, saepe ipsum est accusamus sequi quaerat sed repellendus similique porro delectus ullam laboriosam. Fuga, accusamus.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias cumque repellat odit labore inventore nostrum, saepe ipsum est accusamus sequi quaerat sed repellendus similique porro delectus ullam laboriosam. Fuga, accusamus.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias cumque repellat odit labore inventore nostrum, saepe ipsum est accusamus sequi quaerat sed repellendus similique porro delectus ullam laboriosam. Fuga, accusamus.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias cumque repellat odit labore inventore nostrum, saepe ipsum est accusamus sequi quaerat sed repellendus similique porro delectus ullam laboriosam. Fuga, accusamus.</p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder="Type a message ..."
        onChange={(e) => setText(e.target.value)}
        value={text}
        />
        <div className="emoji">
          <img src="./emoji.png" onClick={
            ()=>setOpen(prev => !prev)
          } />
          <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  )
}

export default Chat;