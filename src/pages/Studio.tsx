import { useState, useCallback } from "react";
import { SiteContent, defaultContent } from "@/content/siteContent";
import Navbar from "@/components/Navbar";
import { Copy, Upload, Plus, Trash2, GripVertical } from "lucide-react";
import { toast } from "sonner";

export default function Studio() {
  const [content, setContent] = useState<SiteContent>(() => {
    const saved = localStorage.getItem("jt-content");
    return saved ? JSON.parse(saved) : defaultContent;
  });

  const save = useCallback((c: SiteContent) => {
    setContent(c);
    localStorage.setItem("jt-content", JSON.stringify(c));
  }, []);

  const exportContent = () => {
    navigator.clipboard.writeText(JSON.stringify(content, null, 2));
    toast.success("Conteúdo copiado para o clipboard!");
  };

  const importContent = () => {
    const raw = prompt("Cole o JSON aqui:");
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw) as SiteContent;
      if (!parsed.profile || !parsed.home || !parsed.openFormat || !parsed.artist) {
        throw new Error("Estrutura inválida");
      }
      save(parsed);
      toast.success("Conteúdo importado com sucesso!");
    } catch {
      toast.error("JSON inválido. Verifique a estrutura.");
    }
  };

  const updateProfile = (key: keyof SiteContent["profile"], value: string) => {
    save({ ...content, profile: { ...content.profile, [key]: value } });
  };

  const addSet = (section: "home" | "artist") => {
    const newSet = {
      id: `s-${Date.now()}`,
      title: "Novo Set",
      description: "Descrição do set",
      embedUrl: "",
      tags: ["placeholder"],
    };
    if (section === "home") {
      save({ ...content, home: { ...content.home, featuredSets: [...content.home.featuredSets, newSet] } });
    } else {
      save({ ...content, artist: { ...content.artist, sets: [...content.artist.sets, newSet] } });
    }
  };

  const removeSet = (section: "home" | "artist", id: string) => {
    if (section === "home") {
      save({ ...content, home: { ...content.home, featuredSets: content.home.featuredSets.filter((s) => s.id !== id) } });
    } else {
      save({ ...content, artist: { ...content.artist, sets: content.artist.sets.filter((s) => s.id !== id) } });
    }
  };

  const addVenue = () => {
    const newVenue = { id: `v-${Date.now()}`, name: "Novo Local", location: "Cidade", events: ["Evento"] };
    save({ ...content, home: { ...content.home, venues: [...content.home.venues, newVenue] } });
  };

  const removeVenue = (id: string) => {
    save({ ...content, home: { ...content.home, venues: content.home.venues.filter((v) => v.id !== id) } });
  };

  const addGallery = () => {
    const newItem = { id: `g-${Date.now()}`, imageUrl: "", caption: "Nova imagem" };
    save({ ...content, artist: { ...content.artist, gallery: [...content.artist.gallery, newItem] } });
  };

  const removeGallery = (id: string) => {
    save({ ...content, artist: { ...content.artist, gallery: content.artist.gallery.filter((g) => g.id !== id) } });
  };

  const addExperience = () => {
    const newExp = { id: `e-${Date.now()}`, title: "Nova Experiência", description: "Descrição", tags: ["tag"] };
    save({ ...content, openFormat: { ...content.openFormat, experiences: [...content.openFormat.experiences, newExp] } });
  };

  const removeExperience = (id: string) => {
    save({ ...content, openFormat: { ...content.openFormat, experiences: content.openFormat.experiences.filter((e) => e.id !== id) } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-display text-2xl font-bold tracking-wider text-foreground">Content Studio</h1>
          <div className="flex gap-2">
            <button onClick={exportContent} className="flex items-center gap-2 rounded-lg border border-primary bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/20">
              <Copy className="h-4 w-4" /> Exportar
            </button>
            <button onClick={importContent} className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-muted">
              <Upload className="h-4 w-4" /> Importar
            </button>
          </div>
        </div>

        <div className="space-y-8">
          {/* Profile */}
          <StudioSection title="Perfil">
            {(["name", "subtitle", "city", "bio", "bioShort", "instagramUrl", "soundcloudUrl", "presskitUrl", "emailUrl"] as const).map((key) => (
              <Field key={key} label={key} value={content.profile[key]} onChange={(v) => updateProfile(key, v)} />
            ))}
          </StudioSection>

          {/* Home Sets */}
          <StudioSection title="Sets em Destaque (Home)" action={<AddBtn onClick={() => addSet("home")} />}>
            {content.home.featuredSets.map((s) => (
              <div key={s.id} className="flex items-start gap-2 rounded-lg border border-border bg-card p-4">
                <GripVertical className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />
                <div className="flex-1 space-y-2">
                  <Field label="Título" value={s.title} onChange={(v) => {
                    const sets = content.home.featuredSets.map((x) => x.id === s.id ? { ...x, title: v } : x);
                    save({ ...content, home: { ...content.home, featuredSets: sets } });
                  }} />
                  <Field label="Descrição" value={s.description} onChange={(v) => {
                    const sets = content.home.featuredSets.map((x) => x.id === s.id ? { ...x, description: v } : x);
                    save({ ...content, home: { ...content.home, featuredSets: sets } });
                  }} />
                  <Field label="Embed URL" value={s.embedUrl} onChange={(v) => {
                    const sets = content.home.featuredSets.map((x) => x.id === s.id ? { ...x, embedUrl: v } : x);
                    save({ ...content, home: { ...content.home, featuredSets: sets } });
                  }} />
                </div>
                <button onClick={() => removeSet("home", s.id)} className="mt-1 text-destructive hover:text-destructive/80" aria-label="Remover set"><Trash2 className="h-4 w-4" /></button>
              </div>
            ))}
          </StudioSection>

          {/* Venues */}
          <StudioSection title="Locais (Home)" action={<AddBtn onClick={addVenue} />}>
            {content.home.venues.map((v) => (
              <div key={v.id} className="flex items-start gap-2 rounded-lg border border-border bg-card p-4">
                <div className="flex-1 space-y-2">
                  <Field label="Nome" value={v.name} onChange={(val) => {
                    const venues = content.home.venues.map((x) => x.id === v.id ? { ...x, name: val } : x);
                    save({ ...content, home: { ...content.home, venues } });
                  }} />
                  <Field label="Localização" value={v.location} onChange={(val) => {
                    const venues = content.home.venues.map((x) => x.id === v.id ? { ...x, location: val } : x);
                    save({ ...content, home: { ...content.home, venues } });
                  }} />
                </div>
                <button onClick={() => removeVenue(v.id)} className="mt-1 text-destructive hover:text-destructive/80" aria-label="Remover local"><Trash2 className="h-4 w-4" /></button>
              </div>
            ))}
          </StudioSection>

          {/* Experiences */}
          <StudioSection title="Experiências (Open Format)" action={<AddBtn onClick={addExperience} />}>
            {content.openFormat.experiences.map((e) => (
              <div key={e.id} className="flex items-start gap-2 rounded-lg border border-border bg-card p-4">
                <div className="flex-1 space-y-2">
                  <Field label="Título" value={e.title} onChange={(v) => {
                    const exps = content.openFormat.experiences.map((x) => x.id === e.id ? { ...x, title: v } : x);
                    save({ ...content, openFormat: { ...content.openFormat, experiences: exps } });
                  }} />
                  <Field label="Descrição" value={e.description} onChange={(v) => {
                    const exps = content.openFormat.experiences.map((x) => x.id === e.id ? { ...x, description: v } : x);
                    save({ ...content, openFormat: { ...content.openFormat, experiences: exps } });
                  }} />
                </div>
                <button onClick={() => removeExperience(e.id)} className="mt-1 text-destructive hover:text-destructive/80" aria-label="Remover experiência"><Trash2 className="h-4 w-4" /></button>
              </div>
            ))}
          </StudioSection>

          {/* Artist Sets */}
          <StudioSection title="Sets Artísticos" action={<AddBtn onClick={() => addSet("artist")} />}>
            {content.artist.sets.map((s) => (
              <div key={s.id} className="flex items-start gap-2 rounded-lg border border-border bg-card p-4">
                <div className="flex-1 space-y-2">
                  <Field label="Título" value={s.title} onChange={(v) => {
                    const sets = content.artist.sets.map((x) => x.id === s.id ? { ...x, title: v } : x);
                    save({ ...content, artist: { ...content.artist, sets } });
                  }} />
                  <Field label="Descrição" value={s.description} onChange={(v) => {
                    const sets = content.artist.sets.map((x) => x.id === s.id ? { ...x, description: v } : x);
                    save({ ...content, artist: { ...content.artist, sets } });
                  }} />
                </div>
                <button onClick={() => removeSet("artist", s.id)} className="mt-1 text-destructive hover:text-destructive/80" aria-label="Remover set"><Trash2 className="h-4 w-4" /></button>
              </div>
            ))}
          </StudioSection>

          {/* Gallery */}
          <StudioSection title="Galeria (Artístico)" action={<AddBtn onClick={addGallery} />}>
            {content.artist.gallery.map((g) => (
              <div key={g.id} className="flex items-start gap-2 rounded-lg border border-border bg-card p-4">
                <div className="flex-1 space-y-2">
                  <Field label="URL da Imagem" value={g.imageUrl} onChange={(v) => {
                    const gallery = content.artist.gallery.map((x) => x.id === g.id ? { ...x, imageUrl: v } : x);
                    save({ ...content, artist: { ...content.artist, gallery } });
                  }} />
                  <Field label="Legenda" value={g.caption} onChange={(v) => {
                    const gallery = content.artist.gallery.map((x) => x.id === g.id ? { ...x, caption: v } : x);
                    save({ ...content, artist: { ...content.artist, gallery } });
                  }} />
                </div>
                <button onClick={() => removeGallery(g.id)} className="mt-1 text-destructive hover:text-destructive/80" aria-label="Remover imagem"><Trash2 className="h-4 w-4" /></button>
              </div>
            ))}
          </StudioSection>

          {/* Open Format Texts */}
          <StudioSection title="Textos (Open Format)">
            <Field label="Eventos Privados" value={content.openFormat.privateEvents} onChange={(v) => save({ ...content, openFormat: { ...content.openFormat, privateEvents: v } })} />
            <Field label="Produção & Técnica" value={content.openFormat.production} onChange={(v) => save({ ...content, openFormat: { ...content.openFormat, production: v } })} />
          </StudioSection>
        </div>
      </main>
    </div>
  );
}

function StudioSection({ title, children, action }: { title: string; children: React.ReactNode; action?: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-card/50 p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-sm font-bold tracking-wider text-foreground">{title}</h2>
        {action}
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  const isLong = value.length > 80;
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      {isLong ? (
        <textarea value={value} onChange={(e) => onChange(e.target.value)} rows={3} className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
      ) : (
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)} className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
      )}
    </div>
  );
}

function AddBtn({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="flex items-center gap-1 rounded-md border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-all hover:bg-primary/20" aria-label="Adicionar item">
      <Plus className="h-3 w-3" /> Adicionar
    </button>
  );
}
