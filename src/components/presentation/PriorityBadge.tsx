interface PriorityBadgeProps {
  priority: number;
}

export const PriorityBadge = ({ priority }: PriorityBadgeProps) => {
  const className = priority >= 5 ? "priority-badge priority-5" : "priority-badge priority-3";
  return <span className={className}>{priority}</span>;
};
