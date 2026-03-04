import { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

export function TiltImage({ url }: { url: string }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const texture = useTexture(url);
    const { viewport } = useThree();
    const [hovered, setHovered] = useState(false);

    // Use the texture aspect ratio to scale the plane correctly
    const image = texture.image as HTMLImageElement;
    const aspect = image ? image.width / image.height : 1;
    const height = viewport.width / aspect;

    useFrame((state) => {
        if (!meshRef.current) return;

        // Smooth interpolation towards pointer or 0 if not hovered
        const targetX = hovered ? state.pointer.x * 0.5 : 0;
        const targetY = hovered ? state.pointer.y * 0.5 : 0;

        meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.1;
        meshRef.current.rotation.x += (-targetY - meshRef.current.rotation.x) * 0.1;
    });

    return (
        <mesh
            ref={meshRef}
            scale={[viewport.width, height, 1]}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <planeGeometry args={[1, 1]} />
            <meshBasicMaterial map={texture} transparent />
        </mesh>
    );
}
