import './gpt4.css';
import useAutosizeTextArea from '../../hooks/useAutosizeTextArea';
import { useState, useRef } from 'react';

const GPT4 = () => {
  const [value, setValue] = useState('');
  const textAreaRef = useRef(null);
  const textAreaMaxHeight = 300;

  useAutosizeTextArea(textAreaRef.current, value, textAreaMaxHeight);

  const handleChange = (evt) => {
    const val = evt.target?.value;
    setValue(val);
  };

  return (
    <div className="gpt4-container">
      <h1>GPT4</h1>
      <ul className="feed"></ul>
      <div className="bottom-section">
        <div className="input-container">
          <textarea
            id="prompt"
            placeholder="Type a message"
            rows={1}
            ref={textAreaRef}
            onChange={handleChange}
            value={value}
          ></textarea>
          <div id="input-container__submit">➢</div>
        </div>
        <p>This is GPT 4 model.</p>
      </div>
    </div>
  );
};

export default GPT4;
