// import libraries
import Particles from "react-tsparticles";
import { loadFull } from 'tsparticles';

function ParticlesBackground() {
    const particlesInit = async (main) => {
        // console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };
    
    const particlesLoaded = (container) => {
        // console.log(container);
    }
    
    return (
        <Particles 
        className="header-particles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            fullScreen: {
                enable: false
            },
            background: {
                color: {
                    value: "#000",
                },
                opacity: 0
            },
            fpsLimit: 120,
            particles: {
                color: {
                    value: "#2dd8ff",
                },
                links: {
                    color: "#2dd8ff",
                    distance: 150,
                    enable: true,
                    opacity: 1,
                    width: 4,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1.5,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 500,
                    },
                    value: 150,
                },
                opacity: {
                    value: 1,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: 2,
                },
            },
            detectRetina: true,
        }}
        />
    )
}
// Export to call it
export default ParticlesBackground;