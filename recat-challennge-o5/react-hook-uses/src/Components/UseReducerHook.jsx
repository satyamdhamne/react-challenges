import React, { useReducer, useState } from 'react';

// Initial state for our task management system
const initialState = {
  tasks: [],
  completedTasks: 0,
  loading: false,
  error: null,
  filters: {
    status: 'all',
    priority: 'all'
  }
};

// Action types
const ACTIONS = {
  ADD_TASK: 'ADD_TASK',
  TOGGLE_TASK: 'TOGGLE_TASK',
  DELETE_TASK: 'DELETE_TASK',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  UPDATE_FILTERS: 'UPDATE_FILTERS',
  SET_PRIORITY: 'SET_PRIORITY',
};

// Reducer function to handle all state updates
function taskReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, {
          id: Date.now(),
          text: action.payload.text,
          completed: false,
          priority: action.payload.priority,
          createdAt: new Date()
        }]
      };

    case ACTIONS.TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
        completedTasks: state.tasks.find(task => task.id === action.payload)?.completed
          ? state.completedTasks - 1
          : state.completedTasks + 1
      };

    case ACTIONS.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
        completedTasks: state.tasks.find(task => task.id === action.payload)?.completed
          ? state.completedTasks - 1
          : state.completedTasks
      };

    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload
      };

    case ACTIONS.UPDATE_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload
        }
      };

    case ACTIONS.SET_PRIORITY:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.taskId
            ? { ...task, priority: action.payload.priority }
            : task
        )
      };

    default:
      return state;
  }
}

function UseReducerHook() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('medium');

  // Helper function to simulate async task creation
  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    dispatch({ type: ACTIONS.SET_LOADING, payload: true });
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      dispatch({
        type: ACTIONS.ADD_TASK,
        payload: { text: newTask, priority }
      });
      setNewTask('');
    } catch (error) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: 'Failed to add task'
      });
    } finally {
      dispatch({ type: ACTIONS.SET_LOADING, payload: false });
    }
  };

  // Filter tasks based on current filters
  const filteredTasks = state.tasks.filter(task => {
    const statusMatch = state.filters.status === 'all'
      ? true
      : state.filters.status === 'completed'
        ? task.completed
        : !task.completed;
    
    const priorityMatch = state.filters.priority === 'all'
      ? true
      : task.priority === state.filters.priority;

    return statusMatch && priorityMatch;
  });

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Task Management System</h2>
      
      {/* Task Creation Form */}
      <form onSubmit={handleAddTask} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter new task"
            className="flex-1 p-2 border rounded"
            disabled={state.loading}
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button
            type="submit"
            disabled={state.loading}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {state.loading ? 'Adding...' : 'Add Task'}
          </button>
        </div>
      </form>

      {/* Filters */}
      <div className="mb-4 flex gap-4">
        <select
          value={state.filters.status}
          onChange={(e) => dispatch({
            type: ACTIONS.UPDATE_FILTERS,
            payload: { status: e.target.value }
          })}
          className="p-2 border rounded"
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>

        <select
          value={state.filters.priority}
          onChange={(e) => dispatch({
            type: ACTIONS.UPDATE_FILTERS,
            payload: { priority: e.target.value }
          })}
          className="p-2 border rounded"
        >
          <option value="all">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      {/* Error Display */}
      {state.error && (
        <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
          {state.error}
        </div>
      )}

      {/* Task List */}
      <div className="space-y-2">
        {filteredTasks.map(task => (
          <div
            key={task.id}
            className={`p-3 border rounded flex items-center justify-between ${
              task.completed ? 'bg-gray-50' : 'bg-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => dispatch({
                  type: ACTIONS.TOGGLE_TASK,
                  payload: task.id
                })}
              />
              <span className={task.completed ? 'line-through text-gray-500' : ''}>
                {task.text}
              </span>
              <span className={`
                px-2 py-1 rounded text-sm
                ${task.priority === 'high' ? 'bg-red-100 text-red-700' :
                  task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-green-100 text-green-700'}
              `}>
                {task.priority}
              </span>
            </div>
            <button
              onClick={() => dispatch({
                type: ACTIONS.DELETE_TASK,
                payload: task.id
              })}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-4 text-sm text-gray-600">
        Total tasks: {state.tasks.length} | Completed: {state.completedTasks}
      </div>
    </div>
  );
}

export default UseReducerHook;