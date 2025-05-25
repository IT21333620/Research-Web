import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  return (
    <header className="bg-gray-100 dark:bg-gray-900 shadow-md py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          AI-Enhanced Distance Therapy
        </h1>
        <ThemeSwitcher />
      </div>
    </header>
  );
}