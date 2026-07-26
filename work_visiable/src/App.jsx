import { useState, useEffect, useMemo } from "react";
import {
  Handshake,
  Menu,
  MapPin,
  Search,
  LayoutGrid,
  Wrench,
  Sparkles,
  Zap,
  PaintBucket,
  Cookie,
  Scissors,
  Leaf,
  HardHat,
  Hand,
  HeartHandshake,
  BookOpen,
  Camera,
  MoreHorizontal,
  MessageCircle,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Category configuration — drives both the filter pills and each card's
// icon/tag color. "key" must match the `categoria` field returned by the API.
// ---------------------------------------------------------------------------
const CATEGORIES = [
  { key: "Todos", label: "Todos", icon: LayoutGrid },
  { key: "Encanador", label: "Encanador", icon: Wrench },
  { key: "Diarista", label: "Diarista", icon: Sparkles },
  { key: "Eletricista", label: "Eletricista", icon: Zap },
  { key: "Pintor", label: "Pintor", icon: PaintBucket },
  { key: "Bolos e Doces", label: "Bolos e Doces", icon: Cookie },
  { key: "Costura", label: "Costura", icon: Scissors },
  { key: "Jardinagem", label: "Jardinagem", icon: Leaf },
  { key: "Pedreiro", label: "Pedreiro", icon: HardHat },
  { key: "Manicure", label: "Manicure", icon: Hand },
  { key: "Cuidador", label: "Cuidador", icon: HeartHandshake },
  { key: "Aulas Particulares", label: "Aulas Particulares", icon: BookOpen },
  { key: "Fotografia", label: "Fotografia", icon: Camera },
  { key: "Outros", label: "Outros", icon: MoreHorizontal },
];

const categoryIcon = (categoria) =>
  CATEGORIES.find((c) => c.key === categoria)?.icon || MoreHorizontal;

// Sample data used only while the local API hasn't responded yet, so the
// layout can still be reviewed. Replace/remove once /listarDados is live.
const FALLBACK_DATA = [
  {
    id: 1,
    categoria: "Encanador",
    titulo: "Conserto de torneiras e vazamentos",
    descricao:
      "Profissional com 10 anos de experiência em reparos hidráulicos. Atendo residências e comércios.",
    prestador: "Carlos Silva",
    cidade: "São Paulo, SP",
    precoMin: 100,
    precoMax: 200,
    whatsapp: "5511999999999",
  },
  {
    id: 2,
    categoria: "Diarista",
    titulo: "Faxina residencial completa",
    descricao:
      "Limpeza profunda, organização e passadoria. Trabalho com dedicação e capricho.",
    prestador: "Maria Oliveira",
    cidade: "Rio de Janeiro, RJ",
    precoMin: 50,
    precoMax: 100,
    whatsapp: "5521999999999",
  },
];

function formatPrice(min, max) {
  if (min == null && max == null) return "Sob consulta";
  if (min != null && max != null) return `R$ ${min} - R$ ${max}`;
  return `R$ ${min ?? max}`;
}

function initials(name = "") {
  return name.trim().charAt(0).toUpperCase() || "?";
}

function ServiceCardSkeleton() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden animate-pulse">
      <div className="h-36 bg-slate-100" />
      <div className="p-5 space-y-3">
        <div className="h-4 w-1/3 bg-slate-100 rounded" />
        <div className="h-4 w-2/3 bg-slate-100 rounded" />
        <div className="h-3 w-full bg-slate-100 rounded" />
        <div className="h-3 w-4/5 bg-slate-100 rounded" />
        <div className="h-8 w-full bg-slate-100 rounded-full mt-4" />
      </div>
    </div>
  );
}

