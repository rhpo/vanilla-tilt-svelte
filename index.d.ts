declare module 'vanilla-tilt-svelte' {
    export interface SSVTProps {
        reverse: boolean;
        max: number;
        startX: number;
        startY: number;
        perspective: number;
        scale: number;
        speed: number;
        transition: boolean;
        axis: string | null;
        reset: boolean;
        resetToStart: boolean;
        easing: string;
        glare: boolean;
        maxGlare: number;
        glarePrerender: boolean;
        mouseEventElement: string | null;
        gyroscope: boolean;
        gyroscopeMinAngleX: number;
        gyroscopeMaxAngleX: number;
        gyroscopeMinAngleY: number;
        gyroscopeMaxAngleY: number;
    }

    export default function svelteTiltRHPO(node: Node, settingsObject: SSVTProps): boolean;
}
