import { LayoutDashboard, Plus, Search } from 'lucide-react';

export function Header({ totalTasks, onSearch, onAddTask }: { totalTasks:number; onSearch:(q:string)=>void; onAddTask:()=>void }) {
  return (
    <header className="bg-gray-900 border-b border-gray-800 px-6 py-4">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <LayoutDashboard size={16} className="text-white"/>
          </div>
          <span className="text-lg font-bold text-white">TaskFlow</span>
          <span className="text-sm text-gray-500">{totalTasks} tasks</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
            <input type="text" placeholder="Search tasks..." onChange={(e)=>onSearch(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg pl-8 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 w-64"/>
          </div>
          <button onClick={onAddTask} className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-lg transition-colors">
            <Plus size={16}/>Add Task
          </button>
        </div>
      </div>
    </header>
  );
}
