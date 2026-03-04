export default function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2" role="list" aria-label="Tags">
      {tags.map((tag) => (
        <span
          key={tag}
          role="listitem"
          className="rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
