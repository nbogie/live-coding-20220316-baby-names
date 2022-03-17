import React from 'react';
import { BabyName } from './BabyName';
import { BabyNameInfo } from './types';

interface MainBabyNamesListProps {
    nameInfos: BabyNameInfo[];
}
export function MainBabyNamesList(props: MainBabyNamesListProps) {
    return (
        <div className="babyNamesList">
            {props.nameInfos.map(nameInfo => (
                <BabyName nameInfo={nameInfo} key={nameInfo.id} />
            )
            )}
        </div>

    );
}
