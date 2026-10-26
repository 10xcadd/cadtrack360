# CADTrack 360 by 10XCADD - setup

Files: index.html (student), faculty.html, admin.html, firebase-config.js, manifest.json, sw.js, icons/, firebase/.

## 1. Firebase (once)
1. console.firebase.google.com > Add project (or open your project).
2. Build > Authentication > Get started > Sign-in method > enable **Email/Password**.
3. Authentication > Settings > **Authorized domains** > add `YOURNAME.github.io`.
4. Build > Firestore Database > Create database (production mode, region asia-south1 Mumbai).
5. Firestore > **Rules** tab > delete everything, paste `firebase/firestore.rules`, click **Publish**.
6. Config is already filled in `firebase-config.js` (project cad-track-360). Nothing to edit.

## 2. First admin (manual, once)
1. Authentication > Users > Add user: email `admin@cadtrack.10xcadd.app`, any strong password. Copy its **User UID**.
2. Firestore > Start collection `users` > Document ID = that UID > fields:
   - loginId (string) `admin`
   - name (string) your name
   - role (string) `admin`
   - status (string) `active`
   - courses (array) empty
3. Open admin.html and sign in with ID `admin`.

## 3. Use
Admin: Courses & syllabus > **Load institute syllabus** (adds the 10 real courses from your CADD CST syllabus, incl. AutoCAD 2D Mechanical) > Users > Create account (assigns courses, gives a WhatsApp/copy message with ID, password and link). Faculty then record sessions; students respond; faculty review.

## 4. GitHub Pages
Upload everything in this folder to the repo root (drag and drop), Settings > Pages > deploy from main / root.
Links: .../index.html (students), .../faculty.html, .../admin.html.
