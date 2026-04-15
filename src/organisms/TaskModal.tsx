import { useState } from 'react';
import { X } from 'lucide-react';
import type { Task, Priority, Status } from '../types';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';
import { Textarea } from '../atoms/Textarea';
import { Select } from '../atoms/Select';
import { FormFieldTags } from '../molecules/FormField';
import { PriorityBadge } from '../atoms/PriorityBadge';

const PRIORITY_OPTIONS = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
  { value: 'urgent', label: 'Urgent' },
];

const STATUS_OPTIONS = [
  { value: 'todo', label: 'To Do' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'review', label: 'Review' },
  { value: 'done', label: 'Done' },
];

interface TaskModalProps {
  task?: Task;
  onClose: () => void;
  onSave: (data: Omit<Task, 'id' | 'createdAt'>) => void;
}

export function TaskModal({ task, onClose, onSave }: TaskModalProps) {
  const [title, setTitle]       = useState(task?.title ?? '');
  const [description, setDesc]  = useState(task?.description ?? '');
  const [priority, setPriority] = useState<Priority>(task?.priority ?? 'medium');
  const [status, setStatus]     = useState<Status>(task?.status ?? 'todo');
  const [assignee, setAssignee] = useState(task?.assignee ?? '');
  const [dueDate, setDueDate]   = useState(task?.dueDate ?? '');
  const [tags, setTags]         = useState<string[]>(task?.tags ?? []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    onSave({ title, description, priority, status, assignee, dueDate, tags });
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl w-full max-w-lg shadow-2xl">
        <div className="flex items-center justify-between p-5 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-semibold text-white">{task ? 'Task Details' : 'New Task'}</h2>
            {task && <PriorityBadge priority={task.priority} />}
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">
          <Input label="Title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task title…" required />
          <Textarea label="Description" id="desc" value={description} onChange={(e) => setDesc(e.target.value)} placeholder="Describe the task…" />

          <div className="grid grid-cols-2 gap-3">
            <Select label="Priority" id="priority" value={priority} options={PRIORITY_OPTIONS} onChange={(e) => setPriority(e.target.value as Priority)} />
            <Select label="Status" id="status" value={status} options={STATUS_OPTIONS} onChange={(e) => setStatus(e.target.value as Status)} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Input label="Assignee" id="assignee" value={assignee} onChange={(e) => setAssignee(e.target.value)} placeholder="Name…" />
            <Input label="Due Date" id="dueDate" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          </div>

          <FormFieldTags label="Tags" tags={tags} onChange={setTags} />

          <div className="flex justify-end gap-2 pt-1">
            <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
            <Button type="submit">Save Task</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
