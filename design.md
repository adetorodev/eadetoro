🎨 UI DESIGN SPEC (Figma-Level)
Personal Website — Adewale Ezekiel Adetoro
1. 📐 GRID SYSTEM (Non-negotiable)
Desktop

Width: 1440px

Container: 1200px

Columns: 12

Gutter: 24px

Margin: 120px (left/right)

Tablet

Width: 768px

Columns: 8

Mobile

Width: 375px

Columns: 4

2. 🎨 COLOR SYSTEM
Base (Dark Theme)
Token	Value	Usage
bg-primary	#0B0F19	Main background
bg-secondary	#111827	Cards
border	#1F2937	Subtle borders
text-primary	#E5E7EB	Main text
text-secondary	#9CA3AF	Subtext
Brand Colors
Token	Value	Usage
primary	#2563EB	CTA
secondary	#9333EA	Accent
accent	#22C55E	Success/highlight
Gradients (Hero ONLY)
background: linear-gradient(135deg, #2563EB 0%, #9333EA 100%);
3. 🔤 TYPOGRAPHY SYSTEM
Font Stack

Primary: Inter

Code: JetBrains Mono

Type Scale
Style	Size	Weight	Line Height
H1	56px	700	64px
H2	40px	600	48px
H3	28px	600	36px
Body Large	18px	400	28px
Body	16px	400	24px
Small	14px	400	20px
4. 🧱 CORE COMPONENTS
🔘 Button
Primary Button

Height: 48px

Padding: 0 24px

Radius: 12px

Background: primary

Hover: lighten + slight scale (1.03)

transition: all 0.2s ease;
🧩 Card Component

Used for:

Projects

Research

Books

Structure

Padding: 24px

Background: bg-secondary

Border: 1px solid border

Radius: 16px

Hover Effect

TranslateY: -6px

Shadow: subtle glow

Border highlight (primary)

🏷 Tag Badge

Padding: 6px 12px

Radius: 999px

Background: #1F2937

Font: 12px

5. 🏠 HOMEPAGE (FRAME SPEC)
🔥 SECTION 1: HERO
Layout:

2-column grid

LEFT:
H1:
Adewale Ezekiel Adetoro

Subtext:
AI Engineer | Data Engineer | Backend Specialist

Description:
I build scalable AI systems, data pipelines, and backend infrastructure.

Buttons:
[ View Projects ]   [ Download Resume ]
RIGHT:

Abstract gradient blob

Optional:

Code snippet mock

Terminal UI

💡 Spacing

Section padding: 120px top/bottom

Element spacing: 24px / 32px / 48px

🧠 SECTION 2: TECH STACK
Layout:

Horizontal scroll (mobile)

Grid (desktop)

Each item:

Icon

Name

🚀 SECTION 3: FEATURED PROJECTS
Layout:

3-column grid

Each card:

Title
Short description
Tags (FastAPI, Kafka, etc.)
→ View Details
🔬 SECTION 4: RESEARCH

Same as projects but:

More minimal

Focus on title + abstract

📚 SECTION 5: BOOKS
Layout:

Horizontal scroll

Each:

Cover image

Title

CTA: Buy

📬 SECTION 6: CTA

Centered:

"Let’s build something impactful."

[ Contact Me ]
6. 👤 ABOUT PAGE
Layout:
LEFT:

Profile image

RIGHT:

Bio

Timeline

Timeline Component

Vertical line + nodes:

2025 — AI Engineer @ X
2024 — Built Data Pipeline @ Y
2023 — Published Book
7. 🔬 RESEARCH DETAIL PAGE
Layout:
Title
Tags

Abstract

Divider

Problem Statement

Methodology

Results

Code / Paper Links
Typography Trick

Use max-width: 700px
👉 Forces readability (this is critical)

8. 💻 PROJECT DETAIL PAGE
Sections:

Hero (title + summary)

Problem

Solution

Architecture (diagram block)

Tech stack

Results (metrics)

Architecture Block

Dark container

Monospace font

OR embedded diagram

9. 📬 CONTACT PAGE
Layout:

Centered form:

Name

Email

Message

Button:

Full width on mobile

10. 🧭 NAVBAR
Structure:

Left:

Logo (your name)

Right:

Menu items

Behavior:

Sticky

Background blur on scroll

backdrop-filter: blur(10px);
11. 🦶 FOOTER

Minimal

Links

Social icons

12. ✨ MICRO-INTERACTIONS
Required:

Hover lift on cards

Smooth page transitions

Button ripple/scale

Scroll reveal animations

13. 📱 MOBILE ADAPTATION
Changes:

Stack all grids

Reduce padding (120 → 64)

Collapse navbar → hamburger

14. 🧠 DESIGN PHILOSOPHY

If a recruiter lands:

Within 5 seconds, they should know:

Who you are

What you do

Why you matter

If not → design failed.

15. 🔥 PRO-LEVEL ADDITIONS (Optional but deadly)

Animated terminal showing logs

Live metrics (fake but realistic)

"Systems I’ve Built" section

Dark/light toggle (only if done right)