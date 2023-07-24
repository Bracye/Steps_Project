import { useState } from 'react';
import './index.css'

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // console.log(arr);

  // const step = 2;

  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1)
    }
    // alert('previous')
  }

  function handleNext() {
    if (step < 3) {
      setStep(step + 1)
      // alert('next')
    }
  }

  function handleClose() {
    setIsOpen(false)
  }

  function handleOpen() {
    setIsOpen(true)
  }


  return (
    <div>
      <div>
        {isOpen ? (
          <div>
            <button className='close' onClick={handleClose}>
              &times;
            </button>
            <div className="steps">
              <div className="numbers">
                <div className={step >= 1 ? 'active' : ''}>1</div>
                <div className={step >= 2 ? 'active' : ''}>2</div>
                <div className={step >= 3 ? 'active' : ''}>3</div>
              </div>
              <p className="message">Step {step}: {messages[step - 1]}</p>
              <div className="buttons">
                <button style={{ backgroundColor: '#7950f2', color: '#fff' }} onClick={handlePrevious}>
                  Previous
                </button>
                <button style={{ backgroundColor: '#7950f2', color: '#fff' }} onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1>The page you're looking for is not here</h1>
            <button className='close' onClick={handleOpen}>
              &#10003;
            </button>
          </div>
        )}
      </div>
    </div>
  );
        }
export default App;
