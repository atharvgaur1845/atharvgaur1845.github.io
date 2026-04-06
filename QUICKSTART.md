# Website Quick Start Guide

## Welcome to Your Personal Academic Website!

Your professional academic website has been successfully created at:
```
/home/atharv/Desktop/projects/personal-website/atharvgaur.github.io/
```

## File Structure

```
atharvgaur.github.io/
├── index.html                    # Main homepage
├── README.md                     # Full documentation
├── content/
│   ├── achievements.html         # Achievements & Awards
│   ├── projects.html             # Detailed Projects
│   ├── coursework.html           # Skills & Coursework
│   ├── blogs.html                # Research Interests
│   └── fun.html                  # Personal Interests
├── js/
│   ├── toggle.js                 # Theme toggle
│   ├── darkmode.js               # Dark mode logic
│   ├── hidebib.js                # Utility functions
│   └── scramble.js               # Text effects
└── css/
    └── darkmode.css              # Styling for both themes
```

## Key Features

✓ **Dark/Light Mode Toggle** - Moon icon in top-left corner
✓ **Professional Design** - Clean, minimalist, responsive
✓ **Complete Resume Integration** - All projects and achievements from your CV
✓ **Formal & Classy** - Academic tone with technical rigor
✓ **No External Dependencies** - Pure HTML, CSS, JavaScript
✓ **Mobile Friendly** - Works on all devices

## Website Pages

1. **Home (index.html)**
   - Personal introduction
   - Featured projects
   - Research experience
   - Technical skills
   - Recent updates

2. **Achievements (content/achievements.html)**
   - LAM Research Challenge Finalist (Top 0.3%)
   - Research collaborations
   - Project accomplishments

3. **Projects (content/projects.html)**
   - Deepfake Detection (87.69% accuracy)
   - Lunar Traverse Planner
   - Image Segmentation
   - Micromouse Robot
   - And more...

4. **Coursework (content/coursework.html)**
   - Technical skills inventory
   - Core competencies by domain
   - Professional development areas

5. **Research Interests (content/blogs.html)**
   - Primary research areas
   - Methodology & philosophy
   - Collaboration opportunities

6. **Interests (content/fun.html)**
   - Personal interests
   - Extracurricular activities
   - Values & philosophy

## How to Deploy

### Option 1: GitHub Pages (Recommended)
```bash
cd /home/atharv/Desktop/projects/personal-website/atharvgaur.github.io
git init
git add .
git commit -m "Initial commit: Personal academic website"
git remote add origin https://github.com/YOUR_USERNAME/atharvgaur.github.io.git
git push -u origin main
```

Then enable GitHub Pages in your repository settings.

### Option 2: Local Testing
```bash
# Simply open in a browser
open index.html

# Or with Python's simple server
python -m http.server 8000
# Visit http://localhost:8000
```

### Option 3: Other Hosting
- Upload files to Vercel, Netlify, or AWS S3
- Copy files to any static web hosting service
- Deploy to traditional web server

## Customization Tips

### Change Your Profile
- Find and replace "Atharv Gaur" with your name
- Update email and phone in index.html
- Update GitHub/LinkedIn URLs in navigation links

### Update Projects
Edit the relevant HTML files:
- projects.html for project descriptions
- achievements.html for awards
- coursework.html for skills

### Modify Colors
Edit `css/darkmode.css`:
```css
:root {
  --link-color: #1772d0;        /* Change link color */
  --link-hover-color: #f5b461;  /* Change hover color */
}
```

### Add New Pages
1. Create new HTML file in `content/` directory
2. Copy structure from existing pages
3. Update navigation links
4. Add link to index.html

## Testing the Website

### Check Dark Mode
- Click moon icon in top-left corner
- Icon should change to sun
- Colors should invert

### Verify Links
- All navigation links should work
- External links should open in new tabs
- Back buttons should return to home

### Test Responsiveness
- Resize browser window
- Check on mobile devices
- Verify text readability

## Browser Compatibility

✓ Chrome/Edge (latest)
✓ Firefox (latest)
✓ Safari (latest)
✓ Mobile browsers (iOS Safari, Chrome Mobile)

## Important Notes

1. **Theme Persistence**: User's theme choice is saved in browser local storage
2. **No Dependencies**: Website works offline (no external scripts/fonts loaded)
3. **Fast Loading**: Minimal CSS and lightweight design
4. **Accessibility**: Semantic HTML structure
5. **Mobile Optimized**: Responsive design for all screen sizes

## Content Highlights

### Featured Achievement
- **LAM Research Challenge 2025 Finalist**
- Top 0.3% (24 out of ~8,000 registrations)
- Automated Lunar Traverse Planner

### Research Areas
- Computer Vision & Deep Learning
- Robotics & Autonomous Systems
- Machine Learning & AI
- Embedded Systems
- Industrial IoT

### Technical Skills
- Languages: Python, C++, C, Java
- Deep Learning: PyTorch, TensorFlow
- Computer Vision: OpenCV, YOLO
- Robotics: ROS 2, SLAM, Sensor Fusion
- Embedded: Teensy, ESP32, Arduino

## Support & Maintenance

### Regular Updates
- Update projects as you complete new work
- Add recent news/achievements to home page
- Keep resume synchronized with website

### Backup
- Keep a backup of all files
- Use version control (Git)
- Save before making major changes

### Performance
- Website loads instantly (no server-side processing)
- No database required
- Works completely offline after first load

## Next Steps

1. ✓ Website created and ready
2. Test all pages and links
3. Deploy to GitHub Pages or hosting service
4. Share with recruiters and academic advisors
5. Keep content updated as you progress

## Questions?

Refer to README.md for detailed documentation:
- Full feature list
- Technology stack
- Customization guide
- Contact information

---

**Last Updated**: April 2026
**Status**: Ready for deployment ✓

Enjoy your new professional academic website!
