var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var useState = React.useState;
var useEffect = React.useEffect;

function App() {
    var _useState = useState(['Blender', 'Browser', 'cross-platform', 'HoloLens', 'Microsoft', 'Mixed Reality', 'modelling', 'MR', 'nodejs', 'streamsocket', 'unity', 'unity3D', 'unreal engine', 'VR', 'websockets']),
        _useState2 = _slicedToArray(_useState, 2),
        tags = _useState2[0],
        setTags = _useState2[1];

    var _useState3 = useState(),
        _useState4 = _slicedToArray(_useState3, 2),
        activeTag = _useState4[0],
        setActiveTag = _useState4[1];

    var activeTagClasses = 'px-6 py-2 rounded-full hover:cursor-pointer bg-[#1a2653] text-white';
    var nonActiveTagClasses = 'bg-white px-6 py-2 rounded-full hover:cursor-pointer';

    function changeActiveTag(e) {
        console.log(e.currentTarget.dataset.name);
        setActiveTag(e.currentTarget.dataset.name);
    }

    useEffect(function () {
        var randomIndex = Math.floor(Math.random() * (tags.length - 1));
        setActiveTag(tags[randomIndex]);
    }, []); // Onload set a random active tag


    return React.createElement(
        'div',
        { className: 'flex gap-3 flex-wrap mt-5' },
        tags.map(function (tag, index) {
            return React.createElement(
                'div',
                { 'data-name': tag, className: activeTag === tag ? activeTagClasses : nonActiveTagClasses, onClick: function onClick(e) {
                        changeActiveTag(e);
                    }, key: index },
                tag
            );
        })
    );
}

export default App;