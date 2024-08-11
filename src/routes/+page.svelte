<script>
    import "tailwindcss/tailwind.css";
    import Item from "../components/item.svelte";
	import NewTask from "../components/newTask.svelte";
    import Welcome from "../components/Welcome.svelte";
    import TodoList from "../components/todoList.svelte";

    import {firebaseConfig} from "../lib/firebaseConfig.js"
    // import {firebaseConfig} from "../lib/serverFirebasConfig.js"
    import { initializeApp } from "firebase/app";
    import { getFirestore } from "firebase/firestore";

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);

</script>


<div class="hero bg-base-200 min-h-screen">
    <div class="hero-content text-center">
        <div class="max-w-md">
            <!-- INTRO -->
            <Welcome />
            <div class="divider"></div>
            
            <!-- ADD NEW TASK -->
            <NewTask {db}/>
            <div class="divider"></div>
            
            <!-- EXISTING TASKS -->
            <TodoList {db}/>

        </div>
    </div>
</div>

