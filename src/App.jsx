
import { useForm } from 'react-hook-form';
import './App.css';

const App = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid }
  } = useForm({ mode: "onChange" });


  const onSubmit = (input) => {
    console.log(input);
    reset();
  }

  return (
    <div className="content">
      <div className="response-container">
        <div className="response-container">
          <div className="messageBalloon user">
            Tell me about san-francisco in 3 sentences. use bullet points and
            highlight important words.
          </div>
          <div className="messageBalloon assistant">
            <ul>
              <li>
                <strong>Iconic Landmark City:</strong> San Francisco is renowned
                for <strong>Golden Gate Bridge</strong>,{' '}
                <strong>Alcatraz Island</strong>, and steep{' '}
                <strong>cable cars</strong>.
              </li>
              <li>
                <strong>Vibrant Culture:</strong> A <strong>melting pot</strong>{' '}
                of diverse cultures, San Francisco boasts{' '}
                <strong>world-class museums</strong>,{' '}
                <strong>culinary delights</strong>, and a thriving{' '}
                <strong>LGBTQ+ community</strong>.
              </li>
              <li>
                <strong>Tech Hub:</strong> Home to{' '}
                <strong>Silicon Valley</strong>, San Francisco is a global
                center for <strong>innovation</strong> and technological
                advancements.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="input-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="user-input" {...register("input", { required: true})} />
          <button type="submit" disabled={!isValid}>Ask</button>
        </form>
      </div>
    </div>
  );
}

export default App;
