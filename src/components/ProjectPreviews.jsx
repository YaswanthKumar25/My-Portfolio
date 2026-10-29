import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  Search, 
  Plus, 
  Code2, 
  Play, 
  Terminal, 
  Layers, 
  Sparkles,
  Filter,
  Check,
  ChevronRight
} from 'lucide-react';

export function TaskFlowPreview() {
  const [filter, setFilter] = useState('all');
  
  const sampleTasks = [
    { id: 1, title: 'Integrate Django REST API endpoints', status: 'done', priority: 'High', category: 'Backend' },
    { id: 2, title: 'Build responsive task filtering interface', status: 'in_progress', priority: 'Medium', category: 'Frontend' },
    { id: 3, title: 'Configure MySQL relational schema and indexes', status: 'todo', priority: 'High', category: 'Database' },
  ];

  const filteredTasks = sampleTasks.filter(task => {
    if (filter === 'all') return true;
    return task.status === filter;
  });

  return (
    <div className="w-full bg-[#111114] rounded-t-xl border-b border-[#27272A] overflow-hidden text-xs select-none">
      {/* Window Titlebar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#18181B] border-b border-[#27272A]">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80"></div>
          <span className="ml-2 font-mono text-[11px] text-[#A1A1AA]">taskflow.app / board</span>
        </div>
        <span className="text-[10px] uppercase tracking-wider font-mono px-2 py-0.5 rounded bg-[#27272A] text-[#22D3EE]">
          Representative UI
        </span>
      </div>

      {/* App Toolbar */}
      <div className="p-3.5 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-1 bg-[#18181B] border border-[#27272A] rounded px-2.5 py-1.5 text-[#71717A]">
            <Search className="w-3.5 h-3.5 text-[#71717A]" />
            <span className="text-[11px]">Search tasks by title...</span>
          </div>
          <div className="flex items-center gap-1">
            {['all', 'todo', 'in_progress', 'done'].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-2 py-1 rounded text-[10px] font-medium capitalize transition-colors ${
                  filter === item 
                    ? 'bg-[#22D3EE]/20 text-[#22D3EE] border border-[#22D3EE]/30' 
                    : 'text-[#A1A1AA] hover:bg-[#18181B]'
                }`}
              >
                {item.replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Task Cards List */}
        <div className="space-y-2">
          {filteredTasks.map((t) => (
            <div
              key={t.id}
              className="p-2.5 bg-[#18181B]/90 border border-[#27272A] rounded-md flex items-center justify-between hover:border-[#3F3F46] transition-all"
            >
              <div className="flex items-center gap-2.5">
                {t.status === 'done' ? (
                  <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0" />
                ) : t.status === 'in_progress' ? (
                  <Clock className="w-4 h-4 text-[#F59E0B] shrink-0" />
                ) : (
                  <Circle className="w-4 h-4 text-[#71717A] shrink-0" />
                )}
                <span className={`font-medium ${t.status === 'done' ? 'line-through text-[#71717A]' : 'text-[#FAFAFA]'}`}>
                  {t.title}
                </span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#27272A] text-[#A1A1AA]">
                  {t.category}
                </span>
                <span
                  className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                    t.priority === 'High'
                      ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                      : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  }`}
                >
                  {t.priority}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CodeNestPreview() {
  const [activeTab, setActiveTab] = useState('solution.py');

  return (
    <div className="w-full bg-[#111114] rounded-t-xl border-b border-[#27272A] overflow-hidden text-xs select-none">
      {/* Window Titlebar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#18181B] border-b border-[#27272A]">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80"></div>
          <span className="ml-2 font-mono text-[11px] text-[#A1A1AA]">codenest.io / problem-142</span>
        </div>
        <span className="text-[10px] uppercase tracking-wider font-mono px-2 py-0.5 rounded bg-[#27272A] text-[#818CF8]">
          Representative UI
        </span>
      </div>

      {/* Editor & Problem View */}
      <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#27272A]">
        {/* Left: Problem Statement */}
        <div className="md:col-span-2 p-3.5 space-y-2 bg-[#09090B]/60">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[#FAFAFA] text-[11px]">142. Two Sum Variant</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
              Medium
            </span>
          </div>
          <p className="text-[11px] text-[#A1A1AA] leading-relaxed">
            Given an array of integers and a target sum, find two indices such that their elements add up to target.
          </p>
          <div className="p-2 rounded bg-[#18181B] border border-[#27272A] font-mono text-[10px] text-[#71717A]">
            <div>Input: nums = [2, 7, 11, 15], target = 9</div>
            <div className="text-[#4ADE80]">Output: [0, 1]</div>
          </div>
        </div>

        {/* Right: Code Editor Mock */}
        <div className="md:col-span-3 p-3.5 bg-[#111114] flex flex-col justify-between">
          <div className="space-y-1 font-mono text-[11px] text-[#A1A1AA]">
            <div className="text-[#71717A]"># Python 3 solution</div>
            <div>
              <span className="text-[#818CF8]">def</span> <span className="text-[#22D3EE]">twoSum</span>(nums, target):
            </div>
            <div className="pl-4">
              lookup = &#123;&#125;
            </div>
            <div className="pl-4">
              <span className="text-[#818CF8]">for</span> i, num <span className="text-[#818CF8]">in</span> enumerate(nums):
            </div>
            <div className="pl-8">
              <span className="text-[#818CF8]">if</span> target - num <span className="text-[#818CF8]">in</span> lookup:
            </div>
            <div className="pl-12 text-[#4ADE80]">
              <span className="text-[#818CF8]">return</span> [lookup[target - num], i]
            </div>
            <div className="pl-8">
              lookup[num] = i
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-[#27272A] flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[10px] text-[#4ADE80]">
              <Check className="w-3.5 h-3.5" />
              <span>Status: Ready to submit</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded bg-[#27272A] text-[10px] font-mono text-[#FAFAFA]">Run</span>
              <span className="px-2 py-1 rounded bg-[#22D3EE] text-[10px] font-semibold text-[#09090B]">Submit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PortfolioDesignPreview() {
  return (
    <div className="w-full bg-[#111114] rounded-t-xl border-b border-[#27272A] overflow-hidden text-xs select-none">
      {/* Window Titlebar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#18181B] border-b border-[#27272A]">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80"></div>
          <span className="ml-2 font-mono text-[11px] text-[#A1A1AA]">design-system / tokens.json</span>
        </div>
        <span className="text-[10px] uppercase tracking-wider font-mono px-2 py-0.5 rounded bg-[#27272A] text-[#22D3EE]">
          System Architecture
        </span>
      </div>

      {/* Design System Preview */}
      <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 bg-[#09090B]/60">
        <div className="p-2.5 rounded bg-[#18181B] border border-[#27272A] space-y-1.5">
          <div className="text-[10px] text-[#71717A] uppercase font-mono">Accent Cyan</div>
          <div className="h-6 rounded bg-[#22D3EE] flex items-center justify-center font-mono text-[9px] text-[#09090B] font-bold">
            #22D3EE
          </div>
        </div>
        <div className="p-2.5 rounded bg-[#18181B] border border-[#27272A] space-y-1.5">
          <div className="text-[10px] text-[#71717A] uppercase font-mono">Accent Indigo</div>
          <div className="h-6 rounded bg-[#818CF8] flex items-center justify-center font-mono text-[9px] text-white font-bold">
            #818CF8
          </div>
        </div>
        <div className="p-2.5 rounded bg-[#18181B] border border-[#27272A] space-y-1.5">
          <div className="text-[10px] text-[#71717A] uppercase font-mono">Background</div>
          <div className="h-6 rounded bg-[#09090B] border border-[#27272A] flex items-center justify-center font-mono text-[9px] text-[#FAFAFA]">
            #09090B
          </div>
        </div>
        <div className="p-2.5 rounded bg-[#18181B] border border-[#27272A] space-y-1.5">
          <div className="text-[10px] text-[#71717A] uppercase font-mono">Surface</div>
          <div className="h-6 rounded bg-[#18181B] border border-[#27272A] flex items-center justify-center font-mono text-[9px] text-[#A1A1AA]">
            #18181B
          </div>
        </div>
      </div>
    </div>
  );
}
