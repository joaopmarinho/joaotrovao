import { VenueItem } from "@/content/siteContent";
import { CardItem } from "./CardGrid";
import { MapPin } from "lucide-react";

export default function VenueCard({ venue }: { venue: VenueItem }) {
  return (
    <CardItem>
      <div className="mb-2 flex items-center gap-2">
        <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
        <h3 className="font-display text-sm font-semibold tracking-wide text-foreground">{venue.name}</h3>
      </div>
      <p className="mb-3 text-xs text-muted-foreground">{venue.location}</p>
      <ul className="space-y-1">
        {venue.events.map((e) => (
          <li key={e} className="text-sm text-foreground/80">• {e}</li>
        ))}
      </ul>
    </CardItem>
  );
}
