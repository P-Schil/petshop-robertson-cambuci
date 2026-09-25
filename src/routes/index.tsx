import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, CalendarCheck, Check, ChevronLeft, ChevronRight, Clock3,
  HeartHandshake, MapPin, MessageCircle, PawPrint, Scissors, ShoppingBag,
  ShieldCheck, Sparkles, Star, Users, Waves
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({ component: Index });

const whatsapp = "https://wa.me/551194058130";

const services = [
  { icon: Scissors, title: "Banho e Tosa", text: "Higiene e estética com atenção ao conforto, às características e ao bem-estar de cada pet.", image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=900&q=80" },
  { icon: Waves, title: "Banho com Ozonioterapia", text: "Uma opção de cuidado complementar no banho, integrada a uma experiência de higiene mais completa.", image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80" },
  { icon: ShoppingBag, title: "Ração e Acessórios", text: "Produtos para alimentação, rotina e conforto do seu pet, reunidos em um só endereço.", image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=900&q=80" },
  { icon: ShoppingBag, title: "Produtos para o Cuidado", text: "Rações, acessórios e produtos para higiene e rotina do seu pet.", image: "https://www.petscorner.co.uk/Images/Store/large/pets-corner-barnes-interior-2.jpg" },
  { icon: HeartHandshake, title: "Atendimento Personalizado", text: "Uma abordagem próxima e cuidadosa para que tutor e pet tenham mais segurança em cada atendimento.", image: "https://images.unsplash.com/photo-1599443015574-6c1c7c8f9a12?auto=format&fit=crop&w=900&q=80" },
  { icon: CalendarCheck, title: "Orientação para o Cuidado", text: "Informações claras para ajudar você a tomar decisões conscientes sobre a rotina do seu animal.", image: "https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?auto=format&fit=crop&w=900&q=80" },
];

const differentials = [
  ["Atendimento personalizado", "Foco nas necessidades do pet e na tranquilidade do tutor.", HeartHandshake],
  ["Expertise especializada", "Atendimento com foco em qualidade e bem-estar animal.", ShieldCheck],
  ["Banho com ozonioterapia", "Alternativa de cuidado complementar disponível no serviço de banho.", Waves],
  ["Qualidade e ética", "Qualidade técnica e ética profissional como valores inegociáveis.", Star],
  ["Informação clara", "Orientação objetiva para facilitar escolhas e cuidados responsáveis.", MessageCircle],
  ["Estrutura completa", "Serviços e produtos para diferentes necessidades em um só local.", ShoppingBag],
] as const;

const proof = [
  ["Cuidado próximo", "A experiência é construída com atendimento personalizado e relacionamento duradouro.", HeartHandshake],
  ["Qualidade como prioridade", "A proposta da marca é não comprometer qualidade técnica ou ética por questões comerciais.", ShieldCheck],
  ["Confiança no atendimento", "Informações claras e atenção ao bem-estar ajudam o tutor a escolher com mais segurança.", Star],
];

function go(id: string) { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }

function Index() {
  const [slide, setSlide] = useState(0);
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <button onClick={() => go("inicio")} className="flex items-center gap-3" aria-label="Pet Shop Robertson - início">
            <span className="grid size-11 place-items-center rounded-2xl bg-[#f9bee0] text-slate-950 shadow-lg"><PawPrint className="size-6" /></span>
            <span className="text-left leading-none"><strong className="block text-lg font-black">Pet Shop Robertson</strong><small className="mt-1 block text-[10px] font-bold uppercase tracking-[.18em] text-slate-500">Cambuci • São Paulo</small></span>
          </button>
          <nav className="hidden gap-7 lg:flex" aria-label="Navegação principal">
            {[[ "Sobre","sobre" ],[ "Serviços","servicos" ],[ "Diferenciais","diferenciais" ],[ "Contato","contato" ]].map(([label,id]) =>
              <button key={id} onClick={() => go(id)} className="text-sm font-bold text-slate-600 transition hover:text-slate-950">{label}</button>
            )}
          </nav>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#f9bee0] px-4 py-2.5 text-sm font-extrabold text-slate-950 transition hover:-translate-y-0.5">
            <MessageCircle className="size-4" /><span className="hidden sm:inline">Quero Tirar Dúvidas</span><span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </header>

      <section id="inicio" className="relative flex min-h-[760px] items-center pt-20">
        <img fetchPriority="high" src="https://images.pexels.com/photos/9986354/pexels-photo-9986354.jpeg?auto=compress&dpr=1&h=1200&w=2000" alt="Foto profissional de um cachorro recebendo cuidados em um pet shop" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-slate-950/65" /><div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/55 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-3xl animate-[fadeUp_.7s_ease-out]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#f9bee0]/50 bg-[#f9bee0]/15 px-4 py-2 text-xs font-black uppercase tracking-[.16em] text-white"><Sparkles className="size-4 text-[#f9bee0]" /> Cuidado completo para seu pet</span>
            <h1 className="mt-6 text-5xl font-black leading-[.98] tracking-[-.04em] text-white sm:text-6xl lg:text-8xl">Cuidado profissional para quem <span className="text-[#f9bee0]">faz parte da família.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">Banho e tosa, ozonioterapia, ração e acessórios com atendimento personalizado e foco no bem-estar do seu pet.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f9bee0] px-7 py-4 text-sm font-black text-slate-950 shadow-xl transition hover:-translate-y-1">Quero Falar com Especialista <ArrowRight className="size-5" /></a>
              <button onClick={() => go("servicos")} className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-7 py-4 text-sm font-black text-white backdrop-blur hover:bg-white/20">Conhecer serviços</button>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-white/75">
              <span className="inline-flex items-center gap-2"><Check className="size-4 text-[#f9bee0]" /> Atendimento de segunda a sábado</span>
              <span className="inline-flex items-center gap-2"><Check className="size-4 text-[#f9bee0]" /> Cambuci • São Paulo</span>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="scroll-mt-20 bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="text-xs font-black uppercase tracking-[.18em] text-pink-600">Sobre nós</span>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Qualidade e relacionamento para cuidar do seu pet com segurança.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">O Pet Shop Robertson atende tutores que valorizam cuidado, confiança e informação clara. A proposta é reunir serviços e produtos para facilitar a rotina e oferecer uma experiência acolhedora.</p>
            <p className="mt-4 leading-7 text-slate-600">Nossa missão parte de um princípio: qualidade e relacionamento duradouro são fundamentais para o sucesso. O atendimento personalizado e a expertise no segmento orientam cada contato.</p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-5"><strong className="block text-2xl font-black">2ª–6ª</strong><span className="text-xs font-bold text-slate-500">8h às 18h</span></div>
              <div className="rounded-2xl bg-slate-50 p-5"><strong className="block text-2xl font-black">Sáb.</strong><span className="text-xs font-bold text-slate-500">8h às 16h</span></div>
              <div className="rounded-2xl bg-slate-50 p-5"><strong className="block text-2xl font-black">1</strong><span className="text-xs font-bold text-slate-500">endereço no Cambuci</span></div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-[#f9bee0]/30 blur-2xl" />
            <img loading="lazy" src="https://images.pexels.com/photos/6568949/pexels-photo-6568949.jpeg?auto=compress&dpr=1&w=1200" alt="Profissional oferecendo cuidado atento a um cachorro" className="relative h-[520px] w-full rounded-[2.5rem] object-cover shadow-2xl" />
            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-white bg-white/95 p-5 shadow-xl sm:left-auto sm:w-80"><div className="flex gap-3"><span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#f9fb93]"><HeartHandshake className="size-5" /></span><div><strong className="block text-sm font-black">Atendimento personalizado</strong><span className="mt-1 block text-xs leading-5 text-slate-500">Foco no bem-estar do pet e na tranquilidade do tutor.</span></div></div></div>
          </div>
        </div>
      </section>

      <section id="servicos" className="scroll-mt-20 bg-slate-50 px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl"><span className="text-xs font-black uppercase tracking-[.18em] text-pink-600">Serviços e soluções</span><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Cuidado completo em um só lugar.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Serviços e produtos pensados para facilitar a rotina e oferecer mais confiança no cuidado com seu animal.</p></div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => { const Icon=s.icon; return <article key={s.title} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-48 overflow-hidden"><img loading="lazy" src={s.image} alt={s.title} className="size-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 to-transparent" /><span className="absolute bottom-4 left-4 grid size-11 place-items-center rounded-xl bg-white text-slate-950 shadow-lg"><Icon className="size-5" /></span></div>
              <div className="p-6"><h3 className="text-xl font-black">{s.title}</h3><p className="mt-3 min-h-14 text-sm leading-6 text-slate-600">{s.text}</p><a href={whatsapp} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#f9fb93] px-4 py-3 text-sm font-extrabold text-slate-950 transition hover:brightness-95">Quero Agendar uma Consulta <ArrowRight className="size-4" /></a></div>
            </article> })}
          </div>
        </div>
      </section>

      <section id="diferenciais" className="scroll-mt-20 bg-slate-950 px-5 py-24 text-white lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl"><div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <div><span className="text-xs font-black uppercase tracking-[.18em] text-[#f9bee0]">Diferenciais</span><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Profissionalismo que começa no cuidado.</h2><p className="mt-6 leading-8 text-white/65">Uma experiência construída para quem procura qualidade, confiança e atenção ao bem-estar animal.</p><a href={whatsapp} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f9bee0] px-6 py-3.5 text-sm font-black text-slate-950 transition hover:-translate-y-1">Quero Tirar Dúvidas <MessageCircle className="size-4" /></a></div>
          <div className="grid gap-4 sm:grid-cols-2">{differentials.map(([title,text,Icon]) => <div key={title} className="rounded-3xl border border-white/10 bg-white/[.05] p-6 transition hover:-translate-y-1 hover:bg-white/[.08]"><span className="grid size-12 place-items-center rounded-2xl bg-[#f9bee0]/15 text-[#f9bee0]"><Icon className="size-5" /></span><h3 className="mt-5 text-lg font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-white/60">{text}</p></div>)}</div>
        </div></div>
      </section>

      <section id="prova" className="bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl"><div className="mx-auto max-w-2xl text-center"><span className="text-xs font-black uppercase tracking-[.18em] text-pink-600">Confiança e prova social</span><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Uma experiência orientada por qualidade.</h2><p className="mt-5 text-lg leading-8 text-slate-600">A estrutura está preparada para receber depoimentos reais e autorizados dos clientes do Pet Shop Robertson.</p></div>
          <div className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-12">
            <div className="flex items-center justify-between"><span className="grid size-14 place-items-center rounded-2xl bg-[#f9fb93]"><Star className="size-6 fill-current" /></span><div className="flex gap-2"><button onClick={() => setSlide((slide-1+proof.length)%proof.length)} aria-label="Anterior" className="grid size-10 place-items-center rounded-full border bg-white hover:border-pink-300"><ChevronLeft className="size-5" /></button><button onClick={() => setSlide((slide+1)%proof.length)} aria-label="Próximo" className="grid size-10 place-items-center rounded-full border bg-white hover:border-pink-300"><ChevronRight className="size-5" /></button></div></div>
            {(() => { const [title,text,Icon]=proof[slide]; return <div key={title} className="mt-10 animate-[fadeIn_.35s_ease-out]"><div className="mb-4 flex items-center gap-2 text-pink-600"><Icon className="size-5" /><span className="text-sm font-black uppercase tracking-wider">Compromisso Robertson</span></div><h3 className="text-3xl font-black tracking-tight">{title}</h3><p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">{text}</p></div> })()}
            <div className="mt-8 flex gap-2">{proof.map((_,i)=><button key={i} onClick={()=>setSlide(i)} aria-label={`Ir para item ${i+1}`} className={`h-2 rounded-full transition-all ${i===slide?"w-8 bg-pink-600":"w-2 bg-slate-300"}`} />)}</div>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-5 text-slate-400">Não incluímos nomes, cargos, fotos ou resultados de clientes sem informações reais e autorização.</p>
        </div>
      </section>

      <section id="contato" className="scroll-mt-20 px-5 py-10 lg:px-8 lg:py-16"><div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#f9bee0] px-7 py-16 text-slate-950 sm:px-12 lg:px-20 lg:py-20"><div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]"><div><span className="text-xs font-black uppercase tracking-[.18em] text-slate-900/60">Fale com o Pet Shop Robertson</span><h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Cuidado profissional para seu pet, com confiança e atenção.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-900/70">Tire dúvidas, consulte serviços ou agende seu atendimento pelo WhatsApp.</p></div><a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white shadow-xl transition hover:-translate-y-1">Quero Falar com Especialista <ArrowRight className="size-5" /></a></div></div></section>

      <footer className="bg-slate-950 px-5 pb-28 pt-16 text-white lg:px-8 lg:pb-16"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_.8fr_.8fr]">
        <div><div className="flex items-center gap-3"><span className="grid size-11 place-items-center rounded-2xl bg-[#f9bee0] text-slate-950"><PawPrint className="size-6" /></span><div><strong className="block text-lg font-black">Pet Shop Robertson</strong><span className="text-xs text-white/50">Cambuci • São Paulo</span></div></div><p className="mt-5 max-w-md text-sm leading-6 text-white/55">Qualidade, relacionamento duradouro e cuidado responsável para animais de estimação.</p></div>
        <div><h3 className="font-black">Atendimento</h3><div className="mt-5 space-y-4 text-sm text-white/60"><p className="flex gap-3"><Clock3 className="size-4 text-[#f9bee0]" />Segunda a sexta, 8h às 18h</p><p className="flex gap-3"><CalendarCheck className="size-4 text-[#f9bee0]" />Sábado, 8h às 16h</p><p className="flex gap-3"><MapPin className="size-4 text-[#f9bee0]" />R. Robertson, 518 - Cambuci, São Paulo - SP</p></div></div>
        <div><h3 className="font-black">Fale conosco</h3><div className="mt-5 space-y-4 text-sm text-white/60"><a href={whatsapp} target="_blank" rel="noreferrer" className="flex gap-3 hover:text-white"><MessageCircle className="size-4 text-[#f9bee0]" />(11) 94058-130</a><p className="flex gap-3"><ShoppingBag className="size-4 text-[#f9bee0]" />Banho, tosa, ozonioterapia, ração e acessórios</p></div></div>
      </div><div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/35">© {new Date().getFullYear()} Pet Shop Robertson. Todos os direitos reservados.</div></footer>

      <a href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar com Pet Shop Robertson pelo WhatsApp" className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#f9bee0] text-slate-950 shadow-2xl transition hover:-translate-y-1 hover:scale-105"><MessageCircle className="size-6" /></a>
    </main>
  );
}
