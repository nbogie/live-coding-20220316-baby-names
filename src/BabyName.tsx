import React from 'react';
import { BabyNameInfo } from './types';

export interface BabyNameProps {
    nameInfo: BabyNameInfo;
}

export function BabyName(props: BabyNameProps) {
    return (
        <div
            className={"babyName " + props.nameInfo.sex}
        >
            {props.nameInfo.name}
        </div>
    );
}
