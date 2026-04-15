import { useState } from 'react';
import { Input } from '../atoms/Input';
import { TagPill } from '../atoms/TagPill';

interface FormFieldTagsProps {
  label: string;
  tags: string[];
  onChange: (tags: string[]) => void;
}

export function FormFieldTags({ label, tags, onChange }: FormFieldTagsProps) {
  const [input, setInput] = useState('');

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if ((e.key === 'Enter' || e.key === ',') && input.trim()) {
      e.preventDefault();
      const next = input.trim().toLowerCase();
      if (!tags.includes(next)) onChange([...tags, next]);
      setInput('');
    }
  }

  return (
    <div className="flex flex-col gap-1.5">
      <Input
        label={label}
        value={input}
        placeholder="Type and press Enter…"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {tags.map((t) => (
            <TagPill key={t} tag={t} onRemove={() => onChange(tags.filter((x) => x !== t))} />
          ))}
        </div>
      )}
    </div>
  );
}
