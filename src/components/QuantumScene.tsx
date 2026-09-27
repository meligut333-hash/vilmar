import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface QuantumSceneProps {
  isBooted: boolean;
  activeAgentName?: string;
  isNarrating?: boolean;
}

export const QuantumScene: React.FC<QuantumSceneProps> = ({ isBooted, isNarrating }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 1. Quantum Holographic Core (Center Neural Sphere & Core Face Grid)
    // Blue & cyan palette:
    const cyan = new THREE.Color('#00f0ff');
    const royalBlue = new THREE.Color('#3b82f6');
    const deepBlue = new THREE.Color('#1d4ed8');
    const starlight = new THREE.Color('#e0f2fe');

    // Generate holographic quantum sphere / core
    const CORE_N = 1400;
    const corePos = new Float32Array(CORE_N * 3);
    const coreCol = new Float32Array(CORE_N * 3);
    const coreOrig = new Float32Array(CORE_N * 3);
    const coreSpeed = new Float32Array(CORE_N);

    for (let i = 0; i < CORE_N; i++) {
      // Golden spiral distribution on sphere with radius variations
      const phi = Math.acos(-1 + (2 * i) / CORE_N);
      const theta = Math.sqrt(CORE_N * Math.PI) * phi;
      const r = 1.8 + Math.sin(phi * 4) * 0.2 + (Math.random() - 0.5) * 0.35;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.cos(phi) + 0.3; // slightly elevated
      const z = r * Math.sin(phi) * Math.sin(theta);

      corePos[i * 3] = x;
      corePos[i * 3 + 1] = y;
      corePos[i * 3 + 2] = z;

      coreOrig[i * 3] = x;
      coreOrig[i * 3 + 1] = y;
      coreOrig[i * 3 + 2] = z;

      coreSpeed[i] = 0.5 + Math.random() * 1.5;

      const c = Math.random() < 0.35 ? cyan : Math.random() < 0.7 ? royalBlue : starlight;
      coreCol[i * 3] = c.r;
      coreCol[i * 3 + 1] = c.g;
      coreCol[i * 3 + 2] = c.b;
    }

    const coreGeo = new THREE.BufferGeometry();
    coreGeo.setAttribute('position', new THREE.BufferAttribute(corePos, 3));
    coreGeo.setAttribute('color', new THREE.BufferAttribute(coreCol, 3));

    const coreMat = new THREE.PointsMaterial({
      size: 0.048,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const corePoints = new THREE.Points(coreGeo, coreMat);
    scene.add(corePoints);

    // Inner glowing ring
    const RING_N = 360;
    const ringPos = new Float32Array(RING_N * 3);
    const ringCol = new Float32Array(RING_N * 3);
    for (let i = 0; i < RING_N; i++) {
      const angle = (i / RING_N) * Math.PI * 2;
      const rad = 2.4 + (Math.random() - 0.5) * 0.1;
      ringPos[i * 3] = Math.cos(angle) * rad;
      ringPos[i * 3 + 1] = 0.3 + (Math.random() - 0.5) * 0.15;
      ringPos[i * 3 + 2] = Math.sin(angle) * rad;

      ringCol[i * 3] = cyan.r;
      ringCol[i * 3 + 1] = cyan.g;
      ringCol[i * 3 + 2] = cyan.b;
    }
    const ringGeo = new THREE.BufferGeometry();
    ringGeo.setAttribute('position', new THREE.BufferAttribute(ringPos, 3));
    ringGeo.setAttribute('color', new THREE.BufferAttribute(ringCol, 3));
    const ringMat = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const ringPoints = new THREE.Points(ringGeo, ringMat);
    scene.add(ringPoints);

    // 2. Neural Synapses Network (Floating connecting nodes)
    const RED_N = 80;
    const redPos = new Float32Array(RED_N * 3);
    const redVel = new Float32Array(RED_N * 3);
    const redCol = new Float32Array(RED_N * 3);

    for (let i = 0; i < RED_N; i++) {
      redPos[i * 3] = (Math.random() - 0.5) * 22;
      redPos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      redPos[i * 3 + 2] = -3 - Math.random() * 3;

      redVel[i * 3] = (Math.random() - 0.5) * 0.1;
      redVel[i * 3 + 1] = (Math.random() - 0.5) * 0.1;
      redVel[i * 3 + 2] = 0;

      const c = Math.random() < 0.4 ? cyan : Math.random() < 0.8 ? royalBlue : deepBlue;
      redCol[i * 3] = c.r;
      redCol[i * 3 + 1] = c.g;
      redCol[i * 3 + 2] = c.b;
    }

    const redGeo = new THREE.BufferGeometry();
    redGeo.setAttribute('position', new THREE.BufferAttribute(redPos, 3));
    redGeo.setAttribute('color', new THREE.BufferAttribute(redCol, 3));
    const redMat = new THREE.PointsMaterial({
      size: 0.042,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    scene.add(new THREE.Points(redGeo, redMat));

    // Dynamic Lines connecting nearby nodes
    const MAX_LINKS = 450;
    const linkPos = new Float32Array(MAX_LINKS * 6);
    const linkGeo = new THREE.BufferGeometry();
    linkGeo.setAttribute('position', new THREE.BufferAttribute(linkPos, 3));
    const linkMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending
    });
    const linkSegments = new THREE.LineSegments(linkGeo, linkMat);
    scene.add(linkSegments);

    // 3. Ascending light particles (Photons from quantum base)
    const ASC_N = 140;
    const ascPos = new Float32Array(ASC_N * 3);
    const ascCol = new Float32Array(ASC_N * 3);
    const ascSpeed = new Float32Array(ASC_N);

    for (let i = 0; i < ASC_N; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 3.5;
      ascPos[i * 3] = Math.cos(angle) * radius;
      ascPos[i * 3 + 1] = -3.2 + Math.random() * 5.5;
      ascPos[i * 3 + 2] = Math.sin(angle) * radius * 0.4;

      ascSpeed[i] = 0.008 + Math.random() * 0.018;

      const c = Math.random() < 0.5 ? cyan : starlight;
      ascCol[i * 3] = c.r;
      ascCol[i * 3 + 1] = c.g;
      ascCol[i * 3 + 2] = c.b;
    }

    const ascGeo = new THREE.BufferGeometry();
    ascGeo.setAttribute('position', new THREE.BufferAttribute(ascPos, 3));
    ascGeo.setAttribute('color', new THREE.BufferAttribute(ascCol, 3));
    const ascMat = new THREE.PointsMaterial({
      size: 0.026,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    scene.add(new THREE.Points(ascGeo, ascMat));

    // Mouse pointer interaction with neural network
    const mouse = new THREE.Vector2(999, 999);
    const onPointerMove = (e: PointerEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('pointermove', onPointerMove);

    // Resize handler
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      const dt = Math.min(clock.getDelta(), 0.1);

      // Core rotation and breathing
      const pulseRate = isNarrating ? 2.5 : 1.0;
      const pulseAmp = isNarrating ? 0.08 : 0.025;
      const pulse = 1 + Math.sin(t * pulseRate) * pulseAmp;

      corePoints.rotation.y = t * 0.18;
      corePoints.rotation.x = Math.sin(t * 0.12) * 0.1;
      corePoints.scale.set(pulse, pulse, pulse);

      ringPoints.rotation.y = -t * 0.28;
      ringPoints.rotation.x = Math.PI / 2.3 + Math.sin(t * 0.3) * 0.06;

      // Pulse particle positions slightly
      const positions = coreGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < CORE_N; i++) {
        const ox = coreOrig[i * 3];
        const oy = coreOrig[i * 3 + 1];
        const oz = coreOrig[i * 3 + 2];
        const freq = t * coreSpeed[i] + i;
        positions[i * 3] = ox + Math.sin(freq) * 0.04;
        positions[i * 3 + 1] = oy + Math.cos(freq) * 0.04;
        positions[i * 3 + 2] = oz + Math.sin(freq * 0.8) * 0.04;
      }
      coreGeo.attributes.position.needsUpdate = true;

      // Update neural nodes
      for (let i = 0; i < RED_N; i++) {
        redPos[i * 3] += redVel[i * 3] * dt * 8;
        redPos[i * 3 + 1] += redVel[i * 3 + 1] * dt * 8;

        if (Math.abs(redPos[i * 3]) > 11) redVel[i * 3] *= -1;
        if (Math.abs(redPos[i * 3 + 1]) > 6) redVel[i * 3 + 1] *= -1;
      }
      redGeo.attributes.position.needsUpdate = true;

      // Update link lines
      let linkCount = 0;
      for (let i = 0; i < RED_N && linkCount < MAX_LINKS; i++) {
        for (let j = i + 1; j < RED_N && linkCount < MAX_LINKS; j++) {
          const dx = redPos[i * 3] - redPos[j * 3];
          const dy = redPos[i * 3 + 1] - redPos[j * 3 + 1];
          const distSq = dx * dx + dy * dy;

          if (distSq < 3.8) {
            const idx = linkCount * 6;
            linkPos[idx] = redPos[i * 3];
            linkPos[idx + 1] = redPos[i * 3 + 1];
            linkPos[idx + 2] = redPos[i * 3 + 2];
            linkPos[idx + 3] = redPos[j * 3];
            linkPos[idx + 4] = redPos[j * 3 + 1];
            linkPos[idx + 5] = redPos[j * 3 + 2];
            linkCount++;
          }
        }
      }

      // Zero out remaining lines
      for (let k = linkCount * 6; k < MAX_LINKS * 6; k++) {
        linkPos[k] = 0;
      }
      linkGeo.attributes.position.needsUpdate = true;

      // Mouse influence on camera and lighting
      camera.position.x += (mouse.x * 0.6 - camera.position.x) * 0.04;
      camera.position.y += (mouse.y * 0.4 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      // Ascending particles
      for (let i = 0; i < ASC_N; i++) {
        ascPos[i * 3 + 1] += ascSpeed[i];
        if (ascPos[i * 3 + 1] > 4.5) {
          ascPos[i * 3 + 1] = -3.2;
        }
      }
      ascGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      scene.clear();
    };
  }, [isBooted, isNarrating]);

  return (
    <canvas
      id="tres"
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none w-full h-full"
    />
  );
};
