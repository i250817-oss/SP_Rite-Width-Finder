# How to Push to GitHub

Since we've prepared all the code locally, follow these steps to push to your GitHub repository:

## Option 1: Using Personal Access Token (Recommended)

```bash
cd "/home/ahmad-ali/Desktop/Sprite_coordinate_finder/spritesheet-studio-full-project (3)"

# Set up remote
git remote remove origin  # Remove if already added
git remote add origin https://github.com/i250817-oss/SP_Rite-Width-Finder.git

# Create a Personal Access Token on GitHub:
# 1. Go to GitHub Settings > Developer settings > Personal access tokens
# 2. Click "Generate new token (classic)"
# 3. Select 'repo' scope
# 4. Copy the token

# Then push with your token:
# git push -u origin main
# When prompted, use your GitHub username and paste the token as password

# Or you can use:
# git push https://<YOUR_TOKEN>@github.com/i250817-oss/SP_Rite-Width-Finder.git main
```

## Option 2: Using SSH

```bash
# Generate SSH key if you don't have one:
ssh-keygen -t ed25519 -C "your@email.com"

# Copy the public key to GitHub:
# 1. Run: cat ~/.ssh/id_ed25519.pub
# 2. Copy the output
# 3. Go to GitHub Settings > SSH and GPG keys
# 4. Click "New SSH key" and paste

# Then push:
git push -u origin main
```

## Option 3: Using GitHub CLI

```bash
# Install GitHub CLI if not installed
# Then:
gh auth login
# Follow the prompts to authenticate

# Push to remote:
git push -u origin main
```

---

## What's Been Done

✅ **Landing Page** - Welcome page with features and project description
✅ **Main Tool Page** - Fully functional sprite coordinate finder with:
   - Image upload
   - Click detection for sprite coordinates
   - Pixel position tracking (X, Y)
   - Sprite data management
   - CSV export functionality
   - Custom renaming

✅ **Feedback Page** - Bug reporting and feature request form with:
   - Feedback type selection
   - User information collection
   - Submission handling
   - Direct GitHub links

✅ **Navigation** - Easy switching between all pages
✅ **Footer** - Links to your LinkedIn and GitHub
✅ **Responsive Design** - Works on desktop and mobile
✅ **Ahmad Ali Attribution** - Your name displayed prominently

## How to Use the Application

1. **Open the HTML file** in your browser:
   ```bash
   cd "/home/ahmad-ali/Desktop/Sprite_coordinate_finder/spritesheet-studio-full-project (3)"
   # Then open index.html in a web browser
   ```

2. **Navigate to the Tool** section
3. **Upload a sprite sheet** by clicking "Choose Image"
4. **Click on sprites** to detect their coordinates
5. **Export data** as CSV for use in your game

## File Structure

```
spritesheet-studio-full-project (3)/
├── index.html              # Main application (FULLY FUNCTIONAL)
├── App.tsx                 # React component (for future use)
├── pages/
│   ├── LandingPage.tsx
│   ├── ToolPage.tsx
│   └── FeedbackPage.tsx
├── types.ts
├── package.json
├── README.md
├── .gitignore
└── Configuration files
```

## Running the Application

The `index.html` file is completely self-contained and requires **no build process**!

Simply:
1. Open `index.html` in any modern web browser
2. All functionality works immediately
3. No npm, Node.js, or build tools needed

## Key Features Implemented

- ✅ Image upload and drag-and-drop
- ✅ Click to detect sprite X, Y coordinates
- ✅ Hover to see pixel position
- ✅ Detect sprite color values (RGBA)
- ✅ Store unlimited sprites
- ✅ Export all data as CSV
- ✅ Edit sprite names
- ✅ Beautiful dark theme UI
- ✅ Responsive design
- ✅ Feedback form
- ✅ GitHub integration
- ✅ LinkedIn profile link

Enjoy! 🎉
