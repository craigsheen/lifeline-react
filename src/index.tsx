import * as React from 'react';
import Modal from 'react-modal';
import Logo from './logo';
import './styles.css';

const Lifeline: React.FC = () => {
  const [selectedOption, setSelectedOption] = React.useState('');

  const modalStyles = {
    content: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }
  }

  if (selectedOption === 'lifelineSupportToolkit') {
    return (
      <section className='section'>
        <Modal
          isOpen={true}
          style={modalStyles}
          contentLabel="Lifeline Modal"
        >
          <a onClick={() => setSelectedOption('average')} style={{ cursor: 'pointer' }}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="30" height="30" viewBox="0 0 256 256" xmlSpace="preserve">
              <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                <path d="M 45 90 c 24.813 0 45 -20.187 45 -45 C 90 20.187 69.813 0 45 0 C 20.187 0 0 20.187 0 45 C 0 69.813 20.187 90 45 90 z M 45 7 c 20.953 0 38 17.047 38 38 S 65.953 83 45 83 S 7 65.953 7 45 S 24.047 7 45 7 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 53.478 65.456 c 0.896 0 1.792 -0.342 2.475 -1.025 c 1.367 -1.366 1.367 -3.583 0 -4.949 L 41.472 45 l 14.481 -14.481 c 1.367 -1.366 1.367 -3.583 0 -4.95 c -1.367 -1.366 -3.583 -1.365 -4.95 0 L 34.048 42.525 c -1.367 1.366 -1.367 3.583 0 4.949 l 16.955 16.956 C 51.687 65.114 52.583 65.456 53.478 65.456 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
              </g>
            </svg>
          </a>
          <div style={{ marginTop: '20px'}}>
            <Logo />
          </div>
          <h1 className='heading'>Lifeline Support Toolkit</h1>
          <p>Lifeline's Support Toolkit is a free online tool to help you find ways to improve how you're feeling. It includes;</p>
          <ul>
            <li>Practical, plain language information and advice</li>
            <li>Evidence based short term and long term strategies for managing your mental health</li>
            <li>Curated tools, techniques and apps you can use on your own to help</li>
            <li>Real stories of other people's experiences</li>
            <li>Other support services you can connect with.</li>
          </ul>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <a
              className='button'
              onClick={() => setSelectedOption('openExternal')}
            >
              Access online Support Toolkit<br />
              <span style={{ fontSize: '12px', fontWeight: 400 }}>lifeline.org.au/toolkit</span>
            </a>
          </div>
        </Modal>
      </section>
    )
  }

  if (selectedOption === 'lifelineCrisisSupport') {
    return (
      <section className='section'>
        <Modal
          isOpen={true}
          style={modalStyles}
          contentLabel="Lifeline Modal"
        >
          <a onClick={() => setSelectedOption('average')} style={{ cursor: 'pointer' }}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="30" height="30" viewBox="0 0 256 256" xmlSpace="preserve">
              <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                <path d="M 45 90 c 24.813 0 45 -20.187 45 -45 C 90 20.187 69.813 0 45 0 C 20.187 0 0 20.187 0 45 C 0 69.813 20.187 90 45 90 z M 45 7 c 20.953 0 38 17.047 38 38 S 65.953 83 45 83 S 7 65.953 7 45 S 24.047 7 45 7 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 53.478 65.456 c 0.896 0 1.792 -0.342 2.475 -1.025 c 1.367 -1.366 1.367 -3.583 0 -4.949 L 41.472 45 l 14.481 -14.481 c 1.367 -1.366 1.367 -3.583 0 -4.95 c -1.367 -1.366 -3.583 -1.365 -4.95 0 L 34.048 42.525 c -1.367 1.366 -1.367 3.583 0 4.949 l 16.955 16.956 C 51.687 65.114 52.583 65.456 53.478 65.456 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
              </g>
            </svg>
          </a>
          <div style={{ marginTop: '20px'}}>
            <Logo />
          </div>
          <h1 className='heading'>Lifeline Crisis Toolkit</h1>
          <p>Lifeline is free and confidential. You can speak with a trained Crisis Supporter over the phone, or through text.</p>
          <ul>
            <li>You can choose to remain anonymous.</li>
            <li>Talk about whatever's on your mind, nothing is too big or too small.</li>
            <li>Your Crisis Supporter will listen, provide support, and can work with you to explore your options for further help.</li>
          </ul>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <a
              className='button'
              href="tel: 13 11 14"
            >
              Call Lifeline<br />
              <span style={{ fontSize: '12px', fontWeight: 400 }}>13 11 14</span>
            </a>
            <a
              className='button'
              href="sms:+61477131114?&body=Hi%2C%20I%E2%80%99d%20like%20to%20connect%20with%20a%20Lifeline%20Crisis%20Supporter."
            >
              Text Lifeline<br />
              <span style={{ fontSize: '12px', fontWeight: 400 }}>0477 13 11 14</span>
            </a>
            <a
              className='button'
              href='https://lifeline.org.au/crisis-chat'
              target='_blank'
            >
              Chat with Lifeline<br />
              <span style={{ fontSize: '12px', fontWeight: 400 }}>lifeline.org.au/crisis-chat</span>
            </a>
          </div>
        </Modal>
      </section>
    )
  }

  if (selectedOption === 'openExternal') {
    return (
      <iframe src='https://mellifluous-empanada-24e5c2.netlify.app' style={{ height: '100vh', width: '100vw' }} />
    )
  }

  if (selectedOption === 'good') {
    return (
      <section className='section'>
        <p>
          That's great to hear! Don't forget Lifeline are always here if you need us.
        </p>
      </section>
    )
  }

  if (selectedOption === 'average') {
    return (
      <section className='section'>
        <Modal
          isOpen={true}
          style={modalStyles}
          contentLabel="Lifeline Modal"
        >
          <a onClick={() => setSelectedOption('')} style={{ cursor: 'pointer' }}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="30" height="30" viewBox="0 0 256 256" xmlSpace="preserve">
              <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                <path d="M 45 90 c 24.813 0 45 -20.187 45 -45 C 90 20.187 69.813 0 45 0 C 20.187 0 0 20.187 0 45 C 0 69.813 20.187 90 45 90 z M 45 7 c 20.953 0 38 17.047 38 38 S 65.953 83 45 83 S 7 65.953 7 45 S 24.047 7 45 7 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 53.478 65.456 c 0.896 0 1.792 -0.342 2.475 -1.025 c 1.367 -1.366 1.367 -3.583 0 -4.949 L 41.472 45 l 14.481 -14.481 c 1.367 -1.366 1.367 -3.583 0 -4.95 c -1.367 -1.366 -3.583 -1.365 -4.95 0 L 34.048 42.525 c -1.367 1.366 -1.367 3.583 0 4.949 l 16.955 16.956 C 51.687 65.114 52.583 65.456 53.478 65.456 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
              </g>
            </svg>
          </a>
          <h1 className='heading'>I'm feeling average</h1>
          <div className='panel'>
            <Logo />
            <p>It's never too early to take steps to manage your mental health.</p>
            <p>You can connect with a Lifeline Crisis Supporter via phone, text or online chat at anytime.</p>
            <p>Lifeline also offer an online Support Toolkit, full of practical information, tools, techniques, stories and more, to help you understand what you're feeling and find ways to help.</p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <a
                className='button'
                onClick={() => setSelectedOption('lifelineCrisisSupport')}
              >
                Contact Lifeline directly<br />
                <span style={{ fontSize: '12px', fontWeight: 400 }}>Phone, Text or Chat</span>
              </a>
              <a
                className='button'
                onClick={() => setSelectedOption('openExternal')}
              >
                Access online Support Toolkit<br />
                <span style={{ fontSize: '12px', fontWeight: 400 }}>lifeline.org.au/toolkit</span>
              </a>
              <a
                className='muted-button'
                onClick={() => setSelectedOption('lifelineSupportToolkit')}
              >
                Learn more about support toolkit
              </a>
            </div>
          </div>
        </Modal>
      </section>
    )
  }

  if (selectedOption === 'bad') {
    return (
      <section className='section'>
        <Modal
          isOpen={true}
          style={modalStyles}
          contentLabel="Lifeline Modal"
        >
          <a onClick={() => setSelectedOption('')} style={{ cursor: 'pointer' }}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="30" height="30" viewBox="0 0 256 256" xmlSpace="preserve">
              <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                <path d="M 45 90 c 24.813 0 45 -20.187 45 -45 C 90 20.187 69.813 0 45 0 C 20.187 0 0 20.187 0 45 C 0 69.813 20.187 90 45 90 z M 45 7 c 20.953 0 38 17.047 38 38 S 65.953 83 45 83 S 7 65.953 7 45 S 24.047 7 45 7 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 53.478 65.456 c 0.896 0 1.792 -0.342 2.475 -1.025 c 1.367 -1.366 1.367 -3.583 0 -4.949 L 41.472 45 l 14.481 -14.481 c 1.367 -1.366 1.367 -3.583 0 -4.95 c -1.367 -1.366 -3.583 -1.365 -4.95 0 L 34.048 42.525 c -1.367 1.366 -1.367 3.583 0 4.949 l 16.955 16.956 C 51.687 65.114 52.583 65.456 53.478 65.456 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
              </g>
            </svg>
          </a>
          <h1 className='heading'>I'm not ok</h1>
          <div className='warning-panel'>
            <p>If life is in danger <strong>call triple zero (000).</strong></p>
          </div>
          <div className='panel'>
            <Logo />
            <p>If you're open to it, you can speak with a Lifeline Crisis Supporter 24/7 who will listen to and support you without judgement.</p>
            <p>Crisis looks different for everyone.</p>
            <p>Whether you're thinking about suicide, having a difficult time or require some support now, Lifeline is here for you.</p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <a
                className='button'
                href="tel: 13 11 14"
              >
                Call Lifeline<br />
                <span style={{ fontSize: '12px', fontWeight: 400 }}>13 11 14</span>
              </a>
              <a
                className='button'
                href="sms:+61477131114?&body=Hi%2C%20I%E2%80%99d%20like%20to%20connect%20with%20a%20Lifeline%20Crisis%20Supporter."
              >
                Text Lifeline<br />
                <span style={{ fontSize: '12px', fontWeight: 400 }}>0477 13 11 14</span>
              </a>
              <a
                className='button'
                href='https://lifeline.org.au/crisis-chat'
                target='_blank'
              >
                Chat with Lifeline<br />
                <span style={{ fontSize: '12px', fontWeight: 400 }}>lifeline.org.au/crisis-chat</span>
              </a>
              <a
                className='muted-button'
                onClick={() => setSelectedOption('lifelineCrisisSupport')}
              >
                Learn more
              </a>
            </div>
          </div>
        </Modal>
      </section>
    )
  }

  return (
    <section className='section'>
      <h1 className='heading'>How are you feeling right now?</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <a
          className='button'
          onClick={() => setSelectedOption('good')}
        >
          I'm feeling good!
        </a>
        <a
          className='button'
          onClick={() => setSelectedOption('average')}
        >
          I'm feeling average
        </a>
        <a
          className='button'
          onClick={() => setSelectedOption('bad')}
        >
          I'm not okay
        </a>
      </div>
    </section>
  );
};

export default Lifeline;
