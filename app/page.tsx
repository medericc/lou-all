// app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-gray-900 to-black flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center flex-1 w-full max-w-md">
        {/* Titre */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">LOU BATTISTON</h1>
          <p className="text-blue-200 text-lg font-light">Rice University Women's Basketball</p>
        </div>

        {/* Boutons */}
        <div className="w-full space-y-6">
          <a
            href="https://schedule-lou.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full p-6 rounded-2xl shadow-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 border-2 border-blue-400/30 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-300/50"
          >
            <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">CALENDRIER</h2>
            <p className="text-blue-100 font-medium opacity-90">Matchs à venir</p>
          </a>
          
          <a
            href="https://lou-livestats.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full p-6 rounded-2xl shadow-2xl bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 border-2 border-white/20 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-white/30"
          >
            <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">LIVE STATS</h2>
            <p className="text-gray-200 font-medium opacity-90">Statistiques en direct</p>
          </a>
        </div>

        {/* Stats ou informations supplémentaires */}
        <div className="mt-12 grid grid-cols-2 gap-4 w-full max-w-xs">
          <div className="bg-blue-900/50 backdrop-blur-sm rounded-lg p-4 text-center border border-blue-700/30">
            <p className="text-blue-200 text-sm">Position</p>
            <p className="text-white font-semibold">Guard</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 text-center border border-gray-600/30">
            <p className="text-gray-200 text-sm">Année</p>
            <p className="text-white font-semibold">Junior</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 mb-8 text-center">
        <p className="text-blue-300 text-sm font-light">
          Fait avec <span className="text-red-400 animate-pulse">❤️</span> par fan_carlaleite
        </p>
      </footer>
    </div>
  )
}