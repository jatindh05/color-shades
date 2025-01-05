import React from 'react';
import colors from '../../data/colors';
import SpaceBarAnimation from '../../components/spaceBar/SpaceBarAnimation.jsx';
import ColorBox from '../../components/colorBox/ColorBox.jsx';

const Explore = () => {
    const [randomPalette, setRandomPalette] = React.useState(generateRandomPalette());

    function generateRandomPalette() {
        const palette = [];
        const categories = Object.keys(colors);
        for (let i = 0; i < 8; i++) {
            const category = categories[Math.floor(Math.random() * categories.length)];
            const shades = Object.keys(colors[category]);
            const shade = shades[Math.floor(Math.random() * shades.length)];
            palette.push({ category, shade, shades: Object.values(colors[category]) });
        }
        return palette;
    }

    React.useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.code === 'Space') {
                setRandomPalette(generateRandomPalette());
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className='flex flex-col items-center justify-center w-full h-full lg:px-10 mt-20 gap-10'>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 w-full'>
                {randomPalette?.map((color, index) => (
                    <ColorBox
                        key={index}
                        shades={color.shades}
                        shadeNames={Object.keys(colors[color.category])}
                        background={colors[color.category][color.shade]}
                        category={color.category}
                        name={`${color.category} ${color.shade}`}
                    />
                ))}
            </div>

            <SpaceBarAnimation setRandomPalette={setRandomPalette} generateRandomPalette={generateRandomPalette} />
        </div>
    );
}

export default Explore;