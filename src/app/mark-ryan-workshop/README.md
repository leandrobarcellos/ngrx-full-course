# NgrxFullCourse
- GitHub: [ngrx-training](https://github.com/thisdot/ngrx-training) 
- GitHub Alt*: [ngrx-workshop-ngconf2020](https://github.com/MikeRyanDev/ngrx-workshop-ngconf2020)

## [What is NgRx](https://www.youtube.com/watch?v=iWX7qCGVt9U&t=71s)

- Open source libraries for Angular
- Built with reactivity in mind
- State management and side effects
- Community driven

## The Goal

- Understand the architectural implications of NgRx and how to build Angular applications with it.

## Mental Model

- **State** flows down, changes flow up
- There is indirection between consumer of **state**, how **state** changes, and side **effects** triggering
  - **@Inputs()** and **@Outputs()** offers Indirection. Angular components doesn't care who is listening the outputs or passing data to inputs
- **Select** and **Dispatch** are special versions of @Input() and @Output()
- Delegate responsibilities to individual modules of code, the S on S.O.L.I.D

## [Hands-on Start](https://youtu.be/iWX7qCGVt9U?si=hnxyCFaVFEN2VcbP&t=978)

## Responsibilities

- Containers components connect data to other components
- **Effects** triggers side effects on application
- **Reducers** handle the state transitions in response to **Actions** being dispatched

## [Actions](https://www.youtube.com/watch?v=iWX7qCGVt9U&t=1130s)

- Unified interface to describe events
- Just data, no functionality
- Has at a minimum a type property

## [Reducers](https://www.youtube.com/watch?v=iWX7qCGVt9U&t=2052s)

- Produce new states
- Receive the last state and next action
- Listen to specific actions
- Use pure, immutable operations


## Setting up the Store
## [Store](https://youtu.be/iWX7qCGVt9U?si=dzUk4bpOF0SJyjss&t=2616)

- Fanciest global variable in the world
- State contained in a single state tree
- State in the store is immutable
- Slices of state are updated with reducers

In our app, we can have the following concept:

- App State
  - Feature State
    - Reducer
    - Reducer
  - Feature State
    - Reducer
    - Reducer
  - Feature State
    - Reducer
    - Reducer

## [Selectors](https://youtu.be/iWX7qCGVt9U?si=639eg9uI_psV5TF4&t=3089)

- Allow us to query our store for data
  - Are like database queries
- Recompute when their inputs change
  - Allows reactive angular applications which changes dynamically, in response on what users are doing with the State  
- Fully leverage memoization for performance
  - Avoid unnecessarily calculations
- Selectors are fully composable
  - We can use selectors to create another selectors

## [Effects](https://youtu.be/iWX7qCGVt9U?si=q5XG2mPrcTJmsvYT&t=4165)

While Reducers are listening for Actions that changes the State, Effects will listen for Actions that calls our API's

- Processes that run in the background
- Connect our App to the outside world
- Often used to talk to services
- Written entirely using RxJS streams
  - The worst part of Effects is that it can't avoid the intense use of it.
  - They are naturally guided by RxJS

- 'concatMap' operator is the safest option in all mappers RxJs operators, although it can cause back pressure
