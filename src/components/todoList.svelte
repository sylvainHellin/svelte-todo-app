<script>
    export let db
    
    import {fade, scale} from "svelte/transition"
    import { TodoStore } from '../stores.js';
    import Item from "./item.svelte";

    
    import { collection, onSnapshot } from "firebase/firestore";

    // Reference to the "todos" collection
    const todosCollection = collection(db, "todos");

    // Listen for real-time updates
    onSnapshot(todosCollection, (querySnapshot) => {
        let todos = [];
        querySnapshot.forEach((doc) => {
            let todo = {...doc.data(), id: doc.id};
            todos = [todo, ...todos];
        });
        TodoStore.set(todos); // Update the Svelte store with the fetched todos
    });
    
</script>

{#each $TodoStore as todo (todo.task)}
    <div in:scale out:fade="{{duration: 300}}" class="pb-2">
        <Item {todo} {db} />
    </div>
{/each}
