import clsx from 'clsx';
import { Calendar, User, Trash2, ArrowRight } from 'lucide-react';
import { Task, Priority, Status } from '../types';

const prioCfg: Record<Priority,{color:string;label:string}> = {
  low:    {color:'bg-gray-500/20 text-gray-400 border-gray-500/30',   label:'Low'},
  medium: {color:'bg-blue-500/20 text-blue-400 border-blue-500/30',   label:'Medium'},
  high:   {color:'bg-orange-500/20 text-orange-400 border-orange-500/30', label:'High'},
  urgent: {color:'bg-red-500/20 text-red-400 border-red-500/30',      label:'Urgent'},
};
const tagColors: Record<string,string> = {
  design:'bg-pink-500/10 text-pink-400', ux:'bg-purple-500/10 text-purple-400',
  backend:'bg-blue-500/10 text-blue-400', frontend:'bg-cyan-500/10 text-cyan-400',
  security:'bg-red-500/10 text-red-400', docs:'bg-yellow-500/10 text-yellow-400',
  api:'bg-green-500/10 text-green-400', bug:'bg-red-500/10 text-red-400',
  payments:'bg-emerald-500/10 text-emerald-400', devops:'bg-indigo-500/10 text-indigo-400',
  ui:'bg-violet-500/10 text-violet-400', performance:'bg-amber-500/10 text-amber-400',
  qa:'bg-teal-500/10 text-teal-400', testing:'bg-teal-500/10 text-teal-400',
};
const statusOrder: Status[] = ['todo','in-progress','review','done'];

export function TaskCard({ task, onDelete, onMove }: { task:Task; onDelete:(id:string)=>void; onMove:(id:string,s:Status)=>void }) {
  const prio = prioCfg[task.priority];
  const next = statusOrder[statusOrder.indexOf(task.status)+1] ?? null;
  const overdue = new Date(task.dueDate) < new Date() && task.status !== 'done';
  return (
    <div className="bg-gray-800 border border-gray-700/50 rounded-xl p-4 hover:border-gray-600 transition-colors group">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h4 className="text-sm font-medium text-white leading-snug flex-1">{task.title}</h4>
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
          {next && <button onClick={()=>onMove(task.id,next)} className="p-1 text-gray-400 hover:text-white hover:bg-gray-700 rounded" title={`Move to ${next}`}><ArrowRight size={12}/></button>}
          <button onClick={()=>onDelete(task.id)} className="p-1 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded"><Trash2 size={12}/></button>
        </div>
      </div>
      {task.description && <p className="text-xs text-gray-400 mb-3 line-clamp-2">{task.description}</p>}
      <div className="flex flex-wrap gap-1 mb-3">
        {task.tags.slice(0,3).map((t) => (
          <span key={t} className={clsx('text-xs px-1.5 py-0.5 rounded font-medium', tagColors[t]||'bg-gray-500/10 text-gray-400')}>{t}</span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span className={clsx('text-xs px-2 py-0.5 rounded-full border font-medium', prio.color)}>{prio.label}</span>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1"><User size={10}/>{task.assignee.split(' ')[0]}</span>
          <span className={clsx('flex items-center gap-1', overdue?'text-red-400':'')}>
            <Calendar size={10}/>{new Date(task.dueDate).toLocaleDateString('en-US',{month:'short',day:'numeric'})}
          </span>
        </div>
      </div>
    </div>
  );
}
