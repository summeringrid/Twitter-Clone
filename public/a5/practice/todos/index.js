// alert('Hello World!');
import TodoList from "./TodoList.js";
import TodoItem from "./TodoItem.js";

// $ Use jQuery to call id="wd-todo" div and use back ticks(`) to dynamically render the content
$('#wd-todo').append(`
    <div class="container">
        <h1>Todo example</h1>
        ${TodoList()}
    </div>
`);

