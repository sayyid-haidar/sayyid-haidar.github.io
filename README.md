# Sayyid Haidar - Portfolio

[![Deploy](https://github.com/sayyid-haidar/sayyid.github.io/actions/workflows/deploy.yml/badge.svg)](https://sayyid-haidar.github.io/)

Modern portfolio dengan React + TypeScript + Tailwind.

## 🚀 Quick Start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # Output: dist/
```

## 🛠 Stack

- **React 19** + TypeScript
- **Vite** (build + HMR)
- **Tailwind CSS**
- **GitHub Pages** (auto deploy)

## ✨ Features

| Feature | Deskripsi |
|---------|-----------|
| 🌙 Dark Mode | Toggle + system preference |
| 📱 Responsive | Mobile menu + breakpoints |
| ⚡ Code Split | Lazy-loaded sections |
| 📊 JSON Data | Edit konten tanpa coding |
| 🔍 SEO Ready | Meta tags + structured data |

## 📁 Edit Konten

Semua data di `src/data/` (JSON):

| File | Isi | Auto-hide? |
|------|-----|------------|
| `hero.json` | Nama, title, deskripsi | ❌ |
| `profile.json` | Nav, stats, kontak | ❌ |
| `what-i-do.json` | Skills | ❌ |
| `projects.json` | Projects showcase | ✅ |
| `experiences.json` | Work history | ✅ |

**Contoh tambah project:**

```json
// src/data/projects.json
{
  "id": "nama-project",
  "title": "Judul",
  "description": "Deskripsi singkat",
  "thumbnail": "/assets/projects/gambar.jpg",
  "tags": ["React", "Node"],
  "category": "Full Stack",
  "links": { "github": "...", "demo": "..." },
  "featured": true
}
```

Section otomatis hide kalau array kosong.

## 🎨 Customisasi

### Warna / Theme
Tailwind `dark:` classes:
```tsx
className="bg-white dark:bg-gray-900"
```

### Tambah Section Baru
1. Buat file di `src/components/sections/`
2. Export default + lazy load di `App.tsx`
3. Tambah nav di `src/data/profile.json`

## 📱 Struktur Folder

```
src/
├── components/
│   ├── layout/      # Navbar, Footer
│   ├── sections/    # Hero, Projects, dsb
│   └── ui/          # Button, Card, Skeleton
├── hooks/           # useTheme, useMediaQuery
├── data/            # JSON konten
└── types/           # TypeScript interfaces

public/
├── assets/          # Foto, CV, thumbnails
└── data/            # JSON untuk production
```

## 🔧 Troubleshooting

| Problem | Solusi |
|---------|--------|
| Perubahan JSON ga muncul | Hard refresh (Cmd+Shift+R) |
| Gambar project ga load | Pastikan di `public/assets/projects/` |
| Section ga muncul | Cek array JSON kosong atau tidak |

## 📝 Deploy

Push ke `main` → GitHub Actions auto deploy.

**Manual:**
```bash
npm run build
# Upload dist/ ke GitHub Pages
```

## 📞 Contact

- Email: sayyid.abdul.aziz.haidar@gmail.com
- LinkedIn: [sayyid-abdul-aziz-haidar](https://linkedin.com/in/sayyid-abdul-aziz-haidar-3a9230146/)
- GitHub: [@sayyid-haidar](https://github.com/sayyid-haidar)

---

MIT License © Sayyid Haidar
