import {React,useState }from 'react'

function TodoList() {
    const [tasks,setTasks]=useState(["eat breakfast","take a shower","walk the dog"])
    const[newTask,setNewTask]=useState("")
    function handleInputChange(event){
        setNewTask(event.target.value)

    }
    function AddTask(){
        if(newTask.trim()  !== ("")){
            setTasks(t=>[...t,newTask]);
            setNewTask("")


        }
        

    }
    function DeleteTask(index){
        const UpdatedTask=tasks.filter((element,i)=>i !==index)
        setTasks(UpdatedTask)

    }
    function MoveTaskUp(index){
        if(index>0){
            const UpdatedTask=[...tasks];
            [UpdatedTask[index], UpdatedTask[index-1]]=
            [UpdatedTask[index-1], UpdatedTask[index]]
            setTasks(UpdatedTask);
        }

    }
    function MoveTaskDown(index){

        if(index<tasks.length - 1){
            const UpdatedTask=[...tasks];
            [UpdatedTask[index], UpdatedTask[index+1]]=
            [UpdatedTask[index+1], UpdatedTask[index]]
            setTasks(UpdatedTask);
        }
    }
  return (
    <div className='font-sans text-center mt-28  '>
        <h1 className='font-semibold text-6xl'>To-Do-List</h1>
        <div>
            <input type='text' className=' px-4 py-2 bg-white rounded-full border border-transparent shadow-md focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-transparent transition-all duration-300 ease-in-out hover:shadow-lg hover:border-gradient-to-r from-purple-500 via-pink-500 to-red-500 mb-3 mt-3' placeholder='enter a task.. ' value={newTask} onChange={handleInputChange}/>
            <button className='bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded mb-3 mt-3' onClick={AddTask}>add</button>
        </div>
        <ol className='text-black'>
            {tasks.map((task,index)=>
                <li key={index}>
                    <span className='text-4xl  p-5 font-thin rounded-md cursor-pointer  '>{task}</span>
                    <button className='text-3xl font-normal  border-2 px-2.5 py-2.5 bg-red-400 transition duration-500 ease-in hover:bg-red-700 rounded-md cursor-pointer ' onClick={()=>DeleteTask(index)}>Delete</button>
                    <button className='text-3xl font-normal  border-2 px-2.5 py-2.5 bg-violet-400  rounded-md cursor-pointer transition duration-500 ease-in hover:bg-violet-700' onClick={()=>MoveTaskUp(index)}>👆</button>
                    <button className='text-3xl font-normal  border-2 px-2.5 py-2.5 bg-blue-400  rounded-md cursor-pointer transition duration-500 ease-in hover:bg-blue-700' onClick={()=>MoveTaskDown(index)}>👇</button>

                </li>
            )}

        </ol>

    </div>
  )
}

export default TodoList