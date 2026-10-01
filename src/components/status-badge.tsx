import { Badge } from "@/components/ui/badge";
import { STATUS_LABEL, type TermStatus } from "@/lib/glossary";
import { cn } from "@/lib/utils";

const STATUS_CLASS: Record<TermStatus, string> = {
  debated: "italic",
  hypothetical: "italic",
  informal: "",
  "vendor-specific": "text-fg",
  historical: "text-subtle",
  emerging: "bg-accent/15 text-fg shadow-none",
};

export function StatusBadge({ status }: { status: TermStatus }) {
  return (
    <Badge className={cn(STATUS_CLASS[status])} variant="default">
      {STATUS_LABEL[status]}
    </Badge>
  );
}

export function StatusList({ statuses }: { statuses: TermStatus[] }) {
  if (!statuses.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {statuses.map((s) => (
        <StatusBadge key={s} status={s} />
      ))}
    </div>
  );
}
