import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Lock, Send, LogOut, Trash2 } from "lucide-react";
import { addUpdate, useUpdates, type UpdateCategory } from "@/lib/updates";

const ADMIN_PASSWORD = "poule2026";
const AUTH_KEY = "poule:admin:auth";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — POULE" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem(AUTH_KEY) === "1") setAuthed(true);
  }, []);

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 bg-background">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (pw === ADMIN_PASSWORD) {
              sessionStorage.setItem(AUTH_KEY, "1");
              setAuthed(true);
            } else {
              setErr("Mot de passe incorrect.");
            }
          }}
          className="w-full max-w-sm border border-border rounded-2xl p-8 bg-card/50 backdrop-blur"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[var(--accent-bright)]/10 flex items-center justify-center">
              <Lock className="w-5 h-5 text-[var(--accent-bright)]" />
            </div>
            <div>
              <h1 className="font-display font-bold text-lg">Espace privé</h1>
              <p className="text-xs text-muted-foreground">Administration POULE</p>
            </div>
          </div>
          <label className="block text-xs font-medium text-muted-foreground mb-2">
            Mot de passe
          </label>
          <input
            type="password"
            value={pw}
            onChange={(e) => {
              setPw(e.target.value);
              setErr("");
            }}
            autoFocus
            className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--accent-bright)] transition-colors"
          />
          {err && <p className="text-xs text-red-400 mt-2">{err}</p>}
          <button
            type="submit"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[var(--accent-bright)] text-background font-semibold rounded-lg px-4 py-2.5 text-sm hover:opacity-90 transition"
          >
            Se connecter
          </button>
        </form>
      </div>
    );
  }

  return <AdminDashboard onLogout={() => { sessionStorage.removeItem(AUTH_KEY); setAuthed(false); }} />;
}

function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const updates = useUpdates();
  const [text, setText] = useState("");
  const [category, setCategory] = useState<UpdateCategory>("Marketing Digital");
  const [ok, setOk] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addUpdate(text, category);
    setText("");
    setOk(true);
    setTimeout(() => setOk(false), 1800);
  };

  const remove = (id: string) => {
    const list = updates.filter((u) => u.id !== id);
    localStorage.setItem("poule:updates", JSON.stringify(list));
    window.dispatchEvent(new Event("poule:updates:changed"));
  };

  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-[var(--accent-bright)] mb-1">
              Administration
            </p>
            <h1 className="font-display text-3xl font-bold">Tableau de bord</h1>
          </div>
          <button
            onClick={onLogout}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <LogOut className="w-4 h-4" /> Déconnexion
          </button>
        </div>

        <form
          onSubmit={submit}
          className="border border-border rounded-2xl p-6 bg-card/50 backdrop-blur mb-10"
        >
          <h2 className="font-display font-semibold mb-4">Nouvelle mise à jour</h2>
          <label className="block text-xs font-medium text-muted-foreground mb-2">
            Description du jour
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
            placeholder="Ex : Mise à jour des données historiques et analyse des nouveaux cycles."
            className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--accent-bright)] transition-colors resize-none"
          />
          <label className="block text-xs font-medium text-muted-foreground mt-4 mb-2">
            Catégorie
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as UpdateCategory)}
            className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--accent-bright)] transition-colors"
          >
            <option>Marketing Digital</option>
            <option>Production Vidéo</option>
            <option>Data & Stratégie</option>
          </select>
          <div className="flex items-center justify-between mt-6">
            <p className="text-xs text-muted-foreground">
              {ok ? "✓ Publiée avec succès" : "Visible immédiatement sur la page d'accueil."}
            </p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-[var(--accent-bright)] text-background font-semibold rounded-lg px-5 py-2.5 text-sm hover:opacity-90 transition"
            >
              <Send className="w-4 h-4" /> Publier la mise à jour
            </button>
          </div>
        </form>

        <div>
          <h2 className="font-display font-semibold mb-4">
            Historique <span className="text-muted-foreground font-normal">({updates.length})</span>
          </h2>
          {updates.length === 0 ? (
            <p className="text-sm text-muted-foreground">Aucune publication pour le moment.</p>
          ) : (
            <ul className="space-y-3">
              {updates.map((u) => (
                <li
                  key={u.id}
                  className="border border-border rounded-xl p-4 bg-card/40 flex items-start gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] uppercase tracking-widest text-[var(--accent-bright)]">
                        {u.category}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        {new Date(u.createdAt).toLocaleString("fr-FR")}
                      </span>
                    </div>
                    <p className="text-sm">{u.text}</p>
                  </div>
                  <button
                    onClick={() => remove(u.id)}
                    aria-label="Supprimer"
                    className="text-muted-foreground hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
