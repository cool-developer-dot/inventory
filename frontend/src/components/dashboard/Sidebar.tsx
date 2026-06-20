import { useState } from 'react'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  Package,
  Warehouse,
  ShoppingCart,
  BarChart3,
  Bell,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  X,
  Box,
} from 'lucide-react'

interface NavItem {
  label: string
  icon: React.ReactNode
  active?: boolean
  badge?: string
  badgeColor?: string
}

const mainNav: NavItem[] = [
  { label: 'Dashboard', icon: <LayoutDashboard size={18} />, active: true },
  { label: 'Products', icon: <Package size={18} /> },
  { label: 'Inventory', icon: <Warehouse size={18} /> },
  { label: 'Sales', icon: <ShoppingCart size={18} /> },
  { label: 'Reports', icon: <BarChart3 size={18} /> },
  { label: 'Alerts', icon: <Bell size={18} />, badge: '12', badgeColor: 'bg-red-500' },
]

const bottomNav: NavItem[] = [
  { label: 'Settings', icon: <Settings size={18} /> },
  { label: 'Help', icon: <HelpCircle size={18} /> },
]

interface SidebarProps {
  isMobileOpen: boolean
  onMobileClose: () => void
}

export function Sidebar({ isMobileOpen, onMobileClose }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onMobileClose}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex flex-col bg-navy-900 text-white transition-transform duration-300 lg:static lg:translate-x-0',
          collapsed ? 'w-[72px]' : 'w-[260px]',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        {/* Close button on mobile */}
        <button
          onClick={onMobileClose}
          className="absolute top-3 right-3 lg:hidden p-1 rounded-md hover:bg-white/10"
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <div className={cn('flex items-center gap-3 px-5 pt-6 pb-8', collapsed && 'justify-center px-0')}>
          <div className="w-9 h-9 rounded-lg bg-[#1E40AF] flex items-center justify-center flex-shrink-0">
            <Box size={18} className="text-white" />
          </div>
          {!collapsed && (
            <div>
              <span className="text-lg font-bold tracking-tight text-white">StockIQ</span>
              <span className="block text-[10px] text-blue-300/60 font-medium uppercase tracking-[0.15em] mt-[-2px]">
                Dashboard
              </span>
            </div>
          )}
        </div>

        {/* Main menu label */}
        {!collapsed && (
          <div className="px-5 mb-3">
            <span className="text-[11px] font-semibold text-blue-300/50 uppercase tracking-[0.2em]">
              Main Menu
            </span>
          </div>
        )}

        {/* Main navigation */}
        <nav className="flex-1 px-3 space-y-1">
          {mainNav.map((item) => (
            <a
              key={item.label}
              href="#"
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                collapsed && 'justify-center px-0',
                item.active
                  ? 'bg-white/10 text-white'
                  : 'text-blue-200/70 hover:text-white hover:bg-white/5',
              )}
            >
              <span className="flex-shrink-0">{item.icon}</span>
              {!collapsed && <span className="flex-1">{item.label}</span>}
              {!collapsed && item.badge && (
                <span className={cn(
                  'px-1.5 py-0.5 rounded text-[10px] font-bold text-white min-w-[20px] text-center',
                  item.badgeColor || 'bg-gray-500',
                )}>
                  {item.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Bottom navigation */}
        <div className="px-3 pb-4 space-y-1 border-t border-white/10 pt-4 mt-2">
          {bottomNav.map((item) => (
            <a
              key={item.label}
              href="#"
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-blue-200/70 hover:text-white hover:bg-white/5 transition-colors',
                collapsed && 'justify-center px-0',
              )}
            >
              <span className="flex-shrink-0">{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </a>
          ))}
        </div>

        {/* Collapse toggle (desktop only) */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex items-center justify-center h-10 border-t border-white/10 text-blue-300/50 hover:text-white transition-colors"
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </aside>
    </>
  )
}
