
import { useForm } from 'react-hook-form';
import Markdown from 'react-markdown';
import './App.css';
import useGemini from './hooks/useGemini';

const App = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid }
  } = useForm({ mode: "onChange" });
  const { chatLog, error, isLoading, askAI } = useGemini();

  const onSubmit = (data) => {
    askAI(data.input)
    reset();
  }

  return (
    <div className="content">
      <div className="response-container">
        <div className="response-container">
          {chatLog.map((log, index) => (
            <Markdown key={index} className={`messageBalloon ${log.role}`} >
              {log.content}
            </Markdown>
          ))}
          {isLoading && (<p>Loading...</p>)}
          {error && (<p>{error}</p>)}
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
