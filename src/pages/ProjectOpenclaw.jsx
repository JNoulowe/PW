import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { usePageTitle } from '../hooks/usePageTitle';
import '../styles/pages.css';

export default function ProjectOpenclaw() {
  usePageTitle('OpenClaw — Project Report');

  return (
    <main className="page page-enter">
      <div className="wrap pad-top">

        {/* HERO */}
        <section className="pd-hero">
          <div>
            <div className="eyebrow"><span className="stripe"></span><span className="pd-pos">No.9 · Striker — Orchestration layer</span></div>
            <h1 className="pd-name"><span className="jersey tnum">9</span><span>OpenClaw</span></h1>
          </div>
          <div className="ph pd-hero-img"><span className="ph-label">Product shot — orchestration graph UI</span></div>
          <div className="pd-stats">
            <div className="pd-stat"><div className="pk">Role</div><div className="pv">Architect &amp; lead</div></div>
            <div className="pd-stat"><div className="pk">Season</div><div className="pv">2024 — present</div></div>
            <div className="pd-stat"><div className="pk">Status</div><div className="pv"><span className="statusdot"></span>Shipped · active</div></div>
            <div className="pd-stat"><div className="pk">Form</div><div className="pv">First-choice striker</div></div>
          </div>
          <div className="chips">
            <span className="chip">n8n</span><span className="chip">LM Studio</span><span className="chip">HubSpot API</span>
            <span className="chip">Python</span><span className="chip">Postgres</span><span className="chip">Local LLM</span><span className="chip">Webhooks</span>
          </div>
        </section>

        {/* BODY */}
        <section className="section">
          <div className="pd-body">
            <Reveal as="div" className="pd-sec">
              <h3><span className="secnum">01</span>Brief</h3>
              <p>Small businesses sit on a dozen disconnected tools — a CRM here, a scheduler there, an inbox no one reads. OpenClaw is the orchestration layer that chains them into one system that does more than the sum of its parts, without shipping a single byte of customer data off-premise.</p>
            </Reveal>
            <Reveal as="div" className="pd-sec">
              <h3><span className="secnum">02</span>Approach</h3>
              <p>I started from the formation, not the tools. Map the plays a business actually runs — intake, triage, follow-up, reporting — then wire each to the cheapest reliable engine. AI only takes the field where it earns trust: drafting, classifying, summarizing. The human keeps the decisions that matter.</p>
              <p>Everything routes through a local model first; the cloud is a substitute, brought on only when the local side can't finish the move.</p>
            </Reveal>
            <Reveal as="div" className="pd-sec">
              <h3><span className="secnum">03</span>What I Built</h3>
              <p>A webhook-driven graph: events fan into n8n, which calls a local LM Studio endpoint for language work and writes structured results back to HubSpot and Postgres. Guardrails sit on every edge that touches a customer.</p>
              <div className="codeblock" aria-label="Flow pseudocode">
                <span className="c-dim"># the play, in one line</span><br />
                event <span className="c-gold">→</span> n8n.route() <span className="c-gold">→</span> local_llm.draft() <span className="c-gold">→</span> guardrail.review()<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="c-gold">→</span> hubspot.write() <span className="c-gold">→</span> postgres.log()<br />
                <span className="c-dim"># cloud only if local can't finish the move</span>
              </div>
              <div className="ph" style={{ aspectRatio: '16/9', borderRadius: 8, marginTop: 18 }}><span className="ph-label">Architecture diagram</span></div>
            </Reveal>
            <Reveal as="div" className="pd-sec">
              <h3><span className="secnum">04</span>Post-Match Analysis</h3>
              <p>The orchestration held; the lesson was in the guardrails. Early versions let AI touch customer-facing replies directly — too much risk for too little gain. Pulling those behind human review cost a little speed and bought all the trust. Next time I draw the trust boundary before the first integration, not after.</p>
            </Reveal>
          </div>
        </section>

        {/* GOALS */}
        <section className="section">
          <Reveal as="div" className="section-head"><div className="eyebrow"><span className="stripe"></span><span className="micro">Goals Scored</span></div></Reveal>
          <Reveal as="div" className="goals">
            <div className="goal"><div className="gv tnum">11hrs</div><div className="gl">Back-office hours saved per week, per client</div></div>
            <div className="goal"><div className="gv tnum">100%</div><div className="gl">Customer data kept on-premise</div></div>
            <div className="goal"><div className="gv tnum">6</div><div className="gl">Tools chained into one system</div></div>
          </Reveal>
        </section>

        {/* ASSISTS + NEXT */}
        <section className="section" style={{ paddingTop: 0 }}>
          <Reveal as="div" className="section-head" style={{ marginBottom: 18 }}><div className="eyebrow"><span className="stripe"></span><span className="micro">Assists</span></div></Reveal>
          <Reveal as="div" className="assists" style={{ marginBottom: 36 }}>
            <span className="chip">n8n — automation runtime</span><span className="chip">LM Studio — local inference</span>
            <span className="chip">HubSpot — system of record</span><span className="chip">The Omni Systems crew</span>
          </Reveal>
          <Reveal as="div" className="next-fixture">
            <span className="nf-arrow">→</span>
            <div><div className="mono" style={{ marginBottom: 4 }}>Next Fixture</div><div style={{ fontWeight: 700, fontSize: '1.05rem' }}>A managed-cloud mode for clients without on-prem hardware.</div></div>
          </Reveal>
          <p style={{ marginTop: 36 }}><Link className="backlink" to="/starting-xi">← Back to the team sheet</Link></p>
        </section>

      </div>

      <footer className="ticker">
        <span className="mono">Project Report</span><span className="dot"></span>
        <span className="mono">OpenClaw · No.9</span><span className="dot"></span>
        <span className="mono">Omni Systems</span>
      </footer>
    </main>
  );
}
