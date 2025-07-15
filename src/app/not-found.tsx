import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Wrench, Settings, Hammer, WrenchIcon as Screwdriver } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating gears */}
        <div className="absolute top-20 left-20 animate-spin-slow">
          <Settings className="w-16 h-16 text-yellow-400/20" />
        </div>
        <div className="absolute top-40 right-32 animate-spin-reverse">
          <Settings className="w-12 h-12 text-orange-400/20" />
        </div>
        <div className="absolute bottom-32 left-40 animate-spin-slow">
          <Settings className="w-20 h-20 text-pink-400/20" />
        </div>
        <div className="absolute bottom-20 right-20 animate-spin-reverse">
          <Settings className="w-14 h-14 text-green-400/20" />
        </div>
        <div className="absolute top-1/2 left-10 animate-spin-slow">
          <Settings className="w-10 h-10 text-blue-400/20" />
        </div>
        <div className="absolute top-1/3 right-10 animate-spin-reverse">
          <Settings className="w-18 h-18 text-purple-400/20" />
        </div>

        {/* Floating tools */}
        <div className="absolute top-60 left-1/4 animate-float">
          <Wrench className="w-8 h-8 text-yellow-300/30" />
        </div>
        <div className="absolute bottom-60 right-1/4 animate-float-delayed">
          <Hammer className="w-10 h-10 text-orange-300/30" />
        </div>
        <div className="absolute top-1/4 right-1/3 animate-float">
          <Screwdriver className="w-6 h-6 text-pink-300/30" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* 404 Number with gears */}
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 leading-none select-none">
            404
          </h1>

          {/* Animated gears inside the numbers */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <Settings className="w-16 h-16 text-yellow-400 animate-spin-slow" />
              <Settings className="w-8 h-8 text-orange-400 animate-spin-reverse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>

        {/* Main message */}
        <div className="mb-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-pulse">
            ¡Oops! Página en Construcción
          </h2>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Wrench className="w-10 h-10 text-white animate-wiggle" />
                </div>
                <div className="absolute -top-2 -right-2">
                  <Settings className="w-8 h-8 text-yellow-300 animate-spin-slow" />
                </div>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-yellow-300 font-semibold mb-2">Tío Ingeniero aún está trabajando</p>
            <p className="text-lg md:text-xl text-white/80 mb-4">en este sitio web</p>

            <div className="flex items-center justify-center space-x-2 text-white/60">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping animation-delay-200"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-ping animation-delay-400"></div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Link href="/" className="flex items-center space-x-2">
              <Home className="w-5 h-5" />
              <span>Volver al Inicio</span>
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white/30 text-white hover:bg-white/10 font-bold px-8 py-4 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105 bg-transparent"
          >
            <Link href="/contacto" className="flex items-center space-x-2">
              <Wrench className="w-5 h-5" />
              <span>Contactar al Ingeniero</span>
            </Link>
          </Button>
        </div>

        {/* Fun message */}
        <div className="mt-12 text-white/60 text-sm">
          <p className="animate-pulse">Mientras tanto, las tuercas siguen girando... 🔧⚙️</p>
        </div>
      </div>

      {/* Additional floating elements */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-4 animate-float">
          <div className="w-3 h-3 bg-yellow-400 rounded-full opacity-60"></div>
          <div className="w-2 h-2 bg-orange-400 rounded-full opacity-40"></div>
          <div className="w-4 h-4 bg-pink-400 rounded-full opacity-50"></div>
        </div>
      </div>
    </div>
  )
}
