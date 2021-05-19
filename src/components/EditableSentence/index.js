import React, { useState, useEffect } from 'react';
import styles from './EditableSentence.module.scss';

const Editable = ({ text, type, placeholder, children, childRef }) => {
  const [isEditing, setEditing] = useState(false);

  useEffect(() => {
    if (childRef && childRef.current && isEditing === true) {
      childRef.current.focus();
    }
  }, [isEditing, childRef]);

  const handleKeyDown = (event, type) => {
    const { key } = event;
    const keys = ['Escape', 'Tab'];
    const enterKey = 'Enter';
    const allKeys = [...keys, enterKey];

    if (
      (type === 'textarea' && keys.indexOf(key) > -1) ||
      (type !== 'textarea' && allKeys.indexOf(key) > -1)
    ) {
      setEditing(false);
    }
  };

  // Make Text Editable on Enter Key Press
  const handleStartEditing = (event) => {
    if (event.key === 'Enter') {
      setEditing(true);
    }
  };

  return (
    <>
      {isEditing ? (
        <span
          className={styles.inputWrapper}
          tabIndex="0"
          onBlur={() => setEditing(false)}
          onKeyDown={(e) => handleKeyDown(e, type)}>
          {children}
        </span>
      ) : (
        <span className={`editable-${type}`} onClick={() => setEditing(true)}>
          <span
            id="editableText"
            tabIndex="0"
            className={styles.editedText}
            onKeyDown={(e) => handleStartEditing(e)}
            suppressHydrationWarning>
            {text || placeholder || 'Editable content'}
          </span>
        </span>
      )}
    </>
  );
};

export default Editable;
