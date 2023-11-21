


import TodoForm from "./components/TodoForm";
import Todolist from "./components/Todolist";

function App() {
  return (
    
  <div className="bg-slate-300 min-h-screen py-20 px-[16rem]">
    <div className="w-[800px] bg-white rounded-lg py-11 px-8 space-y-2 min-h-screen">  
      <TodoForm />
      <Todolist/>
   </div>
    
  </div>
  );
}

export default App;
