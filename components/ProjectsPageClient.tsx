"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import {
  ALL_PROJECTS,
  PROJECT_CATEGORIES,
  type Project,
  type ProjectCategory,
} from "@/lib/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectDetailModal from "./ProjectDetailModal";

type FilterCategory = "All" | ProjectCategory;

export default function ProjectsPageClient() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    let list = ALL_PROJECTS;
    if (activeCategory !== "All") {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.technologies.some((t) => t.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeCategory, searchQuery]);

  const handleSelect = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const activeCategoryMeta = PROJECT_CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <>
      <div className="flex gap-8 xl:gap-10">
        {/* ── Desktop Sidebar ───────────────────────────────────────────────── */}
        <aside className="hidden lg:flex flex-col w-64 xl:w-72 shrink-0">
          <div className="sticky top-28 space-y-1">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-blueline font-bold mb-4 px-1">
              Product Categories
            </p>

            {/* All Projects */}
            <SidebarItem
              emoji="🗂"
              label="All Products"
              count={ALL_PROJECTS.length}
              active={activeCategory === "All"}
              onClick={() => setActiveCategory("All")}
            />

            {/* Category items */}
            {PROJECT_CATEGORIES.map((cat) => {
              const count = ALL_PROJECTS.filter((p) => p.category === cat.id).length;
              return (
                <SidebarItem
                  key={cat.id}
                  emoji={cat.emoji}
                  label={cat.label}
                  count={count}
                  active={activeCategory === cat.id}
                  color={activeCategory === cat.id ? cat.color : undefined}
                  onClick={() => setActiveCategory(cat.id)}
                />
              );
            })}
          </div>
        </aside>

        {/* ── Main Content ─────────────────────────────────────────────────── */}
        <div className="flex-1 min-w-0">
          {/* Mobile category dropdown */}
          <div className="lg:hidden mb-5">
            <button
              type="button"
              onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
              className="w-full flex items-center justify-between rounded-xl border border-grid bg-white px-4 py-3.5 text-base font-semibold text-ink shadow-sm"
              aria-expanded={mobileCategoryOpen}
              aria-label="Select project category"
            >
              <span className="flex items-center gap-2">
                {activeCategory === "All" ? (
                  <>
                    <span>🗂</span>
                    <span>All Products</span>
                  </>
                ) : (
                  <>
                    <span>{activeCategoryMeta?.emoji}</span>
                    <span>{activeCategoryMeta?.label}</span>
                  </>
                )}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-slate transition-transform duration-200 ${mobileCategoryOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {mobileCategoryOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="mt-1.5 rounded-xl border border-grid bg-white shadow-xl overflow-hidden z-20 relative"
                >
                  <button
                    type="button"
                    onClick={() => { setActiveCategory("All"); setMobileCategoryOpen(false); }}
                    className={`w-full flex items-center justify-between px-4 py-3 text-sm font-semibold transition-colors ${activeCategory === "All" ? "bg-blueline/10 text-blueline" : "text-ink hover:bg-paper-dim"}`}
                  >
                    <span className="flex items-center gap-2">
                      <span>🗂</span> All Products
                    </span>
                    <span className="font-mono text-xs text-slate">{ALL_PROJECTS.length}</span>
                  </button>
                  {PROJECT_CATEGORIES.map((cat) => {
                    const count = ALL_PROJECTS.filter((p) => p.category === cat.id).length;
                    const isActive = activeCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => { setActiveCategory(cat.id); setMobileCategoryOpen(false); }}
                        className={`w-full flex items-center justify-between px-4 py-3 text-sm font-semibold transition-colors border-t border-grid/50 ${isActive ? "text-paper" : "text-ink hover:bg-paper-dim"}`}
                        style={isActive ? { backgroundColor: cat.color } : {}}
                      >
                        <span className="flex items-center gap-2">
                          <span>{cat.emoji}</span> {cat.label}
                        </span>
                        <span className={`font-mono text-xs ${isActive ? "text-paper/70" : "text-slate"}`}>{count}</span>
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Toolbar: title + search */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                {activeCategory === "All" ? "All Products" : (
                  <span className="flex items-center gap-2">
                    <span>{activeCategoryMeta?.emoji}</span>
                    <span>{activeCategoryMeta?.label}</span>
                  </span>
                )}
              </h2>
              <p className="text-sm text-slate font-mono mt-0.5">
                {filteredProjects.length} product{filteredProjects.length !== 1 ? "s" : ""}
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </div>

            {/* Search */}
            <div className="relative shrink-0 w-full sm:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate pointer-events-none" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                aria-label="Search products"
                className="w-full rounded-xl border border-grid bg-white pl-10 pr-4 py-2.5 text-sm outline-none focus:border-blueline transition-colors"
              />
            </div>
          </div>

          {/* Project grid */}
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              <motion.div
                key={activeCategory + searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
              >
                {filteredProjects.map((project, i) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={i}
                    onClick={handleSelect}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-24 text-center"
              >
                <span className="text-5xl mb-4">🔍</span>
                <p className="font-display text-xl font-bold text-ink mb-2">No products found</p>
                <p className="text-slate text-base">
                  Try a different category or search term.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Project detail modal */}
      <ProjectDetailModal project={selectedProject} onClose={handleClose} />
    </>
  );
}

function SidebarItem({
  emoji,
  label,
  count,
  active,
  color,
  onClick,
}: {
  emoji: string;
  label: string;
  count: number;
  active: boolean;
  color?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all duration-200 text-left cursor-pointer ${
        active
          ? "text-paper shadow-md"
          : "text-ink hover:bg-paper-dim"
      }`}
      style={active && color ? { backgroundColor: color } : active ? { backgroundColor: "#2557FF" } : {}}
    >
      <span className="flex items-center gap-2.5">
        <span className="text-base">{emoji}</span>
        <span className={active ? "text-paper" : ""}>{label}</span>
      </span>
      <span
        className={`font-mono text-xs px-2 py-0.5 rounded-full ${
          active ? "bg-paper/20 text-paper/90" : "bg-paper-dim text-slate"
        }`}
      >
        {count}
      </span>
    </button>
  );
}
