"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Projects delivered", value: 50, suffix: "+" },
  { label: "Client satisfaction", value: 98, suffix: "%" },
  { label: "Research studies", value: 15, suffix: "+" },
  { label: "Products launched", value: 10, suffix: "+" },
];

function Counter({ value, suffix, run }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / 1500, 1);
      setN(Math.round(value * p));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run, value]);
  return (
    <span>
      {n}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setRun(true), {
      threshold: 0.3,
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-night py-20 text-white">
      <div className="container-x grid grid-cols-2 gap-8 text-center md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-5xl font-medium tracking-tight md:text-7xl">
              <Counter value={s.value} suffix={s.suffix} run={run} />
            </div>
            <div className="label mt-3 text-silver">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
