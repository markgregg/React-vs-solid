# React-vs-solid
Why Solid is faster than React and how using Redux can reduce the deficit 

## React alone

### How React works
For those of you who don’t know how React works. React uses callbacks to trigger a recalculation of the component hierarchy. For example, when you set state, a callback is trigger that causes the virutal DOM to be recalculated. What made React faster than earlier Java script libraries, was rather than re-rendering all HTML elements, it kept a virtual DOM, and only updated the elements that changed.

### The problem
Even though react only updates the elements that need re-rendering, it can still spend a great deal of time scripting. The reason for this, is due to the entire tree being recalculated from where a callback is triggered. 

If you run react-demo and open the console on the debug window. You will log statements from the three levels of component in the demo. If you click the update button, you will notice the same log statements are generated. This demonstrates that the state callback, is causing the entire component tree to be recalculated.

## React with Redux

### How Redux works
Redux centralises state management and allows state to be set and listened to at any point in the application.

### How does Redux help
Because using Redux we can listen to state anywhere, we don’t have to pass values down to the child components, as we would normally do. Instead, we can listen for state changes in the child components, which means we only recalculate at the lowest level.

If you open the react-redux-demo, you will notice the same log entries as the react-demo. If you now click update. You will notice that rather than a log statement from every component, there are only two from the components that have been updated.

## Solid

### How Solid works
Solid is very similar to React in the way it behaves but different enough that it doesn’t have the same problem. In solid there is no virtual DOM. That may sound like a bad thing, but because solid signals only render at the point in which they are used, nothing else is affected. For example if you create a signal in a parent component and pass it to a child as a property. Only the element of the child that references the property will update.

If you open the solid-demo, you will notice similar log statements to the first two demos. If you now click update. You will notice that like the react-redux demo, the updates are isolated and in some cases invisible. 