function ServiceCard({ item }) {
  const Icon = categoryIcon(item.categoria);
  const priceLabel = formatPrice(item.precoMin, item.precoMax);
  const waLink = item.whatsapp
    ? `https://wa.me/${item.whatsapp.replace(/\D/g, "")}`
    : null;

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
      <div className="relative h-36 bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-100 flex items-center justify-center">
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-violet-700 shadow-sm">
          <Icon className="h-3.5 w-3.5" />
          {item.categoria}
        </span>
        <Icon className="h-12 w-12 text-violet-300 group-hover:text-violet-400 group-hover:scale-110 transition-transform duration-200" strokeWidth={1.5} />
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-slate-900 text-base leading-snug">
          {item.titulo}
        </h3>
        <p className="mt-1.5 text-sm text-slate-500 line-clamp-2">
          {item.descricao}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-violet-100 text-violet-700 text-xs font-semibold flex items-center justify-center shrink-0">
            {initials(item.prestador)}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-slate-800 truncate">
              {item.prestador}
            </p>
            <p className="text-xs text-slate-400 flex items-center gap-1">
              <MapPin className="h-3 w-3 shrink-0" />
              <span className="truncate">{item.cidade}</span>
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-sm font-semibold text-violet-700">
            {priceLabel}
          </span>
          {waLink ? (
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-emerald-600 transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              WhatsApp
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1.5 text-xs font-semibold text-slate-400">
              <MessageCircle className="h-3.5 w-3.5" />
              Indisponível
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TalentoLocal() {
  const [listings, setListings] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ok | error
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [query, setQuery] = useState("");

  async function loadListings() {
    setStatus("loading");
    try {
      const res = await fetch("http://localhost:3000/listarDados");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setListings(Array.isArray(data) ? data : data?.dados ?? []);
      setStatus("ok");
    } catch (err) {
      console.error("Falha ao buscar /listarDados:", err);
      setListings(FALLBACK_DATA);
      setStatus("error");
    }
  }

  useEffect(() => {
    loadListings();
  }, []);

  const filtered = useMemo(() => {
    return listings.filter((item) => {
      const matchesCategory =
        activeCategory === "Todos" || item.categoria === activeCategory;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        item.titulo?.toLowerCase().includes(q) ||
        item.descricao?.toLowerCase().includes(q) ||
        item.cidade?.toLowerCase().includes(q) ||
        item.prestador?.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [listings, activeCategory, query]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-violet-600 flex items-center justify-center">
              <Handshake className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold text-slate-900 text-lg">
              TalentoLocal
            </span>
          </div>
          <button
            aria-label="Abrir menu"
            className="h-9 w-9 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-50 via-white to-fuchsia-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-14 pb-10 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700 mb-5">
            <MapPin className="h-3.5 w-3.5" />
            Encontre profissionais perto de você
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Conecte-se com{" "}
            <span className="text-violet-600">talentos locais</span>
          </h1>
          <p className="mt-4 text-slate-500 text-sm sm:text-base leading-relaxed">
            Encontre encanadores, diaristas, confeiteiros e diversos
            profissionais na sua região. Contrate direto pelo WhatsApp.
          </p>

          <div className="mt-7 relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Buscar serviços, profissionais ou cidades..."
              className="w-full rounded-full border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-700 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
            />
          </div>
        </div>
      </section>

      {/* Category filters */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(({ key, label, icon: Icon }) => {
            const active = activeCategory === key;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium border transition-colors ${
                  active
                    ? "bg-violet-600 border-violet-600 text-white"
                    : "bg-white border-slate-200 text-slate-600 hover:border-violet-300 hover:text-violet-700"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Listings */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        {status === "error" && (
          <div className="mb-5 flex items-center justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            <span className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4 shrink-0" />
              Não foi possível conectar em localhost:3000/listarDados.
              Exibindo dados de exemplo.
            </span>
            <button
              onClick={loadListings}
              className="inline-flex items-center gap-1 font-semibold hover:underline shrink-0"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Tentar novamente
            </button>
          </div>
        )}

        {status === "loading" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <ServiceCardSkeleton key={i} />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 text-slate-400 text-sm">
            Nenhum profissional encontrado para esse filtro.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item) => (
              <ServiceCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
