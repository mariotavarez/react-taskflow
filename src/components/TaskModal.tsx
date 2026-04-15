import { useState } from 'react';
import { X } from 'lucide-react';
import { Status, Priority, Task } from '../types';

const prios: Priority[] = ['low','medium','high','urgent'];
const statuses = [{id:'todo' as Status,label:'To Do'},{id:'in-progress' as Status,label:'In Progress'},{id:'review' as Status,label:'Review'},{id:'done' as Status,label:'Done'}];

export function TaskModal({ defaultStatus, onClose, onSubmit }: {
  defaultStatus:Status; onClose:()=>void; onSubmit:(t:Omit<Task,'id'|'createdAt'>)=>void;
}) {
  const [title,setTitle]=useState(''); const [desc,setDesc]=useState('');
  const [status,setStatus]=useState<Status>(defaultStatus); const [priority,setPriority]=useState<Priority>('medium');
  const [tagInput,setTagInput]=useState(''); const [tags,setTags]=useState<string[]>([]);
  const [assignee,setAssignee]=useState(''); const [dueDate,setDueDate]=useState('');

  const submit=(e:React.FormEvent)=>{ e.preventDefault(); if(!title.trim()) return; onSubmit({title,description:desc,status,priority,tags,assignee,dueDate}); };
  const addTag=(e:React.KeyboardEvent)=>{ if(e.key==='Enter'&&tagInput.trim()){ e.preventDefault(); if(!tags.includes(tagInput.trim())) setTags((p)=>[...p,tagInput.trim()]); setTagInput(''); } };

  const inp = "w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-violet-500";

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-md shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
          <h2 className="text-white font-semibold">New Task</h2>
          <button onClick={onClose} className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg"><X size={18}/></button>
        </div>
        <form onSubmit={submit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1.5 font-medium">Title *</label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className={inp} placeholder="Task title..." required/>
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1.5 font-medium">Description</label>
            <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} className={`${inp} resize-none`} rows={3} placeholder="Optional description..."/>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-400 mb-1.5 font-medium">Status</label>
              <select value={status} onChange={(e)=>setStatus(e.target.value as Status)} className={inp}>
                {statuses.map((s)=><option key={s.id} value={s.id}>{s.label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1.5 font-medium">Priority</label>
              <select value={priority} onChange={(e)=>setPriority(e.target.value as Priority)} className={inp}>
                {prios.map((p)=><option key={p} value={p}>{p.charAt(0).toUpperCase()+p.slice(1)}</option>)}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-400 mb-1.5 font-medium">Assignee</label>
              <input type="text" value={assignee} onChange={(e)=>setAssignee(e.target.value)} className={inp} placeholder="Name..."/>
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1.5 font-medium">Due Date</label>
              <input type="date" value={dueDate} onChange={(e)=>setDueDate(e.target.value)} className={inp}/>
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1.5 font-medium">Tags (press Enter)</label>
            <input type="text" value={tagInput} onChange={(e)=>setTagInput(e.target.value)} onKeyDown={addTag} className={inp} placeholder="Add tag..."/>
            {tags.length>0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {tags.map((t)=>(
                  <span key={t} className="flex items-center gap-1 text-xs bg-violet-500/20 text-violet-400 px-2 py-0.5 rounded">
                    {t}<button type="button" onClick={()=>setTags((p)=>p.filter((x)=>x!==t))} className="hover:text-white">×</button>
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 px-4 py-2 text-sm text-gray-400 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">Cancel</button>
            <button type="submit" className="flex-1 px-4 py-2 text-sm text-white bg-violet-600 hover:bg-violet-500 rounded-lg transition-colors font-medium">Create Task</button>
          </div>
        </form>
      </div>
    </div>
  );
}
