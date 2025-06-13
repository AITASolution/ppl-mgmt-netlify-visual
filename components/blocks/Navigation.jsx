'use client';

import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { SECONDARY_COLOR, WARM_BACKGROUND_COLOR } from "../../lib/constants";

const defaultNavigationData = [
  {
    label: "TALENT",
    items: [
      { title: "Artist Management", path: "/talent/artist-management" },
      { title: "Booking Representation", path: "/talent/booking" },
      { title: "Brand Collaborations", path: "/talent/brands" }
    ]
  },
  {
    label: "LIVE",
    items: [
      { title: "Event Production", path: "/live/events" },
      { title: "Creative Consulting", path: "/live/consulting" },
      { title: "Sponsorship Partnerships", path: "/live/sponsorship" }
    ]
  },
  {
    label: "BRANDS",
    items: [
      { title: "Brand Consulting", path: "/brands/consulting" },
      { title: "Talent Partnerships", path: "/brands/partnerships" },
      { title: "Fashion Development", path: "/brands/fashion" }
    ]
  },
  {
    label: "TRAVEL",
    items: [
      { title: "Full Concierge", path: "/travel/concierge" },
      { title: "Private Jet Travel", path: "/travel/jet" },
      { title: "VIP Transport", path: "/travel/transport" }
    ]
  }
];

const Navigation = forwardRef(({
  navigationData = defaultNavigationData,
  enableHeroAnimation = false,
  className = ""
}, ref) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [submenuItemsVisible, setSubmenuItemsVisible] = useState(false);

  const menuRef = useRef(null);
  const menuItemRefs = useRef([]);
  const router = useRouter();

  useImperativeHandle(ref, () => ({
    menuItems: menuItemRefs.current,
    startAnimation: () => {
      // Phase 3: GSAP Staggered Animation von unten nach oben
      gsap.fromTo(menuItemRefs.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.15,
          delay: 0
        }
      );
    }
  }));

  useEffect(() => {
    // Initial state: Alle Menü-Items nur unsichtbar wenn Hero-Animation aktiviert ist
    if (enableHeroAnimation && menuItemRefs.current.length > 0) {
      gsap.set(menuItemRefs.current, { opacity: 0, y: 50, scale: 0.8 });
    }
  }, [enableHeroAnimation]);

  useEffect(() => {
    if (menuOpened && activeMenu) {
      const timer = setTimeout(() => {
        setSubmenuItemsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setSubmenuItemsVisible(false);
    }
  }, [menuOpened, activeMenu]);

  const handleNavigation = (path) => {
    setMenuOpened(false);
    setActiveMenu(null);
    router.push(path);
  };

  return (
    <div className={`relative z-40 ${className}`} ref={menuRef}>
      <div className="flex flex-col items-center gap-6 md:gap-8">
        {navigationData.map((menu, idx) => {
          const isActive = activeMenu === menu.label;
          
          return (
            <motion.div
              key={menu.label}
              className="relative"
              initial={{ opacity: enableHeroAnimation ? 0 : 1 }}
            >
              <motion.button
                ref={(el) => {
                  if (el) menuItemRefs.current[idx] = el;
                }}
                type="button"
                className={`
                  px-8 py-4 text-xl md:text-2xl lg:text-3xl font-bold
                  transition-all duration-300 ease-out
                  border-2 border-transparent rounded-lg
                  ${isActive ? 'bg-black text-white' : 'text-black hover:text-white hover:bg-black'}
                  ${hoveredMenu === menu.label && !isActive ? 'scale-105' : ''}
                `}
                onClick={() => {
                  if (isActive) {
                    setActiveMenu(null);
                    setMenuOpened(false);
                  } else {
                    setActiveMenu(menu.label);
                    setMenuOpened(true);
                  }
                }}
                onMouseEnter={() => setHoveredMenu(menu.label)}
                onMouseLeave={() => setHoveredMenu(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  {menu.label}
                  <motion.span
                    animate={{ rotate: isActive ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight size={24} />
                  </motion.span>
                </span>
              </motion.button>

              {/* Submenu */}
              <AnimatePresence>
                {idx === 0 && isActive && (
                  <motion.div
                    key="submenu"
                    initial={{ height: 0, opacity: 0, y: -20 }}
                    animate={{ height: "auto", opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 min-w-64 max-w-80 rounded-lg shadow-xl z-50 overflow-hidden"
                    style={{ backgroundColor: SECONDARY_COLOR }}
                  >
                    <div className="p-4">
                      {menu.items.map((item, itemIdx) => (
                        <motion.button
                          key={item.title}
                          className="block w-full text-left px-4 py-3 text-white hover:bg-black hover:bg-opacity-20 rounded-md transition-colors duration-200 font-medium"
                          onClick={() => handleNavigation(item.path)}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ 
                            opacity: submenuItemsVisible ? 1 : 0,
                            x: submenuItemsVisible ? 0 : -20
                          }}
                          transition={{ 
                            delay: itemIdx * 0.1,
                            duration: 0.3
                          }}
                          whileHover={{ x: 4 }}
                        >
                          {item.title}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;