export type Priority = 'low' | 'medium' | 'high' | 'urgent';
export type Status = 'todo' | 'in-progress' | 'review' | 'done';

export interface Task {
  id: string; title: string; description: string;
  status: Status; priority: Priority; tags: string[];
  assignee: string; dueDate: string; createdAt: string;
}
