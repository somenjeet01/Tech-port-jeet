import React, { useEffect, useRef, useState } from "react";
import "./Background3D.css";

interface MousePosition {
  x: number;
  y: number;
}

export const Background3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [isMouseMoving, setIsMouseMoving] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

        setMousePosition({ x: x * 100, y: y * 100 });
        setIsMouseMoving(true);

        // Reset mouse moving state after a delay
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
          setIsMouseMoving(false);
        }, 150);
      }
    };

    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 });
      setIsMouseMoving(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="background-3d"
      style={
        {
          "--mouse-x": `${mousePosition.x}px`,
          "--mouse-y": `${mousePosition.y}px`,
        } as React.CSSProperties
      }
    >
      {/* Dynamic Light Source */}
      <div
        className="light-source"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${
            mousePosition.y * 0.5
          }px)`,
        }}
      />

      {/* Ambient Particles */}
      <div className="ambient-particles">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className={`ambient-particle ambient-particle-${i + 1}`}
            style={{
              transform: `translate(${
                mousePosition.x * (0.1 + (i % 5) * 0.02)
              }px, ${mousePosition.y * (0.1 + (i % 3) * 0.02)}px)`,
            }}
          />
        ))}
      </div>

      <div className="floating-elements">
        {/* Floating Code Blocks with Mouse Interaction */}
        <div
          className="code-block code-block-1"
          style={{
            transform: `translate(${mousePosition.x * 0.15}px, ${
              mousePosition.y * 0.15
            }px) rotateX(${mousePosition.y * 0.3}deg) rotateY(${
              mousePosition.x * 0.3
            }deg)`,
          }}
        >
          <div className="code-block-face code-block-front">
            <div className="code-line animate-typing"></div>
            <div
              className="code-line short animate-typing"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="code-line animate-typing"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
          <div className="code-block-face code-block-back"></div>
          <div className="code-block-face code-block-left"></div>
          <div className="code-block-face code-block-right"></div>
          <div className="code-block-face code-block-top"></div>
          <div className="code-block-face code-block-bottom"></div>
        </div>

        <div
          className="code-block code-block-2"
          style={{
            transform: `translate(${mousePosition.x * -0.12}px, ${
              mousePosition.y * 0.18
            }px) rotateX(${mousePosition.y * -0.2}deg) rotateY(${
              mousePosition.x * 0.4
            }deg)`,
          }}
        >
          <div className="code-block-face code-block-front">
            <div className="code-line animate-typing"></div>
            <div
              className="code-line short animate-typing"
              style={{ animationDelay: "0.3s" }}
            ></div>
            <div
              className="code-line medium animate-typing"
              style={{ animationDelay: "0.8s" }}
            ></div>
          </div>
          <div className="code-block-face code-block-back"></div>
          <div className="code-block-face code-block-left"></div>
          <div className="code-block-face code-block-right"></div>
          <div className="code-block-face code-block-top"></div>
          <div className="code-block-face code-block-bottom"></div>
        </div>

        <div
          className="code-block code-block-3"
          style={{
            transform: `translate(${mousePosition.x * 0.08}px, ${
              mousePosition.y * -0.14
            }px) rotateX(${mousePosition.y * 0.25}deg) rotateY(${
              mousePosition.x * -0.35
            }deg)`,
          }}
        >
          <div className="code-block-face code-block-front">
            <div className="code-line short animate-typing"></div>
            <div
              className="code-line animate-typing"
              style={{ animationDelay: "0.4s" }}
            ></div>
            <div
              className="code-line medium animate-typing"
              style={{ animationDelay: "0.9s" }}
            ></div>
          </div>
          <div className="code-block-face code-block-back"></div>
          <div className="code-block-face code-block-left"></div>
          <div className="code-block-face code-block-right"></div>
          <div className="code-block-face code-block-top"></div>
          <div className="code-block-face code-block-bottom"></div>
        </div>

        {/* Tech Stack Spheres with Realistic 3D */}
        <div
          className="tech-sphere sphere-1"
          style={{
            transform: `translate(${mousePosition.x * 0.2}px, ${
              mousePosition.y * 0.2
            }px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${
              mousePosition.x * 0.5
            }deg)`,
          }}
        >
          <div className="sphere-highlight"></div>
          <div className="sphere-shadow"></div>
          <div className="sphere-inner">React</div>
          <div className="sphere-glow"></div>
        </div>

        <div
          className="tech-sphere sphere-2"
          style={{
            transform: `translate(${mousePosition.x * -0.18}px, ${
              mousePosition.y * 0.22
            }px) rotateX(${mousePosition.y * -0.4}deg) rotateY(${
              mousePosition.x * 0.6
            }deg)`,
          }}
        >
          <div className="sphere-highlight"></div>
          <div className="sphere-shadow"></div>
          <div className="sphere-inner">Node</div>
          <div className="sphere-glow"></div>
        </div>

        <div
          className="tech-sphere sphere-3"
          style={{
            transform: `translate(${mousePosition.x * 0.16}px, ${
              mousePosition.y * -0.19
            }px) rotateX(${mousePosition.y * 0.35}deg) rotateY(${
              mousePosition.x * -0.45
            }deg)`,
          }}
        >
          <div className="sphere-highlight"></div>
          <div className="sphere-shadow"></div>
          <div className="sphere-inner">MongoDB</div>
          <div className="sphere-glow"></div>
        </div>

        {/* Enhanced Geometric Shapes */}
        <div
          className="geometric-shape shape-1"
          style={{
            transform: `translate(${mousePosition.x * 0.12}px, ${
              mousePosition.y * 0.12
            }px) rotateX(${mousePosition.y * 0.8}deg) rotateY(${
              mousePosition.x * 0.8
            }deg) rotateZ(45deg)`,
          }}
        >
          <div className="shape-inner"></div>
        </div>
        <div
          className="geometric-shape shape-2"
          style={{
            transform: `translate(${mousePosition.x * -0.1}px, ${
              mousePosition.y * 0.14
            }px) rotateX(${mousePosition.y * -0.6}deg) rotateY(${
              mousePosition.x * 0.7
            }deg)`,
          }}
        >
          <div className="shape-inner"></div>
        </div>
        <div
          className="geometric-shape shape-3"
          style={{
            transform: `translate(${mousePosition.x * 0.11}px, ${
              mousePosition.y * -0.13
            }px) rotateX(${mousePosition.y * 0.7}deg) rotateY(${
              mousePosition.x * -0.6
            }deg)`,
          }}
        >
          <div className="shape-inner"></div>
        </div>

        {/* Dynamic Connecting Lines */}
        <div
          className="connection-line line-1"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${
              mousePosition.y * 0.05
            }px) rotate(${25 + mousePosition.x * 0.1}deg)`,
            opacity: isMouseMoving ? 0.8 : 0.4,
          }}
        ></div>
        <div
          className="connection-line line-2"
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${
              mousePosition.y * 0.07
            }px) rotate(${-35 + mousePosition.x * 0.15}deg)`,
            opacity: isMouseMoving ? 0.9 : 0.5,
          }}
        ></div>
        <div
          className="connection-line line-3"
          style={{
            transform: `translate(${mousePosition.x * 0.04}px, ${
              mousePosition.y * -0.06
            }px) rotate(${60 + mousePosition.x * 0.12}deg)`,
            opacity: isMouseMoving ? 0.7 : 0.3,
          }}
        ></div>

        {/* Interactive Cursor Trail */}
        {isMouseMoving && (
          <div
            className="cursor-trail"
            style={{
              left: `${50 + mousePosition.x * 0.5}%`,
              top: `${50 + mousePosition.y * 0.5}%`,
            }}
          >
            <div className="trail-ring ring-1"></div>
            <div className="trail-ring ring-2"></div>
            <div className="trail-ring ring-3"></div>
          </div>
        )}

        {/* Interactive Particles */}
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className={`particle particle-${i + 1}`}
            style={{
              transform: `translate(${
                mousePosition.x * (0.02 + (i % 5) * 0.01)
              }px, ${mousePosition.y * (0.02 + (i % 3) * 0.01)}px)`,
              opacity: isMouseMoving ? 0.9 : 0.6,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
