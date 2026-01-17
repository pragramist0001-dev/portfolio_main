import { motion, useScroll, useTransform } from 'framer-motion';

export function ParallaxBackground() {
    const { scrollY } = useScroll();

    // Transform scroll values to movement for different layers
    // The '0' scroll position maps to '0' offset
    // As we scroll down, the background elements will move at different speeds
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
    const rotate1 = useTransform(scrollY, [0, 1000], [0, 45]);
    const rotate2 = useTransform(scrollY, [0, 1000], [0, -45]);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Circle 1 - Top Right */}
            <motion.div
                style={{ y: y1, rotate: rotate1 }}
                className="absolute -top-20 -right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
            />

            {/* Circle 2 - Middle Left */}
            <motion.div
                style={{ y: y2, rotate: rotate2 }}
                className="absolute top-1/3 -left-20 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl"
            />

            {/* Circle 3 - Bottom Right */}
            <motion.div
                style={{ y: y1 }}
                className="absolute bottom-1/4 -right-10 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl"
            />

            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
    );
}
