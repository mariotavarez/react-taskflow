import { Plus } from 'lucide-react';
import clsx from 'clsx';
import { Task, Status } from '../types';
import { TaskCard } from './TaskCard';

const cfg: Record<Status,{title:string;hdr:string;dot:string}> = {
  'todo':        {title:'To Do',       hdr:'text-gray-400',    dot:'bg-gray-400'},
  'in-progress': {title:'In Progress', hdr:'text-blue-400',    dot:'bg-blue-400'},
  'review':      {title:'Review',      hdr:'text-amber-400',   dot:'bg-amber-400'},
  'done':        {title:'Done',        hdr:'text-emerald-400', dot:'bg-emerald-400'},
};

export function Column({ status, tasks, onAddTask, onDeleteTask, onMoveTask }: {
  status:Status; tasks:Task[]; onAddTask:(s:Status)=>void; onDeleteTask:(id:string)=>void; onMoveTask:(id:string,s:Status)=>void;
}) {
  const c = cfg[status];
  return (
    <div className="flex flex-col bg-gray-900/50 rounded-2xl border border-gray-800 min-h-[500px]">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className={clsx('w-2 h-2 rounded-full', c.dot)}/>
          <span className={clsx('text-sm font-semibold', c.hdr)}>{c.title}</span>
          <span className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full">{tasks.length}</span>
        </div>
        <button onClick={()=>onAddTask(status)} className="p-1 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"><Plus size={16}/></button>
      </div>
      <div className="flex-1 p-3 space-y-3 overflow-y-auto">
        {tasks.map((t) => <TaskCard key={t.id} task={t} onDelete={onDeleteTask} onMove={onMoveTask}/>)}
        {tasks.length===0 && (
          <div className="flex items-center justify-center h-24 border-2 border-dashed border-gray-800 rounded-xl">
            <p className="text-sm text-gray-600">No tasks</p>
          </div>
        )}
      </div>
    </div>
  );
}
