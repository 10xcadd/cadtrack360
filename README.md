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

## Logins, forgot password, first login
- New accounts get an ID like `nishad_102` and password `Nishad@102`. The user must set their own password at first login.
- Every user's Firebase login is an alias of the admin mailbox (`10xcadd+nishad_102@gmail.com`), so reset emails land in the 10xcadd@gmail.com inbox.
- Forgot password: user taps "Forgot password?" and enters their ID. Admin gets a Firebase email (check Spam), opens the link, sets a new password, then Users > Reset password > type it > Send on WhatsApp.
- After updating, re-publish `firebase/firestore.rules` (it now lets a user clear their own must-change-password flag).

## Add faculty and students (admin)
1. Courses > Load institute syllabus.
2. Faculty > + Add faculty: name, WhatsApp number, tick the software they teach.
3. Students > + Add student: name, WhatsApp number, admission date, tick software and pick the faculty for each.
4. Each faculty sees only the students assigned to them. Students > Completion marks a course complete (reason required below 100% verified). Delete removes the profile and is logged in the Audit log.
5. Re-publish `firebase/firestore.rules` after every update of this package.

## Mechanical courses added
SolidWorks (20 sessions), Mastercam Milling (20), Mastercam Lathe (15), Mastercam Multiaxis (16) and Autodesk Fusion 360 (20), from the training syllabus PDFs. Admin > Courses > "Load institute syllabus" adds any course not loaded yet (safe to press again). To give a faculty member more software later: Faculty > Edit > tick it.
