import { useState } from 'react';
import { Task, Status } from '../types';

const initial: Task[] = [
  { id:'1', title:'Design new onboarding flow', description:'Create wireframes and prototypes for the new user onboarding experience.',
    status:'todo', priority:'high', tags:['design','ux'], assignee:'Sarah Chen', dueDate:'2024-04-20', createdAt:'2024-04-10' },
  { id:'2', title:'Implement JWT authentication', description:'Replace session-based auth with JWT tokens and refresh token rotation.',
    status:'in-progress', priority:'urgent', tags:['backend','security'], assignee:'Marcus Johnson', dueDate:'2024-04-15', createdAt:'2024-04-08' },
  { id:'3', title:'Write API documentation', description:'Document all REST API endpoints using OpenAPI 3.0 specification.',
    status:'in-progress', priority:'medium', tags:['docs','api'], assignee:'Elena Rodriguez', dueDate:'2024-04-25', createdAt:'2024-04-09' },
  { id:'4', title:'Fix payment webhook handler', description:'Resolve edge case where duplicate webhooks cause double-charging.',
    status:'review', priority:'urgent', tags:['backend','bug','payments'], assignee:'David Kim', dueDate:'2024-04-12', createdAt:'2024-04-07' },
  { id:'5', title:'Set up CI/CD pipeline', description:'Configure GitHub Actions for automated testing and deployment.',
    status:'done', priority:'high', tags:['devops'], assignee:'Aria Patel', dueDate:'2024-04-10', createdAt:'2024-04-05' },
  { id:'6', title:'Add dark mode support', description:'Implement system-preference-aware dark mode across the entire UI.',
    status:'todo', priority:'low', tags:['frontend','ui'], assignee:'Sarah Chen', dueDate:'2024-05-01', createdAt:'2024-04-11' },
  { id:'7', title:'Database query optimization', description:'Profile and optimize slow queries on the analytics dashboard.',
    status:'todo', priority:'medium', tags:['backend','performance'], assignee:'Marcus Johnson', dueDate:'2024-04-28', createdAt:'2024-04-10' },
  { id:'8', title:'User acceptance testing', description:'Coordinate UAT session with key stakeholders for the v2 release.',
    status:'review', priority:'high', tags:['qa','testing'], assignee:'Elena Rodriguez', dueDate:'2024-04-18', createdAt:'2024-04-09' },
];

export function useTaskStore() {
  const [tasks, setTasks] = useState<Task[]>(initial);
  const addTask = (t: Omit<Task,'id'|'createdAt'>) =>
    setTasks((p) => [{ ...t, id:Date.now().toString(), createdAt:new Date().toISOString().split('T')[0] }, ...p]);
  const deleteTask = (id: string) => setTasks((p) => p.filter((t) => t.id !== id));
  const moveTask = (id: string, status: Status) => setTasks((p) => p.map((t) => t.id===id ? {...t,status} : t));
  return { tasks, addTask, deleteTask, moveTask };
}
