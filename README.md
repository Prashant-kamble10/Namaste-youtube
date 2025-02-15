
Head
Body
 Sidebar
   MenuItems
 MainContainer
   ButtonList
   VideoContainer
     VideoCard


1. create Header.js in component file
2. create Body.js in component file
3. create Sidebar.js in component file
4. In Sidebar.js call MenuItems component
5. create MainContainer.js in component file
6. In MainContainer.js call ButtonList component and VideoContainer
7. In VideoContainer.js call VideoCard component
8. In Body component call Sidebar and MainContainer component, make it flex side by side both the component
        
9. Now start developing/coding static Header in Header.js component 
10. Now start focus on sidebar building for that install redux toolkit and react-redux 
11. Created a utils folder, in that created store then created slice, than provided store to the reqd components
12. then useDispatch and useSelector come into picture 



<!-- dyann doesn't means control on  thoughts, thoughts that controls you, stopping that is dyaan + Gives power to be aware of own thoughts-->

<!-- React-redux chronology -->
Redux Application Data Flow → The Complete Order Lifecycle

Action is Dispatched
Reducer Processes Action
State is Updated in the Store
Components Select and Display Updated Data

Analogy:
(Action). A customer (user) places an order with a waiter. The order contains details like the food item, quantity, and special requests.

(Dispatch). The customer tells the waiter (dispatch) to take the order to the kitchen. The waiter doesn’t process the order; they simply relay it.

(Reducer). Once the order reaches the kitchen (reducer), the chef checks the order details and prepares the food accordingly. The chef never directly interacts with the customer; they only work based on the given order (action).

Redux Explanation:
Reducers are pure functions that take the current state and an action as input and return a new state. They determine how the application state should change based on the action.

 (Store). The restaurant maintains a record of all placed orders in a central system (store). This ensures that all departments (kitchen, waiters, managers) can access and update order details as needed.

 (Selector). If a waiter or manager wants to check the list of all orders, they will refer to the restaurant's order log (store) instead of asking each chef separately.

Analogy for createSlice → A Restaurant Menu Section
Imagine that instead of manually defining different food items, prices, and cooking instructions separately, the restaurant organizes everything under a menu section.

For example, there could be a Burger Menu Section that:

Lists different types of burgers
Specifies their prices
Describes how each burger is prepared
This way, instead of defining each burger separately, the menu section groups everything in one place.


<!-- Steps to implement react-redux store -->
Create a Redux Store

Provide the Redux Store to React

Create a Redux State Slice

Add Slice Reducers to the Store

Use Redux State and Actions in React Components

<!-- what are asynchronous actions in react- redux ? -->

Asynchronous actions in Redux refer to operations that take time to complete, such as:
✅ Fetching data from an API
✅ Writing to a database
✅ Delayed actions like timers

Since Redux reducers must be pure functions (no side effects), we can't directly handle async operations inside them. Instead, we use middleware like Redux Thunk or Redux Toolkit’s createAsyncThunk

Why Do We Need Asynchronous Actions?
Imagine a scenario where your app needs to fetch user data from an API:

Before fetching: Show a loading spinner.
While fetching: Wait for the API response.
After fetching: Store the data in Redux and update the UI.
This requires an asynchronous flow, which Redux alone cannot handle.

Redux Thunk,  Redux-Saga → Manually handle async logic (dispatch multiple actions).
✔ createAsyncThunk → Simplifies async actions, automatically manages loading, success, and failure states. (Like Promises)
✔ Middleware → Required for handling async operations in Redux.


Feature	                                         Redux Thunk	                                                              Redux Saga
How it works	                                  Uses functions (async/await) inside actions	        Uses generator functions (function*)
Best for	                                      Simple async logic	                               Complex async flows (multiple actions, delays, retries)
Side Effects	                                  Directly inside actions	                            Managed in separate sagas
Code Complexity	                                Easier to write & understand	                      More structured but has a learning curve
Use Case	                                  Small to medium projects	                               Large-scale apps (e.g., complex API                                                                                                     calls, WebSockets, polling, caching, etc.)

