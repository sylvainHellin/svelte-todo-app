<script>
    import { TodoStore } from '../stores.js';
    import {v4 as uuidv4} from "uuid"
    import { collection, addDoc } from "firebase/firestore"; 

    export let db
    let task = ""
    let description = ""
    let minChar = 1
    
    const addTask = async () => {
        if (task.trim().length >= minChar) {
            // Create the new todo
            let newTodo =     {
                task: task,
                description: description,
                isComplete: false,
                createdAt: new Date(),
            }

            // Add a new document with a generated id.
            const docRef = await addDoc(collection(db, "todos"), newTodo);
            console.log("Document written with ID: ", docRef.id);

        }
    }

    const handleKeydown = (e) => {
        if (e.key === "Enter") {addTask()}
    }

</script>


<label class="input input-bordered  flex items-center gap-2">
    <input type="text" class="grow" placeholder="Task title" bind:value={task} on:keydown={handleKeydown}/>
</label>
<div class="pt-2">
    <label class="input input-bordered flex items-center gap-2">
        <input type="text" class="grow" placeholder="Description of the task." bind:value={description} on:keydown={handleKeydown}/>
        <span class="badge badge-info">Optional</span>
    </label>
</div>
<div class="pt-2 pb-2">
    <button class="btn btn-accent text-2xl font-bold text-center w-full" on:click={addTask}>Add a new Task</button>
</div>



