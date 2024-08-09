<script>
    export let todo
    export let db
    import { TodoStore } from '../stores.js';
    import { doc, deleteDoc } from "firebase/firestore";


    const deleteTask = async (todoId) => {
        console.log(todoId)
        await deleteDoc(doc(db, "todos", todoId))
    }
</script>

<div class="card bg-base-100 w-full shadow-xl">
    <div class="card-body">
        <h2 class="card-title {todo.isComplete ? "complete": ""}">{todo.task}</h2>
        <p class="text-left">{todo.description}</p>
        <div class="flex justify-between">
            <input type="checkbox" class="checkbox" bind:checked={todo.isComplete}/>
            <button class="btn btn-primary btn-sm" on:click={deleteTask(todo.id)}>delete</button>
        </div>
    </div>
</div>


<style>
    
    .complete {
        text-decoration: line-through;
    }
</style>