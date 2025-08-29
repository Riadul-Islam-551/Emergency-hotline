1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:
getElementById : It is used to select a component with unique id.
getElementsByClassName : Ii s used to select multiple component with same class.
querySelector : It is used to pick a component by it's tag name.
querySelectorAll : It is used to pick multiple components with same tag name.

2. How do you create and insert a new element into the DOM?

Ans:
Create the element: const newDiv = document.createElement("div");
Insert the element: document.body.appendChild(newDiv);

3. What is Event Bubbling and how does it work?

Ans:
Event Bubbling is the process in the Document Object Model where the event starts from the target element and then go back through its parents until it reaches the document object.

Work method : when click a button inside a <div> the click event is first handled by the button then the same event go back to the div, then to the body, then to the document, unless stopped.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans:
Event Delegation is a way of events handeling in JavaScript where instead of putting a separate event listener on every single child element, just put one listener on their parent, and let the event “bubble up” from the child to the parent.

Why this is useful:

- Here only one listener instead of many.

- It works even if add new elements later.

- It keeps the code cleaner and easier to manage.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans:

preventDefault(): This stops the browser’s default behavior. For example, if anyone click a link, normally the browser will take one to another page. If one use preventDefault(), it won’t go anywhere. Same with a form submit — it won’t actually submit if anyone prevent it.

stopPropagation(): This stops the event from bubbling up to parent elements. when anyone have a button inside a <div>, and both the button and the div have click listeners if he click the button, the event normally fires on the button and then on the div (because of bubbling). If anyone call stopPropagation(), the event stops right there — the parent won’t hear about it.
