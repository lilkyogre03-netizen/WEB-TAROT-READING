import './global.css';// 

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC&display=swap');
        `}</style>
      </head>
      <body className='all'>
        <nav className='nav'></nav>
        
        {/* Di sinilah Page.jsx akan muncul */}
        <div className="konten-utama">
          {children}
        </div>
        
        <footer className='footer'>
        <p className='footerp'></p>
        </footer>
      </body>
    </html>
  );
}