import { useState } from 'react';
import { Menu, X, Home, ShoppingCart, Newspaper, CheckSquare, Wifi, WifiOff } from 'lucide-react';
import InstallPWA from './components/InstallPWA';

// Componente Header
function Header({ onMenuToggle, isOnline }) {
  return (
    <header className="bg-blue-600 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuToggle}
            className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-bold">PWA Shop</h1>
        </div>
        <div className="flex items-center gap-2">
          {isOnline ? (
            <Wifi size={20} className="text-green-300" />
          ) : (
            <WifiOff size={20} className="text-red-300" />
          )}
          <span className="text-sm">
            {isOnline ? 'En línea' : 'Sin conexión'}
          </span>
        </div>
      </div>
    </header>
  );
}

// Componente Sidebar
function Sidebar({ isOpen, onClose, currentView, onViewChange }) {
  const menuItems = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'products', label: 'Productos', icon: ShoppingCart },
    { id: 'news', label: 'Noticias', icon: Newspaper },
    { id: 'tasks', label: 'Tareas', icon: CheckSquare },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Menú</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onViewChange(item.id);
                      onClose();
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      currentView === item.id
                        ? 'bg-blue-100 text-blue-600'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}

// Componente Footer
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold">PWA Shop</p>
            <p className="text-sm text-gray-400">Tu tienda progresiva</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">© 2025 Todos los derechos reservados</p>
            <p className="text-xs text-gray-500 mt-1">Funciona offline con Service Workers</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Vista de contenido Home
function HomeView() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Bienvenido a PWA Shop</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Offline First</h3>
          <p className="text-gray-600">Funciona sin conexión gracias a Service Workers</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Rápida</h3>
          <p className="text-gray-600">App Shell cargado desde caché instantáneamente</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Instalable</h3>
          <p className="text-gray-600">Instala la app en tu dispositivo</p>
        </div>
      </div>
    </div>
  );
}

// Vista de Productos (simulación)
function ProductsView() {
  const products = [
    { id: 1, name: 'Laptop Pro', price: 1299, category: 'Electrónica' },
    { id: 2, name: 'Smartphone X', price: 899, category: 'Electrónica' },
    { id: 3, name: 'Auriculares Wireless', price: 199, category: 'Audio' },
    { id: 4, name: 'Tablet Air', price: 599, category: 'Electrónica' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Productos</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-gray-200 h-40 rounded-lg mb-4 flex items-center justify-center">
              <ShoppingCart size={48} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-sm text-gray-500 mb-3">{product.category}</p>
            <p className="text-2xl font-bold text-blue-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Vista de Noticias (simulación)
function NewsView() {
  const news = [
    { id: 1, title: 'Nueva versión de PWA disponible', date: '2025-09-28', excerpt: 'Mejoras en rendimiento y nuevas características...' },
    { id: 2, title: 'Service Workers: Mejores prácticas', date: '2025-09-25', excerpt: 'Aprende a optimizar el caché de tu aplicación...' },
    { id: 3, title: 'React 19 ya está aquí', date: '2025-09-20', excerpt: 'Conoce las nuevas características del framework...' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Noticias</h2>
      <div className="space-y-4">
        {news.map((item) => (
          <article key={item.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 mb-3">{item.date}</p>
            <p className="text-gray-600">{item.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

// Vista de Tareas (simulación)
function TasksView() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Implementar Service Worker', completed: true },
    { id: 2, title: 'Crear manifest.json', completed: true },
    { id: 3, title: 'Configurar caché offline', completed: false },
    { id: 4, title: 'Testear modo offline', completed: false },
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Tareas</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="w-5 h-5 text-blue-600 rounded cursor-pointer"
              />
              <span className={`flex-1 ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                {task.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// App Principal con Layout
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Detectar cambios en el estado de conexión
  useState(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'products':
        return <ProductsView />;
      case 'news':
        return <NewsView />;
      case 'tasks':
        return <TasksView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header 
        onMenuToggle={() => setMenuOpen(true)} 
        isOnline={isOnline}
      />
      
      <Sidebar
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        currentView={currentView}
        onViewChange={setCurrentView}
      />
      
      <main className="flex-1 container mx-auto px-4 py-6 mt-16">
        {renderView()}
      </main>
      
      <Footer />
      <InstallPWA />
    </div>
  );
}