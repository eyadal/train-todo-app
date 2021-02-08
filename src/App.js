import {useState} from 'react'


function App() {
  const [inputVal, setInputVal] = useState('')
  const [todos, setTodos] = useState([''])

  const handleChange = (e)=> {
    setInputVal(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos([...todos, inputVal])
    e.target[0].value =''
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      {/** 
       * 2. event handler for the submit ( )  */}
        <input onChange={handleChange} placeholder='Add Todo..' />
        <button>Add Todo</button>
    </form> 
      <ul>
        {todos.map( (todo, index) => (
          todo !== '' ?
          <li key={index}>{todo}</li> : null
        ))}
      </ul>
    </>
  );
}

export default App;
