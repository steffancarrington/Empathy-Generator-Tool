import React, { useState, useRef } from 'react';
import styles from './GenerateSentence.module.scss';
import Close from '../../../public/close.svg';

// Editable Component
import Editable from '../EditableSentence';

const GenerateSentence = ({
  name,
  objective,
  age,
  biological,
  cultural,
  organisational,
  toggleActive
}) => {
  // Create a reference using use reference and add the ref={inputRef} to input element
  const inputRef = useRef();
  // State for Input
  const [task, setTask] = useState('');

  const editableText = (
    <Editable text={task} placeholder={objective} childRef={inputRef} type="input">
      <input
        ref={inputRef}
        type="text"
        name="task"
        className=""
        placeholder=""
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
    </Editable>
  );

  const onClearText = () => {
    setTask('');
    document.getElementById('editableText').focus();
  };

  const clearTextBtn = (
    <button className={styles.clearBtn} type="button" onClick={() => onClearText()}>
      <span className="hidden-v">Clear edited text</span>
      <Close className={styles.clearIcon} aria-hidden="true" />
    </button>
  );

  return (
    <>
      <p className={styles.sentence} aria-live="polite" suppressHydrationWarning={true}>
        {name}, {age} years old, would like to find {editableText}
        {task.length > 0 ? clearTextBtn : ''} whilst being {biological}
        {toggleActive && `, ${cultural} and `}
        {toggleActive && organisational}
      </p>
    </>
  );
};

export default GenerateSentence;
