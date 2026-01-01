# SP_Rite Width Finder

**Finding the exact position, width, height, or coordinates of a sprite can be frustrating.** SP_Rite Width Finder is a tool designed to make sprite management fast, precise, and frustration-free.

## 🎯 Key Features

- **📍 Position Detection** - Automatically finds the X and Y coordinates of your sprite
- **📏 Width & Height Calculation** - Measures exact dimensions for accurate placement
- **✂️ Cutting & Cropping** - Easily crop your sprite or specific pixel areas
- **🎯 Pixel-Level Mapping** - Determines the position of each individual pixel
- **🏷️ Custom Renaming** - Rename pixels or sprites for better organization
- **📊 Excel Export** - Download a complete CSV file with all X, Y, width, and height data

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/i250817-oss/SP_Rite-Width-Finder.git
cd SP_Rite-Width-Finder

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

The application will open automatically at `http://localhost:3000`

## 📖 How to Use

1. **Go to the Tool** - Click "Tool" in the navigation menu
2. **Upload Your Sprite Sheet** - Click "Choose Image" and select your sprite sheet
3. **Click on Sprites** - Click on any sprite in the image to detect its coordinates
4. **Export Data** - Click "Export to CSV" to download all sprite data as a spreadsheet

## 📁 Project Structure

```
spritesheet-studio-full-project/
├── App.tsx              # Main application component
├── index.tsx            # Entry point
├── index.html           # HTML template
├── index.css            # Global styles
├── types.ts             # TypeScript type definitions
├── pages/
│   ├── LandingPage.tsx  # Welcome/home page
│   ├── ToolPage.tsx     # Main sprite finder tool
│   └── FeedbackPage.tsx # Feedback and bug reporting
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

## 🐛 Found a Bug?

1. Go to the **Feedback** page in the application
2. Submit your bug report with details
3. Or directly open an issue on [GitHub Issues](https://github.com/i250817-oss/SP_Rite-Width-Finder/issues)

## 💡 Suggest a Feature

Have an idea to improve SP_Rite Width Finder? [Open a feature request](https://github.com/i250817-oss/SP_Rite-Width-Finder/issues) on GitHub!

## 👨‍💻 About the Developer

**Ahmad Ali** (i250817-oss)

- 🔗 [LinkedIn Profile](https://www.linkedin.com/in/ahmad-ali-745606385/)
- 🐙 [GitHub Profile](https://github.com/i250817-oss)
- 📧 Connect via LinkedIn for any inquiries

## 💬 What This Tool Solves

I developed SP_Rite Width Finder while creating my own game because I found manually locating sprite positions too time-consuming and frustrating. This tool helps:

- **Students** learning game development
- **Developers** building complex game projects
- **Anyone** working with sprite sheets and pixel-perfect placement

## 📝 Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Canvas API** - Sprite detection and pixel mapping

## 📄 License

MIT License - Feel free to use this project for personal and commercial purposes.

## 🙏 Acknowledgments

Built with the help of AI tools and personal game development experience.

---

**Made with ❤️ by Ahmad Ali**

⭐ If you find this tool helpful, please consider giving it a star on GitHub!
