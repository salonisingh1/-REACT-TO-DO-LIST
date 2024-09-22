redux and react-redux are 2 diff things.
redux is a core library and react-redux is its implementation to do the wiring so that react and redux communicate with each other.

there is only 1 store for an application.(single source of truth)
we have to tell the store where are all the reducers.
features are called as slice in documentation but u can call it anything.build using (createSlice).it can have many reducers

need 3 things to make a slice
name,initialState,reducers
u can give any data structure inside initialState,here we have given array.
reducer is a object in which we can give many no of key value or key function 
in slice functions there are 2 parameters (state, action)
in state we get update state value in the store,
in action ,here we have action.payload 
payload = (the data needed to perform the action).
In the context of Redux and other state management libraries, the term payload refers to the additional information or data that is sent along with an action to describe the changes that need to be made to the state.

{Action: An action is a plain JavaScript object that has a type property. The type property is a string that describes the type of action that is being performed.
Payload: The payload is an optional property in the action object that contains the data or information needed to perform the action.}

nanoid = (nanoid is a small, secure, URL-friendly unique string ID generator for JavaScript. It generates random IDs that are relatively short but still unique enough for most use cases. It's particularly useful in contexts where you need to create unique identifiers, such as database keys, session tokens, or anywhere you need a random string.)


in redux the state is preserved but in context api it is not preserved, that's why we had to use spread operator there , but here we just have to directly write
state.todos.push(todo)

imp part about export is -->we have to export reducers individually bcz we don't know in which component which reducer is gonna used.
and the main source of reducers also(export default todoSlice.reducer), we have to use it in the store.