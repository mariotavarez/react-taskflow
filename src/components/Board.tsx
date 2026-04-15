import { Task, Status } from '../types';
import { Column } from './Column';

const cols: Status[] = ['todo','in-progress','review','done'];

export function Board({ tasks, onAddTask, onDeleteTask, onMoveTask }: {
  tasks:Task[]; onAddTask:(s:Status)=>void; onDeleteTask:(id:string)=>void; onMoveTask:(id:string,s:Status)=>void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {cols.map((s) => (
        <Column key={s} status={s} tasks={tasks.filter((t)=>t.status===s)}
          onAddTask={onAddTask} onDeleteTask={onDeleteTask} onMoveTask={onMoveTask}/>
      ))}
    </div>
  );
}
