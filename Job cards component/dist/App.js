var useState = React.useState;
import svgs from './svgs.js';

function App() {
    var icons = svgs();

    var jobCards = [{
        position: 'Design',
        numberOfOpenPositions: 4,
        backgroundColors: ['from-[#bbcbfb]', 'to-[#f1d4ff]']
    }, {
        position: 'Engineering',
        numberOfOpenPositions: 8,
        backgroundColors: ['from-[#FBBBDA]', 'to[#FFD4D4]']
    }, {
        position: 'Operations',
        numberOfOpenPositions: 2,
        backgroundColors: ['from-[#BBEBFB]', 'to-[#EFD4FF]']
    }, {
        position: 'People',
        numberOfOpenPositions: 6,
        backgroundColors: ['from-[#BBFBE4]', 'to-[#D4E0FF]']
    }, {
        position: 'Sales',
        numberOfOpenPositions: 7,
        backgroundColors: ['from-[#BBD8FB]', 'to-[#FFD4D4]']
    }, {
        position: 'University',
        numberOfOpenPositions: 8,
        backgroundColors: ['from-[#FFDEC7]', 'to-[#D4D9FF]']
    }];

    jobCards = jobCards.map(function (card, i) {
        console.log(card.backgroundColors[0]);
        return Object.assign({}, card, { svg: icons[i] });
    });

    return React.createElement(
        'div',
        { className: 'grid grid-cols-3 gap-5 mt-8' },
        jobCards.map(function (card, index) {
            return React.createElement(
                'div',
                { className: 'bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all' },
                React.createElement(
                    'div',
                    { className: 'flex items-center justify-center gap-3' },
                    React.createElement(
                        'div',
                        { className: 'h-10 w-10 rounded-lg bg-gradient-to-br ' + card.backgroundColors[0] + ' ' + card.backgroundColors[1] + ' flex items-center justify-center' },
                        card.svg
                    ),
                    React.createElement(
                        'div',
                        { className: '' },
                        card.position
                    )
                ),
                React.createElement(
                    'button',
                    { className: 'py-3 px-6 border border-slate-300 rounded-md text-xs mt-5 block w-full hover:bg-slate-800 hover:text-white hover:border-none' },
                    card.numberOfOpenPositions,
                    ' open positions'
                )
            );
        })
    );
}

export default App;