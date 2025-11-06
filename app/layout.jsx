import '@styles/globals.css'; 
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import { ThemeProvider } from '@components/ThemeProvider';

export const metadata = {
    title : "PromptAi",
    description : "Discover & Share AI Prompts"
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
       <Provider>
        <ThemeProvider>
          <div className="main">
              <div className='gradient'/>
          </div>

          <main className="app">
              <Nav />
              {children}
          </main>
        </ThemeProvider>
       </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
