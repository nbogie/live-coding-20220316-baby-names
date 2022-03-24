interface SearchBarProps {
    searchTerm: string;
    handleSearchTermChanged: (text: string) => void;
}
export default function SearchBar(props: SearchBarProps) {
    return (
        <>
            <input
                placeholder="Type your search"
                value={props.searchTerm}
                onChange={(event) => props.handleSearchTermChanged(event.target.value)}
            />
            You are searching for {props.searchTerm}
        </>
    )
}