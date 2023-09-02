import { useEffect } from 'react';

// Updates the height of a <textarea> when the value changes.
const useAutosizeTextArea = (textAreaRef, value, maxHeight) => {
  useEffect(() => {
    if (textAreaRef) {
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      textAreaRef.style.height = 'auto';
      const scrollHeight = textAreaRef.scrollHeight;

      // Set the maximum height limit
      const limitedHeight = Math.min(scrollHeight, maxHeight);

      // Set the height of the textarea
      textAreaRef.style.height = limitedHeight + 'px';

      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.

      // textAreaRef.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value, maxHeight]);
};

export default useAutosizeTextArea;
