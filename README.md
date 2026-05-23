# Sitthinon Promyo — Portfolio Website

เว็บไซต์แนะนำตัวและแสดงผลงานส่วนตัว

---

## โครงสร้างไฟล์

```
portfolio/
├── index.html          ← โครงสร้าง HTML (เนื้อหาทั้งหมด)
├── css/
│   └── style.css       ← สไตล์ทั้งหมด (Design tokens, Layout, Components)
├── js/
│   └── main.js         ← JavaScript (Scroll bar, Fade-up animations)
├── assets/             ← รูปภาพและไฟล์อื่นๆ (เพิ่มทีหลัง)
│   └── photo.jpg       ← (ยังไม่มี) รูปโปรไฟล์
└── README.md           ← ไฟล์นี้
```

---

## วิธีแก้ไข

### เปลี่ยนข้อมูลส่วนตัว / เนื้อหา
แก้ไขที่ **`index.html`** — แต่ละ section มี comment บอกชัดเจน:
- `<!-- HERO -->` — ชื่อ, ตำแหน่ง, คำอธิบาย
- `<!-- EXPERIENCE -->` — ประสบการณ์การทำงาน (เพิ่ม/ลด `.exp-item`)
- `<!-- SKILLS -->` — ทักษะและเครื่องมือ
- `<!-- EDUCATION -->` — ประวัติการศึกษา
- `<!-- CONTACT -->` — ข้อมูลติดต่อ

### เปลี่ยนสีหรือสไตล์
แก้ไขที่ **`css/style.css`** — section ต่างๆ:
- **Section 1** — CSS Variables (สี, font) แก้ตรงนี้เพื่อเปลี่ยน theme ทั้งเว็บ
- **Section 4** — Navigation
- **Section 5** — Hero
- **Section 7** — Experience
- **Section 8** — Skills
- **Section 9** — Education
- **Section 10** — Contact
- **Section 13** — Responsive / Mobile

### เพิ่ม/แก้ไข JavaScript
แก้ไขที่ **`js/main.js`** — แต่ละฟังก์ชันมี comment อธิบาย:
- `initScrollProgress()` — แถบ scroll progress ด้านบน
- `initFadeUpAnimations()` — animation เลื่อนขึ้นเมื่อ scroll
- `initHeroReveal()` — แสดง Hero section ทันทีเมื่อโหลดหน้า

### เพิ่มรูปโปรไฟล์
1. วางไฟล์รูปใน `assets/photo.jpg`
2. ใน `index.html` หา comment `<!-- Replace the initials below with an <img> tag -->`
3. แทนที่ `<span class="hero-initials">SP</span>` ด้วย:
   ```html
   <img src="assets/photo.jpg" alt="Sitthinon Promyo" style="width:100%;height:100%;object-fit:cover;border-radius:14px;">
   ```

---

## Technology
- HTML5
- CSS3 (CSS Variables, Grid, Flexbox, IntersectionObserver)
- Vanilla JavaScript (ES6+)
- Google Fonts: Playfair Display + DM Sans
