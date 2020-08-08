import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({ name, label, ...rest }) => (
  <div className="textarea-block">
    <label htmlFor={name}>{label}</label>
    <textarea name={name} id={name} {...rest} />
  </div>
);

export default Textarea;