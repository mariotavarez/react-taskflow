import clsx from 'clsx';
import { Priority } from '../types';

interface Props { filterPriority:Priority|'all'; filterTag:string; allTags:string[]; onPriorityChange:(p:Priority|'all')=>void; onTagChange:(t:string)=>void; }

const prios: { value:Priority|'all'; label:string }[] = [
  {value:'all',label:'All'},{value:'urgent',label:'Urgent'},{value:'high',label:'High'},{value:'medium',label:'Medium'},{value:'low',label:'Low'},
];

export function FilterBar({ filterPriority, filterTag, allTags, onPriorityChange, onTagChange }: Props) {
  const btn = (active:boolean) => clsx('px-3 py-1 text-xs rounded-full transition-colors whitespace-nowrap',
    active ? 'bg-violet-600/20 text-violet-400 border border-violet-500/30' : 'text-gray-400 hover:text-white');
  return (
    <div className="bg-gray-900/50 border-b border-gray-800 px-6 py-3">
      <div className="max-w-screen-2xl mx-auto flex items-center gap-6 overflow-x-auto">
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xs text-gray-500 font-medium">Priority:</span>
          {prios.map(({value,label}) => (
            <button key={value} onClick={()=>onPriorityChange(value)} className={btn(filterPriority===value)}>{label}</button>
          ))}
        </div>
        {allTags.length > 0 && (
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs text-gray-500 font-medium">Tag:</span>
            <button onClick={()=>onTagChange('all')} className={btn(filterTag==='all')}>All</button>
            {allTags.slice(0,10).map((tag) => (
              <button key={tag} onClick={()=>onTagChange(tag)} className={btn(filterTag===tag)}>#{tag}</button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
