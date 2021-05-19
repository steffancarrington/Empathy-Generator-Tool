import React, { useState, useRef } from 'react';
import styles from './GenerateSentence.module.scss';

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
  // const [editableDimension, setEditableDimension] = useState(objective);

  // Create a reference using use reference and add the ref={inputRef} to input element
  const inputRef = useRef();
  // State for Input
  const [task, setTask] = useState('');

  const editableTest = (
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

  return (
    <>
      <p className={styles.sentence} aria-live="polite" suppressHydrationWarning={true}>
        {name}, {age} years old, would like to find {editableTest} whilst being {biological}
        {toggleActive && `, ${cultural} and `}
        {toggleActive && organisational}
      </p>
    </>
  );
};

export default GenerateSentence;
