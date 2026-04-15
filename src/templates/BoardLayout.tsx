import { BoardHeader } from '../organisms/BoardHeader';

interface BoardLayoutProps {
  totalTasks: number;
  onAddTask: () => void;
  children: React.ReactNode;
}

export function BoardLayout({ totalTasks, onAddTask, children }: BoardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <BoardHeader totalTasks={totalTasks} onAddTask={onAddTask} />
      <main className="flex-1 overflow-x-auto p-6">
        {children}
      </main>
    </div>
  );
}
