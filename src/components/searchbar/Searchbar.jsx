import './searchbar.css';


export function SearchBar({
    searchParam,
    setSearchParam,
}){

    return(
        <div className="search-bar">
            <div>
                <input 
                    type="text" 
                    onSubmit={(e) => e.preventDefault()} 
                    autoComplete="off" 
                    placeholder="Filter"
                    value={searchParam}
                    onChange={(e) => 
                        setSearchParam(e.target.value)
                    } 
                />
                
                <button onClick={() => setSearchParam("")} >
                    X
                </button>
            </div>
        </div>
    )
}   