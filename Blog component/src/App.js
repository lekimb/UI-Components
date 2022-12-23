const useState = React.useState;
const useEffect = React.useEffect;

function App() {
    const [tags, setTags] = useState(['Blender', 'Browser', 'cross-platform', 'HoloLens', 'Microsoft', 'Mixed Reality', 'modelling', 'MR', 'nodejs', 'streamsocket', 'unity', 'unity3D', 'unreal engine', 'VR', 'websockets']);
    
    const [activeTag, setActiveTag] = useState();
    const activeTagClasses = 'px-6 py-2 rounded-full hover:cursor-pointer bg-[#1a2653] text-white';
    const nonActiveTagClasses = 'bg-white px-6 py-2 rounded-full hover:cursor-pointer'

    function changeActiveTag(e) {
        console.log(e.currentTarget.dataset.name);
        setActiveTag(e.currentTarget.dataset.name);
    }

    useEffect(() => {
      const randomIndex = Math.floor(Math.random() * (tags.length - 1));
      setActiveTag(tags[randomIndex]);
    }, []); // Onload set a random active tag
    

    return (
        <div className="flex gap-3 flex-wrap mt-5">
            {tags.map((tag, index) => {
                return (
                    <div data-name={tag} className={activeTag === tag ? activeTagClasses : nonActiveTagClasses} onClick={(e) => {changeActiveTag(e)}} key={index}>{tag}</div>
                )
            })}
        </div>
    )  
}

export default App;