module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Poppins"', 'sans-serif'],
        'inco': ['Inconsolata', 'monospace'],
        'dongle': ['Dongle', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url(data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237537d9' fill-opacity='0.26'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E);",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      screens: {
        'xs': {'min': '30px', 'max': '639px'},
        'sm': {'min': '640px', 'max': '767px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
        
        // 'md': {'min': '768px', 'max': '1023px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
        
        'md-full': {'min': '768px', 'max': '1535px'},
        // => @media (min-width: 768px and max-full: ) { ... }
  
        'lg': {'min': '1024px', 'max': '1279px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        'xl': {'min': '1280px', 'max': '1535px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
        '2xl': {'min': '1536px'},
        // => @media (min-width: 1536px) { ... }
      },
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}