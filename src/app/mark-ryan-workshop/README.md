# NgrxFullCourse

## What is NgRx
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

## Responsabilities

- Containers components connect data to other components
- **Effects** triggers side effects on application
- **Reducers** handle the state transitions in response to **Actions** being dispatched

## Actions

- Unified interface to describe events
- Just data, no functionality
- Has at a minimum a type property

## Reducers

- Produce new states
- Receive the last state and next action
- Listen to specific actions
- Use pure, immutable operations
