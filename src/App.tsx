import { useState } from 'react';
import { Header } from './components/Header';
import { Board } from './components/Board';
import { TaskModal } from './components/TaskModal';
import { FilterBar } from './components/FilterBar';
import { useTaskStore } from './store/taskStore';
import { Status, Priority } from './types';

function App() {
  const { tasks, addTask, deleteTask, moveTask } = useTaskStore();
  const [modalOpen, setModalOpen] = useState(false);
  const [defaultStatus, setDefaultStatus] = useState<Status>('todo');
  const [filterPriority, setFilterPriority] = useState<Priority|'all'>('all');
  const [filterTag, setFilterTag] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = tasks.filter((t) => {
    if (filterPriority !== 'all' && t.priority !== filterPriority) return false;
    if (filterTag !== 'all' && !t.tags.includes(filterTag)) return false;
    if (search && !t.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const allTags = Array.from(new Set(tasks.flatMap((t) => t.tags)));

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header totalTasks={tasks.length} onSearch={setSearch} onAddTask={()=>{ setDefaultStatus('todo'); setModalOpen(true); }}/>
      <FilterBar filterPriority={filterPriority} filterTag={filterTag} allTags={allTags}
        onPriorityChange={setFilterPriority} onTagChange={setFilterTag}/>
      <main className="p-6">
        <Board tasks={filtered} onAddTask={(s)=>{ setDefaultStatus(s); setModalOpen(true); }}
          onDeleteTask={deleteTask} onMoveTask={moveTask}/>
      </main>
      {modalOpen && (
        <TaskModal defaultStatus={defaultStatus} onClose={()=>setModalOpen(false)}
          onSubmit={(t)=>{ addTask(t); setModalOpen(false); }}/>
      )}
    </div>
  );
}

export default App;
