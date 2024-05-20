
# Virtual DOM, Fiber, Reconciliation
Note : Virtual DOM is not used Now.

### Read docs Carefully
Github Docs : [https://github.com/acdlite/react-fiber-architecture](Open)


## What is Reconciliation ?
The algorithm React uses to diff one tree with another to determine which parts need to be changed(Only update changed parts to UI).

Two Trees by createRoot(): 
1. Browser DOM Tree
2. React DOM Tree

Reconciliation is the algorithm behind what is popularly called as "Virtual DOM".


## What is Fiber ?
Fiber-Architecure is the heart of React.

We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

- pause work and come back to it later.
- assign priority to different types of work.
- reuse previously completed work.
- abort work if it's no longer needed.

In order to do any of this, we first need a way to break work down into units. In one sense, that's what a fiber is. A fiber represents a unit of work.