import { BabyNameInfo } from "./types";

interface MainListProps {
    list: BabyNameInfo[];
    fullNameCount?: number;
    handleNameClick: (clickedName: BabyNameInfo) => void;  //a function which takes a BabyNameInfo whose return we don't care about
}

export default function MainList(props: MainListProps) {
    return (
        <>
            <h2>Main List (not favourites)</h2>

            Now showing {props.list.length} names out of {props.fullNameCount} possible names.

            <div className="babyNamesList">
                {props.list.map(nameInfo => (
                    <div
                        className={"babyName " + nameInfo.sex}
                        key={nameInfo.id}
                        onClick={() => props.handleNameClick(nameInfo)}
                    >{nameInfo.name}
                    </div>
                )
                )}
            </div>
        </>
    );
}