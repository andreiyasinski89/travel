tailwind.config = {
  theme: {
    extend: {
      colors: {
        ocean: '#0B3C5D', deep: '#08293F', azure: '#0EA5E9', emerald: '#10B981',
        gold: { DEFAULT: '#F5B83D', dark: '#E0A220' },
        sand: '#FBD775', aqua: '#8FE3E6', skyx: '#7FD3F2', mint: '#A6F0C4', pale: '#BAE6FD',
        ink: '#0B2535', muted: '#24475E'
      },
      fontFamily: {
        display: ['Unbounded', 'sans-serif'],
        sans: ['Onest', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 12px 40px -12px rgba(11,60,93,.35)',
        gold: '0 10px 30px -8px rgba(224,162,32,.7)'
      }
    }
  }
};
