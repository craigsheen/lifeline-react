import * as React from 'react';
import Modal from 'react-modal';

const Lifeline: React.FC = () => {
  const [selectedOption, setSelectedOption] = React.useState('');

  const buttonStyles = {
    backgroundColor: 'white',
    border: '2px solid #003575',
    borderRadius: '8px',
    color: '#003575',
    cursor: 'pointer',
    fontWeight: '700',
    marginBottom: '10px',
    padding: '10px',
  };

  const mutedButtonStyles = {
    backgroundColor: '#D9D9D9',
    border: '1px solid black',
    borderRadius: '8px',
    color: 'black',
    cursor: 'pointer',
    marginBottom: '10px',
    padding: '10px',
  };

  const paragraphStyles = {
    color: '#003575',
  }

  const headingStyles = {
    color: 'black'
  }

  const panelStyles = {
    backgroundColor: '#E8F3FE',
    borderRadius: '8px',
  }

  const lifelineLogo = (
    <svg viewBox="0 0 231.816 49.155" height="49.155" width="231.816" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.347 21.42a3.458 3.458 0 0 0 2.645 6.387 3.456 3.456 0 1 0-2.645-6.387m8.348 11.12a3.457 3.457 0 1 0-6.388 2.647 3.457 3.457 0 0 0 6.388-2.647M17.646 16.687a3.457 3.457 0 1 0 6.387-2.647 3.457 3.457 0 0 0-6.387 2.647m-.905.9a3.457 3.457 0 1 0-2.644 6.39 3.457 3.457 0 0 0 2.644-6.39m18.5 7.663a3.456 3.456 0 1 0-2.647 6.387 3.456 3.456 0 0 0 2.647-6.387m-11.21 9.936a3.459 3.459 0 0 0-1.87-4.517 3.457 3.457 0 1 0 1.871 4.518m1.275-21.145a3.457 3.457 0 1 0 6.387 2.645 3.457 3.457 0 0 0-6.387-2.645M23.255 6.65A3.456 3.456 0 1 0 25.902.264a3.456 3.456 0 0 0-2.647 6.387m2.646 35.853a3.457 3.457 0 1 0-2.645 6.389 3.457 3.457 0 0 0 2.645-6.389m-11.85-.86a3.456 3.456 0 1 0 4.889 4.888 3.456 3.456 0 0 0-4.888-4.888M35.105 7.507a3.456 3.456 0 1 0-4.889-4.886 3.456 3.456 0 0 0 4.89 4.886M8.521 32.66a3.457 3.457 0 1 0-6.914.002 3.457 3.457 0 0 0 6.914-.002m32.112-16.164a3.458 3.458 0 0 0 6.914 0 3.457 3.457 0 0 0-6.913 0M7.51 18.94a3.458 3.458 0 0 0-4.888-4.888A3.457 3.457 0 1 0 7.51 18.94m34.137 11.277a3.458 3.458 0 0 0 4.888 4.888 3.457 3.457 0 0 0-4.888-4.888M16.496 8.521a3.456 3.456 0 1 0 .002-6.913 3.456 3.456 0 0 0-.002 6.913M32.66 40.633a3.458 3.458 0 0 0 0 6.914 3.457 3.457 0 1 0 0-6.913m5.528-4.315a3.457 3.457 0 1 0 2.644 6.385 3.457 3.457 0 0 0-2.644-6.385M10.965 12.837a3.456 3.456 0 1 0-4.517-1.87 3.456 3.456 0 0 0 4.517 1.87m36.055 8.547a3.457 3.457 0 1 0-2.644 6.39 3.457 3.457 0 0 0 2.644-6.39M6.65 25.9a3.457 3.457 0 1 0-6.389-2.644 3.457 3.457 0 0 0 6.39 2.644m29.668-14.933a3.456 3.456 0 1 0 6.387-2.645 3.456 3.456 0 0 0-6.387 2.645M12.837 38.189a3.457 3.457 0 1 0-6.388 2.649 3.457 3.457 0 0 0 6.388-2.649m1.26-12.937a3.457 3.457 0 1 0 2.647 6.384 3.457 3.457 0 0 0-2.648-6.384m23.014-5.793a3.457 3.457 0 1 0-6.383 2.647 3.457 3.457 0 0 0 6.383-2.647m55.177-8.079a2.932 2.932 0 0 0 2.93-2.932V4.784a2.933 2.933 0 0 0-5.866 0v3.664c0 1.62 1.315 2.93 2.936 2.932m.079 2.859a2.932 2.932 0 0 0-2.932 2.932v29.051a2.933 2.933 0 0 0 5.865 0v-29.05a2.933 2.933 0 0 0-2.933-2.933m65.905-2.859a2.932 2.932 0 0 0 2.931-2.932V4.784a2.933 2.933 0 0 0-5.866 0v3.664c0 1.62 1.315 2.93 2.935 2.932m.08 2.859a2.932 2.932 0 0 0-2.933 2.932v29.051a2.933 2.933 0 0 0 5.865 0v-29.05a2.933 2.933 0 0 0-2.932-2.933m40.06 32.02-.052-15.674c-.008-9.207-7.46-16.67-16.666-16.67-9.204 0-16.667 7.466-16.667 16.67l.011 15.632-.004.005a2.933 2.933 0 0 0 5.865 0v-4.944l.003-.003V30.561c0-5.965 4.836-10.803 10.8-10.803 5.967 0 10.795 4.837 10.8 10.803l.029 8.949h.005v.618l.009 6.094a2.932 2.932 0 0 0 5.863.035v.002m-47.71-.037a2.933 2.933 0 0 1-5.865 0V4.44a2.932 2.932 0 1 1 5.865 0v41.782m-67.05-2.932H73.213c-4.518 0-8.02-3.263-8.022-7.329V4.674C65.19 3.119 64.039 1.86 62.42 1.86c-1.62 0-3.094 1.26-3.094 2.814v31.295c.008 6.94 6.148 13.166 13.853 13.185h10.468a2.914 2.914 0 0 0 2.932-2.91c-.001-1.62-1.313-2.954-2.932-2.954m43.543-22.031c1.974 0 3.825.522 5.426 1.432l-14.999 15a10.945 10.945 0 0 1-1.433-5.426c-.002-6.08 4.93-11.006 11.006-11.006zm13.407 15.828a2.937 2.937 0 0 0-4.043.955 10.994 10.994 0 0 1-14.79 3.795l15.846-15.852c1.93-1.934 1.913-5.08-.037-7.031l-.698-.521a16.799 16.799 0 0 0-9.684-3.058c-9.327 0-16.894 7.56-16.891 16.89 0 9.32 7.564 16.886 16.89 16.89 6.074 0 11.398-3.211 14.374-8.026a2.94 2.94 0 0 0-.967-4.042m76.412-15.828c1.973 0 3.823.522 5.425 1.432l-14.998 15a10.945 10.945 0 0 1-1.434-5.426c0-6.08 4.93-11.006 11.007-11.006zm13.405 15.828a2.935 2.935 0 0 0-4.04.955h-.004a10.99 10.99 0 0 1-14.788 3.795l15.845-15.852c1.93-1.934 1.914-5.08-.037-7.031l-.697-.521a16.8 16.8 0 0 0-9.685-3.058c-9.326 0-16.893 7.56-16.89 16.89 0 9.32 7.564 16.886 16.89 16.89 6.074 0 11.397-3.211 14.374-8.026a2.941 2.941 0 0 0-.969-4.042"></path><path d="M117.136 1.825h-4.419c-6.951.002-13.191 6.16-13.194 13.882h-.004v30.38c0 1.693 1.314 3.067 2.933 3.068 1.619 0 2.932-1.375 2.932-3.067V21.742h5.46a2.933 2.933 0 0 0 0-5.865h-5.46v-.165h.003c0-4.52 3.265-8.022 7.333-8.022h4.416a2.933 2.933 0 0 0 0-5.865"></path>
    </svg>
  )

  const modalStyles = {

  }

  if (selectedOption === 'good') {
    <section>
      <p style={paragraphStyles}>
        That's great to hear! Don't forget Lifeline are always here if you need us.
      </p>
    </section>
  }

  if (selectedOption === 'average') {
    <section>
      <Modal
        isOpen={true}
        style={modalStyles}
        contentLabel="Lifeline Modal"
      >
        <button >close</button>
        <h2>I'm feeling average</h2>
        <div style={panelStyles}>
          {lifelineLogo}
          <p>It's never too early to take steps to manage your mental health.</p>
          <p>You can connect with a Lifeline Crisis Supporter via phone, text or online chat at anytime.</p>
          <p>Lifeline also offer an online Support Toolkit, full of practical information, tools, techniques, stories and more, to help you understand what you're feeling and find ways to help.</p>
        </div>
        <button
          style={buttonStyles}
          onClick={() => setSelectedOption('lifelineSupport')}
        >
          Contact Lifeline directly<br />
          <span>Phone, Text or Chat</span>
        </button>
        <button
          style={buttonStyles}
          onClick={() => setSelectedOption('openExternal')}
        >
          Access online Support Toolkit<br />
          <span>lifeline.org.au/toolkit</span>
        </button>
        <button
          style={mutedButtonStyles}
          onClick={() => setSelectedOption('lifelineSupportToolkit')}
        >
          Learn more about support toolkit
        </button>
      </Modal>
    </section>
  }

  if (selectedOption === 'bad') {
   
  }

  return (
    <section style={{ maxWidth: '300px' }}>
      <p style={headingStyles}>How are you feeling right now?</p>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <a
          style={buttonStyles}
          onClick={() => setSelectedOption('good')}
        >
          I'm feeling good!
        </a>
        <a
          style={buttonStyles}
          onClick={() => setSelectedOption('average')}
        >
          I'm feeling average
        </a>
        <a
          style={buttonStyles}
          onClick={() => setSelectedOption('bad')}
        >
          I'm not okay
        </a>
      </div>
    </section>
  );
};

export default Lifeline;
