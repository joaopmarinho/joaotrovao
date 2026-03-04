import { SetItem } from "@/content/siteContent";
import { CardItem } from "./CardGrid";
import TagList from "./TagList";
import { Music } from "lucide-react";

export default function SetCard({ set }: { set: SetItem }) {
  return (
    <CardItem>
      <div className="mb-4 flex h-32 items-center justify-center rounded-md bg-muted">
        {set.embedUrl ? (
          <iframe
            src={set.embedUrl}
            title={set.title}
            className="h-full w-full rounded-md"
            allow="autoplay"
            loading="lazy"
          />
        ) : (
          <Music className="h-10 w-10 text-muted-foreground" aria-hidden="true" />
        )}
      </div>
      <h3 className="mb-1 font-display text-sm font-semibold tracking-wide text-foreground">{set.title}</h3>
      <p className="mb-3 text-sm text-muted-foreground">{set.description}</p>
      <TagList tags={set.tags} />
    </CardItem>
  );
}
