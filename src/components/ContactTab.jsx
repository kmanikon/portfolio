import React from 'react';
import { Button } from '@mantine/core';

export default function ContactTab({ mobile = false }) {
  const [buttonHover, setButtonHover] = React.useState(false);
  const submitButtonStyle = {
    alignSelf: 'center',
    backgroundColor: buttonHover ? '#1d4ed8' : '#1e40af',
    color: '#ffffff',
    border: 'none',
    transition: 'background-color 0.025s ease',
  };

  return (
    <div
      style={{
        width: '100%',
        //minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '24px 24px',
      }}
    >
      <form
        method="POST"
        action="https://getform.io/f/b38fe819-4ff7-4e08-a1a8-b81ba50cad1b"
        target="_blank"
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '640px',
          padding: '24px 12px',
        }}
      >
        <div style={{ paddingBottom: '28px', textAlign: 'center' }}>
          <p
            style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#f8fafc',
              margin: 0,
            }}
          >
            Contact
          </p>
          <p
            style={{
              color: '#cbd5e1',
              paddingTop: '16px',
              margin: 0,
              lineHeight: 1.8,
            }}
          >
            Feel free to shoot me an email -{' '}
            <a
              href="mailto:kiranmanikonda123@gmail.com"
              style={{ color: '#38bdf8', textDecoration: 'underline' }}
            >
              kiranmanikonda123@gmail.com
            </a>
          </p>
        </div>

        <input
          style={inputStyle}
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          style={inputStyle}
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          style={{ ...inputStyle, minHeight: '220px', resize: 'vertical' }}
          name="message"
          rows="10"
          placeholder="Message"
        />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            type="submit"
            size="md"
            radius="md"
            variant="filled"
            w="140px"
            style={submitButtonStyle}
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

const inputStyle = {
  backgroundColor: '#0f172a',
  color: '#e2e8f0',
  border: '1px solid rgba(148, 163, 184, 0.22)',
  borderRadius: '8px',
  padding: '16px 18px',
  fontSize: '1rem',
  marginBottom: '18px',
  outline: 'none',
};
