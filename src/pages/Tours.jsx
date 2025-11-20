import React, { useMemo, useState, useEffect } from "react";
import ToursCard from "../components/ToursCard";
import { tours } from "../data/tours";
import "./Tours.css";

const sorts = [
  { value: "price-asc", label: "Cijena ⬆️" },
  { value: "price-desc", label: "Cijena ⬇️" },
  { value: "title-asc", label: "Naziv A-Z" },
  { value: "title-desc", label: "Naziv Z-A" },
];

export default function Tours() {
  const categories = [...new Set(tours.map((c) => c.category))];
  const durations = [...new Set(tours.map((t) => t.duration))];

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Svi");
  const [duration, setDuration] = useState("Svi");
  const [sort, setSort] = useState("price-asc");

  //Filtriranje i sortiranje
  const filtered = useMemo(() => {
    let result = tours.filter((t) => 
        (query ? t.title.toLowerCase().includes(query.toLowerCase()) : true) &&
    (category === "Svi" ? true : t.category === category) &&
    (duration === "Svi" ? true : t.duration === duration)
    );

    if(sort === "price-asc") result.sort((a, b) => a.price - b.price) //ako je ascending
    if(sort === "price-desc") result.sort((a, b) => b.price - a.price) //ako je descending
    if(sort === "title-asc") result.sort((a, b) => a.title.localeCompare(b.title));
    if(sort === "title-desc") result.sort((a, b) => b.title.localeCompare(a.title));
    return result;
  }, [query, category, duration, sort]);

  return (
    <section className="tours container">
      <h1>Izleti</h1>
      <div className="filters">
        <input
          type="text"
          className="search"
          placeholder="Pretraži po naslovu ili destinaciji..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="subfilters">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Svi">Svi</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option value="Svi">Svi</option>
            {durations.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            {sorts.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {filtered.length > 0 ? (
      <div className="grid">
            {filtered.map((t) => (
              <ToursCard key={t.id} tours={t} />
            ))}
      </div>
      ) : (
      <p className="muted">Nema rezultata za zadane filtere</p>
      )}
    </section>
  );
}
